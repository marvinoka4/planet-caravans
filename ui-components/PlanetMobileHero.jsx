/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function PlanetMobileHero(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="375px"
      height="664px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "PlanetMobileHero")}
    >
      <View
        width="375px"
        height="554px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,235,248,1)"
        {...getOverrideProps(overrides, "Top")}
      >
        <Flex
          gap="24px"
          position="absolute"
          top="155px"
          left="24px"
          direction="column"
          width="327px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Content")}
        >
          <Flex
            gap="18px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Text")}
          >
            <Text
              fontFamily="Audrey"
              fontSize="32px"
              fontWeight="500"
              color="rgba(3,17,14,1)"
              textTransform="uppercase"
              lineHeight="37.5px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="10.85px"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="50’s AMERICANA"
              {...getOverrideProps(overrides, "Title")}
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
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus sed tempus molestie sapien. "
              {...getOverrideProps(overrides, "Paragraph")}
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
      <Flex
        gap="10px"
        position="absolute"
        top="420px"
        left="0px"
        direction="column"
        width="1440px"
        height="280px"
        justifyContent="center"
        padding="0px 16px 0px 16px"
        {...getOverrideProps(overrides, "Caravans")}
      >
        <Flex
          gap="26px"
          direction="row"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "List")}
        >
          <View
            width="279px"
            height="127.67px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Image-Caravan31503330")}
          ></View>
          <View
            width="279px"
            height="127.67px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Image-Caravan31503331")}
          ></View>
          <View
            width="279px"
            height="127.67px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Image-Caravan31503332")}
          ></View>
        </Flex>
      </Flex>
    </View>
  );
}
