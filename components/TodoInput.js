import {
	View,
	TextInput,
	Button,
	StyleSheet,
	Modal,
	Image,
} from "react-native";
import { useState } from "react";
export default function TodoInput({ onHandleAddTodo, onHideModal }) {
	const [newTodoTask, setNewTodoTask] = useState("");

	function handleTextInputChange(enteredText) {
		setNewTodoTask(enteredText);
	}

	function handleAddTodo() {
		if (!newTodoTask) return;
		onHandleAddTodo(newTodoTask);
		setNewTodoTask("");
	}
	function handleHideModal() {
		onHideModal();
	}

	return (
		<Modal
			animationType="slide"
			transparent={true}
			onRequestClose={() => {
				Alert.alert("Modal has been closed.");
			}}
		>
			<View style={styles.TextInputContainer}>
				<Image
					style={styles.tinyLogo}
					source={require("../assets/todo.jpeg")}
				/>
				<TextInput
					style={styles.TextInput}
					onChangeText={handleTextInputChange}
					value={newTodoTask}
				/>
				<View style={styles.ButtonsContainer}>
					<Button
						title="Cancel"
						color="#cf0909"
						onPress={handleHideModal}
					/>
					<Button
						title="Add Todo"
						color="#290f46"
						onPress={handleAddTodo}
					/>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	TextInputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#aba2b6",
		color: "#fff",
	},
	TextInput: {
		width: "90%",
		borderWidth: 2,
		borderColor: "#38195c",
		color: "#fff",
		padding: 8,
		paddingVertical: 16,
		borderRadius: 10,
	},
	ButtonsContainer: {
		flexDirection: "row",
		marginTop: 16,
		width: "80%",
		justifyContent: "space-around",
	},
	tinyLogo: {
		width: 100,
		height: 100,
		objectFit: "contain",
		borderRadius: 100,
	},
});
