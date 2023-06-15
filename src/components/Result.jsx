/* eslint-disable react/prop-types */
export function Result() {
  return (
    <div className="result">
      <h3>Welcome!</h3>
      <p>Enter your height and weight and you’ll see your BMI result here</p>
    </div>
  );
}

export function MetricResult({ bmi, height }) {
  return (
    <div className="metric-result">
      <div className="left">
        <span>Your BMI is...</span>
        <h2>{bmi}</h2>
      </div>
      <div className="right">
        <p>
          Your BMI suggests you’re{" "}
          {bmi < 18.5
            ? "underweight"
            : bmi >= 18.5 && bmi <= 24.9
            ? "a healthy weight"
            : bmi >= 25 && bmi <= 29.9
            ? "overweight"
            : "obese"}
          . Your ideal weight is between{" "}
          <span className="ideal">
            {(18.5 * Math.pow(height / 100, 2)).toFixed(1)}kgs -{" "}
            {(24.9 * Math.pow(height / 100, 2)).toFixed(1)}kgs.
          </span>
        </p>
      </div>
    </div>
  );
}

export function ImperialResult({ bmi, ft, inch }) {
  const minStones = Math.trunc(
    ((18.5 / 703) * Math.pow(ft * 12 + +inch, 2)) / 14
  );

  const minPounds = Math.floor(
    ((18.5 / 703) * Math.pow(ft * 12 + +inch, 2)) % 14
  );

  const maxStones = Math.trunc(
    ((24.9 / 703) * Math.pow(ft * 12 + +inch, 2)) / 14
  );

  const maxPounds = Math.floor(
    ((24.9 / 703) * Math.pow(ft * 12 + +inch, 2)) % 14
  );

  return (
    <div className="imperial-result">
      <div className="left">
        <span>Your BMI is...</span>
        <h2>{bmi}</h2>
      </div>
      <div className="right">
        <p>
          Your BMI suggests you’re{" "}
          {bmi < 18.5
            ? "underweight"
            : bmi >= 18.5 && bmi <= 24.9
            ? "a healthy weight"
            : bmi >= 25 && bmi <= 29.9
            ? "overweight"
            : "obese"}
          . Your ideal weight is between{" "}
          <span className="ideal">
            {minStones}st {minPounds}lbs - {maxStones}st {maxPounds}lbs.
          </span>
        </p>
      </div>
    </div>
  );
}
