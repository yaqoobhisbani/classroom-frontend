import React, { useReducer } from "react";
import MaterialContext from "./materialContext";
import materialReducer from "./materialReducer";
import axios from "axios";
import {
  GET_MATERIAL,
  UPLOAD_FILE,
  DELETE_FILE,
  FILE_ERROR,
  RESET_MATERIAL
} from "../types";

const MaterialState = props => {
  const initialState = {
    material: [],
    loading: true,
    error: null
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
  const uploadFile = async () => {};

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

  // RESET
  const resetMaterial = async () => dispatch({ type: RESET_MATERIAL });

  return (
    <MaterialContext.Provider
      value={{
        material: state.material,
        loading: state.loading,
        getMaterial,
        uploadFile,
        downloadFile,
        deleteFile,
        resetMaterial
      }}
    >
      {props.children}
    </MaterialContext.Provider>
  );
};

export default MaterialState;
