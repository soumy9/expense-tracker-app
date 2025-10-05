import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useCategories, useDispatchExpenses } from "@/context/Context";
import { useState } from "react";

type NewExpenseFormProps = {
    onSave: () => void;
};

export default function NewExpenseForm({ onSave }: NewExpenseFormProps) {
    const categories = useCategories();
    const [expenseTitle, setExpenseTitle] = useState<string>(categories?.[0] || '');
    const [expenseAmount, setExpenseAmount] = useState<number>(0);

    const dispatchExpense = useDispatchExpenses();
    const addNewExpenseHandler = () => {
        dispatchExpense?.({
            type: 'add',
            expenseAmount: expenseAmount,
            expenseTitle: expenseTitle,
            id: 1
        });

        onSave();
    }

    const expenseAmountChangeHandler = (text: number) => {
        setExpenseAmount(text);
    }

    return (
        <View>
            <Text style={styles.formInputLabel}>Category</Text>
            <Picker mode="dialog" onValueChange={(itemValue) => setExpenseTitle(itemValue as string)} selectedValue={expenseTitle}>
                {categories?.map(category => (
                    <Picker.Item key={category} label={category} value={category} />
                ))}
            </Picker>
            <View style={styles.formField}>
                <Text style={styles.formInputLabel}>Amount</Text>
                <TextInput style={styles.formInput} keyboardType="numeric" onChangeText={(text) => expenseAmountChangeHandler(Number(text))} value={expenseAmount + ''} />
            </View>
            <Pressable onPress={addNewExpenseHandler}>
                <Text>
                    Add expense
                </Text>
            </Pressable>
        </View>
    )
}

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