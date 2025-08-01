function UserProfile({ name, age, bio }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue' }}>
        <span style={{ border: '1px solid blue', padding: '10px', color: 'blue' }}>
          {name}
        </span>
      </h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{age}</span></p>
      <p>Bio: {bio}</p>
    </div>
  );
}

export default UserProfile;
