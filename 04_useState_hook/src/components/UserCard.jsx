const Card = ({ data }) => {
  return (
    <div className="card">
      <h3>User: {data.name}</h3>
      <p>Age: {data.age}</p>
      <p>Address: {data.address}</p>
    </div>
  );
};

export default Card;
