import BookService from '../../services/BookService';

export const actions = {
  GET_BOOKS: 'GET_BOOKS',
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: 'GET_BOOKS_FAILURE'
};

const actionCreators = {
  getBooks: () => async dispatch => {
    dispatch({ type: actions.GET_BOOKS });
    const response = await BookService.getBooks();
    if (response.ok) {
      dispatch({
        type: actions.GET_BOOKS_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: actions.GET_BOOKS_FAILURE,
        payload: response.problem
      });
    }
  }
};

export default actionCreators;
