import React, { Component } from "react";

export default class Intro extends Component {
  render() {
    return (
      <div className='bg-pink h-screen w-screen flex justify-center items-center'>
        <p className='text-white text-5xl font-header px-8 leading-[70px] max-w-[1000px]'>
          <span className='text-black'>I'm a bespoke web developer </span>
          looking to facilitate the creation of modern and aesthetically
          pleasing websites<span className='text-black'>.</span>
        </p>
      </div>
    );
  }
}
