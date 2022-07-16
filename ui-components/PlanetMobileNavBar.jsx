/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
export default function PlanetMobileNavBar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="375px"
      height="66px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "PlanetMobileNavBar")}
    >
      <View
        position="absolute"
        top="34.85%"
        bottom="32.8%"
        left="6.4%"
        right="71.12%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      ></View>
      <Flex
        gap="10px"
        position="absolute"
        top="0px"
        left="300px"
        direction="column"
        height="66px"
        justifyContent="center"
        alignItems="center"
        padding="52px 0px 52px 0px"
        {...getOverrideProps(overrides, "NavItem")}
      ></Flex>
    </View>
  );
}
