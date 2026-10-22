import { View, Text, StyleSheet, Button, Pressable } from 'react-native';

// Component for the welcome screen
export default function Welcome() {
    return (
        // Main container for the welcome screen
        <View style={styles.container}>
            <View style={styles.header}>
                {/* Title of the welcome screen */}
                <Text style={styles.title}>
                    Welcome to Cardfolio
                </Text>    
            </View>
            {/* Log In button */}
            <Pressable onPress={() => console.log('Log In pressed')}>
                <View style={styles.loginButton}>
                    <Button title="Log In"></Button>
                </View>
            </Pressable>
            {/* Sign Up button */}
            <Pressable onPress={() => console.log('Sign Up pressed')}>
                <View style={styles.signupButton}>
                    <Button title="Sign Up"></Button>
                </View>
            </Pressable>
        </View>
    );
}

// Styles for the welcome screen components
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    loginButton: {
        marginTop: 20,
    },
    signupButton: {
        marginTop: 10,
    },
});
