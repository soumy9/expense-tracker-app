import { useDispatchCategories } from "@/context/Context";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type NewCategoryFormProps = {
    onSave: () => void;
};

export default function NewCategoryForm({ onSave }: NewCategoryFormProps) {
    const [categoryTitle, setCategoryTitle] = useState<string>();

    const dispatchCategory = useDispatchCategories();

    const saveExpenseHandler = () => {
        dispatchCategory?.({
            id: 1,
            type: 'add',
            categoryTitle: categoryTitle
        });
        onSave();
    };

    return (
        <View>
            <View style={styles.formField}>
                <Text style={styles.formInputLabel}>Category</Text>
                <TextInput style={styles.formInput} value={categoryTitle} onChangeText={(text) => setCategoryTitle(text)} />
            </View>
            <Pressable onPress={() => saveExpenseHandler()}><Text>Submit</Text></Pressable>
        </View>
    );
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
})