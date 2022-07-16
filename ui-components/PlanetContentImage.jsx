/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, View } from "@aws-amplify/ui-react";
export default function PlanetContentImage(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      position="relative"
      padding="72px 0px 72px 112px"
      {...rest}
      {...getOverrideProps(overrides, "PlanetContentImage")}
    >
      <View
        width="1328px"
        height="688px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "IMAGE")}
      >
        <Image
          width="1690px"
          height="721px"
          position="absolute"
          top="-33px"
          left="-230px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "L2620403 2")}
        ></Image>
      </View>
    </Flex>
  );
}
