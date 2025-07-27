import { CSSProperties, ReactElement } from "react";

export default function HowUProWorks(): ReactElement {
  const cardClass =
    "bg-lime-950/70 rounded-lg overflow-hidden flex flex-col h-auto lg:h-96";

  return (
    <div className="flex flex-col gap-5 bg-black h-auto p-8 ">
      <div className="flex flex-col gap-10 mt-20 lg:mt-40 mb-10 max-w-5xl items-center mx-auto">
        <h1
          className="text-center font-bold text-white text-3xl md:text-5xl transition-all duration-1000 ease-out"
          style={{
            fontFamily: "THE BOLD FONT",
            fontWeight: 900,
            color: "#D7E4D7",
          }}
        >
          A New Way to Train
          <br />
          Starts Here
        </h1>
        <p
          className="text-white font-bold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed max-w-6xl mx-auto mb-12 lg:mb-20"
          style={{
            fontFamily:
              "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
            color: "#D7E4D7",
            letterSpacing: "-0.12px",
            lineHeight: "1.33",
          }}
        >
          No more boring drills. No more wasted screen time. With U-Pro, kids
          learn real soccer skills through fun, personalized missions — all from
          home.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-col-1 md:grid-cols-6 gap-10 lg:gap-y-8 lg:gap-x-10 px-6 py-10  mx-auto">
        {/* Capture Movement */}
        <div className={`col-span-3  ${cardClass}`}>
          <CardDetails
            title="Capture Movement"
            description="U-Pro uses your phone’s camera and our patent-pending AI
            to track real-time biomechanics. No wearables. No setup. Just
            hit record."
            imgSrc="tracking.png"
            imgClassName=" lg:block rounded-lg w-full lg:w-[70%] mx-auto "
            contentClassName=" flex flex-col h-full gap-2"
          />
        </div>

        {/* Level Up Skills */}
        <div className={`col-span-3  ${cardClass} `}>
          <CardDetails
            title="Level Up Skills"
            description="Each session adapts to your player’s age and level. Earn XP by
                completing challenges, improving form, and unlocking new drills."
            imgSrc="level_up_skills.svg"
            imgClassName=" lg:block mx-auto w-60 lg:w-1/2 "
            headerClassName="flex flex-col gap-2 px-6 py-4 text-white w-full lg:w-1/2 justify-start items-start"
            contentClassName=" flex flex-col lg:flex-row  h-full"
          />
        </div>

        {/* Get Rewarded */}
        <div className={`col-span-3 lg:col-span-4 ${cardClass}`}>
          <CardDetails
            title="Get Rewarded"
            description="Badges, cosmetics, leaderboards, and certificates turn training into a game. Kids stay motivated — and proud of their progress."
            imgSrc="badges.svg"
            imgClassName=" lg:block w-[45%]"
            imgStyle={{
              WebkitMaskImage: `
              radial-gradient(circle at bottom right, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0) 100%),
              radial-gradient(circle at top right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%),
              linear-gradient(to left, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0) 100%)
            `,
              maskImage: `
              radial-gradient(circle at bottom right, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0) 100%),
              radial-gradient(circle at top right, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 100%),
              linear-gradient(to left, rgba(0,0,0,0.1) 10%, rgba(0,0,0,0) 100%)
            `,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
            headerClassName="flex flex-col gap-2 px-6 py-4 text-white w-full lg:w-[55%]"
            contentClassName="flex flex-row lg:flex-row-reverse h-full justify-start items-start gap-5"
          />
        </div>

        {/* Train Together */}
        <div className={`col-span-3 lg:col-span-2 ${cardClass}`}>
          <CardDetails
            title="Train Together"
            description="Designed for siblings, parents, and teammates to join in. Build healthy habits and memories that last beyond the game."
            imgSrc="train_together.jpg"
            imgClassName="rounded-lg hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Properties for the CardDetails component
 * @typedef {Object} CardDetailsProps
 * @property {string} title - The title of the card
 * @property {string} description - The description of the card
 * @property {string} imgSrc - The source of the image
 * @property {string} imgClassName - The class name of the image
 * @property {React.CSSProperties} imgStyle - The style of the image
 */
type CardDetailsProps = {
  title: string;
  description: string;
  imgSrc?: string;
  imgClassName?: string;
  imgStyle?: CSSProperties;
  headerClassName?: string;
  contentClassName?: string;
};

/**
 * A component to display a card with a title, description, and an optional image.
 * @param {string} title - The title of the card
 * @param {string} description - The description of the card
 * @param {string} [imgSrc] - The source of the image
 * @param {string} [imgClassName=""] - The class name of the image
 * @param {React.CSSProperties} [imgStyle={}] - The style of the image
 * @param {string} [headerClassName=""] - The class name of the header
 * @param {string} [contentClassName=""] - The class name of the content
 * @returns {ReactElement} - A React element representing the component
 */
function CardDetails({
  title,
  description,
  imgSrc,
  imgClassName = "",
  imgStyle = {},
  headerClassName = "",
  contentClassName = "",
}: CardDetailsProps): ReactElement {
  return (
    <div
      className={`transition-all duration-500 ease-out ${contentClassName || "flex flex-col h-full gap-5"}`}
    >
      <div className={`${headerClassName || "px-6 py-4 flex flex-col gap-2"}`}>
        <h1
          className="font-bold text-white text-2xl mb-2"
          style={{
            fontFamily: "THE BOLD FONT",
            fontWeight: 900,
            color: "#D7E4D7",
          }}
        >
          {title}
        </h1>
        <p
          className="text-white font-bold"
          style={{
            fontFamily:
              "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
            color: "#D7E4D7",
            letterSpacing: "-0.12px",
            lineHeight: "1.33",
          }}
        >
          {description}
        </p>
      </div>
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={`${imgSrc}_image`}
          className={imgClassName}
          style={imgStyle} // directly pass object here
        />
      ) : (
        <div className="bg-white grow"></div>
      )}
    </div>
  );
}
