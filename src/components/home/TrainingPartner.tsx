import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const partners = [
  {
    title: "FOR COACHES",
    description:
      "Give every player more ball touches, targeted drills, and instant feedback — even between practices. U-Pro supports your coaching from anywhere.",
    imgSrc: "/images/partner/for-coach.webp",
    alt: "A coach instructing young soccer players on a field.",
  },
  {
    title: "FOR PARENTS",
    description:
      "Turn screen time into skill time. U-Pro helps your child build confidence, discipline, and healthy habits — all while having fun at home.",
    imgSrc: "/images/partner/for-parent.webp",
    alt: "A young boy in a blue uniform acting as a goalkeeper.",
  },
  {
    title: "FOR CLUBS",
    description:
      "Need scalable training that works off-field too? U-Pro helps clubs deliver consistent development, track player progress, and engage families year-round.",
    imgSrc: "/images/partner/for-club.webp",
    alt: "A female soccer player smiling while tying her shoelaces in a locker room.",
  },
];

export function TrainingPartner() {
  return (
    <div className="wrapper text-center bg-black">
      <h2
        className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black leading-tight tracking-tight mb-8 lg:mb-12"
        style={{
          fontFamily: "THE BOLD FONT",
          fontWeight: 900,
          color: "#D7E4D7",
        }}
      >
        MORE THAN JUST AN APP — A TRAINING PARTNER YOU CAN TRUST
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {partners.map(partner => (
          <Card
            key={partner.title}
            className="bg-transparent border-0 text-left text-white"
          >
            <CardContent className="p-0">
              <Image
                src={partner.imgSrc}
                alt={partner.alt}
                width={400}
                height={250}
                className="rounded-lg object-cover w-full h-48"
              />
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl mt-4 text-upro-text-primary">
                {partner.title}
              </h3>
              <p className="text-upro-text-primary text-base sm:text-lg md:text-xl mt-2">
                {partner.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
