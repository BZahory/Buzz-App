import React, { Component, constructor, useState } from "react";
import {
  Platform,
  View,
  ScrollView,
  Text,
  StatusBar,
  SafeAreaView,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { sliderWidth, itemWidth } from "./styles/SliderEntry.style";
import SliderEntry from "./components/SliderEntry";
import styles, { colors } from "./styles/index.style";
import { scrollInterpolators, animatedStyles } from "./utils/animations";
import { theme, useColorMode } from "native-base";

const IS_ANDROID = Platform.OS === "android";
const SLIDER_1_FIRST_ITEM = 1;

export const ENTRIES1 = [
  {
      title: 'Sample Portfolio D',
      subtitle: 'You have invested 300 dollars into this portfolio',
      illustration: 'https://i.imgur.com/UYiroysl.jpg'
  },
  {
      title: 'Sample Portfolio A',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
  },
  {
      title: 'Sample Portfolio C',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg'
  },
  {
      title: 'Sample Portfolio E',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
  },
  {
      title: 'Sample Portfolio F',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
  },
  {
      title: 'Sample Portfolio G',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/lceHsT6l.jpg'
  }
];



 const example = () => {

  const [slider1ActiveSlide, setSlider1ActiveSlide] = useState(SLIDER_1_FIRST_ITEM)

   const _renderLightItem = ({ item, index }) => {
    return <SliderEntry data={item} even={false} />;
  }

  const _renderDarkItem = ({ item, index }) => {
    return <SliderEntry data={item} even={true} />;
  }

  const carousel = (renderItemFunc) => {
    // Do not render examples on Android; because of the zIndex bug, they won't work as is
    return !IS_ANDROID ? (
        <Carousel
        layout="stack"
        layoutCardOffset={'20'}
          data={ENTRIES1}
          renderItem={renderItemFunc}
          sliderWidth={sliderWidth*.8}
          itemWidth={itemWidth}
          containerCustomStyle={{overflow:"visible"}}
        />
    ) : (
      false
    );
  }

    const {colorMode} = useColorMode();

    return (
          <View
            directionalLockEnabled={true}
            style={{alignItems:"center", margin:0, overflow:"hidden", padding:0}}
          >
            {carousel(
      (colorMode === "light" ? _renderLightItem : _renderDarkItem)
    )}
          </View>
    );
  }

export default example;