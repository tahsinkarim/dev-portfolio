import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className='h-screen w-screen text-white bg-black flex flex-col justify-center items-center'>
        <h1 className='font-header text-7xl z-10'>Tahsin Karim</h1>
        <p className='opacity-50 z-10'>Frontend Developer and Designer</p>
        <div className='z-10 links text-xs absolute top-[69%] font-semiBold font-bold tracking-widest '>
          <a
            className='transition-all ease-in duration-300 hover:text-[#cccccc]'
            href='#about'
            title='About'
          >
            ABOUT
          </a>
          <span className='text-pink mx-2'>/</span>
          <a
            className='transition-all ease-in duration-300 hover:text-[#cccccc]'
            href='#about'
            title='Projects'
          >
            PROJECTS
          </a>
          <span className='text-pink mx-2'>/</span>
          <a
            className='transition-all ease-in duration-300 hover:text-[#cccccc]'
            href='#about'
            title='Contact'
          >
            CONTACT
          </a>
        </div>
        <div className='absolute w-[390px]'>
          <svg
            width='380'
            height='314'
            viewBox='0 0 380 314'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M322.141 28.6389C355.677 53.1009 375.901 94.7769 378.717 138.944C381.533 183.112 366.941 229.771 333.149 263.066C299.613 296.588 246.877 316.52 198.237 312.896C149.853 309.272 105.309 281.639 66.9093 248.344C28.7653 215.048 -3.74665 175.637 0.349346 140.077C4.44535 104.29 44.8933 72.1269 83.0373 47.6649C121.437 22.9764 157.789 6.21537 199.517 1.45887C241.245 -3.52413 288.349 3.95038 322.141 28.6389Z'
              fill='url(#paint0_linear_5_7)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_5_7'
                x1='-34.3586'
                y1='156.953'
                x2='552.141'
                y2='156.953'
                gradientUnits='userSpaceOnUse'
              >
                <stop stop-color='#E91E63' />
                <stop offset='1' stop-color='#E91E63' stop-opacity='0' />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    );
  }
}
