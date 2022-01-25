import React from "react";
import "./Plan.css"
import ScrollAnimation from "react-animate-on-scroll";
const planContents = [
  {
    header: "Basic",
    price: 0,
    features: [
      "Social media post",
      "Event post",
      
    ],
    buttonLabel: "",
    outline: true
  },
  {
    header: "Premier",
    price: 15,
    features: [
      "Video",
      "Boosting",
    
    ],
    buttonLabel: "",
    outline: false
  },
  {
    header: "luxury",
    price: 29,
    features: [
      "Stories",
      "Page handling",
   
    ],
    buttonLabel: "",
    outline: false
  }
];

const Plan = props => {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">
          {props.header}
        </h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          {`$${props.price}`}
          <small className="text-muted">
            / mo
          </small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          {props.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
        <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked"></input>
        <label class="custom-control-label" for="defaultUnchecked">{props.buttonLabel}</label>
      </div>
      </div>
      </div>
   
  );
};

const Plans = () => {
  const plans = planContents.map((obj, i) => {
    return (
      <Plan
        key={obj.header}
        header={obj.header}
        price={obj.price}
        features={obj.features}
        buttonLabel={obj.buttonLabel}
        outline={obj.outline}
      />
    );
  });

  return (
<>
<section id='price'>

<ScrollAnimation
        animateIn="bounceInRight"
        animateOut="fadeOut"
        duration={0.5}
        delay={0}
      >
<h1 className="center14">Prices</h1>
<hr className="line14"/>
    <div className="card-deck mb-3 text-center">
              <div className="con">
      {plans}
    </div>
  </div>
  </ScrollAnimation>
  </section>
  </>
  );
};

export default Plans;
