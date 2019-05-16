import React, { Component } from "react";

const initialState = { currentUser: null };
const AccountContext = React.createContext(initialState)

export const AccountConsumer = AccountContext.Consumer

class AccountProvider extends Component {

  state = {
    username: "",
    email: "",
    setCurrentUser: userData => this.setCurrentUser(userData)
  }

  setCurrentUser = value => {
    this.setState(prevState => ({
      ...prevState,
      ...value
    }))
  }

  render () {
    return (
      // value prop is where we define what values 
      // that are accessible to consumer components
       <AccountContext.Provider value={this.state}>
        {this.props.children}
      </AccountContext.Provider>
    )
  }

}

export default AccountProvider