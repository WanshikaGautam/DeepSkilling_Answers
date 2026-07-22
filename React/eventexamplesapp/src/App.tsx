import { useState } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return (
      <UserPage
        onLogout={() => setIsLoggedIn(false)}
      />
    );
  }

  return (
    <GuestPage
      onLogin={() => setIsLoggedIn(true)}
    />
  );
}

export default App;