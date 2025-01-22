import { StyleSheet, Pressable, Text } from "react-native";
import { useScreen } from "./useScreen";
import Animated, { type CSSAnimationKeyframes } from "react-native-reanimated";
import { Stack } from "expo-router";

// Yes, i can put this info in the README.md file,
// but sometimes reviewers don't read it :)

// I didn't clear all modules because it is a simple project with expo router
// I didn't setup proper project structure and libraries like native-base or unistyles
// due to limited time

// Please pay your attention to the version of react-native-reanimated
// The have just released a new version and they claim that
// Reanimated 4 is the biggest and most important update to the library
// since they introduced worklets in Reanimated 2
// So i was curious about that
// https://blog.swmansion.com/reanimated-4-is-new-but-also-very-familiar-b926dd59aa40

const pulse: CSSAnimationKeyframes = {
  from: {
    transform: [{ scale: 0.8 }, { rotateZ: "-15deg" }],
    width: 120,
    backgroundColor: "#ffe780",
  },
  to: {
    transform: [{ scale: 1.2 }, { rotateZ: "15deg" }],
    width: 240,
    backgroundColor: "#b58df1",
  },
};

export const HomeScreen = () => {
  const { textStyles, onContainerPress, isToggled } = useScreen();

  return (
    <>
      <Stack.Screen options={{ title: "Home screen" }} />

      {/* Do we need some custom animation on press here ??? */}
      <Pressable onPress={onContainerPress} style={styles.container}>
        <Text>Every time you press on screen the rectangle animates</Text>

        <Animated.Text style={[styles.title, textStyles]}>
          Hello there
        </Animated.Text>

        <Animated.View
          style={[
            styles.box,
            // These doesn't work from the useAnimatedStyle hook
            {
              animationName: pulse,
              animationDuration: "1s",
              animationIterationCount: "infinite",
              animationTimingFunction: "easeInOut",
              animationDirection: "alternate",
              animationPlayState: isToggled ? "paused" : "running",
            },
          ]}
        />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: 120,
    width: 120,
    margin: 64,
  },
  title: {
    fontSize: 36,
    fontWeight: 700,
  },
});
