import { View, Text, StyleSheet, TextInput } from "react-native";

type Props = {
  AccountFormText: string;
};

export default function AccountForm({ AccountFormText }: Props) {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>{AccountFormText}</Text>
      <View style={styles.formInput}>
        <TextInput
          accessibilityLabel={AccountFormText}
          placeholder={`Enter ${AccountFormText}`}
          style={styles.textInput}
        />
      </View>
    </View>
  );
}

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
