const T20players = ["Rohit", "Virat", "Hardik", "Surya"];
const RanjiTrophyPlayers = ["Rahul", "Shubman", "Jadeja", "Bumrah"];

function IndianPlayers() {
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  const [player1, player2, player3, player4] = allPlayers;

  return (
    <div>
      <h2>Indian Players</h2>

      <h3>Odd Team Players</h3>
      <p>{player1}</p>
      <p>{player3}</p>

      <h3>Even Team Players</h3>
      <p>{player2}</p>
      <p>{player4}</p>

      <h3>All Players</h3>
      {allPlayers.map((player) => (
        <p key={player}>{player}</p>
      ))}
    </div>
  );
}

export default IndianPlayers;