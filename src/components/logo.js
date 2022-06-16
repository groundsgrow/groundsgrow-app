import {
  AspectRatio,
  AspectRatioProps,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 250"
    width={52}
    height={52}
    {...props}
  >
    <title>{"New Project"}</title>
    <defs>
      <image
        width={137}
        height={128}
        id="a"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACACAMAAAAI9bozAAAAAXNSR0IB2cksfwAAAX1QTFRFAAAA5hOp5ROp5BOp4xKq4hKq4RKq4BKq3xKq3hKq3RKq5xOp4xOp3BKq3BGr2xGr2hGr2RGr6ROp6BOp2BGr1xGr1hGr1RCs1BCs6hOp1RGr0xCs0hCs0RCs0BCszxCszg+tzQ+tzhCszA+tyw+t6xSoyg+t6hSoyQ+tyA+txw+txw6uxg6uxQ6uxA6uww6uwg6uwQ6uwA2vwA6uvw2vvg2vvQ2vvA2vuw2vug2vuQ2vuQywuAywtwywtgywtQywtAywswywsgywsQuxsguxsAuxrwuxrguxrQuxrAuxqwuxqwqyqgqyqQqyqAqypwqypgqypQqypAqypAmzowmzogmzoQmzoAmznwmzngmznQmznQi0nAi0mwi0mgi0mQi0mAi0lwi0lgi0lQe1lAe1kwe1kge1kQe1kAe1jwe1jga2jQa2lge1jwa2jAa2iwa2iga2iQa2iAa2hwW3iAW3hgW3hQW3hAW3gwW3ggW3gQW3gAS4gQS4fwS4fgS4pDTR5QAAAH90Uk5TAP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wChbKkAAAcdSURBVHicxdr3XxRHGAfgUZqCBSlCAgoIQQidSEvoSJUWRBSjYiwoGCl3oSr5253Z2b3d2Z33nbLLZn7m7vMw33vfu31nCLFbV65ezcvLy88vKCgoLCwqunbt+vXi4mLLN7NcJSUlV6iDQm4wSKEPuXnr9u3S0jtpIMrKy8uZg0PyOYQ5HMgtDrlTUVFZefdSGWVlzMEhkmQEyN2qqurLYfzkOMr9ZPIkyXAIc/xcVV1dU1Nbm7wjArnhJVMkSYZtCIPcu3f/fvIOMBkIUutA6urqG5JzKJMRIV4yFFJX96C+oaGxKQnHLxIInkwO4mxIfUNjY1NTc3zHQw9Solm84WQYpLm5paU1niO0IRrFG0jmPk/Ghfza1p4cRJrMTTiZB24yzS2tDNLRYQ15GIAYJFMjJNPENqS1rZ1COrss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"
      />
    </defs>
    <rect
      width={250}
      height={250}
      rx={35}
      style={{
        fill: "#000",
      }}
    />
    <use href="#a" x={57} y={63} />
  </svg>
);

export const Logo = () => {
  return (
    <Stack as="h2" align="center" direction="row">
      <SvgComponent />
      <Text color="white">Groundsgrow</Text>
    </Stack>
  );
};
