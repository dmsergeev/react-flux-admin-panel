import React, { PropTypes } from 'react';

class App extends React.Component {
    rennder() {
        return (
            <div className="container-fluid">
                <p>Header goes here</p>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;