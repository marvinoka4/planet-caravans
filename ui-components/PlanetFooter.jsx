/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function PlanetFooter(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="row"
      width="1440px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="86px 80px 86px 80px"
      backgroundColor="rgba(3,17,14,1)"
      {...rest}
      {...getOverrideProps(overrides, "PlanetFooter")}
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
        gap="54px"
        direction="row"
        width="1134px"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        basis="1134px"
        height="16px"
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
