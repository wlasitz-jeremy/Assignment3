import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { useRouter } from "expo-router";
import AccountHeader from "../components/AccountHeader";
import AccountForm from "../components/AccountForm";
import { Checkbox } from "expo-checkbox";
import { useState } from "react";
import { useUser } from "../context/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  AuthenticationForm,
  authenticationSchema,
} from "../schema/authenticationSchema";

// Component for the LogIn screen
export default function LogIn() {
  // Initialize the router for navigation
  const router = useRouter();
  const [checkedRememberMe, setCheckedRememberMe] = useState(false);
  const { registeredUserName, registeredPassword, setAccountUserName } =
    useUser();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthenticationForm>({
    resolver: zodResolver(authenticationSchema),
    defaultValues: {
      userName: "",
      passWord: "",
    },
    mode: "onBlur",
  });
  // Constant for authentication
  const onSubmit = (data: AuthenticationForm) => {
    // Uses an if statement to determine if the username and password is correct
    // if not it will return an error message
    if (
      data.userName === registeredUserName &&
      data.passWord === registeredPassword
    ) {
      setAccountUserName(data.userName);
      router.replace("/");
    } else {
      Alert.alert("Login failed", "Username or password is incorrect.");
    }
  };

  return (
    // Main container for the welcome screen
    <View style={styles.container}>
      <AccountHeader AccountHeaderText="Cardfolio"></AccountHeader>
      <View style={styles.forms}>
        <View>
          {/*Controller where the user inputs their username*/}
          <Controller
            control={control}
            name="userName"
            render={({ field: { onChange, value } }) => (
              <AccountForm
                AccountFormText="Username"
                AccountInformation={value}
                onChangeText={onChange}
              />
            )}
          />
          {/* will display incorrect username here */}
          {errors.userName && (
            <Text style={{ color: "red", marginLeft: "10%" }}>
              {errors.userName.message}
            </Text>
          )}
        </View>
        <View>
          {/*Conroller for password*/}
          <Controller
            control={control}
            name="passWord"
            render={({ field: { onChange, value } }) => (
              <AccountForm
                AccountFormText="Password"
                AccountInformation={value}
                onChangeText={onChange}
              />
            )}
          />
          {/*Incorrect handle for password*/}
          {errors.passWord && (
            <Text style={{ color: "red", marginLeft: "10%" }}>
              {errors.passWord.message}
            </Text>
          )}
        </View>
      </View>
      <View>
        <View style={styles.checkBoxRow}>
          <View style={styles.rememberMeTermsConditionsForgotPassword}>
            <Checkbox
              color="black"
              style={{ borderRadius: 5 }}
              value={checkedRememberMe}
              onValueChange={setCheckedRememberMe}
            />
            <Text>Remember Me</Text>
          </View>
          <View style={styles.rememberMeTermsConditionsForgotPassword}>
            <Text>Forgot Password?</Text>
          </View>
        </View>
        {/* Log In button */}
        <Pressable onPress={() => void handleSubmit(onSubmit)()}>
          <View style={styles.loginButton}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => router.replace("/signUp")}>
          <View style={styles.signUp}>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 14 }}>
              Don't have an account?
            </Text>
            <Text style={{ color: "grey", fontWeight: "bold", fontSize: 14 }}>
              Sign Up
            </Text>
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
    alignItems: "center",
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
  },
  loginButton: {
    height: 80,
    width: 280,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#4a475c",
    borderWidth: 1,
  },
  forms: {
    width: "100%",
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
