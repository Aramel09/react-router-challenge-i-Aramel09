import { useState } from "react";
import { Link, useAsyncValue } from "react-router-dom";
import { groupContactsByLetterUsingLastNames } from "../utils";

export default function List() {
  const list = useAsyncValue();
  const [informationAfterSearch, setInformationAfterSearch] = useState("");

  const listInAlfabeticalOrder = groupContactsByLetterUsingLastNames(
    list.filter((names) => {
      return names.name.toLowerCase().includes(informationAfterSearch);
    })
  );

  const letters = Object.keys(listInAlfabeticalOrder);
  const nameOfProfiles = Object.values(listInAlfabeticalOrder);

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="mb-3 ml-20 mt-3 w-80 text-black"
        onChange={(event) => {
          setInformationAfterSearch(event.target.value);
        }}
      ></input>
      {letters.map((letter, index) => {
        return (
          <>
            <h1 key={index} className="my-3 ml-20">
              {letter}{" "}
            </h1>
            <ol className="ml-20">
              {nameOfProfiles[index].map((users) => {
                return (
                  <li key={users.id}>
                    <Link to={`/userProfile/${users.id}`}>{users.name}</Link>
                  </li>
                );
              })}
            </ol>
          </>
        );
      })}
    </>
  );
}
