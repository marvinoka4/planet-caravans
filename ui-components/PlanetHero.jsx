/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function PlanetHero(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="911px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "PlanetHero")}
    >
      <View
        width="1440px"
        height="655px"
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
          top="232px"
          left="112px"
          direction="column"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Content")}
        >
          <Flex
            gap="18px"
            direction="column"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Text")}
          >
            <Text
              fontFamily="Audrey"
              fontSize="40px"
              fontWeight="500"
              color="rgba(3,17,14,1)"
              textTransform="uppercase"
              lineHeight="46.875px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="10.85px"
              shrink="0"
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
              width="445px"
              shrink="0"
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
        top="460px"
        left="0px"
        direction="column"
        width="1440px"
        height="432px"
        justifyContent="center"
        padding="0px 120px 0px 120px"
        {...getOverrideProps(overrides, "Caravans")}
      >
        <Flex
          gap="141px"
          direction="row"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "List")}
        >
          <View
            width="749px"
            height="342px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Hover")}
          >
            <View
              width="749px"
              height="342px"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Image-Caravan31503316")}
            ></View>
            <View
              width="100px"
              height="100px"
              position="absolute"
              top="111px"
              left="332px"
              borderRadius="50px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(3,17,14,1)"
              {...getOverrideProps(overrides, "Button-Circle/hover")}
            ></View>
            <View
              width="22px"
              height="22px"
              position="absolute"
              top="200px"
              left="382px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "hand/pointing")}
            ></View>
          </View>
          <View
            width="749px"
            height="342px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Image-Caravan31503319")}
          ></View>
          <View
            width="749px"
            height="342px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Image-Caravan31503320")}
          ></View>
        </Flex>
      </Flex>
    </View>
  );
}
