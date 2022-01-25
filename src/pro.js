import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default class Portfolio extends Component {
  render() {
    return (
      <div >
        <div>
          <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="fadeOut"
            duration={0.5}
            delay={0}
          >
               <h1>ssss</h1>
            <div />
          </ScrollAnimation>
        </div>

        <div >
          <ScrollAnimation
            animateIn="bounceInLeft"
            animateOut="fadeOut"
            duration={1.2}
          >
               <h1>ssss</h1>
            <div/>
          </ScrollAnimation>
        </div>

        <div >
          <ScrollAnimation
            animateIn="bounceInLeft"
            animateOut="fadeOut"
            duration={0.8}
          >
            <h1>ssss</h1>
            <div  />
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}
