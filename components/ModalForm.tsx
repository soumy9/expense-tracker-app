import { PropsWithChildren } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type ModalFormProps = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
    title: string;
}>

function ModalForm({ title, isVisible, onClose, children }: ModalFormProps) {
    return (<View>
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Pressable onPress={onClose}>
                        <Text style={styles.titleText}>Close</Text>
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    </View >)
}

export default ModalForm;


const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: '#25292e',
        height: '50%',
        width: '100%',
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        padding: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleText: {
        color: '#fff'
    }
});