import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

// OwnProps is a refrence to the props that about to UserHeader component, without it we are unable to access that props
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps)(UserHeader);
