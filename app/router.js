import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';

// Pages - Index
import Home from './components/home';

// Pages - Student
import StudentIndexContainer from './components/containers/student-index-container';
import StudentCreateContainer from './components/containers/student-create-container';
import StudentshowContainer from './components/containers/student-show-container';
import StudentEditContainer from './components/containers/student-edit-container';


export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>

            <Route path="/">
                <IndexRoute component={StudentIndexContainer} title="Liste de mes élèves" />
                <Route path="ajouter" component={StudentCreateContainer} title="Ajouter un élève" />
                <Route path=":studentId" component={StudentshowContainer} />
                <Route path=":studentId/edit" component={StudentEditContainer} />
            </Route>

        </Route>
    </Router>
);
