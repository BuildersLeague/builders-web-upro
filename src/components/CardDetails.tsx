import { CSSProperties, ReactElement } from "react";
import Image from "next/image";

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
export default function CardDetails({
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
          className="font-bold text-white text-2xl mb-2 text-center lg:text-left"
          style={{
            fontFamily: "THE BOLD FONT",
            fontWeight: 900,
            color: "#D7E4D7",
          }}
        >
          {title}
        </h1>
        <p
          className="text-white font-bold text-center lg:text-left"
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
        <Image
          src={imgSrc}
          alt={`${title} image`}
          className={imgClassName}
          style={imgStyle}
          width={500}
          height={300}
        />
      ) : (
        <div className="bg-white grow"></div>
      )}
    </div>
  );
}
