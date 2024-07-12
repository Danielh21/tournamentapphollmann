import React, { FC, useState } from "react"
import { TextStyle, ViewStyle } from "react-native"
import { Button, Screen, Text, TextField } from "app/components"
import { spacing } from "app/theme"
import { AppStackScreenProps } from "app/navigators"
import { useHeader } from "app/utils/useHeader"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"

interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

export const HomeScreen: FC<HomeScreenProps> = function HomeScreen({ navigation }) {
  useHeader({
    rightText: "Hello",
  })

  function goToOverview() {
    navigation.navigate("Overview")
  }

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const auth = getAuth()

  // function handleEmailChange(event) {
  //   const value = event.
  // }

  function signUserIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in
        goToOverview()
      })
      .catch((error) => {
        // const errorCode = error.code
        // const errorMessage = error.message
        console.error(error)
      })
  }

  function signUp() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user
        console.log("User signed up" + user)
      })
      .catch((error) => {
        // const errorCode = error.code
        // const errorMessage = error.message
        console.error(error)
      })
  }

  return (
    <Screen preset="auto" contentContainerStyle={$screenContentContainer}>
      <Text>Email</Text>
      <TextField value={email} onChangeText={(text) => setEmail(text)} placeholder="Email" />
      <Text>Password</Text>
      <TextField
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        autoComplete="password"
        secureTextEntry={true}
      />
      <Button onPress={() => signUp()} text="Signup" textStyle={$buttonStyle} />
      <Button onPress={() => signUserIn()} text="Signin" textStyle={$buttonStyle} />
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
