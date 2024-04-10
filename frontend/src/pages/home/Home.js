import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import loginImg from "../../assets/login.svg";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h2>Dive into Coding - Start Here with Our Beginner's Logging Page</h2>
          <p>
            Welcome to CodeMage - Your Path to Mastery Begins Here! Experience comprehensive coding guidance, step-by-step tutorials, and cutting-edge features designed to empower aspiring programmers like you.
          </p>
          <p>
            Sign in to unlock a world of engaging simulations, personalized learning, and a seamless journey from beginner to advanced levels. Join us and start coding with confidence today!
          </p>
          <div className="hero-buttons --flex-start">
            <button className="--btn --btn-danger">
              <Link to={"/register"}>Register</Link>
            </button>
            <button className="--btn --btn-primary">
              <Link to={"/login"}>Login</Link>
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src={loginImg} alt="Inventory" />
        </div>
      </section>
    </>
  );
};

export default Home;
