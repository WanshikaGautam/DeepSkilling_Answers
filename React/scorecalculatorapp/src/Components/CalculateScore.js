import { useState } from "react";
import "../Stylesheets/mystyle.css";

function CalculateScore({ name, school }) {
  const [total, setTotal] = useState("");
  const [goal, setGoal] = useState("");
  const [average, setAverage] = useState(null);

  function calculateAverage() {
    if (total && goal) {
      const result = Number(total) / Number(goal);
      setAverage(result);
    }
  }

  return (
    <main className="page-container">
      <section className="score-card">

        <div className="card-header">
          <p className="portal-label">STUDENT MANAGEMENT PORTAL</p>
          <h1>Score Calculator</h1>
          <p className="description">
            Enter the required score details to calculate the student's average.
          </p>
        </div>

        <div className="student-details">
          <div>
            <span className="detail-label">Student Name</span>
            <p>{name}</p>
          </div>

          <div>
            <span className="detail-label">School</span>
            <p>{school}</p>
          </div>
        </div>

        <div className="input-section">
          <div className="input-group">
            <label>Total Score</label>
            <input
              type="number"
              value={total}
              onChange={(event) => setTotal(event.target.value)}
              placeholder="Enter total score"
            />
          </div>

          <div className="input-group">
            <label>Goal</label>
            <input
              type="number"
              value={goal}
              onChange={(event) => setGoal(event.target.value)}
              placeholder="Enter goal"
            />
          </div>
        </div>

        <button onClick={calculateAverage}>
          Calculate Average
        </button>

        {average !== null && (
          <div className="result-section">
            <span>CALCULATED AVERAGE</span>
            <strong>{average.toFixed(2)}</strong>
          </div>
        )}

      </section>
    </main>
  );
}

export default CalculateScore;