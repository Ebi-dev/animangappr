const initialState = {
  searchResults: [],
  currentSeason: [],
  nextSeason: [],
  selectedAnimanga: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCHANIMEBYTITLE": {
      return {
        ...state,
        searchResults: action.payload,
      };
    }

    case "GETCURRENTSEASON": {
      return {
        ...state,
        currentSeason: action.payload,
      };
    }

    case "GETNEXTSEASON": {
      return {
        ...state,
        nextSeason: action.payload,
      };
    }

    case "GETBYID": {
      return {
        ...state,
        selectedAnimanga: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
