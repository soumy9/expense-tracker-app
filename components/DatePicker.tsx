import RNDateTimePicker, { DateTimePickerAndroid, DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Button, View, Text, Pressable, Platform } from "react-native";

export default function DatePicker() {
    const [date, setDate] = useState<Date>(new Date());
    const [mode, setMode] = useState<'date' | 'time'>('date');
    const [show, setShow] = useState(false);

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        const currentDate = selectedDate || new Date();
        if (Platform.OS !== "android") setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode: 'date' | 'time') => {
        if (Platform.OS === 'android') {
            DateTimePickerAndroid.open({
                value: date,
                onChange,
                mode: currentMode,
                is24Hour: true,
                maximumDate: new Date()
            });
        } else {
            setShow(true);
            setMode(currentMode);
        }
    };

    const showDatepicker = () => {
        showMode('date');
    };

    // const showTimepicker = () => {
    //     showMode('time');
    // };

    return (
        <View>
            <Pressable onPress={showDatepicker}>
                <Text>Show date picker!</Text>
            </Pressable>
            {/* <Button onPress={showTimepicker} title="Show time picker!" /> */}
            <Text>selected: {date.toLocaleString()}</Text>
            {show && Platform.OS !== 'android' && (
                <RNDateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                    maximumDate={new Date()}
                />
            )}
        </View>
    );
};
