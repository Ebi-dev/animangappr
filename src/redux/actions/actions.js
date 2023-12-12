import axios from "axios";

export const searchAnime = (title) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/jikan/anime`, {
        params: {
          title: title,
        },
      });
      if (response?.data) {
        dispatch({
          type: "SEARCHANIMEBYTITLE",
          payload: { info: response.data },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSeason = (season) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/jikan/${season}`);
      if (response?.data && season === "now") {
        dispatch({
          type: "GETCURRENTSEASON",
          payload: { info: response.data },
        });
      } else if (response?.data && season === "upcoming") {
        dispatch({
          type: "GETNEXTSEASON",
          payload: { info: response.data },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/jikan/id?id=${id}`
      );
      if (response?.data) {
        dispatch({
          type: "GETBYID",
          payload: { info: response.data },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const login = (info) => {
  return async (dispatch) => {
    let body = {
      username: info.username,
      password: info.password,
    };
    try {
      const response = await axios.post(`http://localhost:3001/login`, body);
      if (response !== "Usuario y/o contraseña incorrectos") {
        alert(`logged in as ${info.username}!`);
      } else {
        alert("Usuario y/o contraseña incorrectos");
      }
    } catch (e) {
      console.log(e);
    }
  };
};
