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
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function PlanetCard(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        BG: {},
        "HEADING 4": {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.": {},
        Text: {},
        Button: {},
        Content: {},
        Card: {},
        "Image-Caravan": {},
        PlanetCard: {},
      },
      variantValues: { state: "normal", device: "Desktop" },
    },
    {
      overrides: {
        BG: {},
        "HEADING 4": {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.": {},
        Text: {},
        Button: { backgroundColor: "rgba(3,17,14,1)" },
        Content: {},
        Card: {},
        "Image-Caravan": {},
        PlanetCard: {},
      },
      variantValues: { state: "hover", device: "Desktop" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="592px"
      height="460px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "PlanetCard")}
    >
      <View
        width="592px"
        height="344px"
        position="absolute"
        top="116px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Card")}
      >
        <View
          width="592px"
          height="344px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(196,235,248,1)"
          opacity="0.03999999910593033"
          {...getOverrideProps(overrides, "BG")}
        ></View>
        <Flex
          gap="20px"
          position="absolute"
          top="139px"
          left="93px"
          direction="column"
          width="421px"
          alignItems="center"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Content")}
        >
          <Flex
            gap="12px"
            direction="column"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Text")}
          >
            <Text
              fontFamily="Audrey"
              fontSize="22px"
              fontWeight="500"
              color="rgba(3,17,14,1)"
              textTransform="uppercase"
              lineHeight="25.78125px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="4.85px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="HEADING 4"
              {...getOverrideProps(overrides, "HEADING 4")}
            ></Text>
            <Text
              fontFamily="Josefin Sans"
              fontSize="18px"
              fontWeight="400"
              color="rgba(3,17,14,1)"
              lineHeight="28.80000114440918px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              {...getOverrideProps(
                overrides,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              )}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            direction="column"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            overflow="hidden"
            position="relative"
            border="1px SOLID rgba(3,17,14,1)"
            padding="13px 31px 11px 31px"
            {...getOverrideProps(overrides, "Button")}
          ></Flex>
        </Flex>
      </View>
      <View
        width="421px"
        height="192px"
        position="absolute"
        top="30px"
        left="93px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Image-Caravan")}
      ></View>
    </View>
  );
}
