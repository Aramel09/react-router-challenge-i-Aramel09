import { defer } from "react-router-dom";
// import apiServices from "../services/api";
import apiService from "../api.service";

export const information = () => {
  //   const users = apiServices.retrieveInfo();

  //   return defer({ users });

  const users = apiService.index();
  console.log({ users });
  return defer({ users });
};
