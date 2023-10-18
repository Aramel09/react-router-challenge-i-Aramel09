import { Form, useLocation } from "react-router-dom";

export default function AddContact() {
  let { state } = useLocation();
  console.log(state);

  return (
    <>
      <Form
        className="flex flex-col items-center"
        method={state ? "PATCH" : "POST"}
      >
        <div className="mt-5 flex flex-col items-center space-y-5">
          <input
            className=" w-60 rounded-xl p-2 text-black"
            placeholder="Name"
            id="name"
            name="name"
            defaultValue={state ? state.users.name : ""}
          />
          <input
            className="w-60 rounded-xl p-2 text-black"
            placeholder="Email"
            id="email"
            name="email"
            defaultValue={state ? state.users.email : ""}
          />
          <input
            className="w-60 rounded-xl p-2 text-black"
            placeholder="Tel."
            id="tel"
            name="tel"
            defaultValue={state ? state.users.tel : ""}
          />
          <input type="hidden" name="id" value={state ? state.users.id : ""} />

          <button type="submit" className="btn">
            {state ? "Edit" : "Add"}
          </button>
        </div>
      </Form>
    </>
  );
}
