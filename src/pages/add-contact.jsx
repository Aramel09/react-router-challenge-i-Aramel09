import { Form, useLocation } from "react-router-dom";

export default function AddContact() {
  let { state } = useLocation();
  console.log(state);

  return (
    <>
      <Form method={state ? "PATCH" : "POST"}>
        <div className="flex w-2/5 flex-col space-y-5">
          <input
            className="text-black"
            id="name"
            name="name"
            defaultValue={state ? state.users.name : ""}
          />
          <input
            className="text-black"
            id="email"
            name="email"
            defaultValue={state ? state.users.email : ""}
          />
          <input
            className="text-black"
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
