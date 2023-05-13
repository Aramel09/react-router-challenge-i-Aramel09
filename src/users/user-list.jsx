import { useAsyncValue } from "react-router-dom";
import User from "./user";

export default function Home() {
  const items = useAsyncValue();
  return (
    <>
      <ol className="list-decimal space-y-4">
        {items.map((users) => (
          <User key={users.id} users={name} />
        ))}
      </ol>
    </>
  );
}
