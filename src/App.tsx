import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListScreen from './screens/ListScreen';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <ListScreen />
                </Route>
                <Route path="/focus">Focus view</Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
