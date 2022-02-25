import { useEffect, useReducer } from "react";
import mediStore from "web3_config/medistore";

// Reducer State
const INITAL_REDUCER_STATE = {
  isLoading: true,
  documents: [],
};

// Reducer Actions
const ACTIONS = {
  TOGGLE_LOADING: "toggle_loading",
  LOAD_DOCUMENT: "load_document",
};

/**
 * Main Hook
 */
const usePatientDocumentScreenState = () => {
  //Reducer Functions
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.TOGGLE_LOADING:
        return {
          ...state,
          isLoading: action.payload,
        };
      case ACTIONS.LOAD_DOCUMENT:
        return {
          ...state,
          documents: action.payload,
        };

      default:
        return state;
    }
  };

  const fetchUserDocuments = async () => {
    dispatch({ type: ACTIONS.TOGGLE_LOADING, payload: true });

    const _allUsersDocuments = await mediStore.methods
      .getPatientDocuments()
      .call();

    dispatch({ type: ACTIONS.TOGGLE_LOADING, payload: false });
    dispatch({ type: ACTIONS.LOAD_DOCUMENT, payload: _allUsersDocuments });
  };

  // Use Effect
  useEffect(() => {
    fetchUserDocuments();
  }, []);

  // Setup Reducer
  const [state, dispatch] = useReducer(reducer, INITAL_REDUCER_STATE);

  // Return State
  return [state, dispatch];
};

export { usePatientDocumentScreenState, ACTIONS };
