import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Loading from "../components/loading";
import UserProfile from "../users/user-profile";

export default function Profile() {
  const { users } = useLoaderData();

  console.log(users);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Await resolve={users}>
          <UserProfile />
        </Await>
      </Suspense>
    </>
  );
}
