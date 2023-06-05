function Users() {
  const { isLoading, error, data } = useQuery('users', () =>
    fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
      res.json()
    )
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
