"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CreateChildProfileData,
  ChildProfile,
  GENDER_OPTIONS,
  PLAYING_POSITIONS,
  AGE_GROUPS,
} from "@/types/parent-dashboard";

interface ChildProfileFormProps {
  onSubmit: (data: CreateChildProfileData) => Promise<void>;
  onCancel: () => void;
  initialData?: ChildProfile;
  isEditing?: boolean;
  loading?: boolean;
}

export function ChildProfileForm({
  onSubmit,
  onCancel,
  initialData,
  isEditing = false,
  loading = false,
}: ChildProfileFormProps) {
  const [formData, setFormData] = useState<CreateChildProfileData>({
    name: initialData?.name || "",
    gender: initialData?.gender || "",
    age_group: initialData?.age_group || 1,
    weight: initialData?.weight || undefined,
    height: initialData?.height || undefined,
    dominant_foot: initialData?.dominant_foot,
    playing_position: initialData?.playing_position || "",
    experience_total: initialData?.experience_total || 0,
    profile_picture: initialData?.profile_picture || "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    if (formData.weight && formData.weight <= 0) {
      newErrors.weight = "Weight must be positive";
    }

    if (formData.height && formData.height <= 0) {
      newErrors.height = "Height must be positive";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    await onSubmit(formData);
  };

  const updateFormData = (
    field: keyof CreateChildProfileData,
    value: string | number | boolean | undefined
  ) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>
          {isEditing ? "Edit Child Profile" : "Add New Child Profile"}
        </CardTitle>
        <CardDescription>
          {isEditing
            ? "Update your child's profile information"
            : "Create a new profile for your child"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="name">Child&apos;s Name *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={e => updateFormData("name", e.target.value)}
                className={errors.name ? "border-red-500" : ""}
                required
              />
              {errors.name && (
                <div className="text-sm text-red-600">{errors.name}</div>
              )}
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <Label htmlFor="gender">Gender *</Label>
              <select
                id="gender"
                value={formData.gender}
                onChange={e => updateFormData("gender", e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.gender ? "border-red-500" : "border-gray-300"
                }`}
                required
              >
                <option value="">Select Gender</option>
                {GENDER_OPTIONS.map(gender => (
                  <option key={gender} value={gender}>
                    {gender}
                  </option>
                ))}
              </select>
              {errors.gender && (
                <div className="text-sm text-red-600">{errors.gender}</div>
              )}
            </div>

            {/* Age Group */}
            <div className="space-y-2">
              <Label htmlFor="age_group">Age Group *</Label>
              <select
                id="age_group"
                value={formData.age_group}
                onChange={e =>
                  updateFormData("age_group", parseInt(e.target.value))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                {AGE_GROUPS.map(group => (
                  <option key={group.value} value={group.value}>
                    {group.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Weight */}
            <div className="space-y-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                id="weight"
                type="number"
                step="0.1"
                min="0"
                value={formData.weight || ""}
                onChange={e =>
                  updateFormData(
                    "weight",
                    e.target.value ? parseFloat(e.target.value) : undefined
                  )
                }
                className={errors.weight ? "border-red-500" : ""}
              />
              {errors.weight && (
                <div className="text-sm text-red-600">{errors.weight}</div>
              )}
            </div>

            {/* Height */}
            <div className="space-y-2">
              <Label htmlFor="height">Height (cm)</Label>
              <Input
                id="height"
                type="number"
                step="0.1"
                min="0"
                value={formData.height || ""}
                onChange={e =>
                  updateFormData(
                    "height",
                    e.target.value ? parseFloat(e.target.value) : undefined
                  )
                }
                className={errors.height ? "border-red-500" : ""}
              />
              {errors.height && (
                <div className="text-sm text-red-600">{errors.height}</div>
              )}
            </div>

            {/* Dominant Foot */}
            <div className="space-y-2">
              <Label htmlFor="dominant_foot">Dominant Foot</Label>
              <select
                id="dominant_foot"
                value={
                  formData.dominant_foot === undefined
                    ? ""
                    : formData.dominant_foot
                      ? "right"
                      : "left"
                }
                onChange={e => {
                  const value = e.target.value;
                  updateFormData(
                    "dominant_foot",
                    value === "" ? undefined : value === "right"
                  );
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Foot</option>
                <option value="right">Right Foot</option>
                <option value="left">Left Foot</option>
              </select>
            </div>

            {/* Playing Position */}
            <div className="space-y-2">
              <Label htmlFor="playing_position">Playing Position</Label>
              <select
                id="playing_position"
                value={formData.playing_position || ""}
                onChange={e =>
                  updateFormData("playing_position", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Position</option>
                {PLAYING_POSITIONS.map(position => (
                  <option key={position} value={position}>
                    {position}
                  </option>
                ))}
              </select>
            </div>

            {/* Experience Total */}
            <div className="space-y-2">
              <Label htmlFor="experience_total">Total Experience (years)</Label>
              <Input
                id="experience_total"
                type="number"
                min="0"
                step="1"
                value={formData.experience_total || ""}
                onChange={e =>
                  updateFormData(
                    "experience_total",
                    e.target.value ? parseInt(e.target.value) : 0
                  )
                }
                className="w-full"
              />
            </div>

            {/* Profile Picture */}
            <div className="space-y-2">
              <Label htmlFor="profile_picture">Profile Picture URL</Label>
              <Input
                id="profile_picture"
                type="url"
                value={formData.profile_picture || ""}
                onChange={e =>
                  updateFormData("profile_picture", e.target.value)
                }
                placeholder="https://example.com/image.jpg"
                className="w-full"
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              style={{ backgroundColor: "rgb(13, 148, 71)" }}
            >
              {loading
                ? isEditing
                  ? "Updating..."
                  : "Creating..."
                : isEditing
                  ? "Update Profile"
                  : "Create Profile"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
