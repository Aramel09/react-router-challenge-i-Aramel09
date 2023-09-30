import { Link, useAsyncValue } from "react-router-dom";
import { groupContactsByLetterUsingLastNames } from "../utils";

export default function List() {
  const list = useAsyncValue();
  const listInAlfabeticalOrder = groupContactsByLetterUsingLastNames(list);

  const letters = Object.keys(listInAlfabeticalOrder);

  const nameOfProfiles = Object.values(listInAlfabeticalOrder);

  return (
    <>
      {letters.map((letter, index) => {
        return (
          <>
            <h1 key={index}>{letter} </h1>
            <ol>
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
