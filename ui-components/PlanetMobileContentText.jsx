/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function PlanetMobileContentText(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="375px"
      position="relative"
      padding="64px 24px 64px 24px"
      {...rest}
      {...getOverrideProps(overrides, "PlanetMobileContentText")}
    >
      <Text
        fontFamily="Audrey"
        fontSize="14px"
        fontWeight="700"
        color="rgba(3,17,14,1)"
        fontStyle="italic"
        textTransform="uppercase"
        lineHeight="16.40625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="7.85px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Why so popular?"
        {...getOverrideProps(overrides, "Why so popular?")}
      ></Text>
      <Flex
        gap="32px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Text")}
      >
        <Text
          fontFamily="Josefin Sans"
          fontSize="36px"
          fontWeight="600"
          color="rgba(3,17,14,1)"
          lineHeight="42.69599914550781px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="-0.85px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Hand made with unrivaled quality. It’s no surprise we’re the market leaders."
          {...getOverrideProps(
            overrides,
            "Hand made with unrivaled quality. It\u2019s no surprise we\u2019re the market leaders."
          )}
        ></Text>
        <Text
          fontFamily="Josefin Sans"
          fontSize="16px"
          fontWeight="400"
          color="rgba(3,17,14,1)"
          lineHeight="25.600000381469727px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus sed tempus molestie sapien. Luctus habitasse tincidunt at gravida imperdiet scelerisque. &#xA;&#xA;Elementum quis nibh risus suspendisse blandit tortor. Quis est tempus molestie sapien."
          {...getOverrideProps(
            overrides,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus sed tempus molestie sapien. Luctus habitasse tincidunt at gravida imperdiet scelerisque. Elementum quis nibh risus suspendisse blandit tortor. Quis est tempus molestie sapien."
          )}
        ></Text>
      </Flex>
    </Flex>
  );
}
