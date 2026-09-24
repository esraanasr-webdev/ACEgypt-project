import Image from "next/image";

type LogoType = "light" | "dark";

type LogoProps = {
    type?: LogoType;
    className?: string;
};

const logoSources = {
    light: "/images/AmericanWhiteLogo.png",
    dark: "/images/americancouncilLogo-dark.png",
};

export default function Logo({
    type = "light",
    className = "",
}: LogoProps) {
    return (
        <div
            className={`
                relative
                aspect-[180/88]
                shrink-0
                ${className}
            `}
        >
            <Image
                src={logoSources[type]}
                alt="American Council Egypt"
                fill
                priority
                sizes="(max-width: 640px) 130px, (max-width: 1024px) 150px, 180px"
                className="object-contain"
            />
        </div>
    );
}