import ky from "ky";

export default {
  retrieveInfo() {
    return ky.get("http://localhost:3001/users").json();
  },
};
