import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "../components/css/Payment.css";
import { useNavigate } from "react-router-dom";

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
          <div class="input-field number">
            <input
              type="tel"
              name="number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              required
            />
            <label>Card Number</label>
          </div>

          <div className="input-field">
            <input
              type="tel"
              name="name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <label>Name</label>
          </div>
          <div
            style={{
              width: 390,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="input-field">
              <input
                style={{ width: 170 }}
                type="text"
                name="expiry"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <label>MM/YY Expiry</label>
            </div>

            <div className="input-field">
              <input
                style={{ width: 170 }}
                type="text"
                name="cvc"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <label>СVC</label>
            </div>
          </div>

          <button
            class="button-a"
            onClick={() => {
              alert("Hello");
            }}
          >
            <span class="button-span">Pay</span>
          </button>
        </form>
      </div>
    );
  }
}
