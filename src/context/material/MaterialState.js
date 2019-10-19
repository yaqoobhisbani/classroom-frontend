import React, { useReducer } from "react";
import MaterialContext from "./materialContext";
import materialReducer from "./materialReducer";
import axios from "axios";
import {
  GET_MATERIAL,
  DOWNLOAD_FILE,
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
      const res = await axios.get(`/api/${fileLink}`, { responseType: "blob" });
      const downloadUrl = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.log(err.response);
    }
  };

  // DELETE FILE
  const deleteFile = async () => {};

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
