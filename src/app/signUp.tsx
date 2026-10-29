import { View, Text, StyleSheet, Pressable, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import AccountHeader from '../components/AccountHeader';
import AccountForm from '../components/AccountForm';
import { useState } from 'react';
import { Checkbox } from 'expo-checkbox';
import DateTimePicker, {DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useUser } from "../app/context/UserContext";
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { RegistrationForm, RegistrationFormInput, registrationSchema } from './schema/registrationSchema';

// Component for the SignUp screen
export default function SignUp() {
    // Initialize the router for navigation
    const router = useRouter();
    const [checkedRememberMe, setCheckedRememberMe] = useState(false);
    const [checkedTermsConditions, setCheckedTermsConditions] = useState(false);
    const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
    
    const {
        setAccountUserName,
        setRegisteredUserName,
        setRegisteredPassword,
        setRegisteredFullName,
        setRegisteredEmail,
        setDateOfBirth: saveDateOfBirth,
    } = useUser();
    const { control, 
        handleSubmit, 
        setValue,
        formState: {errors}, 
    } = useForm<RegistrationFormInput, any, RegistrationForm>({
        resolver: zodResolver(registrationSchema),
        defaultValues: {
            fullName: "",
            email: "",
            userName: "",
            passWord: "",
            dateOfBirth: null,
        },
        mode: "onSubmit",
    })
    const onSubmit = (data: RegistrationForm) => {
        setAccountUserName(data.userName);
        setRegisteredUserName(data.userName);
        setRegisteredPassword(data.passWord);
        setRegisteredFullName(data.fullName);
        setRegisteredEmail(data.email);
        saveDateOfBirth(dateOfBirth);
        router.replace("/");
    }
    const openAndroidDatePicker = () => {
        DateTimePickerAndroid.open({
            value: dateOfBirth ?? new Date(),
            mode: 'date',
            display: 'calendar',
            maximumDate: new Date(),
            onValueChange: (_event, selectedDate) => {
                if (selectedDate) {
                    setDateOfBirth(selectedDate);
                    setValue("dateOfBirth", selectedDate, { shouldValidate: true });
                }
            },
        })
    }

    return (
        // Main container for the signup screen
        <View style={styles.container}>
            <AccountHeader AccountHeaderText="Cardfolio"></AccountHeader>
            <ScrollView style={styles.forms}>
                <View style={styles.forms}>
                    <View>
                    <Controller 
                        control={control}
                        name='fullName'
                        render={({ field: { onChange, value } }) => (
                            <AccountForm 
                                AccountFormText="Full Name" 
                                AccountInformation={value}
                                onChangeText={onChange}
                            />
                        )}
                    />
                    {errors.fullName && (
                        <Text style={{color: "red", marginLeft: "10%"}}>
                            {errors.fullName.message}
                        </Text>
                    )}
                    </View>
                    <View>
                    <Controller 
                        control={control}
                        name='email'
                        render={({ field: { onChange, value } }) => (
                            <AccountForm 
                                AccountFormText="Email Address" 
                                AccountInformation={value}
                                onChangeText={onChange}
                            />
                        )}
                    />
                    {errors.email && (
                        <Text style={{color: "red", marginLeft: "10%"}}>
                            {errors.email.message}
                        </Text>
                    )}
                    </View>
                    <View>
                    <Controller 
                        control={control}
                        name='userName'
                        render={({ field: { onChange, value } }) => (
                            <AccountForm 
                                AccountFormText="Username" 
                                AccountInformation={value}
                                onChangeText={onChange}
                            />
                        )}
                    />
                    {errors.userName && (
                        <Text style={{color: "red", marginLeft: "10%"}}>
                            {errors.userName.message}
                        </Text>
                    )}
                    </View>
                    <View>
                    <Controller 
                        control={control}
                        name='passWord'
                        render={({ field: { onChange, value } }) => (
                            <AccountForm 
                                AccountFormText="Password" 
                                AccountInformation={value}
                                onChangeText={onChange}
                            />
                        )}
                    />
                    {errors.passWord && (
                        <Text style={{color: "red", marginLeft: "10%"}}>
                            {errors.passWord.message}
                        </Text>
                    )}
                    </View>
                    <View style={styles.dateSection}>
                        <View style={styles.dateForm}>
                            <Text style={Platform.OS === "android" ? styles.formTitleAndroid : styles.formTitle}>
                                Date of Birth
                            </Text>
                            {Platform.OS === "android" ? (
                            <Pressable onPress={openAndroidDatePicker}>
                                <View style={styles.datePicker}>
                                    <Text>
                                        {dateOfBirth ? dateOfBirth.toLocaleDateString() : "Select a date"}
                                    </Text>
                                </View>
                            </Pressable>
                            ) : (
                            <DateTimePicker
                                value={dateOfBirth ?? new Date()}
                                mode="date"
                                display="compact"
                                maximumDate={new Date()}
                                onValueChange={(_event, selectedDate) => {
                                    if (selectedDate) {
                                        setDateOfBirth(selectedDate);
                                        setValue("dateOfBirth", selectedDate, { shouldValidate: true });
                                    }
                                }}
                            />
                            )}
                        </View>
                        {errors.dateOfBirth?.message && (
                            <Text style={{ color: "red", marginTop: 4 }}>
                            {errors.dateOfBirth.message}
                            </Text>
                        )}
                    </View>
                </View>
            </ScrollView>
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
                <Pressable onPress={() => void handleSubmit(onSubmit)()}>
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
    },
    formTitle: {
      fontSize: 30,
      fontWeight: "bold",
    },
    datePicker: {
        backgroundColor: "lightgrey",
        borderRadius: 20,
        padding: 10,
    },
    formTitleAndroid: {
      fontSize: 30,
      fontWeight: "bold",
    },
    dateSection: {
      width: "80%",
      marginLeft: "10%",
    },
});
