/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function PlanetMobileFooter(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="48px"
      direction="column"
      width="375px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="64px 16px 64px 16px"
      backgroundColor="rgba(3,17,14,1)"
      {...rest}
      {...getOverrideProps(overrides, "PlanetMobileFooter")}
    >
      <View
        width="130px"
        height="33px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      ></View>
      <Flex
        gap="24px"
        direction="column"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Links")}
      >
        <Text
          fontFamily="Josefin Sans"
          fontSize="10px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          textTransform="uppercase"
          lineHeight="16px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="2.85px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="PRIVACY POLICY"
          {...getOverrideProps(overrides, "PRIVACY POLICY")}
        ></Text>
        <Text
          fontFamily="Josefin Sans"
          fontSize="10px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          textTransform="uppercase"
          lineHeight="16px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="2.85px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Cookie Policy"
          {...getOverrideProps(overrides, "Cookie Policy")}
        ></Text>
        <Text
          fontFamily="Josefin Sans"
          fontSize="10px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          textTransform="uppercase"
          lineHeight="16px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="2.85px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="© 2022"
          {...getOverrideProps(overrides, "\u00A9 2022")}
        ></Text>
      </Flex>
    </Flex>
  );
}
