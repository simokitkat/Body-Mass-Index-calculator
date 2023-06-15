/* eslint-disable react/prop-types */
import eating from "../assets/images/icon-eating.svg";
import excercise from "../assets/images/icon-exercise.svg";
import sleep from "../assets/images/icon-sleep.svg";

export default function Tips() {
  return (
    <section className="tips">
      <div className="container">
        <Tip
          source={eating}
          altT="eating"
          h="Healthy eating"
          p="Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
        />
        <Tip
          source={excercise}
          altT="excercise"
          h="Regular exercise"
          p="Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
        />

        <Tip
          source={sleep}
          altT="sleep"
          h="Adequate sleep"
          p="Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
        />
      </div>
    </section>
  );
}

function Tip({ source, altT, h, p }) {
  return (
    <div className={altT}>
      <img src={source} alt={altT} />
      <div className="text">
        <h3>{h}</h3>
        <p>{p}</p>
      </div>
    </div>
  );
}
