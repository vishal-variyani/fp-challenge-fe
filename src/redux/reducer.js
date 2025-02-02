const initialState = {
  searchHistory: JSON.parse(localStorage.getItem("searchHistory")) || [],
  user: null,
};

// actions
const actions = {
  UPDATE_SEARCH_HISTORY: "UPDATE_SEARCH_HISTORY",
  CLEAR_SEARCH_HISTORY: "CLEAR_SEARCH_HISTORY",
  SET_USER: "SET_USER",
};

// reducer funtion
function searchReducer(state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_SEARCH_HISTORY:
      const duplicateSearchResult = state.searchHistory.find(
        (history) => history.user.id === action.payload?.user?.id
      );
      if (duplicateSearchResult) {
        return { ...state, searchHistory: state.searchHistory };
      }
      const updatedHistory = [action.payload, ...state.searchHistory];
      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
      return { ...state, searchHistory: updatedHistory };
    case actions.CLEAR_SEARCH_HISTORY:
      localStorage.setItem("searchHistory", JSON.stringify([]));
      return { ...state, searchHistory: [] };
    case actions.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

// action creators
export const updateSearchHistory = (data) => {
  return { type: actions.UPDATE_SEARCH_HISTORY, payload: data };
};

export const clearSearchHistory = () => {
  return { type: actions.CLEAR_SEARCH_HISTORY };
};

export const setUser = (data) => {
  return { type: actions.SET_USER, payload: data };
};

export default searchReducer;
