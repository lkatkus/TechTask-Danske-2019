import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

        actions.getValues();
    }

    render() {
        const {
            isFetching,
        } = this.props;

        return (
            <React.Fragment>
                { isFetching && (
                    <Loader />
                ) }
                <div className={ styles['container'] }>
                    <Button
                        onClick={ this.onClickGetValues }
                        label='Get values'
                        disabled={ isFetching }
                    />
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    value: state.value,
    isFetching: state.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(fubarActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
