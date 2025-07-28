import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-upro-background px-0 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Top border line */}
        <div className="h-0.5 w-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-upro-green-border/20 to-transparent" />
        </div>

        <div className="pt-8 pb-12 flex flex-col gap-8">
          {/* Main footer content */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
            {/* Logo section */}
            <div className="flex flex-col justify-between h-auto lg:h-full">
              <div className="flex items-center gap-1 justify-center lg:justify-start">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/56a2730fbb603b6d0b96d5b84161d7698a87188c?width=142"
                  alt="U-Pro Logo"
                  width={142}
                  height={28}
                  className="h-7 w-auto"
                />
              </div>
            </div>

            {/* Navigation links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 font-public-sans text-sm md:text-base">
              <Link
                href="/about"
                className="text-white hover:text-upro-light-green transition-colors font-normal"
              >
                About
              </Link>
              <span className="text-upro-light-green text-center">|</span>
              <Link
                href="/privacy"
                className="text-white hover:text-upro-light-green transition-colors font-normal"
              >
                Privacy Policy
              </Link>
              <span className="text-upro-light-green text-center">|</span>
              <Link
                href="/terms"
                className="text-white hover:text-upro-light-green transition-colors font-normal"
              >
                Terms of Service
              </Link>
              <span className="text-upro-light-green text-center">|</span>
              <Link
                href="/contact"
                className="text-white hover:text-upro-light-green transition-colors font-normal"
              >
                Contact
              </Link>
            </div>

            {/* Social media icons */}
            <div className="flex items-center justify-center lg:justify-start gap-3.5">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.6255 2.625H3.37549C2.96064 2.625 2.62549 2.96016 2.62549 3.375V20.625C2.62549 21.0398 2.96064 21.375 3.37549 21.375H20.6255C21.0403 21.375 21.3755 21.0398 21.3755 20.625V3.375C21.3755 2.96016 21.0403 2.625 20.6255 2.625ZM18.4599 8.09766H16.9622C15.788 8.09766 15.5606 8.65547 15.5606 9.47578V11.2828H18.3638L17.9981 14.1117H15.5606V21.375H12.638V14.1141H10.1935V11.2828H12.638V9.19687C12.638 6.77578 14.1169 5.45625 16.2778 5.45625C17.3138 5.45625 18.2021 5.53359 18.4622 5.56875V8.09766H18.4599Z"
                    fill="#D1EBD1"
                    fillOpacity="0.62"
                  />
                </svg>
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9998 6.50236C8.9596 6.50236 6.50603 8.95593 6.50603 11.9961C6.50603 15.0363 8.9596 17.4899 11.9998 17.4899C15.04 17.4899 17.4935 15.0363 17.4935 11.9961C17.4935 8.95593 15.04 6.50236 11.9998 6.50236ZM11.9998 15.5666C10.0337 15.5666 8.42924 13.9622 8.42924 11.9961C8.42924 10.03 10.0337 8.42557 11.9998 8.42557C13.9659 8.42557 15.5703 10.03 15.5703 11.9961C15.5703 13.9622 13.9659 15.5666 11.9998 15.5666ZM17.7185 4.997C17.0087 4.997 16.4355 5.57022 16.4355 6.28004C16.4355 6.98986 17.0087 7.56307 17.7185 7.56307C18.4284 7.56307 19.0016 6.99254 19.0016 6.28004C19.0018 6.11149 18.9687 5.94455 18.9043 5.78879C18.8399 5.63303 18.7454 5.49151 18.6262 5.37232C18.5071 5.25314 18.3655 5.15864 18.2098 5.09424C18.054 5.02983 17.8871 4.99679 17.7185 4.997ZM22.7087 11.9961C22.7087 10.5175 22.7221 9.05236 22.6391 7.57647C22.556 5.86218 22.165 4.34075 20.9114 3.08718C19.6551 1.83093 18.1364 1.44254 16.4221 1.3595C14.9435 1.27647 13.4784 1.28986 12.0025 1.28986C10.5239 1.28986 9.05871 1.27647 7.58282 1.3595C5.86853 1.44254 4.3471 1.83361 3.09353 3.08718C1.83728 4.34343 1.44889 5.86218 1.36585 7.57647C1.28281 9.05504 1.29621 10.5202 1.29621 11.9961C1.29621 13.472 1.28281 14.9399 1.36585 16.4158C1.44889 18.13 1.83996 19.6515 3.09353 20.905C4.34978 22.1613 5.86853 22.5497 7.58282 22.6327C9.06139 22.7158 10.5266 22.7024 12.0025 22.7024C13.481 22.7024 14.9462 22.7158 16.4221 22.6327C18.1364 22.5497 19.6578 22.1586 20.9114 20.905C22.1676 19.6488 22.556 18.13 22.6391 16.4158C22.7248 14.9399 22.7087 13.4747 22.7087 11.9961ZM20.3516 18.3122C20.156 18.7997 19.9203 19.164 19.5426 19.539C19.165 19.9166 18.8034 20.1524 18.3159 20.3479C16.9069 20.9077 13.5614 20.7818 11.9998 20.7818C10.4382 20.7818 7.08996 20.9077 5.68103 20.3506C5.19353 20.155 4.82924 19.9193 4.45424 19.5416C4.07656 19.164 3.84085 18.8024 3.64531 18.3149C3.08817 16.9033 3.21406 13.5577 3.21406 11.9961C3.21406 10.4345 3.08817 7.08629 3.64531 5.67736C3.84085 5.18986 4.07656 4.82557 4.45424 4.45057C4.83192 4.07557 5.19353 3.83718 5.68103 3.64165C7.08996 3.0845 10.4382 3.21039 11.9998 3.21039C13.5614 3.21039 16.9096 3.0845 18.3185 3.64165C18.806 3.83718 19.1703 4.0729 19.5453 4.45057C19.923 4.82825 20.1587 5.18986 20.3542 5.67736C20.9114 7.08629 20.7855 10.4345 20.7855 11.9961C20.7855 13.5577 20.9114 16.9033 20.3516 18.3122Z"
                    fill="#D1EBD1"
                    fillOpacity="0.62"
                  />
                </svg>
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6758 10.6587L20.2289 3.19922H18.6766L12.9841 9.67485L8.44099 3.19922H3.19971L10.0713 12.9924L3.19971 20.8139H4.75203L10.7595 13.9739L15.5584 20.8139H20.7997M5.31229 4.34557H7.69709L18.6754 19.7239H16.29"
                    fill="#D1EBD1"
                    fillOpacity="0.62"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
