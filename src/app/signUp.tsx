import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import AccountHeader from '../components/AccountHeader';
import AccountForm from '../components/AccountForm';
import { useState } from 'react';
import { Checkbox } from 'expo-checkbox';
import DateTimePicker from "@react-native-community/datetimepicker"

// Component for the SignUp screen
export default function SignUp() {
    // Initialize the router for navigation
    const router = useRouter();
    const [checkedRememberMe, setCheckedRememberMe] = useState(false);
    const [checkedTermsConditions, setCheckedTermsConditions] = useState(false);
    const [dateOfBirth, setDateOfBirth] = useState(new Date());

    return (
        // Main container for the signup screen
        <View style={styles.container}>
            <AccountHeader AccountHeaderText="Cardfolio"></AccountHeader>
            <View style={styles.forms}>
                <AccountForm AccountFormText="Full Name" />
                <AccountForm AccountFormText="Email Address" />
                <AccountForm AccountFormText="Password" />
                <View style={styles.dateForm}>
                    <Text style={styles.formTitle}>Age</Text>
                    <DateTimePicker 
                    value={dateOfBirth ?? new Date()}
                    mode="date"
                    display="compact"
                    maximumDate={new Date()}
                    onValueChange={(event, selectedDate) => {
                        if (selectedDate) {
                            setDateOfBirth(selectedDate);
                        }
                    }}
                    />
                </View>
            </View>
            <View>
                <View style={styles.checkBoxRow}>
                    <View style={styles.rememberMeTermsConditionsForgotPassword}>
                        <Checkbox color="black" style={{borderRadius: 5}} value={checkedRememberMe} onValueChange={setCheckedRememberMe}/>
                        <Text>Remember Me</Text>
                    </View>
                    <View style={styles.rememberMeTermsConditionsForgotPassword}>
                        <Checkbox color="black" style={{borderRadius: 5}} value={checkedTermsConditions} onValueChange={setCheckedTermsConditions}/>
                        <Text>Terms & Conditions</Text>
                    </View>
                </View>
                {/* Create Account button */}
                <Pressable onPress={() => router.replace('/')}>
                    <View style={styles.signupButton}>
                        <Text style={styles.signupButtonText}>CREATE ACCOUNT</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => router.replace('/logIn')}>
                    <View style={styles.logIn}>
                        <Text style={{color: "black", fontWeight: "bold", fontSize: 14}}>Already have an account?</Text>
                        <Text style={{color: "grey", fontWeight: "bold", fontSize: 14}}>Log In</Text>
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
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    signupButtonText: {
        color: '#4a475c',
        fontSize: 30,
        fontWeight: 'bold',
    },
    signupButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#e2e1f4',
        borderWidth: 1,
        height: 80,
        width: 280,
    },
    forms: {
      width: '100%',
      gap: 25,
    },
    logIn: {
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
    dateForm: {
      flexDirection: "row",
      width: "80%",
      marginLeft: "10%",
    },
    formTitle: {
      fontSize: 30,
      fontWeight: "bold",
      marginRight: "15%",
    },
});
