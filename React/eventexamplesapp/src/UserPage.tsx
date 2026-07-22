interface UserPageProps {
  onLogout: () => void;
}

function UserPage({ onLogout }: UserPageProps) {
  const handleBooking = () => {
    alert("Ticket booked successfully!");
  };

  return (
    <div className="page">
      <h1>User Page</h1>

      <h2>Flight Details</h2>
      <p>Flight: AI202</p>
      <p>From: Delhi</p>
      <p>To: Mumbai</p>
      <p>Time: 10:00 AM</p>

      <button onClick={handleBooking}>
        Book Ticket
      </button>

      <button onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default UserPage;