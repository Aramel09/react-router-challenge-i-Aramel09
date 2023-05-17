import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Loading from "../components/loading";
import List from "../users/user-list";

export default function Home() {
  const { users } = useLoaderData();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Await resolve={users}>
          <List />
        </Await>
      </Suspense>
    </>
  );
}
