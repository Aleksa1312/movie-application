import { FC } from "react";

interface ImageBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    image: string;
}

const ImageBackground: FC<ImageBackgroundProps> = (props) => {
    return (
        <div
            className={`${props.className} fixed top-0 left-0 h-full w-full`}
            style={{ backgroundImage: `url("${props.image}")` }}
        >{props.children}</div>
    );
};

export default ImageBackground;
