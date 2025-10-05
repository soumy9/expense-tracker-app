import { Link } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import NewExpense from "@/components/ModalForm";
import NewExpenseForm from "@/components/NewExpenseForm";
import { useDispatchExpenses } from "@/context/Context";
import ModalForm from "@/components/ModalForm";
import NewCategoryForm from "@/components/NewCategoryForm";

export default function Index() {
  const [isAddNewExpense, setIsAddNewExpense] = useState<boolean>(false);
  const [isAddNewCategory, setIsAddNewCategory] = useState<boolean>(false);

  function addNewExpenseHandler() {
    setIsAddNewExpense(false);
  }

  function addNewCategoryHandler() {
    setIsAddNewCategory(false);
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
      <Pressable onPress={() => setIsAddNewCategory(true)}>
        <Text>New Category</Text>
      </Pressable>
      <ModalForm title="Add new category" isVisible={isAddNewCategory} onClose={() => setIsAddNewCategory(false)}>
        <NewCategoryForm onSave={addNewCategoryHandler} />
      </ModalForm>
      <ModalForm title="Add new expense" isVisible={isAddNewExpense} onClose={() => setIsAddNewExpense(false)}>
        <NewExpenseForm onSave={addNewExpenseHandler} />
      </ModalForm>
    </View>
  );
}