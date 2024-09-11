import instance from "axios";
import Swal from "sweetalert2";

const axios = instance.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token) => {
  if (token) {
    console.log(token);
    //applying token
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    //deleting the token from header
    delete axios.defaults.headers.common["Authorization"];
  }
};

axios.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.token) {
      config.headers.Authorization = `Bearer ${user?.token}`;
      return config;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const signupUser = async (form) => {
  try {
    const res = await axios.post(`/signup`, form);
    return res;
  } catch (error) {
    Swal.fire({
      position: "top-left",
      icon: "error",
      title: "Oops...",
      text: `${
        error ? error.response?.data?.message : "Something went wrong!"
      }`,
    });
    console.log(error?.response?.data?.message);
  }
};

export const loginUser = async (user) => {
  try {
    const res = await axios.post(`/login`, user);
    return res;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  }
};

export const createQuiz = async (quiz) => {
  try {
    const res = await axios.post(`/create`, quiz);
    return res;
  } catch (error) {
    Swal.fire({
      title: `${error?.response?.data?.message}`,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }
};

export const profileChange = async (id, formData) => {
  try {
    return await axios.put(`/setting/profile/${id}`, formData);
  } catch (error) {
    Swal.fire({
      title: `${error?.response?.data?.message}`,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }
};

export const basicInfo = async (id, user) => {
  try {
    return await axios.put(`/setting/basicinfo/${id}`, user);
  } catch (error) {
    Swal.fire({
      title: `${error?.response?.data?.message}`,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }
};

export const passwordChange = async (id, user) => {
  try {
    return await axios.put(`/setting/password/${id}`, user);
  } catch (error) {
    Swal.fire({
      title: `${error?.response?.data?.message}`,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }
};

export const searchQuiz = async (query) => {
  query = query || "";
  try {
    return await axios.get(`/search?q=${query}`);
  } catch (error) {
    Swal.fire({
      title: `${error?.message}`,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }
};

export const PlayQuizById = async (id) => {
  try {
    return await axios.get(`/play/${id}`);
  } catch (error) {
    console.log(error.message);
  }
};

export const Mybanks = async (id, keyword, pageNumber) => {
  console.log(keyword, pageNumber);
  try {
    return await axios.get(
      `/bank/${id}?keyword=${keyword}&pageNumber=${pageNumber}`
    );
  } catch (error) {
    console.log(error?.message);
  }
};

export const deleteMyBanks = async (id, quizId) => {
  try {
    return await axios.delete(`/bank/${id}/${quizId}`);
  } catch (error) {
    console.log(error?.message);
  }
};

export const editQuizById = async (id) => {
  try {
    return await axios.get(`/create/${id}/edit`);
  } catch (error) {
    console.log(error.message);
  }
};

export const quizUpdate = async (id, values) => {
  try {
    return await axios.put(`/create/${id}/edit`, values);
  } catch (error) {
    console.log(error?.message);
  }
};

export const favQuiz = async (id, data) => {
  try {
    return await axios.post(`/play/${id}`, data);
  } catch (error) {
    console.log(error?.message);
  }
};

export const getAllFavQuiz = async (id) => {
  try {
    return await axios.get(`/favBank/${id}`);
  } catch (error) {
    console.log(error?.message);
  }
};

export const deleteFavQuiz = async (id, quizId) => {
  try {
    return await axios.delete(`/favBank/${id}/${quizId}`);
  } catch (error) {
    console.log(error?.message);
  }
};
