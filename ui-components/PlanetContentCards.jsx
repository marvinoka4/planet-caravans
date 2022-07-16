/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function PlanetContentCards(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="56px"
      direction="column"
      alignItems="center"
      position="relative"
      padding="72px 112px 72px 112px"
      {...rest}
      {...getOverrideProps(overrides, "PlanetContentCards")}
    >
      <Text
        fontFamily="Audrey"
        fontSize="22px"
        fontWeight="500"
        color="rgba(3,17,14,1)"
        textTransform="uppercase"
        lineHeight="35.20000076293945px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="9.85px"
        width="552px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="How will you use yours?"
        {...getOverrideProps(overrides, "How will you use yours?")}
      ></Text>
      <Flex
        gap="32px"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Cards")}
      >
        <View
          width="592px"
          height="460px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Card31503354")}
        ></View>
        <View
          width="592px"
          height="460px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Card31503355")}
        ></View>
      </Flex>
    </Flex>
  );
}
