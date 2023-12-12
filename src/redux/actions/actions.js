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
  return async () => {
    let body = {
      username: info.username,
      password: info.password,
    };
    try {
      const response = await axios.post(
        `http://localhost:3001/users/login`,
        body, {withCredentials: true}
      );
      alert(`logged in as ${info.username}!`);
      console.log(response);
      sessionStorage.setItem("jwtToken", response.data.token);
    } catch (e) {
      console.log(e);
      alert(e.response.data.message);
    }
  };
};

export const auth = () => {
  const body = {
    ssToken: sessionStorage.getItem("jwtToken"),
  };
  return async () => {
    try {
      const response = await axios.post(
        `http://localhost:3001/users/auth`,
        body
      );
      sessionStorage.setItem("jwtToken", response.token);
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
