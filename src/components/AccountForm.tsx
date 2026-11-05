import { View, Text, StyleSheet, TextInput } from "react-native";
// Props for the account form
type Props = {
  AccountFormText: string;
  AccountInformation?: string;
  onChangeText?: (text: string) => void;
};

// Main Account function
// uses account form text as a parameter for easy editing
// onChangeText resets the text to be blank when the user finsihs setting up account
export default function AccountForm({
  AccountFormText,
  AccountInformation,
  onChangeText,
}: Props) {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>{AccountFormText}</Text>
      <View style={styles.formInput}>
        <TextInput
          accessibilityLabel={AccountFormText}
          placeholder={`Enter ${AccountFormText}`}
          style={styles.textInput}
          value={AccountInformation}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}

// Styles for Account Form
const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    marginLeft: "10%",
  },
  formTitle: {
    fontSize: 30,
    fontWeight: "bold",
    width: "80%",
  },
  formInput: {
    borderColor: "#000000",
    borderWidth: 2,
    width: "80%",
    height: 56,
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 18,
  },
});
