import "./card.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>--Basic--</h3>
          <span className="bar"></span>
          <p className="btc">$100</p>
          <p>-3 days-</p>
          <p>-3 pages-</p>
          <p>-Featured-</p>
          <Link to="/contact" className="btn">
            Purchase Now
          </Link>
        </div>
        <div className="card">
          <h3>--Basic--</h3>
          <span className="bar"></span>
          <p className="btc">$100</p>
          <p>-3 days-</p>
          <p>-3 pages-</p>
          <p>-Featured-</p>
          <Link to="/contact" className="btn">
            Purchase Now
          </Link>
        </div>
        <div className="card">
          <h3>--Basic--</h3>
          <span className="bar"></span>
          <p className="btc">$100</p>
          <p>-3 days-</p>
          <p>-3 pages-</p>
          <p>-Featured-</p>
          <Link to="/contact" className="btn">
            Purchase Now
          </Link>
        </div>
      </div>
    </div>
  );
}
