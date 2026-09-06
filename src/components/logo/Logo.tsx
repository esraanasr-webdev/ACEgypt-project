import Image from "next/image";

type LogoType = "light" | "dark";

type LogoProps ={
    type?: LogoType;
    className?: string;
};

const logoSources = {
    light: {
        src: "/images/americancouncilLogo-light.png",
        width: 180,
        height: 88,
    },
    dark: {
        src: "/images/americancouncilLogo-dark.png",
        width: 180,
        height: 88,
    },
};

export default function Logo({
    type = "light",
    className= "",
}: LogoProps){
    const logo = logoSources[type];
    return(
        <div
            className={`relative shrink-0 ${className}`}
            style={{
                width: logo.width,
                height: logo.height,
            }}
        >
        <Image
            src={logo.src}
            alt="American Council Egypt"
            width={logo.width}
            height={logo.height}
            priority
        />
        </div>
    );
}