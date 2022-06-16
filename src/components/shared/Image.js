import { Box, chakra } from "@chakra-ui/react";
import { useMemo } from "react";
import useDimensions from "react-cool-dimensions";
import { isBrowser } from "utils/isBrowser";

export const ChakraNextImage = (props) => {
  const {
    src,
    alt,
    width,
    quality = 90,
    height,
    layout = "fill",
    objectFit,
    objectPosition,
    placeholder = typeof src === "string" ? "empty" : "blur",
    imgProps,
    priority,
    sizes,
    ...rest
  } = props;
  const { observe, width: _width } = useDimensions();
  const imageId = useMemo(() => {
    const _src =
      typeof src === "string" ? src : src?.default?.src || src?.src || "";
    return `${_src}_w=${_width}`;
  }, [_width, src]); // {url}_w={width}

  const size =
    sizes ||
    (isBrowser() && _width !== undefined
      ? `${(_width / innerWidth) * 100}vw`
      : "100vw");
  return (
    <Box maxW="100%" pos="relative" {...rest} ref={observe}>
      <img
        onLoadingComplete={() => {
          previousLoadedImagesSet.add(imageId);
        }}
        objectFit={objectFit}
        objectPosition={objectPosition}
        w="auto"
        h="auto"
        layout={layout}
        sizes={size}
        width={width}
        quality={quality}
        height={height}
        placeholder={placeholder}
        src={src}
        alt={alt}
        {...imgProps}
      />
    </Box>
  );
};
