import logo from "../assets/images/logo.svg";
import Form from "./Form";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <img src={logo} alt="app logo" className="logo" />
        <h1>
          Body Mass
          <br />
          Index Calculator
        </h1>
        <p>
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
        <Form />
      </div>
    </section>
  );
}
