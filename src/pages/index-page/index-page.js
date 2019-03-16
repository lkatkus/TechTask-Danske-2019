import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Api from 'api/api';
import fubarActions from 'redux/actions';
import Button from 'components/button/button';
import Loader from 'components/loader/loader';

import styles from './index-page.scss';

class IndexPage extends Component {
    constructor(props) {
        super(props);

        this.onClickGetValues = this.onClickGetValues.bind(this);
    }

    onClickGetValues() {
        const {
            actions,
        } = this.props;

        actions.beforeSetValue();
    }

    render() {
        const {
            submitting,
        } = this.props;

        return (
            <React.Fragment>
                { submitting && (
                    <Loader />
                ) }
                <div className={ styles['container'] }>
                    <Button
                        onClick={ this.onClickGetValues }
                        label='Get values'
                        disabled={ submitting }
                    />
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    value: state.value,
    submitting: state.submitting,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(fubarActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
