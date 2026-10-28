import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import AccountHeader from '../components/AccountHeader';
import AccountForm from '../components/AccountForm';

// Component for the SignUp screen
export default function SignUp() {
    // Initialize the router for navigation
    const router = useRouter();
    return (
        // Main container for the signup screen
        <View style={styles.container}>
            <AccountHeader AccountHeaderText="Cardfolio"></AccountHeader>
            <View style={styles.forms}>
                            <AccountForm AccountFormText="Full Name" />
                            <AccountForm AccountFormText="Email Address" />
                            <AccountForm AccountFormText="Password" />
                        </View>
            {/* Create Account button */}
            <Pressable onPress={() => router.replace('/')}>
                <View style={styles.signupButton}>
                    <Text style={styles.signupButtonText}>CREATE ACCOUNT</Text>
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
    signupButtonText: {
        color: '#4a475c',
        fontSize: 30,
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
    forms: {
      width: '100%',
      gap: 25,
    },
});
