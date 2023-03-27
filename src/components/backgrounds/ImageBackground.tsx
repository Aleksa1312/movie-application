import { FC } from "react";

import Image, { ImageProps } from "next/image";

interface ImageBackgroundProps extends ImageProps {}

const ImageBackground: FC<ImageBackgroundProps> = (props) => {
    return <Image className="fixed h-full w-full " src={props.src} width={1920} height={1080} alt={props.alt} />;
};

export default ImageBackground;
