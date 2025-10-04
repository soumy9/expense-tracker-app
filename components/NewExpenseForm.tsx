import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from '@react-native-picker/picker';

type NewExpenseFormProps = {
    onAddNewExpense: ()=>void;
}

function NewExpenseForm({onAddNewExpense}: NewExpenseFormProps) {
    return (
        <View>
            <Text style={styles.formInputLabel}>Category</Text>
            <Picker mode="dialog">
                <Picker.Item key={'groceries'} label="Groceries" value={'groceries'} />
                <Picker.Item key={'electricity'} label="Electricity" value={'electricity'} />
            </Picker>
            <View style={styles.formField}>
                <Text style={styles.formInputLabel}>Amount</Text>
                <TextInput style={styles.formInput} keyboardType="numeric" />
            </View>
            <Pressable onPress={onAddNewExpense}>
                <Text>
                    Add expense
                </Text>
            </Pressable>
        </View>
    )
}

export default NewExpenseForm;

const styles = StyleSheet.create({
    formField: {
        flexDirection: 'row',
        gap: 8
    },
    formInputLabel: {
        color: '#fff',
    },
    formInput: {
        borderColor: '#fff',
        backgroundColor: '#fff',
        width: '25%',
        color: '#000'
    }
});