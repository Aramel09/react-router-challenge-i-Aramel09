import { Form } from "react-router-dom";

export default function AddContact() {
  return (
    <>
      <Form method="post">
        <div className="flex w-2/5 flex-col space-y-5">
          <input className="text-black" id="name" name="name" />
          <input className="text-black" id="email" name="email" />
          <input className="text-black" id="tel" name="tel" />
          <button type="submit" className="btn">
            Add
          </button>
        </div>
      </Form>
    </>
  );
}
