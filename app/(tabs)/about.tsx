import { useCategories, useExpenses } from "@/context/Context";
import { FlatList, Text, View } from "react-native";

function About() {
    const expenses = useExpenses();
    const categories = useCategories();

    return (
        <View>
            <View>
                <Text>Expenses</Text>
                <FlatList
                    data={expenses}
                    renderItem={(item) => (<View>
                        <Text>{item.item.title}</Text>
                        <Text>{item.item.amount}</Text>
                    </View>)}
                />
            </View>
            <View>
                <Text>Categories</Text>
                <FlatList
                    data={categories}
                    renderItem={(item) => (<View>
                        <Text>{item.item}</Text>
                    </View>)}
                />
            </View>
        </View>
    )
}

export default About;