import { server } from "../store";
import axios from "axios";

export const createCourse = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "createCourseRequest" });
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
      withCredentials: true,
    };
    const { data } = await axios.post(`${server}/createblog`, formData, config);

    dispatch({ type: "createCourseSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "createCourseFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteCourse = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteCourseRequest" });
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.delete(`${server}/blog/${id}`, config);

    dispatch({ type: "deleteCourseSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteCourseFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllUsersRequest" });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(`${server}/admin/users`, config);

    dispatch({ type: "getAllUsersSuccess", payload: data.users });
  } catch (error) {
    dispatch({
      type: "getAllUsersFail",
      payload: error.response.data.message,
    });
  }
};

export const updateUserRole = (id) => async (dispatch) => {
  try {
    dispatch({ type: "updateUserRoleRequest" });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.put(`${server}/admin/users/${id}`, {}, config);

    dispatch({ type: "updateUserRoleSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateUserRoleFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteUsersRequest" });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.delete(`${server}/admin/users/${id}`, config);

    dispatch({ type: "deleteUsersSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteUsersFail",
      payload: error.response.data.message,
    });
  }
};
