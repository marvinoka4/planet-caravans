/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, View } from "@aws-amplify/ui-react";
export default function PlanetMobileContentImage(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="375px"
      position="relative"
      padding="24px 0px 24px 24px"
      {...rest}
      {...getOverrideProps(overrides, "PlanetMobileContentImage")}
    >
      <View
        width="351px"
        height="351px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Image Container")}
      >
        <Image
          position="absolute"
          top="0%"
          bottom="0%"
          height="100%"
          left="-32.19%"
          right="-26.8%"
          width="159%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "L2620403 2")}
        ></Image>
      </View>
    </Flex>
  );
}
