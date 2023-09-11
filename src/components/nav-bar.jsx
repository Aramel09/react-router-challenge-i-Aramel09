import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="border-b-2">
        <ul className="divide-y bg-slate-700 px-4 sm:flex sm:gap-x-16 sm:divide-y-0 [&>*]:py-4">
          <Link to={"/"}>
            <h1 className="py-4 text-2xl font-bold">Contacts</h1>
          </Link>
          <Link to={"/Add-Contact"}>
            <h1>Add contact</h1>
          </Link>
        </ul>
      </nav>
    </>
  );
}
