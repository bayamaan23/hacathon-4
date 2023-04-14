import React, { useEffect } from "react";
import "../components/css/mainpage.css";
import bgvid from "../video/Using Personal Computer Laptop in Office _ Free Stock Footage _ No Copyright Video.mp4";
import code from "../video/code.png";
import vidphto from "../video/viddddddoo.jpg";
import logoic from "../components/start/img/niceice.png";
import back from "../components/start/img/go-back-2.png";
import { useNavigate } from "react-router-dom";
import Comments from "../components/Comments";
import Modal from "../components/Modal";

import { useCommentContext } from "../contexts/CommentsContext";

function AboutUsPage() {
  const { comments, getComments } = useCommentContext();

  useEffect(() => {
    getComments();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="main-sidebar">
      <div className="goback" onClick={() => navigate("/home")}>
        <img style={{ width: "10%" }} src={back} alt="" />
      </div>
      <video src={bgvid} autoPlay loop muted></video>
      <div className="container">
        <div className="about-content">
          NiceCODE courses are designed to teach individuals the fundamentals of
          coding and how to develop software applications. These courses provide
          a comprehensive understanding of various programming languages,
          programming concepts, and software development tools.
        </div>

        <div className="hero-title">
          <div className="about-wrapper-left">
            <h2 style={{ color: "#81d1df", fontSize: "36px" }}>
              Learn with us
            </h2>
            <p style={{ color: "#007acc", opacity: "90%", fontSize: "16px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              nam a omnis non voluptates totam culpa atque architecto tempore
              expedita dicta itaque iure id harum. Facere illo quidem eaque?
              Odit.
            </p>
            <div>
              <button className="try-btn" onClick={() => navigate("/compiler")}>
                try it now
              </button>
            </div>
          </div>
          <div className="about-wrapper-right">
            <img className="code" src={code} alt="" />
          </div>
        </div>

        <div className="page-title">
          <div className="about-wrapper-left-2">
            <img className="vidpto" src={vidphto} alt="" />
          </div>
          <div className="about-wrapper-right-2">
            <h2 style={{ color: "#9ed9e4", fontSize: "36px" }}>
              Watch programming lessons
            </h2>
            <p style={{ color: "#007acc", opacity: "50%", fontSize: "16px" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              quisquam quam eum necessitatibus dignissimos fuga! Atque culpa,
              eum animi iusto fugit quisquam modi, aperiam voluptatibus, dolorum
              odit ex nisi voluptas?
            </p>
            <div>
              <button className="try-btn" onClick={() => navigate("/home")}>
                check it
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="review-title">
        <div className="modal-review">
          <Modal />
        </div>
        <div className="review-review">
          {comments.map((item) => {
            return (
              <div className="container">
                <div className="review-card">
                  <img
                    style={{ width: "30%" }}
                    src={item.avatar}
                    alt="Reviewer Avatar"
                  />
                  <div className="review-content">
                    <h3 className="reviewer-name">{item.name}</h3>
                    <p className="review-text">{item.text} </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="main-footer">
            <div className="footer-left">
              <div className="footer-nav">
                <li className="first-line">
                  <h1>
                    N<span style={{ color: "#9ed9e4" }}>ICE</span>CODE
                  </h1>
                  <ul className="footer-item">About</ul>
                  <ul className="footer-item">Blog</ul>
                  <ul className="footer-item">Podcast</ul>
                  <ul className="footer-item">Documentation</ul>
                  <ul className="footer-item">Support</ul>
                </li>
                <li className="first-line">
                  <h1>For</h1>
                  <ul className="footer-item">Teams</ul>
                  <ul className="footer-item">Education</ul>
                  <ul className="footer-item">Privacy</ul>
                  <ul className="footer-item">Embeds</ul>
                  <ul className="footer-item">Asset</ul>
                  <ul className="footer-item">Hosting</ul>
                </li>
                <li className="first-line">
                  <h1>Social</h1>
                  <ul className="footer-item">YouTube</ul>
                  <ul className="footer-item">Facebook</ul>
                  <ul className="footer-item">Twitter</ul>
                  <ul className="footer-item">Instagram</ul>
                  <ul className="footer-item">Mastodon</ul>
                </li>
                <li className="first-line">
                  <h1>Community</h1>
                  <ul className="footer-item">Spark</ul>
                  <ul className="footer-item">Challenges</ul>
                  <ul className="footer-item">Topics</ul>
                  <ul className="footer-item">Code of Conduct</ul>
                </li>
              </div>
            </div>
            <div className="footer-right">
              <div className="footer-info">
                <img style={{ width: "25%" }} src={logoic} alt="" />
                <div className="site-tag">
                  <div>©2023 NiceCode</div>
                  <div>Demo or it didn't happen</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
