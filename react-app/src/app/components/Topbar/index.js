import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ActionCreators from '../../../redux/Login/actions';

import './styles.css';

class Topbar extends Component {
  handleLogout = () => this.props.handleLogout();

  render() {
    return (
      <header className="topbar">
        <div className="user">
          <h1 className="topbar-text">Tic tac toe</h1>
          <Link to="/empty">
            <button className="btn"> Empty page </button>
          </Link>
        </div>
        <div className="user">
          <h2>{this.props.email}</h2>
          <div className="tooltip">
            <i role="presentation" className="material-icons md-36" onClick={this.handleLogout}>
              exit_to_app
            </i>
            <span className="tooltiptext">Log out</span>
          </div>
        </div>
      </header>
    );
  }
}

Topbar.propTypes = {
  email: PropTypes.string,
  handleLogout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(ActionCreators.handleLogout())
});

export default connect(
  null,
  mapDispatchToProps
)(Topbar);
