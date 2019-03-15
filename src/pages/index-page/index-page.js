import React, { Component } from 'react';
import { connect } from 'react-redux';

class IndexPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div>Index page</div>
                <div>{ this.props.value }</div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    value: state.value,
});

export default connect(mapStateToProps)(IndexPage);
