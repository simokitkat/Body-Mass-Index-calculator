import man from "../assets/images/image-man-eating.webp";
import curvedLineLeft from "../assets/images/pattern-curved-line-left.svg";

export default function Meaning() {
  return (
    <section className="meaning">
      <div className="container">
        <img
          src={curvedLineLeft}
          alt="curved line left"
          className="curved-left"
        />
        <img src={man} alt="man eating" className="flex-img" />
        <div className="text">
          <h2>What your BMI result means</h2>
          <p>
            A BMI range of 18.5 to 24.9 is considered a &#39;healthy
            weight.&#39; Maintaining a healthy weight may lower your chances of
            experiencing health issues later on, such as obesity and type 2
            diabetes. Aim for a nutritious diet with reduced fat and sugar
            content, incorporating ample fruits and vegetables. Additionally,
            strive for regular physical activity, ideally about 30 minutes daily
            for five days a week.
          </p>
        </div>
      </div>
    </section>
  );
}
