import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul className="flex justify-evenly">
          <Link to={"/"}>
            <h1 className="py-4 text-2xl font-bold">Contacts</h1>
          </Link>
          <Link to={"/Add-Contact"}>
            <h1 className="btn m-3">Add contact</h1>
          </Link>
        </ul>
      </nav>
    </>
  );
}
