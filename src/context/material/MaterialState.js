import React, { useReducer } from "react";
import MaterialContext from "./materialContext";
import materialReducer from "./materialReducer";
import axios from "axios";
import { formDataConfig } from "../../utils/axios";
import {
  GET_MATERIAL,
  UPLOAD_FILE,
  DELETE_FILE,
  FILE_ERROR,
  RESET_MATERIAL,
  CLEAR_SUCCESS,
  CLEAR_ERROR
} from "../types";

const MaterialState = props => {
  const initialState = {
    material: [],
    loading: true,
    error: null,
    success: null
  };

  const [state, dispatch] = useReducer(materialReducer, initialState);

  // GET MATERIAL
  const getMaterial = async code => {
    try {
      const res = await axios.get(`/api/room/${code}/files`);

      dispatch({ type: GET_MATERIAL, payload: res.data });
    } catch (err) {
      dispatch({ type: FILE_ERROR, payload: err.response.data });
    }
  };

  // UPLOAD FILE
  const uploadFile = async (code, formData) => {
    try {
      const res = await axios.post(
        `/api/room/${code}/upload`,
        formData,
        formDataConfig
      );

      dispatch({ type: UPLOAD_FILE, payload: res.data });
    } catch (err) {
      dispatch({ type: FILE_ERROR, payload: err.response.data.msg });
    }
  };

  // DOWNLOAD FILE
  const downloadFile = async (fileLink, fileName) => {
    try {
      // Download File From Backend
      const res = await axios.get(`/api/${fileLink}`, { responseType: "blob" });
      // Create URL and Downloaded File as Blob
      const downloadUrl = window.URL.createObjectURL(new Blob([res.data]));
      // Creating Anchor Tag Element
      const link = document.createElement("a");
      // Setting HREF attribute of Anchor Tag Element
      link.href = downloadUrl;
      link.setAttribute("download", fileName);
      // Adding Element To Body & Clicking It
      document.body.appendChild(link);
      link.click();
      // Cleanup
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (err) {
      dispatch({ type: FILE_ERROR, payload: err.response.data });
    }
  };

  // DELETE FILE
  const deleteFile = async (fileLink, fileId) => {
    try {
      await axios.delete(`/api/${fileLink}`);

      dispatch({ type: DELETE_FILE, payload: fileId });
    } catch (err) {
      dispatch({ type: FILE_ERROR, payload: err.response.data });
    }
  };

  // CLEAR SUCCESS
  const clearSuccess = async () => dispatch({ type: CLEAR_SUCCESS });

  // CLEAR ERROR
  const clearError = async () => dispatch({ type: CLEAR_ERROR });

  // RESET
  const resetMaterial = async () => dispatch({ type: RESET_MATERIAL });

  return (
    <MaterialContext.Provider
      value={{
        material: state.material,
        loading: state.loading,
        error: state.error,
        success: state.success,
        getMaterial,
        uploadFile,
        downloadFile,
        deleteFile,
        clearSuccess,
        clearError,
        resetMaterial
      }}
    >
      {props.children}
    </MaterialContext.Provider>
  );
};

export default MaterialState;
