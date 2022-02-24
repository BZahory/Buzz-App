import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Center,
  Text,
  Stack,
  theme,
  useColorMode,
  Heading,
  View,
} from "native-base";
import Carousel from "react-native-snap-carousel";

const entries = [
  {
    title: "Beautiful and dramatic Antelope Canyon",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/UYiroysl.jpg",
  },
  {
    title: "Favourites landscapes 6",
    subtitle: "Lorem ipsum dolor sit amet et nuncat",
    illustration: "https://i.imgur.com/l49aYS3l.jpg",
  },
];

interface Props {}

const VotingCarousel: React.FC<Props> = () => {
  const { colorMode, toggleColorMode, setColorMode } = useColorMode();

  const [index1, setIndex] = useState(1);

  let primaryColor: string, secondaryColor: string, bkgColor: string;

  let _slider1Ref = useRef(null);

  if (colorMode === "light") {
    primaryColor = theme.colors["coolGray"]["800"];
    secondaryColor = "black";
    bkgColor = "white";
  } else {
    primaryColor = theme.colors["coolGray"]["50"];
    secondaryColor = "#D97A07";
    bkgColor = theme.colors["coolGray"]["800"];
  }

  const _renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <Carousel
      data={entries}
      renderItem={_renderItem}
      sliderWidth={500}
      itemWidth={500}
      layout={"tinder"}
    />
  );
};

export default VotingCarousel;
