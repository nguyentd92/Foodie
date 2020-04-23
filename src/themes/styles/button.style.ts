import { StyleSheet } from "react-native";
import { Colors } from "../variables";

export const buttonStyles = StyleSheet.create({
    expandButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        shadowColor: Colors.medium,
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 1
        }
    },
    accent: {
        backgroundColor: Colors.accent
    }
})