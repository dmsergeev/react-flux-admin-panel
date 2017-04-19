import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList.jsx';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { courses } = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses} />
            </div>
        )
    };
};
CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);