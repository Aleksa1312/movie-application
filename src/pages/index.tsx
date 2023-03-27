import ImageBackground from "@/components/backgrounds/ImageBackground";
import { FC } from "react";

const HomePage: FC = () => {
    return (
        <div className="h-full w-full">
            <ImageBackground className="pointer-events-none bg-cover" image="/temp/poker-face.jpeg">
                <div className="h-full w-full bg-gradient-to-r from-black via-black/90 to-black/60" />
            </ImageBackground>
        </div>
    );
};

export default HomePage;
