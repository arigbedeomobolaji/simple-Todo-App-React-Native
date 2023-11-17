import { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Button,
	FlatList,
	Pressable,
} from "react-native";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
export default function App() {
	const [todos, setTodos] = useState([]);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	// Add Task to the Todo Array
	function handleAddTodo(newTodoTask) {
		setTodos((prevTodos) => [
			{ task: newTodoTask, id: Math.random().toString() },
			...prevTodos,
		]);
		setModalIsOpen(false);
	}

	// Remove Task from the Todo Array
	function handleRemoveTask(id) {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
	}

	function handleHideModal() {
		setModalIsOpen(false);
	}

	return (
		<View style={styles.Container}>
			<Pressable
				onPress={() => setModalIsOpen(true)}
				style={styles.AddTaskButton}
			>
				<Text style={styles.AddTaskText}>Add New Task</Text>
			</Pressable>
			{modalIsOpen && (
				<TodoInput
					onHandleAddTodo={handleAddTodo}
					onHideModal={handleHideModal}
				/>
			)}
			<View style={styles.TodoListContainer}>
				{todos.length > 0 && <Text style={styles.Heading}>Tasks</Text>}
				<FlatList
					data={todos}
					renderItem={(flatListObj) => (
						<TodoList
							item={flatListObj.item.task}
							onRemoveTask={handleRemoveTask}
							id={flatListObj.item.id}
						/>
					)}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		paddingVertical: 30,
		paddingTop: 50,
		backgroundColor: "#a598b9",
	},
	TodoListContainer: {
		flex: 30,
		padding: 8,
		borderRadius: 5,
	},
	Heading: {
		fontSize: 22,
		fontWeight: 600,
		color: "#38195c",
		paddingBottom: 8,
		marginBottom: 4,
	},
	AddTaskButton: {
		flex: 1,
		marginBottom: 10,
		paddingVertical: 10,
		marginHorizontal: "auto",
		borderRadius: 10,
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 10,
		backgroundColor: "#38195c",
	},
	AddTaskText: {
		color: "#fff",
		fontWeight: 700,
		fontSize: 20,
	},
});
