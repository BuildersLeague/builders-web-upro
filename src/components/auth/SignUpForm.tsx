"use client";

import { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";
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
export function SignUpForm() {
  const [email, setEmail] = useState(""); // testing -- connecting to arthur -again
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const { signUp } = useAuth();

  // Password strength calculation
  const getPasswordStrength = (password: string) => {
    let score = 0;
    const checks = {
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    Object.values(checks).forEach(check => {
      if (check) score++;
    });

    return { score, checks };
  };

  const passwordStrength = getPasswordStrength(password);
  const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
  const strengthColors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-green-500",
  ];

  // Password match validation
  const passwordsMatch = password === verifyPassword;
  const showPasswordMismatch = verifyPassword.length > 0 && !passwordsMatch;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validate passwords match
    if (password !== verifyPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    // Validate password strength
    if (passwordStrength.score < 3) {
      setError("Password is too weak. Please choose a stronger password.");
      setLoading(false);
      return;
    }

    const { error } = await signUp(email, password, firstName, lastName);

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
    }

    setLoading(false);
  };

  if (success) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/uproLogo.svg"
              alt="U-Pro Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <CardTitle>Check your email</CardTitle>
          <CardDescription>
            We&apos;ve sent you a confirmation link to complete your
            registration.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <Image
            src="/uproLogo.svg"
            alt="U-Pro Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create a new account to get started</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              type="text"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              minLength={6}
            />
            {password.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${strengthColors[passwordStrength.score - 1] || "bg-gray-200"}`}
                      style={{
                        width: `${(passwordStrength.score / 5) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-600">
                    {strengthLabels[passwordStrength.score - 1] || ""}
                  </span>
                </div>
                <div className="text-xs space-y-1">
                  <div
                    className={
                      passwordStrength.checks.length
                        ? "text-green-600"
                        : "text-gray-400"
                    }
                  >
                    ✓ At least 8 characters
                  </div>
                  <div
                    className={
                      passwordStrength.checks.lowercase
                        ? "text-green-600"
                        : "text-gray-400"
                    }
                  >
                    ✓ Lowercase letter
                  </div>
                  <div
                    className={
                      passwordStrength.checks.uppercase
                        ? "text-green-600"
                        : "text-gray-400"
                    }
                  >
                    ✓ Uppercase letter
                  </div>
                  <div
                    className={
                      passwordStrength.checks.number
                        ? "text-green-600"
                        : "text-gray-400"
                    }
                  >
                    ✓ Number
                  </div>
                  <div
                    className={
                      passwordStrength.checks.special
                        ? "text-green-600"
                        : "text-gray-400"
                    }
                  >
                    ✓ Special character
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="verifyPassword">Verify Password</Label>
            <Input
              id="verifyPassword"
              type="password"
              value={verifyPassword}
              onChange={e => setVerifyPassword(e.target.value)}
              required
              className={showPasswordMismatch ? "border-red-500" : ""}
            />
            {showPasswordMismatch && (
              <div className="text-xs text-red-600">Passwords do not match</div>
            )}
            {verifyPassword.length > 0 && passwordsMatch && (
              <div className="text-xs text-green-600">✓ Passwords match</div>
            )}
          </div>
          {error && <div className="text-sm text-red-600">{error}</div>}
          <Button
            type="submit"
            className="w-full bg-upro-green"
            disabled={
              loading ||
              !passwordsMatch ||
              passwordStrength.score < 3 ||
              verifyPassword.length === 0
            }
          >
            {loading ? "Creating account..." : "Sign Up"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
