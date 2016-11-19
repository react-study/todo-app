import React, { Component } from 'react';
import InputBox from '../components/InputBox';
import AccountBook from '../components/AccountBook';
import Tabs from '../components/Tabs';

import { connect } from 'react-redux';
import * as bankActions from '../actions/bankActions';
import * as tabActions from '../actions/tabActions';

const mapStateToProps = state => { // state to props
    return {
        accountList: state.bank.accountList,
        focused: state.tab.focused
    }
};

const mapDispatchToProps = dispatch => { // action to props
    return {
        save: money => dispatch(bankActions.save(money)),
        withdraw: money => dispatch(bankActions.withdraw(money)),
        changeTab: index => dispatch(tabActions.changeTab(index))
    }
};

class App extends Component {
    render() {
        const {
            accountList,
            save,
            withdraw,

            focused,
            changeTab
        } = this.props;

        return (
            <div>
                <Tabs focused={focused} changeTab={changeTab} />
                <InputBox
                    save={money => save(money)}
                    withdraw={money => withdraw(money)}
                />
                <AccountBook accountList={accountList} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
