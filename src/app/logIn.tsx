import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import AccountHeader from '../components/AccountHeader';
import AccountForm from '../components/AccountForm';
import { Checkbox } from 'expo-checkbox';
import { useState } from 'react';

// Component for the LogIn screen
export default function LogIn() {
    // Initialize the router for navigation
    const router = useRouter();
    const [checkedRememberMe, setCheckedRememberMe] = useState(false);
    return (
        // Main container for the welcome screen
        <View style={styles.container}>
            <AccountHeader AccountHeaderText="Cardfolio"></AccountHeader>
            <View style={styles.forms}>
                <AccountForm AccountFormText="Email or Username" />
                <AccountForm AccountFormText="Password" />
            </View>
            <View>
                <View style={styles.checkBoxRow}>
                    <View style={styles.rememberMeTermsConditionsForgotPassword}>
                        <Checkbox color="black" style={{borderRadius: 5}} value={checkedRememberMe} onValueChange={setCheckedRememberMe}/>
                        <Text>Remember Me</Text>
                    </View>
                    <View style={styles.rememberMeTermsConditionsForgotPassword}>
                        <Text>Forgot Password?</Text>
                    </View>
                </View>
                {/* Log In button */}
                <Pressable onPress={() => router.replace('/')}>
                    <View style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>LOGIN</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => router.replace('/signUp')}>
                    <View style={styles.signUp}>
                        <Text style={{color: "black", fontWeight: "bold", fontSize: 14}}>Don't have an account?</Text>
                        <Text style={{color: "grey", fontWeight: "bold", fontSize: 14}}>Sign Up</Text>
                    </View>
                </Pressable>
            </View>
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
        borderRadius: 10,
        backgroundColor: '#4a475c',
        borderWidth: 1,
    },
    forms: {
        width: '100%',
        gap: 25,
    },
    signUp: {
        flexDirection: "row",
        gap: 5,
        justifyContent: "center",
        marginBottom: 78,
        marginTop: 5,
    },
    checkBoxRow: {
        flexDirection: "row",
        width: 280,
        justifyContent: "space-between",
        marginTop: 20,
        marginBottom: 5,
    },
    rememberMeTermsConditionsForgotPassword: {
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
    },
});
