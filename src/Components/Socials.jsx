import React, { Component } from "react";

export default class Socials extends Component {
  render() {
    return (
      <div className='flex items-center justify-center gap-3 '>
        <a
          className='text-[24px] flex items-center text-white mix-blend-exclusion'
          href='https://github.com/tahsinkarim'
        >
          <ion-icon name='logo-github'></ion-icon>
        </a>
        <a
          className='text-[24px] flex items-center text-white mix-blend-exclusion'
          href='https://www.linkedin.com/in/tahsin-karim-19a469234/'
        >
          <ion-icon name='logo-linkedin'></ion-icon>
        </a>
        <button className='bg-pink hover:bg-[#BA184F] text-white text-xs font-bold py-2 px-4 rounded'>
          Resume
        </button>
      </div>
    );
  }
}
