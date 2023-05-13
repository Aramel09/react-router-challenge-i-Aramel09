import { defer } from "react-router-dom";
import apiServices from "../services/api";

export const information = () => {
  const users = apiServices.retrieveInfo();

  return defer({ users });
};
