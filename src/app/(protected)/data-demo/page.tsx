"use client";

import { useState } from "react";
import { useExternalData } from "@/hooks/useQueries";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { RefreshCw, AlertCircle } from "lucide-react";
import type { Post } from "@/types/api";

export default function DataDemoPage() {
  const [refetchCount, setRefetchCount] = useState(0);

  const {
    data: externalData,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
    dataUpdatedAt,
  } = useExternalData();

  const handleRefetch = async () => {
    await refetch();
    setRefetchCount(prev => prev + 1);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">TanStack Query Demo</h1>
          <p className="text-muted-foreground">
            Demonstrating data fetching, caching, and state management with
            TanStack Query
          </p>
        </div>

        <div className="grid gap-6">
          {/* Query Status Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Query Status
                {isFetching && <RefreshCw className="h-4 w-4 animate-spin" />}
              </CardTitle>
              <CardDescription>Current state of the data query</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span>Status:</span>
                <span
                  className={`font-medium ${
                    isLoading
                      ? "text-blue-600"
                      : isError
                        ? "text-red-600"
                        : "text-green-600"
                  }`}
                >
                  {isLoading ? "Loading..." : isError ? "Error" : "Success"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Is Fetching:</span>
                <span>{isFetching ? "Yes" : "No"}</span>
              </div>
              <div className="flex justify-between">
                <span>Refetch Count:</span>
                <span>{refetchCount}</span>
              </div>
              <div className="flex justify-between">
                <span>Last Updated:</span>
                <span className="text-sm">
                  {dataUpdatedAt
                    ? new Date(dataUpdatedAt).toLocaleTimeString()
                    : "Never"}
                </span>
              </div>
              <div className="pt-4">
                <Button
                  onClick={handleRefetch}
                  disabled={isFetching}
                  className="w-full"
                >
                  {isFetching ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Refetching...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Refetch Data
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Data Display Card */}
          <Card>
            <CardHeader>
              <CardTitle>External API Data</CardTitle>
              <CardDescription>
                Data fetched from JSONPlaceholder API with automatic caching
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="space-y-2">
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-3 w-full" />
                      <Skeleton className="h-3 w-2/3" />
                    </div>
                  ))}
                </div>
              ) : isError ? (
                <div className="flex items-center gap-2 text-red-600">
                  <AlertCircle className="h-4 w-4" />
                  <span>Error: {error?.message || "Failed to fetch data"}</span>
                </div>
              ) : (
                <div className="space-y-4">
                  {externalData?.map((post: Post) => (
                    <div
                      key={post.id}
                      className="border-l-4 border-primary pl-4"
                    >
                      <h3 className="font-semibold text-sm">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {post.body.substring(0, 100)}...
                      </p>
                      <span className="text-xs text-muted-foreground">
                        ID: {post.id}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Features Card */}
          <Card>
            <CardHeader>
              <CardTitle>TanStack Query Features</CardTitle>
              <CardDescription>What you get out of the box</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">✅ Automatic Caching</h4>
                  <p className="text-xs text-muted-foreground">
                    Data is cached and reused across components
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">✅ Background Updates</h4>
                  <p className="text-xs text-muted-foreground">
                    Stale data is updated in the background
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">✅ Loading States</h4>
                  <p className="text-xs text-muted-foreground">
                    Built-in loading and error states
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">✅ Optimistic Updates</h4>
                  <p className="text-xs text-muted-foreground">
                    UI updates before server confirmation
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">✅ DevTools</h4>
                  <p className="text-xs text-muted-foreground">
                    Inspect queries and cache in dev mode
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">✅ Retry Logic</h4>
                  <p className="text-xs text-muted-foreground">
                    Automatic retries on failed requests
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
