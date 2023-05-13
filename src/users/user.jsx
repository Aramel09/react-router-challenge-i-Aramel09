export default function User({ users }) {
  return (
    <li className="font-medium">
      {users.name}
      <small className="block space-x-2 italic">
        <span>{users.tel}</span>
        <span>{users.img}</span>
        <span>{users.email}</span>
      </small>
    </li>
  );
}
