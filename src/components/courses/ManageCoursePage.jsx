import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm.jsx';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if (this.props.course.id != nextProps.course.id) {
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }
    updateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({course});
    }
    saveCourse(event) {
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
        this.context.router.push('/courses');
    }

    render() {
        return (
            <CourseForm allAuthors={this.props.allAuthors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                course={this.state.course}
                errors={this.state.errors} />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    allAuthors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

ManageCoursePage.contextTypes = {
    router: PropTypes.object.isRequired
}
function getCourseById(courses, courseId) {
    return courses.find(c => c.id == courseId);
}
function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id; //from the path
    let course = {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
    };
    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }
    const authorsFormattedForDropDown = state.authors.map(a => {
        return {
            value: a.id,
            text: a.firstName + ' ' + a.lastName
        };
    });

    return {
        course,
        allAuthors: authorsFormattedForDropDown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);