import { Link, useAsyncValue, useSubmit } from "react-router-dom";

export default function UserProfile() {
  const users = useAsyncValue();
  console.log(users);

  const submit = useSubmit();

  return (
    <>
      <img src={users.img} alt="persons face"></img>
      <li className="font-medium">
        {users.name}
        <small className="block space-x-2 italic">
          <span>{users.id}</span>
          <span>{users.email}</span>
          <span>{users.tel}</span>
        </small>
      </li>
      <Link to={"/"} className="btn">
        Back
      </Link>
      <Link to={"/Add-Contact"} className="btn" state={{ users }}>
        Edit
      </Link>
      <button
        className="btn"
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
    </>
  );
}
