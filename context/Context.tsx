import { ExpenseInterface } from "@/interfaces/ExpenseInterface";
import { Children, createContext, PropsWithChildren, Reducer, useContext, useReducer } from "react";

const CategoriesContext = createContext<string[] | null>(null);
const CategoriesDispatchContext = createContext<React.ActionDispatch<[action: CategoriesAction]> | null>(null);
const ExpensesContext = createContext<ExpenseInterface[] | null>(null);
const ExpensesDispatchContext = createContext<React.ActionDispatch<[action: ExpensesAction]> | null>(null);

type CategoriesAction = {
    type: string;
    id: number;
    categoryTitle: string;
}

type ExpensesAction = {
    type: string;
    id: number;
    expenseTitle: string;
    expenseAmount: number;
}

const categoriesReducer: Reducer<string[], CategoriesAction> = (prevState, action): string[] => {
    switch (action.type) {
        case 'add':
            return [...prevState, action.categoryTitle];
        case 'delete':
            const newState = prevState.filter(state => state !== action.categoryTitle);
            return newState;
    }
    return prevState;
}

const expensesReducer: Reducer<ExpenseInterface[], ExpensesAction> = (prevState, action): ExpenseInterface[] => {
    switch (action.type) {
        case 'add':
            return [...prevState, { title: action.expenseTitle, amount: action.expenseAmount }]
        case 'delete':
            const newState = prevState.filter(state => state.title !== action.expenseTitle);
            return newState;
    }
    return prevState;
}

const initialCategories: string[] = [];
const initialExpenses: ExpenseInterface[] = [];

type ContextProviderProps = PropsWithChildren<{}>;

export function ContextProvider({ children }: ContextProviderProps) {
    const [categories, dispatchCategories] = useReducer(categoriesReducer, initialCategories);

    const [expenses, dispatchExpenses] = useReducer(expensesReducer, initialExpenses);

    return (
        <CategoriesContext value={categories} >
            <CategoriesDispatchContext value={dispatchCategories}>
                <ExpensesContext value={expenses} >
                    <ExpensesDispatchContext value={dispatchExpenses}>
                        {children}
                    </ExpensesDispatchContext>
                </ExpensesContext>
            </CategoriesDispatchContext>
        </CategoriesContext>
    )
}

export const useCategories = () => useContext(CategoriesContext);
export const useExpenses = () => useContext(ExpensesContext);