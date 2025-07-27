"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface UserProfile {
  id: number;
  name: string;
  gender: string;
  age_group: number;
}

export default function ProfilePage() {
  const { user } = useAuth();

  const [accountId, setAccountId] = useState<number | null>(null);
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [loadingProfiles, setLoadingProfiles] = useState(true);

  const [form, setForm] = useState({ name: "", gender: "", age_group: "" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!user) return;
    const getAccountId = async () => {
      const { data, error } = await supabase.rpc("get_current_account_id");
      if (!error) setAccountId(data);
    };
    getAccountId();
  }, [user]);

  useEffect(() => {
    if (!accountId) return;
    const fetchProfiles = async () => {
      setLoadingProfiles(true);
      const { data, error } = await supabase
        .from("users")
        .select("id, name, gender, age_group")
        .eq("account_id", accountId);
      if (!error && data) setProfiles(data);
      setLoadingProfiles(false);
    };
    fetchProfiles();
  }, [accountId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accountId) return;
    setSubmitting(true);
    const { error } = await supabase.from("users").insert({
      account_id: accountId,
      name: form.name,
      gender: form.gender,
      age_group: Number(form.age_group),
    });
    if (!error) {
      setForm({ name: "", gender: "", age_group: "" });
      const { data } = await supabase
        .from("users")
        .select("id, name, gender, age_group")
        .eq("account_id", accountId);
      if (data) setProfiles(data);
    }
    setSubmitting(false);
  };

  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0 bg-hero-gradient -z-10" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 space-y-10">
        <header className="text-center">
          <h1 className="font-hero text-4xl md:text-5xl text-hero-primary">Profiles</h1>
          <p className="mt-3 text-hero-secondary font-semibold">
            Manage profiles under your account
          </p>
        </header>

        <section>
          <Card className="card-surface">
            <CardHeader className="pb-4">
              <CardTitle className="text-hero-primary">Account</CardTitle>
              <CardDescription className="text-hero-secondary">
                Your account information
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl p-4 border border-on-surface-10 bg-on-surface-05">
                <Label className="text-on-surface-70 text-xs">Email</Label>
                <p className="mt-1 break-all text-on-surface">{user?.email}</p>
              </div>
              <div className="rounded-xl p-4 border border-on-surface-10 bg-on-surface-05">
                <Label className="text-on-surface-70 text-xs">User ID</Label>
                <p className="mt-1 font-mono text-sm text-on-surface-90">{user?.id}</p>
              </div>
              <div className="rounded-xl p-4 border border-on-surface-10 bg-on-surface-05">
                <Label className="text-on-surface-70 text-xs">Created</Label>
                <p className="mt-1 text-on-surface-90">
                  {user?.created_at ? new Date(user.created_at).toLocaleDateString() : "N/A"}
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="card-surface p-6 md:p-8">
          <h2 className="text-2xl font-bold text-hero-primary mb-4">
            Profiles under your account
          </h2>
          {loadingProfiles ? (
            <p className="text-on-surface-75 text-center">Loading profiles…</p>
          ) : profiles.length === 0 ? (
            <div className="text-on-surface-85 text-center bg-on-surface-05 border border-on-surface-10 rounded-xl p-6">
              No profiles found.
            </div>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profiles.map((p) => (
                <li key={p.id} className="rounded-xl border border-on-surface-10 bg-on-surface-05 p-4">
                  <p className="text-on-surface font-semibold text-lg">{p.name}</p>
                  <p className="text-on-surface-80 text-sm mt-1">
                    Gender: {p.gender} · Age Group: {p.age_group}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="card-surface p-6 md:p-8">
          <h2 className="text-2xl font-bold text-hero-primary mb-4">Create a new profile</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="name" className="text-on-surface-85">Name</Label>
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                required
                className="mt-1 ui-field"
              />
            </div>

            <div>
              <Label htmlFor="gender" className="text-on-surface-85">Gender</Label>
              <select
                id="gender"
                name="gender"
                value={form.gender}
                onChange={handleInputChange}
                required
                className="mt-1 w-full ui-field border rounded-md px-3 py-2 text-sm"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <Label htmlFor="age_group" className="text-on-surface-85">Age Group</Label>
              <Input
                id="age_group"
                name="age_group"
                type="number"
                value={form.age_group}
                onChange={handleInputChange}
                required
                className="mt-1 ui-field"
              />
            </div>

            <div className="md:col-span-3 flex justify-end pt-2">
              <Button type="submit" disabled={submitting} className="btn-upro">
                {submitting ? "Creating..." : "Create Profile"}
              </Button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
