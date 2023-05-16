import { useAsyncValue } from "react-router-dom";

export default function List() {
  const list = useAsyncValue();

  return (
    <>
      <ol className="list-decimal space-y-4">
        {list.map((users) => (
          <li key={users.id}>{users.name}</li>
        ))}
      </ol>
    </>
  );
}
