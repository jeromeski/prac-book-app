const initState = null;

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {...state, ...action.payload} ;
    }
    default: {
      return state;
    }
  }
};
