const offices = [
  {
    name: "DBS",
    rent: 50000,
    address: "Chennai"
  },
  {
    name: "WeWork",
    rent: 65000,
    address: "Bangalore"
  },
  {
    name: "Regus",
    rent: 75000,
    address: "Mumbai"
  }
];

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Office Space Rental</h1>

      {offices.map((office) => (
        <div
          key={office.name}
          style={{
            marginBottom: "20px",
            borderBottom: "1px solid gray",
            paddingBottom: "15px"
          }}
        >
          <h2>{office.name}</h2>

          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
            alt="Office Space"
            width="300"
          />

          <p
            style={{
              color: office.rent < 60000 ? "red" : "green"
            }}
          >
            Rent: ₹{office.rent}
          </p>

          <p>Address: {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;