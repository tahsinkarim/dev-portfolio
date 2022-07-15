import React, { Component } from "react";
import "./Hamburger.css";

export default class Hamburger extends Component {
  state = { isActive: false };

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    const isActive = this.state.isActive;

    return (
      <div className='flex items-center'>
        <button
          className={isActive ? "nav-toggle active" : "nav-toggle"}
          onClick={this.handleToggle}
        >
          <span className='hamburger'></span>
        </button>
        <p className='logo'>TAHSIN KARIM</p>
      </div>
    );
  }
}
