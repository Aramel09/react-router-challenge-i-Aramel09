import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import List from "../users/user-list";

export default function Home() {
  const items = useLoaderData();
  const itemsUsers = items.users;

  console.log("Sin corchetes", items);
  console.log("Con corchetes", { items });
  console.log("Con punto", items.users);

  return (
    <>
      <Suspense>
        <Await resolve={itemsUsers}>
          <List />
        </Await>
      </Suspense>
    </>
  );
}
