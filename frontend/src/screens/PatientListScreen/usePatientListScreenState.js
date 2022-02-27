import { useEffect, useReducer } from "react";
import web3 from "web3_config/web3";
import mediStore from "web3_config/medistore";

// Reducer State
const INITAL_REDUCER_STATE = {
  isLoading: true,
  users: [],
};

// Reducer Actions
const ACTIONS = {
  TOGGLE_LOADING: "toggle_loading",
  LOAD_USERS: "load_USERS",
};

/**
 * Main Hook
 */
const usePatientListScreenState = () => {
  //Reducer Functions
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.TOGGLE_LOADING:
        return {
          ...state,
          isLoading: action.payload,
        };
      case ACTIONS.LOAD_USERS:
        return {
          ...state,
          users: action.payload,
        };

      default:
        return state;
    }
  };

  const fetchUsers = async () => {
    dispatch({ type: ACTIONS.TOGGLE_LOADING, payload: true });

    // Get User Accounts
    const _accounts = await web3.eth.getAccounts();

    const _allUsers = await mediStore.methods
      .getUsersOfParticularDoctor(_accounts[0])
      .call({ from: _accounts[0] });

    dispatch({ type: ACTIONS.TOGGLE_LOADING, payload: false });
    dispatch({ type: ACTIONS.LOAD_USERS, payload: _allUsers });
  };

  // Use Effect
  useEffect(() => {
    fetchUsers();
  }, []);

  // Setup Reducer
  const [state, dispatch] = useReducer(reducer, INITAL_REDUCER_STATE);

  // Return State
  return [state, dispatch];
};

export { usePatientListScreenState, ACTIONS };
