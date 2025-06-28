import { Box } from "@mui/material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ImageProps {
  altText: string;
  displayText: string;
  src: string | StaticImport;
}

interface CarouselProps {
  paths: ImageProps[];
}

function isImportedImage(src: string | StaticImport): src is StaticImport {
  return (src as string).length === undefined;
}

const Carousel = (props: CarouselProps) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      {props.paths.map((path, index) => (
        // <Slide key={index}>
        <Image
          src={isImportedImage(path.src) ? path.src : "_assets/" + path.src}
          alt={path.altText}
          key={index}
          style={{ height: 540, width: "960" }}
          layout="intrinsic"
        />
        // </Slide>
      ))}
    </Box>
  );
};

export default Carousel;
