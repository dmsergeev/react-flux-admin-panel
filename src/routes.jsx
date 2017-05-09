import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import HomePage from './components/home/HomePage.jsx';
import AboutPage from './components/about/AboutPage.jsx';
import CoursesPage from './components/courses/CoursesPage.jsx';
import ManageCoursePage from './components/courses/ManageCoursePage.jsx';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="course/:id" component={ManageCoursePage} />
        <Route path="course" component={ManageCoursePage}/>
    </Route>
) 