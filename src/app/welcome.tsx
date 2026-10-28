import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import AccountHeader from '../components/AccountHeader';

// Component for the welcome screen
export default function Welcome() {
    // Initialize the router for navigation
    const router = useRouter();
    return (
        // Main container for the welcome screen
        <View style={styles.container}>
            <AccountHeader AccountHeaderText="Welcome to Cardfolio"/>
            {/* Log In button */}
            <Pressable onPress={() => router.replace('/logIn')}>
                <View style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Log In</Text>
                </View>
            </Pressable>
            {/* Sign Up button */}
            <Pressable onPress={() => router.replace('/signUp')}>
                <View style={styles.signupButton}>
                    <Text style={styles.signupButtonText}>Sign Up</Text>
                </View>
            </Pressable>
        </View>
    );
}

// Styles for the welcome screen components
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    loginButton: {
        height: 80,
        width: 280,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#4a475c',
        borderWidth: 1,
    },
    signupButtonText: {
        color: '#4a475c',
        fontSize: 24,
        fontWeight: 'bold',
    },
    signupButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#e2e1f4',
        borderWidth: 1,
        height: 80,
        width: 280,
        marginBottom: 100,
    },
});
