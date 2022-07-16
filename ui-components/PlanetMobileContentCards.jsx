/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function PlanetMobileContentCards(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="32px"
      direction="column"
      width="375px"
      alignItems="center"
      position="relative"
      padding="64px 112px 64px 112px"
      {...rest}
      {...getOverrideProps(overrides, "PlanetMobileContentCards")}
    >
      <Text
        fontFamily="Audrey"
        fontSize="20px"
        fontWeight="500"
        color="rgba(3,17,14,1)"
        textTransform="uppercase"
        lineHeight="32px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="9.85px"
        width="327px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="How will you use yours?"
        {...getOverrideProps(overrides, "How will you use yours?")}
      ></Text>
      <Flex
        gap="32px"
        direction="column"
        justifyContent="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Cards")}
      >
        <View
          width="327px"
          height="358px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Card31503359")}
        ></View>
        <View
          width="327px"
          height="358px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Card31503360")}
        ></View>
      </Flex>
    </Flex>
  );
}
