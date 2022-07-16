/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function PlanetContentText(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      position="relative"
      padding="72px 216px 72px 216px"
      {...rest}
      {...getOverrideProps(overrides, "PlanetContentText")}
    >
      <Text
        fontFamily="Audrey"
        fontSize="16px"
        fontWeight="700"
        color="rgba(3,17,14,1)"
        fontStyle="italic"
        textTransform="uppercase"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="7.85px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Why so popular?"
        {...getOverrideProps(overrides, "Why so popular?")}
      ></Text>
      <Flex
        gap="136px"
        direction="row"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Text")}
      >
        <Text
          fontFamily="Josefin Sans"
          fontSize="46px"
          fontWeight="600"
          color="rgba(3,17,14,1)"
          lineHeight="54.555999755859375px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="-0.85px"
          width="384px"
          shrink="0"
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
          fontSize="18px"
          fontWeight="400"
          color="rgba(3,17,14,1)"
          lineHeight="28.80000114440918px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="488px"
          height="183px"
          shrink="0"
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
