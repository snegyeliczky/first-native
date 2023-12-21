import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        display: "flex",
        alignItems: "center",
        gap: 10
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 20
    },
});

export const profitStyle = StyleSheet.create((profit: number) => ({
    color: profit > 0 ? "green" : "red",
    fontSize: 23
}))