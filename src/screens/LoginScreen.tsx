import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Colors, Typography } from "../themes";
import { inputStyles } from "../themes/styles";

const styles = StyleSheet.create({
  pageContainer: {
    padding: 16,
    flex: 1,
    justifyContent: "center",
  },
  loginTitle: {
    fontSize: Typography.large,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "700",
    color: Colors.dark
  },
  loginButton: {
    backgroundColor: Colors.accentVariant,
    borderRadius: 2,
    shadowColor: Colors.medium,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.6,
  },
  loginButtonText: {
    color: Colors.light,
    padding: 12,
    textAlign: "center",
    fontWeight: "700",
    alignSelf: "stretch",
  },
  input: {
    marginVertical: 12,
  },
  forgotPwWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 12,
    marginBottom: 32,
  },
  forgotPw: {
    position: "relative",
    right: 0,
  },
  forgotPwText: {
    color: Colors.pearl,
  },
});

export function LoginScreen() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.loginTitle}>Log in</Text>

      <TextInput
        style={[inputStyles.default, styles.input]}
        placeholder="Username"
      ></TextInput>
      <TextInput
        style={[inputStyles.default, styles.input]}
        placeholder="Password"
      ></TextInput>
      <View style={styles.forgotPwWrapper}>
        <TouchableOpacity style={styles.forgotPw} onPress={() => {}}>
          <Text style={styles.forgotPwText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
