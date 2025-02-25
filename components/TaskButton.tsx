import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";

type ButtonProps = {
    title: string;
    onPress: () => void;
}

const TaskButton = ({ title, onPress }: ButtonProps) => (
    <TouchableOpacity style={styles.loginButton} onPress={onPress} testID="button">
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);

export default TaskButton;

const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: '#b700ff',
        width: '100%',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
})