import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

import { useState } from "react";

export default function HomeScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const onLogin = () => {
        if (email === 'matheus@email.com' && password === '123') {
            setLoggedIn(true);
        }
    }

    return (
        <View style={styles.container}>
            {loggedIn ? (
                <Text style={styles.loggedInText}>Você está logado!</Text>
            ) : (
                <View style={styles.formContainer}>
                    <Text style={styles.title}>SCHELL SYSYEM</Text>
                    <TextInput
                        style={styles.field}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        placeholderTextColor="#888"
                        testID="email-input"
                    />
                    <TextInput
                        style={styles.field}
                        placeholder="Senha"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholderTextColor="#888"
                    />
                    <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#1a1a1a', // Dark background for better contrast
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
        textAlign: 'center',
    },
    loggedInText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4CAF50', // Green color for success message
    },
    formContainer: {
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: '#2e2e2e', // Slightly lighter background for form container
        borderRadius: 10,
        paddingVertical: 30,
        alignItems: 'center',
    },
    field: {
        width: '100%',
        height: 50,
        borderColor: '#444',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
        paddingLeft: 15,
        fontSize: 16,
        backgroundColor: '#333',
        color: '#fff',
    },
    loginButton: {
        backgroundColor: '#b700ff', // Orange color for the login button
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
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
