import ImageBackground from "@/components/backgrounds/ImageBackground";
import SmallButton from "@/components/buttons/SmallButton";
import { FC } from "react";

const HomePage: FC = () => {
    return (
        <div className="h-full w-full">
            <ImageBackground className="pointer-events-none z-[-5] bg-cover bg-center" image="/temp/poker-face.jpeg">
                <div className="h-full w-full bg-gradient-to-r from-black via-black/90 to-black/60" />
            </ImageBackground>
            <SmallButton className="bg-yellow-400">Watch</SmallButton>
        </div>
    );
};

export default HomePage;
