"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

import { useAccount } from "@/hooks/useAccount";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ChildrenManagementTab } from "@/components/profile/ChildrenManagementTab";
import { EditProfileForm } from "@/components/profile/EditProfileForm";

export default function ProfilePage() {
  const { user } = useAuth();
  const { account, isLoading } = useAccount();
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);

  const [accountId, setAccountId] = useState<number | null>(null);
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [loadingProfiles, setLoadingProfiles] = useState(true);

  const [form, setForm] = useState({
    name: "",
    gender: "",
    age_group: "",
  });

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
    <div className="min-h-[calc(100vh-4rem)] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Profile</h1>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="profile"
              isActive={activeTab === "profile"}
              onClick={setActiveTab}
            >
              My Profile
            </TabsTrigger>
            <TabsTrigger
              value="children"
              isActive={activeTab === "children"}
              onClick={setActiveTab}
            >
              Children
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab Content */}
          <TabsContent value="profile" activeValue={activeTab} className="mt-6">
            <div className="max-w-2xl mx-auto">
              {isEditing ? (
                <EditProfileForm
                  onCancel={() => setIsEditing(false)}
                  onSuccess={() => setIsEditing(false)}
                />
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>User Profile</CardTitle>
                    <CardDescription>Your account information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {isLoading ? (
                      <div className="text-center py-4">
                        Loading account information...
                      </div>
                    ) : (
                      <>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">
                              First Name
                            </label>
                            <p className="text-sm text-muted-foreground">
                              {account?.first_name || "Not set"}
                            </p>
                          </div>
                          <div>
                            <label className="text-sm font-medium">
                              Last Name
                            </label>
                            <p className="text-sm text-muted-foreground">
                              {account?.last_name || "Not set"}
                            </p>
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium">Email</label>
                          <p className="text-sm text-muted-foreground">
                            {user?.email}
                          </p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Created</label>
                          <p className="text-sm text-muted-foreground">
                            {account?.created_at
                              ? new Date(
                                  account.created_at
                                ).toLocaleDateString()
                              : "N/A"}
                          </p>
                        </div>

                        <div className="pt-4 border-t">
                          <Button onClick={() => setIsEditing(true)}>
                            Edit Profile
                          </Button>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Children Tab Content */}
          <TabsContent
            value="children"
            activeValue={activeTab}
            className="mt-6"
          >
            <ChildrenManagementTab />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
