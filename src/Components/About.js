import React, { useState } from "react";

export default function About(props) {
  document.title = "TextUtils - About";

  let modestyle = {
    color: props.mode == `dark` ? `white` : `black`,
    backgroundColor: props.mode == `dark` ? `black` : `white`,
  };

  return (
    <div className="container">
      <h1
        className="my-4"
        style={{ color: props.mode == `dark` ? `white` : `black` }}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={modestyle}
            >
              TextUtils - Case Converter Tool
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={modestyle}>
              <p>
                TextUtils is a tool which you can use to converte your Lowercase
                Letter into UpperCase and UpperCase into LowerCase
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={modestyle}
            >
              How To Convert Uppercase to Lowercase
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={modestyle}>
            <p>1. Copy your UpperCase text you want to convert</p>
              <p>
                2. Once you have the text copied, open Paste the text you copied
                into the text area provided on the screen
              </p>
              <p>
                3. Click on the “LowerCase” button. You should have your output
                in a few seconds
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={modestyle}
            >
              How To Convert Lowercase to  Uppercase  
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={modestyle}>
            <p>1. Copy your LowerCase text you want to convert</p>
              <p>
                2. Once you have the text copied, open Paste the text you copied
                into the text area provided on the screen
              </p>
              <p>
                3. Click on the “UpperCase” button. You should have your output
                in a few seconds
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
