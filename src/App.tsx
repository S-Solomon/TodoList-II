import { shuffle } from 'lodash';
import React, {useState} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import FocusScreen from './screens/FocusScreen';
import ListScreen from './screens/ListScreen';
import { Task } from './types';
import { nanoid } from 'nanoid';
import useLocalStorage from './hooks/useLocalStorage';


function App() {
    const [tasks, setTasks] = useLocalStorage<Task[]>('tasks',[]);
    const [focusedTaskId, setFocusedTaskId] = useState<string | undefined>(
        undefined
        );

    const addTask = (task: Pick<Task, 'label'>) => {
        const id = nanoid();
        setTasks((tasks) => [
            ...tasks,
            { id, label: task.label, isComplete: false },
        ]);
        if (!focusedTaskId) setFocusedTaskId(id);
    }

    const updateTaskCompletion = (taskId: string, isComplete: boolean) => {
        setTasks((tasks) =>
            tasks.map((task) => {
                if (task.id === taskId)
                    return { ...task, isComplete: isComplete };
                return task;
            })
        );
    };

    const focusedTask = tasks.find((task) => task.id === focusedTaskId); 

    const shuffleFocusdTask = () => {
        setFocusedTaskId(
            shuffle(tasks.filter((task) => !task.isComplete))[0]?.id 
        )
    }


    const tasksApi = {
        tasks,
        setTasks,
        updateTaskCompletion,
        focusedTask,
        shuffleFocusdTask,
        addTask
    };

    return (
        <BrowserRouter>
            <nav>
                <NavLink exact to="/" activeStyle={{ fontWeight: 'bold' }}>
                    List
                </NavLink>{' '}
                -{' '}
                <NavLink to="/focus" activeStyle={{ fontWeight: 'bold' }}>
                    Focus
                </NavLink>
            </nav>
            <br />

            <Switch>
                <Route path="/" exact>
                    <ListScreen {...tasksApi} />
                </Route>
                <Route path="/focus">
                    <FocusScreen {...tasksApi} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
