import React, { useState} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import FocusScreen from './screens/FocusScreen';
import ListScreen from './screens/ListScreen';
import { Task } from './types';

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const taskProps = {tasks, setTasks}



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
                    <ListScreen {...taskProps} />
                </Route>
                <Route path="/focus">
                    <FocusScreen {...taskProps} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
