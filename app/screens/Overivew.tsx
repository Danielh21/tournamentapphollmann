import React, { FC, useState } from "react"
import { ViewStyle } from "react-native"
import { Button, Screen, Text, TextField } from "app/components"
import { spacing } from "app/theme"
import { AppStackScreenProps } from "app/navigators"
import { useHeader } from "app/utils/useHeader"
import { getAuth, updateProfile } from "firebase/auth"
import { authService } from "app/services/authService"

interface OverViewScreenProps extends AppStackScreenProps<"Overview"> {}

export const OverViewScreen: FC<OverViewScreenProps> = function OverViewScreen({ navigation }) {
  useHeader({
    rightText: "Logout",
    onRightPress: () => logOut(),
  })

  const [displayNameToBeSet, setDisplayNameToBeSet] = useState<string>("")

  const auth = getAuth()

  function logOut() {
    authService.logOut()
    navigation.navigate("Home")
  }

  function SetUserName() {
    if (auth.currentUser) {
      updateProfile(auth.currentUser, {
        displayName: displayNameToBeSet,
      })
    }
  }

  const displayName = auth.currentUser?.displayName

  return (
    <Screen preset="auto" contentContainerStyle={$screenContentContainer}>
      {!displayName && <Text>Overview - {auth.currentUser?.email}</Text>}
      {displayName && <Text>Velkommen : {displayName} </Text>}
      {!displayName && (
        <>
          <Text>Set Your UserName </Text>
          <TextField
            value={displayNameToBeSet}
            onChangeText={(text) => setDisplayNameToBeSet(text)}
          />
          <Button text="Set Username" onPress={SetUserName} />
        </>
      )}
    </Screen>
  )
}

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.xxl,
  paddingHorizontal: spacing.lg,
}

export default OverViewScreen
