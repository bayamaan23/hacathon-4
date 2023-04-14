import React, { useState } from "react";
import Cards from "react-credit-cards";
import "../components/css/Payment.css";
import "react-credit-cards/es/styles-compiled.css";
import { useNavigate } from "react-router-dom";

function PaymentPage() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  const navigation = useNavigate();

  return (
    <div
      onSubmit={(e) => {
        e.preventDefault();
        if (!number || !name || !expiry || !cvc) {
          alert("Fill all the fields!");
        } else {
          navigation("/success");
        }
      }}
    >
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focus={focus}
      />
      <form className="payment-form">
        <input
          type="tel"
          name="number"
          className="payment-input"
          placeholder="Card Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="text"
          name="name"
          className="payment-input"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="tel"
          name="expiry"
          className="payment-input"
          placeholder="Expiry"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          className="payment-input"
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <button class="button-a">
          <span class="button-span">Pay</span>
        </button>
      </form>
    </div>
  );
}

export default PaymentPage;
