const players = [
  { name: "Virat Kohli", score: 85 },
  { name: "Rohit Sharma", score: 65 },
  { name: "KL Rahul", score: 72 },
  { name: "Shubman Gill", score: 90 },
  { name: "Hardik Pandya", score: 60 },
  { name: "Ravindra Jadeja", score: 75 },
  { name: "Jasprit Bumrah", score: 55 },
  { name: "Rishabh Pant", score: 80 },
  { name: "Suryakumar Yadav", score: 68 },
  { name: "Mohammed Shami", score: 45 },
  { name: "Yuzvendra Chahal", score: 50 }
];

function ListofPlayers() {
  const lowScorePlayers = players.filter(
    (player) => player.score < 70
  );

  return (
    <>
      <div className="section">
        <h2>List of Players</h2>

        {players.map((player) => (
          <div className="player" key={player.name}>
            <span>{player.name}</span>
            <span className="score">{player.score}</span>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Players with score below 70</h2>

        {lowScorePlayers.map((player) => (
          <div className="player" key={player.name}>
            <span>{player.name}</span>
            <span className="score">{player.score}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default ListofPlayers;