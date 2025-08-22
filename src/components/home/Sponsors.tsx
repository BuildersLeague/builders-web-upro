import Image from "next/image";

const sponsors = [
  {
    src: "/images/sponsors-banner/boston_market_lab.png",
    alt: "Government of Canada",
  },
  { src: "/images/sponsors-banner/ElevateIP.png", alt: "ElevateIP" },
  {
    src: "/images/sponsors-banner/Office of the Privacy Commissioner.png",
    alt: "Office of the Privacy Commissioner of Canada",
  },
  { src: "/images/sponsors-banner/MAAIP.png", alt: "MAAIP" },
  { src: "/images/sponsors-banner/StartupTNT.png", alt: "Startup TNT" },
];

export function Sponsors() {
  return (
    <section className="wrapper">
        <div className="flex flex-wrap items-center justify-center sm:justify-evenly lg:justify-between gap-6 sm:gap-8 md:gap-12">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex justify-center flex-shrink-0">
              <Image
                src={sponsor.src}
                alt={sponsor.alt}
                width={150}
                height={60}
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
    </section>
  );
}
