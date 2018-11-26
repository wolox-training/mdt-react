const ActionCreators = {
  handleLogout() {
    return (dispatch, getState) => {
      dispatch({ type: 'LOG_OUT' });
      getState().login.isLogged = false;
    };
  }
};

export default ActionCreators;
