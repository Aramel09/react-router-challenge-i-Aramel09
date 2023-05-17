import { defer } from "react-router-dom";
import apiService from "../api.service";

export const information = ({ params }) => {
  const { id } = params;

  console.log(id);

  const users = id ? apiService.show(id) : apiService.index();
  return defer({ users });
};
