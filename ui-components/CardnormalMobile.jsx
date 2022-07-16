/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function CardnormalMobile(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="327px"
      height="358px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "CardnormalMobile")}
    >
      <View
        width="327px"
        height="279px"
        position="absolute"
        top="79px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Card")}
      >
        <View
          width="327px"
          height="279px"
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
          top="91px"
          left="35px"
          direction="column"
          width="257px"
          alignItems="center"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Content")}
        >
          <Flex
            gap="12px"
            direction="column"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Text")}
          >
            <Text
              fontFamily="Audrey"
              fontSize="19px"
              fontWeight="500"
              color="rgba(3,17,14,1)"
              textTransform="uppercase"
              lineHeight="22.265625px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="4.85px"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="HEADING 4"
              {...getOverrideProps(overrides, "HEADING 4")}
            ></Text>
            <Text
              fontFamily="Josefin Sans"
              fontSize="16px"
              fontWeight="400"
              color="rgba(3,17,14,1)"
              lineHeight="25.600000381469727px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
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
            alignSelf="stretch"
            objectFit="cover"
            overflow="hidden"
            position="relative"
            border="1px SOLID rgba(3,17,14,1)"
            padding="13px 31px 11px 31px"
            {...getOverrideProps(overrides, "Button")}
          ></Flex>
        </Flex>
      </View>
      <View
        width="269px"
        height="122px"
        position="absolute"
        top="25px"
        left="29px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Image-Caravan")}
      ></View>
    </View>
  );
}
