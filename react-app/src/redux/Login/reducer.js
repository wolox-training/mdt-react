const initialState = {
  email: null,
  password: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_USER':
      return { ...state, token: action.payload.token };
    default:
      return state;
  }
}
