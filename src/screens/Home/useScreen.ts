import { generateRandomColor } from "@/src/utils";
import { useState } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export const useScreen = () => {
  const [isToggled, setIsToggled] = useState(false);
  const randomColor = useSharedValue(generateRandomColor());
  const textStyles = useAnimatedStyle(() => {
    return {
      // Or interpolate color if you want
      color: randomColor.value,
    };
  });

  const onContainerPress = () => {
    "worklet";

    setIsToggled((prev) => !prev);
    randomColor.value = withSpring(generateRandomColor());
  };

  return { textStyles, onContainerPress, isToggled };
};
