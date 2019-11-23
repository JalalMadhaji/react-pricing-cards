import React, { Component } from "react";

export default class Pricing extends Component {
  render() {
    return (
      <div className="pricing">
        <header>
          <h3>{this.props.title}</h3>
        </header>
        <article>
          <h3>{this.props.subTitle}</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            nesciunt quidem tempora blanditiis? Repellendus minus voluptatibus
            tempora repudiandae, sit nesciunt!
          </p>
          <a>{this.props.buttonText}</a>
        </article>
      </div>
    );
  }
}

Pricing.defaultProps = {
  title: "UnSet",
  subTitle: "UnSet",
  buttonText: "UnSet"
};
