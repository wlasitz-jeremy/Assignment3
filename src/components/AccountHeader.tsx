import { Text, View, StyleSheet } from "react-native"

//props for the AccountHeader component
type Props = {
  AccountHeaderText: string;
};

export default function AccountHeader ({AccountHeaderText}: Props) {
return (
            <View style={styles.header}>
                {/* Title of the screen */}
                <Text style={styles.title}>
                    {AccountHeaderText}
                </Text>    
            </View>
        );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 10,
        marginTop: 100,
    },
    title: {
        fontSize: 60,
        transform: [{ scaleX: 1 }, { scaleY: 1.25 }],
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
