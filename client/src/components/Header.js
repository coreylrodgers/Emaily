import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Log in with Google</a>
          </li>
        );

      default:
        return [
          <li key="2">
            <Payments />
          </li>,
          <li style={{margin: '0 10px'}} key="1" >Credits: {this.props.auth.credits}</li>,
          <li key="3">
            <a href="/api/logout">Log Out</a>
          </li>,
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="col s12">
            <Link
              to={this.props.auth ? '/surveys' : '/'}
              className="left brand-logo"
              style={{ marginLeft: '12px' }}
            >
              Emaily
            </Link>
            <ul className="right">{this.renderContent()}</ul>
          </div>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
