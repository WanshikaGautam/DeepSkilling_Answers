interface GuestPageProps {
  onLogin: () => void;
}

function GuestPage({ onLogin }: GuestPageProps) {
  return (
    <div className="page">
      <h1>Guest Page</h1>

      <h2>Flight Details</h2>
      <p>Flight: AI202</p>
      <p>From: Delhi</p>
      <p>To: Mumbai</p>
      <p>Time: 10:00 AM</p>

      <button onClick={onLogin}>
        Login
      </button>
    </div>
  );
}

export default GuestPage;