import { View, Text, StyleSheet, Button, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

// Component for the welcome screen
export default function Welcome() {
    // Initialize the router for navigation
    const router = useRouter();
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
            <Pressable onPress={() => router.replace('/login')}>
                <View style={styles.loginButton}>
                    <Button title="Log In"></Button>
                </View>
            </Pressable>
            {/* Sign Up button */}
            <Pressable onPress={() => router.replace('/signup')}>
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
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 100,
    },
    header: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    loginButton: {
        marginTop: 20,
        borderRadius: 5,
        color: '#4a475c',
    },
    signupButton: {
        marginTop: 10,
        borderRadius: 5,
        color: '#e2e1f4',
    },
});
