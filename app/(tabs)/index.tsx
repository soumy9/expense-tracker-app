import { Link } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import NewExpense from "@/components/NewExpense";
import NewExpenseForm from "@/components/NewExpenseForm";

export default function Index() {
  const [isAddNewExpense, setIsAddNewExpense] = useState<boolean>(false);

  function addNewExpenseHandler() {
    Alert.alert('New expense added!');
    setIsAddNewExpense(false);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable onPress={() => setIsAddNewExpense(true)}>
        <Text>New Expense</Text>
      </Pressable>
      <NewExpense isVisible={isAddNewExpense} onClose={() => setIsAddNewExpense(false)}>
        <NewExpenseForm onAddNewExpense={addNewExpenseHandler} />
      </NewExpense>
    </View>
  );
}