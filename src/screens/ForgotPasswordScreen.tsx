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
    color: Colors.dark,
  },
  pageTitle: {
    textAlign: "center",
    color: Colors.medium,
    fontWeight: "600",
  },
  loginButton: {
    marginTop: 32,
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
    marginTop: 48,
    marginVertical: 12,
  },
});

export function ForgotPasswordScreen() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.loginTitle}>Forgot Password?</Text>
      <Text style={styles.pageTitle}>Please enter your email</Text>

      <TextInput
        style={[inputStyles.default, styles.input]}
        placeholder="Email"
      ></TextInput>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
