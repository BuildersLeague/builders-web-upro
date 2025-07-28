"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PricingTable() {
  return (
    <div className="min-h-screen bg-soccer-green-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-soccer-text text-center text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          Pricing & Access
        </h1>

        {/* Main Grid Container */}
        <div className="bg-soccer-green-900">
          {/* Pricing Headers Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Training Mat */}
            <div className="flex flex-col items-center p-8 border-b lg:border-b-0 lg:border-r border-soccer-text/20">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/409f43071f443eb46ad3dc0ff9294cc67a3e64fb?width=504"
                alt="A durable soccer training mat spread out on a bright living room floor with a child practicing soccer drills"
                className="w-64 h-64 object-cover rounded-lg mb-8"
                width={256}
                height={256}
                priority
                loading="eager"
                fetchPriority="high"
              />
              <div className="text-center mb-8">
                <h3 className="text-soccer-text text-lg font-bold mb-4">
                  Training Mat
                </h3>
                <p className="text-soccer-text text-4xl md:text-5xl font-bold tracking-tight">
                  $199
                </p>
              </div>
              <Button className="w-full bg-soccer-green hover:bg-soccer-green/90 text-black font-medium py-3 px-6 rounded-2xl">
                Buy Mat
              </Button>
            </div>

            {/* Monthly Subscription */}
            <div className="flex flex-col items-center p-8 border-b lg:border-b-0 lg:border-r border-soccer-text/20">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/7b469c8b77bfb76a120f0fffaa7fb5096626ec9d?width=504"
                alt="A vibrant soccer training mat laid out on a wooden floor, highlighting its texture and design"
                className="w-64 h-64 object-cover rounded-lg mb-8"
                width={256}
                height={256}
                loading="lazy"
              />
              <div className="text-center mb-8">
                <h3 className="text-soccer-text text-lg font-bold mb-4">
                  Monthly Subscription
                </h3>
                <p className="text-soccer-text text-4xl md:text-5xl font-bold tracking-tight">
                  $9.99
                </p>
              </div>
              <Button className="w-full bg-soccer-green hover:bg-soccer-green/90 text-black font-medium py-3 px-6 rounded-2xl">
                Subscribe
              </Button>
            </div>

            {/* Family Pack */}
            <div className="flex flex-col items-center p-8">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/89604f44aa5b3271856f96f99ff76138b4b21fb5?width=504"
                alt="A family of four enjoying a soccer practice in their backyard, with a training mat spread out and a tablet displaying a soccer training app"
                className="w-64 h-64 object-cover rounded-lg mb-8"
                width={256}
                height={256}
                loading="lazy"
              />
              <div className="text-center mb-8">
                <h3 className="text-soccer-text text-lg font-bold mb-4">
                  Family Pack
                </h3>
                <p className="text-soccer-text text-4xl md:text-5xl font-bold tracking-tight">
                  $19.99
                </p>
              </div>
              <Button className="w-full bg-soccer-green hover:bg-soccer-green/90 text-black font-medium py-3 px-6 rounded-2xl">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Features Row 1 - Material */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-soccer-text/20">
            <div className="flex flex-col items-center p-8 border-b lg:border-b-0 lg:border-r border-soccer-text/20">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-5"
              >
                <path
                  d="M39.1982 16.7999C38.7095 17.2984 38.4359 17.9686 38.4359 18.6666C38.4359 19.3646 38.7095 20.0348 39.1982 20.5333L43.4648 24.7999C43.9633 25.2885 44.6335 25.5622 45.3315 25.5622C46.0295 25.5622 46.6997 25.2885 47.1982 24.7999L57.2515 14.7466C58.5924 17.7098 58.9984 21.0112 58.4154 24.211C57.8324 27.4107 56.2881 30.3568 53.9882 32.6567C51.6884 34.9565 48.7423 36.5008 45.5425 37.0838C42.3428 37.6668 39.0413 37.2608 36.0782 35.9199L17.6515 54.3466C16.5906 55.4075 15.1518 56.0034 13.6515 56.0034C12.1512 56.0034 10.7123 55.4075 9.65148 54.3466C8.59062 53.2857 7.99463 51.8469 7.99463 50.3466C7.99463 48.8463 8.59062 47.4075 9.65148 46.3466L28.0781 27.9199C26.7373 24.9568 26.3313 21.6553 26.9143 18.4555C27.4973 15.2558 29.0416 12.3097 31.3414 10.0098C33.6412 7.71003 36.5873 6.16571 39.7871 5.58271C42.9869 4.9997 46.2883 5.4057 49.2515 6.74659L39.2248 16.7733L39.1982 16.7999Z"
                  stroke="#D7E4D7"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="text-center">
                <h4 className="text-soccer-text text-lg font-bold mb-2">
                  Material
                </h4>
                <p className="text-soccer-text-muted text-lg">
                  Durable and comfortable
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center p-12 border-b lg:border-b-0 lg:border-r border-soccer-text/20">
              <h4 className="text-soccer-text text-lg font-bold mb-3">
                Family Pack
              </h4>
              <div className="flex items-baseline gap-3">
                <span className="text-soccer-text text-4xl md:text-5xl font-bold tracking-tight">
                  3
                </span>
                <span className="text-soccer-text text-2xl font-bold">
                  players
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center p-12 border-b lg:border-b-0">
              <h4 className="text-soccer-text text-lg font-bold mb-3">
                Free Trial
              </h4>
              <div className="flex items-baseline gap-3">
                <span className="text-soccer-text text-4xl md:text-5xl font-bold tracking-tight">
                  1
                </span>
                <span className="text-soccer-text text-2xl font-bold">
                  drill
                </span>
              </div>
            </div>
          </div>

          {/* Features Row 2 - Player Access */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-soccer-text/20">
            <div className="flex flex-col items-center p-8 border-b lg:border-b-0 lg:border-r border-soccer-text/20">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-5"
              >
                <path
                  d="M53.3332 56V50.6667C53.3332 47.8377 52.2094 45.1246 50.209 43.1242C48.2086 41.1238 45.4955 40 42.6665 40H21.3332C18.5042 40 15.7911 41.1238 13.7907 43.1242C11.7903 45.1246 10.6665 47.8377 10.6665 50.6667V56M42.6665 18.6667C42.6665 24.5577 37.8909 29.3333 31.9998 29.3333C26.1088 29.3333 21.3332 24.5577 21.3332 18.6667C21.3332 12.7756 26.1088 8 31.9998 8C37.8909 8 42.6665 12.7756 42.6665 18.6667Z"
                  stroke="#D7E4D7"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="text-center">
                <h4 className="text-soccer-text text-lg font-bold mb-2">
                  Player Access
                </h4>
                <p className="text-soccer-text-muted text-lg mb-1">
                  Single player
                </p>
                <p className="text-soccer-text-muted text-lg">
                  Multiple players
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center p-12 border-b lg:border-b-0 lg:border-r border-soccer-text/20">
              <h4 className="text-soccer-text text-lg font-bold mb-6">
                Monthly Subscription
              </h4>
              <span className="text-soccer-text text-4xl md:text-5xl font-bold tracking-tight">
                Unlimited
              </span>
            </div>

            <div className="flex flex-col items-center p-8 border-b lg:border-b-0">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-5"
              >
                <path
                  d="M20.8984 35.7537L17.6717 60.047L31.005 52.047L44.3384 60.047L41.1117 35.727M49.6717 20.047C49.6717 30.3564 41.3144 38.7137 31.005 38.7137C20.6957 38.7137 12.3384 30.3564 12.3384 20.047C12.3384 9.73772 20.6957 1.38037 31.005 1.38037C41.3144 1.38037 49.6717 9.73772 49.6717 20.047Z"
                  stroke="#D7E4D7"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="text-center">
                <h4 className="text-soccer-text text-lg font-bold mb-2">
                  Free Trial
                </h4>
                <p className="text-soccer-text-muted text-lg">
                  Try your first drill free
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
