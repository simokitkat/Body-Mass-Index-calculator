/* eslint-disable react/prop-types */
import gender from "../assets/images/icon-gender.svg";
import age from "../assets/images/icon-age.svg";
import muscle from "../assets/images/icon-muscle.svg";
import pregnancy from "../assets/images/icon-pregnancy.svg";
import race from "../assets/images/icon-race.svg";
import curvedLineRight from "../assets/images/pattern-curved-line-right.svg";

export default function Limitations() {
  return (
    <section className="limitations">
      <div className="container">
        <div className="text">
          <h2>Limitations of BMI</h2>
          <p>
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <img
          src={curvedLineRight}
          alt="curved line right"
          className="right-curve"
        />
        <div className="flex">
          <Card
            source={gender}
            span="Gender"
            p="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
          />
          <Card
            source={age}
            span="Age"
            p="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
          />
          <Card
            source={muscle}
            span="Muscle"
            p="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
          />
          <Card
            source={pregnancy}
            span="Pregnancy"
            p="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
          />
          <Card
            source={race}
            span="Race"
            p="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
          />
        </div>
      </div>
    </section>
  );
}

function Card({ source, span, p }) {
  return (
    <div className={span.toLowerCase()}>
      <div className="top">
        <img src={source} alt={span} />
        <span>{span}</span>
      </div>
      <p>{p}</p>
    </div>
  );
}
