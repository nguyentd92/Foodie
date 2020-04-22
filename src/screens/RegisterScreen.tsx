import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { Colors, Typography } from "../themes";
import { inputStyles } from "../themes/styles";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  pageContainer: {
    padding: 16,
    flex: 1,
    justifyContent: "center",
    height: (height * 9) / 10,
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
    marginTop: 40,
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
  terms: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 32,
  },
  forgotPw: {
    position: "relative",
    right: 0,
  },
  forgotPwText: {
    color: Colors.pearl,
  },
  backLoginWrapper: {
    position: "absolute",
    alignItems: "center",
    bottom: 32,
    width,
  },
  backLogin: {
    alignItems: "center",
  },
});

export function RegisterScreen() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <ScrollView>
      <View style={styles.pageContainer}>
        <Text style={styles.loginTitle}>Welcome to Foodie</Text>
        <Text style={styles.pageTitle}>Create your account</Text>
        <TextInput
          style={[inputStyles.default, styles.input]}
          placeholder="Username"
        ></TextInput>
        <TextInput
          style={[inputStyles.default, styles.input]}
          placeholder="Email"
        ></TextInput>
        <TextInput
          style={[inputStyles.default, styles.input]}
          placeholder="Password"
        ></TextInput>
        <TextInput
          style={[inputStyles.default, styles.input]}
          placeholder="Confirm Password"
        ></TextInput>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.terms}>
          <TouchableOpacity style={styles.forgotPw} onPress={() => {}}>
            <Text style={styles.forgotPwText}>Terms & Conditions</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.backLoginWrapper}>
          <TouchableOpacity style={styles.backLogin} onPress={() => {}}>
            <Text style={styles.forgotPwText}>Log in your account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
