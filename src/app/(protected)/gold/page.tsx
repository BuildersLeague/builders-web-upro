"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";

type StoreItem = {
  id: number;
  name: string;
  description: string;
  upro_gold_cost: number;
  is_active: boolean;
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const GOLD_PACK_BONUS: Record<number, number> = { 16: 50, 17: 500 };

export default function BuyGoldPage() {
  const [accountId, setAccountId] = useState<number | null>(null);
  const [profiles, setProfiles] = useState<Array<{ id: number; name: string }>>(
    []
  );
  const [selectedProfileId, setSelectedProfileId] = useState<number | null>(
    null
  );
  const [currentGold, setCurrentGold] = useState<number | null>(null);
  const [items, setItems] = useState<StoreItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [buyingId, setBuyingId] = useState<number | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        setLoading(false);
        return;
      }

      const { data: account } = await supabase
        .from("accounts")
        .select("id")
        .eq("auth_user_id", user.id)
        .single();

      if (!account) {
        setLoading(false);
        return;
      }
      setAccountId(account.id);

      const { data: userProfiles } = await supabase
        .from("users")
        .select("id, name")
        .eq("account_id", account.id);

      setProfiles(userProfiles || []);

      const { data: storeItems } = await supabase
        .from("store_items")
        .select("id, name, description, upro_gold_cost, is_active")
        .eq("is_active", true)
        .order("id", { ascending: true });

      setItems(storeItems || []);
      setLoading(false);
    };
    load();
  }, []);

  const handleSelectProfile = async (pid: number) => {
    setSelectedProfileId(pid);
    const { data } = await supabase
      .from("users")
      .select("upro_gold")
      .eq("id", pid)
      .single();
    if (data) setCurrentGold(data.upro_gold ?? 0);
  };

  const handleBuy = async (item: StoreItem) => {
    if (!selectedProfileId) return alert("Please select a profile first.");

    const { data: prof } = await supabase
      .from("users")
      .select("upro_gold")
      .eq("id", selectedProfileId)
      .single();

    const balance = Number(prof?.upro_gold ?? 0);
    const cost = Number(item.upro_gold_cost ?? 0);
    const bonus = GOLD_PACK_BONUS[item.id] ?? 0;

    if (balance < cost)
      return alert(`Not enough gold. Need ${cost}, current ${balance}.`);

    setBuyingId(item.id);

    const { error: insertErr } = await supabase.from("store_purchases").insert({
      user_id: selectedProfileId,
      store_item_id: item.id,
      total_cost: cost,
      quantity: 1,
    });
    if (insertErr) {
      setBuyingId(null);
      return alert("Failed to record purchase: " + insertErr.message);
    }

    const newGold = balance - cost + bonus;
    const { error: updateErr } = await supabase
      .from("users")
      .update({ upro_gold: newGold })
      .eq("id", selectedProfileId);

    setBuyingId(null);
    if (updateErr) return alert("Failed to update gold balance.");

    setCurrentGold(newGold);
    alert(
      bonus > 0
        ? `Success! Spent ${cost} gold and received +${bonus}. New balance: ${newGold}.`
        : `Success! Spent ${cost} gold. New balance: ${newGold}.`
    );
  };

  const selectedProfileName = useMemo(
    () => profiles.find(p => p.id === selectedProfileId)?.name ?? "",
    [profiles, selectedProfileId]
  );

  return (
    <section className="relative overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10 lg:mb-14">
          <h1 className="font-hero text-4xl sm:text-5xl md:text-6xl text-hero-primary">
            U‑Pro Store
          </h1>
          <p className="mt-3 text-hero-secondary font-semibold">
            Choose a profile, then buy UPRO Gold or items.
          </p>
        </header>

        <div className="mx-auto max-w-4xl">
          <div className="card-surface p-6 md:p-8 mb-10">
            <h2 className="text-lg font-bold text-hero-primary mb-4">
              Select Profile
            </h2>
            {profiles.length === 0 ? (
              <p className="text-on-surface-75">
                No profiles found for your account.
              </p>
            ) : (
              <div className="flex flex-wrap gap-3">
                {profiles.map(p => (
                  <button
                    key={p.id}
                    onClick={() => handleSelectProfile(p.id)}
                    className={`rounded-3xl px-5 py-2 font-medium ${
                      selectedProfileId === p.id
                        ? "bg-upro-green text-on-accent"
                        : "chip-default"
                    }`}
                    type="button"
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            )}

            <div className="mt-6">
              <span className="text-hero-secondary">Current Gold:&nbsp;</span>
              <span className="text-hero-primary font-bold">
                {selectedProfileId ? (currentGold ?? "—") : "—"}
              </span>
              {selectedProfileName && (
                <span className="text-hero-secondary">
                  &nbsp;({selectedProfileName})
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl">
          <h2 className="text-lg font-bold text-hero-primary mb-4">
            All Items
          </h2>

          {loading ? (
            <p className="text-on-surface-80">Loading store…</p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map(item => {
                const isGoldPack = item.id in GOLD_PACK_BONUS;
                const bonus = GOLD_PACK_BONUS[item.id] || 0;

                return (
                  <li
                    key={item.id}
                    className="card-surface p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-hero-primary font-bold text-xl">
                          {item.name}
                        </h3>
                        {isGoldPack && (
                          <span className="text-xs rounded-full px-3 py-1 bg-on-surface-10 text-on-surface-90">
                            Gold Pack
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-hero-secondary text-sm leading-relaxed">
                        {item.description}
                      </p>

                      <div className="mt-4 text-on-surface-90">
                        <div className="text-sm">
                          <span className="opacity-80">Cost:&nbsp;</span>
                          <span className="font-semibold">
                            {item.upro_gold_cost} gold
                          </span>
                        </div>
                        {isGoldPack && (
                          <div className="text-sm mt-1">
                            <span className="opacity-80">Grants:&nbsp;</span>
                            <span className="font-semibold">
                              +{bonus} UPRO gold
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-6">
                      <button
                        type="button"
                        disabled={!selectedProfileId || buyingId === item.id}
                        onClick={() => handleBuy(item)}
                        className="btn-upro w-full"
                        aria-label={`Buy ${item.name}`}
                      >
                        {buyingId === item.id
                          ? "Processing…"
                          : `Buy #${item.id}`}
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
