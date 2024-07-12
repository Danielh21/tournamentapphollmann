import React, { FC } from "react"
import { TextStyle, ViewStyle } from "react-native"
import { Button, Screen, Text } from "app/components"
import { spacing } from "app/theme"
import { AppStackScreenProps } from "app/navigators"
import { useHeader } from "app/utils/useHeader"

interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

export const HomeScreen: FC<HomeScreenProps> = function HomeScreen({ navigation }) {
  useHeader({
    rightText: "Hello",
  })

  function goNext() {
    navigation.navigate("Demo", { screen: "DemoCommunity" })
  }

  return (
    <Screen preset="auto" contentContainerStyle={$screenContentContainer}>
      <Text>Hello</Text>
      <Button onPress={goNext} text="Hello" textStyle={$buttonStyle} />
    </Screen>
  )
}

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.xxl,
  paddingHorizontal: spacing.lg,
}

const $buttonStyle: TextStyle = {
  color: "blue",
}

export default HomeScreen
