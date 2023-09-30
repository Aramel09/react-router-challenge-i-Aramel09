import { redirect } from "react-router-dom";
import apiService from "../api.service";

export const mutateUserProfile = async ({ request }) => {
  const fd = await request.formData();
  const profileSubmitted = Object.fromEntries(fd);

  console.log(request);
  console.log(profileSubmitted, "boton presionado");
  console.log(fd);

  switch (request.method) {
    case "POST":
      apiService.create(profileSubmitted);
      return redirect("/");
    case "PATCH":
      apiService.update(profileSubmitted.id, profileSubmitted);
      return redirect("/");
    case "DELETE":
      apiService.delete(profileSubmitted.id);
      return redirect("/");
  }

  return null;
};
