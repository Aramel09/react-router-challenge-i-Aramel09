import { Link, useAsyncValue, useSubmit } from "react-router-dom";

export default function UserProfile() {
  const users = useAsyncValue();
  console.log(users);

  const submit = useSubmit();

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="my-2">
          <img src={users.img} alt="persons face"></img>
        </div>
        <div className="my-2 ">
          <li className="list-none text-center font-medium">
            {users.name}
            <small className="my-1 flex flex-col justify-center space-x-2 italic">
              <span className="text-gray-500">{users.email}</span>
              <span className=" text-gray-500">{users.tel}</span>
            </small>
          </li>
        </div>
        <Link to={"/"} className="btn my-2">
          Back
        </Link>
        <Link to={"/Add-Contact"} className="btn my-2" state={{ users }}>
          Edit
        </Link>
        <button
          className="btn my-2 bg-red-600"
          onClick={() => {
            submit(
              {
                id: users.id,
              },
              {
                method: "DELETE",
              }
            );
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
}
