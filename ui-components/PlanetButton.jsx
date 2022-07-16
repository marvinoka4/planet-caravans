/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function PlanetButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Text: {}, PlanetButton: {} },
      variantValues: { state: "normal" },
    },
    {
      overrides: {
        Text: { color: "rgba(255,255,255,1)" },
        PlanetButton: { backgroundColor: "rgba(3,17,14,1)" },
      },
      variantValues: { state: "hover" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="column"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(3,17,14,1)"
      padding="13px 31px 11px 31px"
      {...rest}
      {...getOverrideProps(overrides, "PlanetButton")}
    >
      <Text
        fontFamily="Josefin Sans"
        fontSize="13px"
        fontWeight="600"
        color="rgba(3,17,14,1)"
        lineHeight="16px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Button Text"
        {...getOverrideProps(overrides, "Text")}
      ></Text>
    </Flex>
  );
}
