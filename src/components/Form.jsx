import { useEffect, useState } from "react";
import { ImperialResult, MetricResult, Result } from "./Result";

export default function Form() {
  const [isMetric, setIsMetric] = useState(true);

  const [kg, setKg] = useState("");
  const [cm, setCm] = useState("");
  const [bmiMetric, setBmiMetric] = useState(0);

  const [feet, setFeet] = useState("");
  const [inch, setInch] = useState("");
  const [stone, setStone] = useState("");
  const [pound, setPound] = useState("");
  const [bmiImperial, setBmiImperial] = useState(0);

  useEffect(() => {
    setBmiMetric((kg / Math.pow(cm / 100, 2)).toFixed(1));
  }, [cm, kg]);

  useEffect(() => {
    const heightInInches = feet * 12 + +inch;
    const weightInPounds = stone * 14 + +pound;

    setBmiImperial(
      ((weightInPounds / Math.pow(heightInInches, 2)) * 703).toFixed(1)
    );
  }, [feet, inch, stone, pound]);

  return (
    <form
      className={
        !isNaN(bmiMetric) && cm && kg && isMetric
          ? "short-result"
          : isMetric
          ? "short"
          : "long"
      }
    >
      <h3>Enter your details below</h3>

      <div className="measure-system">
        <div className="metric">
          <input
            type="radio"
            name="measurment-system"
            id="metric"
            onChange={() => setIsMetric(true)}
          />
          <label htmlFor="metric">Metric</label>
        </div>

        <div className="imperial">
          <input
            type="radio"
            name="measurment-system"
            id="imperial"
            onChange={() => setIsMetric(false)}
          />
          <label htmlFor="imperial">Imperial</label>
        </div>
      </div>

      <div className={isMetric ? "HW-metric" : "HW-imperial"}>
        <div className="height">
          <span>Height</span>
          {isMetric ? (
            <input
              type="number"
              name="cm"
              id="cm"
              placeholder="0"
              onChange={(e) => setCm(e.target.value)}
              value={cm}
            />
          ) : (
            <>
              <div>
                <div className="ft">
                  <input
                    type="number"
                    name="height-ft"
                    id="ft"
                    placeholder="0"
                    value={feet}
                    onChange={(e) => setFeet(e.target.value)}
                  />
                </div>
                <div className="in">
                  <input
                    type="number"
                    name="height-in"
                    id="in"
                    placeholder="0"
                    value={inch}
                    onChange={(e) => setInch(e.target.value)}
                  />
                </div>
              </div>
            </>
          )}
        </div>

        <div className="weight">
          <span>Weight</span>
          {isMetric ? (
            <input
              type="number"
              name="kg"
              id="kg"
              placeholder="0"
              value={kg}
              onChange={(e) => setKg(e.target.value)}
            />
          ) : (
            <>
              <div>
                <div className="st">
                  <input
                    type="number"
                    name="weight-st"
                    id="st"
                    placeholder="0"
                    value={stone}
                    onChange={(e) => setStone(e.target.value)}
                  />
                </div>
                <div className="lbs">
                  <input
                    type="number"
                    name="weight-lbs"
                    id="lbs"
                    placeholder="0"
                    value={pound}
                    onChange={(e) => setPound(e.target.value)}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {isMetric && !isNaN(bmiMetric) && cm && kg ? (
        <MetricResult bmi={bmiMetric} height={cm} />
      ) : !isMetric && !isNaN(bmiImperial) && feet && inch && pound && stone ? (
        <ImperialResult bmi={bmiImperial} ft={feet} inch={inch} />
      ) : (
        <Result />
      )}
    </form>
  );
}
