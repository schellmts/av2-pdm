import { StyleSheet, Text, TextInput, TouchableOpacity, View, CheckBox } from 'react-native';
import { useState } from 'react';
import TaskButton from '@/components/TaskButton';

interface Task {
    taskName: string;
    isCompleted: boolean;
}

export default function HomeScreen() {
    const [task, setTask] = useState<string>('');
    const [tasks, setTasks] = useState<Task[]>([]);
    const [checked, setChecked] = useState<boolean>(false);

    const addTask = () => {
        if (task) {
            setTasks([...tasks, { taskName: task, isCompleted: false }]);
            setTask('');
        }
    };

    const toggleTaskCompletion = (index: number) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;
        setTasks(updatedTasks);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Checklist de Tarefas</Text>

            <TextInput
                style={styles.field}
                placeholder="Digite uma tarefa"
                value={task}
                onChangeText={setTask}
                placeholderTextColor="#888"
            />

            <TaskButton title={'Adicionar Tarefa'} onPress={addTask} />

            <View style={styles.taskList}>
                {tasks.map((taskItem, index) => (
                    <View key={index} style={styles.taskItem}>
                        <CheckBox
                            value={taskItem.isCompleted}
                            onValueChange={() => toggleTaskCompletion(index)}
                        />
                        <Text style={[styles.taskText, taskItem.isCompleted && styles.completedText]}>
                            {taskItem.taskName}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: '#1a1a1a',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
        textAlign: 'center',
    },
    field: {
        width: '100%',
        height: 50,
        borderColor: '#444',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
        paddingLeft: 15,
        fontSize: 16,
        backgroundColor: '#333',
        color: '#fff',
    },
    taskList: {
        width: '100%',
        marginTop: 30,
        paddingHorizontal: 20,
    },
    taskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    taskText: {
        fontSize: 18,
        color: '#fff',
        marginLeft: 10,
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: '#888',
    },
});
