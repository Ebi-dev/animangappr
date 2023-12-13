import axios from "axios";
import Cookies from "universal-cookie";

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
      const response = await axios.post(
        `http://localhost:3001/users/login`,
        body,
        { withCredentials: true }
      );
      console.log(response);
      sessionStorage.setItem("jwtToken", response.data.token);
      if (response.data.user) {
        dispatch({
          type: "SET_CURRENT_USER",
          payload: { info: response.data.user}
        })
      }
      return response.data.token;
    } catch (e) {
      console.log(e);
      return false;
    }
  };
};

export const auth = () => {
  const body = {
    ssToken: sessionStorage.getItem("jwtToken"),
  };
  return async () => {
    try {
      if (!body.ssToken) {
        return false;
      } else {
        const response = await axios.post(
          `http://localhost:3001/users/auth`,
          body
        );
        console.log(response);
        if (response.data.token) {
          sessionStorage.setItem("jwtToken", response.data.token);
          return response.data.user;
        } else {
          return false;
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const register = (info) => {
  return async () => {
    let body = {
      username: info.username,
      password: info.password,
    };
    try {
      const response = await axios.post(`http://localhost:3001/users`, body);
      alert("Usuario creado correctamente");
    } catch (e) {
      console.log(e);
    }
  };
};
