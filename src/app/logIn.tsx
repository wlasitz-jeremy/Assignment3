import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import AccountHeader from '../components/AccountHeader';
import AccountForm from '../components/AccountForm';
import { Form } from 'react-hook-form';

// Component for the LogIn screen
export default function LogIn() {
    // Initialize the router for navigation
    const router = useRouter();
    return (
        // Main container for the welcome screen
        <View style={styles.container}>
            <AccountHeader AccountHeaderText="Cardfolio"></AccountHeader>
            <View style={styles.forms}>
                <AccountForm AccountFormText="Email or Username" />
                <AccountForm AccountFormText="Password" />
            </View>
            {/* Log In button */}
            <Pressable onPress={() => router.replace('/')}>
                <View style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>LOGIN</Text>
                </View>
            </Pressable>
        </View>
    );
}

// Styles for the welcome screen components
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: 'center',
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
    loginButtonText: {
        color: '#ffffff',
        fontSize: 30,
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
        marginBottom: 100,
    },
    forms: {
        width: '100%',
        gap: 25,
    },
});
