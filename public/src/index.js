import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import UserList from './components/Interest/UserList';
import InterestList from './components/Interest/InterestList';
import ChatRoom from './components/Chat/ChatRoom';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/users" component={UserList} />
            <Route path="/interests" component={InterestList} />
            <Route path="/chat" component={ChatRoom} />
        </Switch>
    </Router>,
    document.getElementById('root')
);
