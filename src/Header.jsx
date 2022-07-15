import React, { Component } from "react";
import Hamburger from "./Components/Hamburger";
import Socials from "./Components/Socials";

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className='pt-3 pr-4 fixed w-full'>
          <div className='flex justify-between'>
            <Hamburger />
            <Socials />
          </div>
        </nav>
      </header>
    );
  }
}
