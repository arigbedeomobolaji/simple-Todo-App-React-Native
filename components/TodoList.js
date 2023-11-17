import { View, Text, StyleSheet, Pressable } from "react-native";

export default function TodoList({ item, onRemoveTask, id }) {
	// Once a User click
	function handleRemoveTask() {
		onRemoveTask(id);
	}
	return (
		<Pressable
			onPress={handleRemoveTask}
			android_ripple={true}
			style={({ pressed }) => pressed && styles.pressedStyle}
		>
			<View style={styles.Todo}>
				<Text style={styles.TodoText}>{item}</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	Todo: {
		backgroundColor: "#38195c",
		padding: 16,
		borderRadius: 10,
		marginBottom: 8,
	},
	TodoText: {
		color: "white",
	},
	pressedStyle: {
		opacity: 0.5,
	},
});
