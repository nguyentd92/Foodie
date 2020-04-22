import { StyleSheet } from "react-native";
import { Colors, Typography } from "../variables";

export const inputStyles = StyleSheet.create({
    default: {
        fontSize: Typography.stronger,
        paddingTop: 10,
        paddingBottom: 6,
        borderBottomColor: Colors.medium,
        borderBottomWidth: 1
    }
})