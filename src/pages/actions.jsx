import apiService from "../api.service";

export const mutateUserProfile = async ({ request }) => {
  const fd = await request.formData();
  const fdJustTryingSomething = Object.fromEntries(fd);

  console.log(request);
  console.log(fdJustTryingSomething, "boton presionado");
  console.log(fd);

  apiService.create(fdJustTryingSomething);

  return null;
};
