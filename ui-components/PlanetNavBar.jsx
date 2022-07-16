/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
export default function PlanetNavBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="76px"
      direction="row"
      width="1440px"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "PlanetNavBar")}
    >
      <Flex
        gap="50px"
        direction="row"
        width="fit-content"
        height="120px"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Left")}
      >
        <Flex
          gap="10px"
          direction="column"
          height="120px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="52px 0px 52px 0px"
          {...getOverrideProps(overrides, "NavItem31494455")}
        ></Flex>
        <Flex
          gap="10px"
          direction="column"
          height="120px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="52px 0px 52px 0px"
          {...getOverrideProps(overrides, "NavItem31494456")}
        ></Flex>
      </Flex>
      <View
        width="202px"
        height="119px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Logo Tab")}
      >
        <View
          position="absolute"
          top="43.7%"
          bottom="28.57%"
          left="17.82%"
          right="17.82%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Logo")}
        ></View>
      </View>
      <Flex
        gap="50px"
        direction="row"
        width="fit-content"
        height="120px"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Right")}
      >
        <Flex
          gap="10px"
          direction="column"
          height="120px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="52px 0px 52px 0px"
          {...getOverrideProps(overrides, "NavItem31494460")}
        ></Flex>
        <Flex
          gap="10px"
          direction="column"
          height="120px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="52px 0px 52px 0px"
          {...getOverrideProps(overrides, "NavItem31494461")}
        ></Flex>
      </Flex>
    </Flex>
  );
}
