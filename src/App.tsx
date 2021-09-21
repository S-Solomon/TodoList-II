import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import FocusScreen from './screens/FocusScreen';
import ListScreen from './screens/ListScreen';
import { Task } from './types';

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const updateTaskCompletion = (taskId: string, isComplete: boolean) => {
        setTasks((tasks) =>
            tasks.map((task) => {
                if (task.id === taskId)
                    return { ...task, isComplete: isComplete };
                return task;
            })
        );
    };

    const tasksApi = {
        tasks,
        setTasks,
        updateTaskCompletion,
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
