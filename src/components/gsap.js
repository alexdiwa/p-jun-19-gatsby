import React from "react"
import { TimelineMax, Power2, Power4 } from "gsap"; 
import "./gsap.scss"
import { Link } from "gatsby"

export default class MyAnimation extends React.Component {
  componentDidMount() {
    const logo = document.querySelector('.logo');
    const letterA = document.querySelector('#a');
    const letterD = document.querySelector('#d');
    const leftEye = document.querySelector('#left-eye');
    const rightEye = document.querySelector('#right-eye');
    const mouth = document.querySelector('#mouth');
    const body = document.querySelector('#body');

    // onload jiggle
    const letters = [letterA, letterD]
    const letterLoad = new TimelineMax({});
    
    letterLoad
      .staggerTo(letters, 0.1, {rotation: 5, repeat: 3, yoyo: true, ease: Power2.easeInOut, transformOrigin: "50% 50%", delay: 1}, 0.125);

    const tlmLogo = new TimelineMax({paused: true, reversed: true});
    
    tlmLogo
      .to(letterA, 0.3, {
        transformOrigin: "50% 50%", 
        ease: Power4.easeOut,
        attr: {
          d: "M43.961,80.627c0,0 -7.65,0.221 -18.706,-7.278c-7.335,-4.975 -10.007,-10.41 -12.42,-17.962c-3.014,-9.436 -1.199,-17.833 1.726,-24.805c3.363,-8.019 6.034,-10.594 13.935,-15.632c4.411,-2.813 7.179,-3.748 12.018,-5.389c2.991,-1.014 8.717,-1.785 16.299,-1.236"
        }
      }, "letter")
      .to(letterD, 0.3, {
        transformOrigin: "50% 50%", 
        ease: Power4.easeOut,
        attr: {
          d: "M42.287,80.572c0,0 5.667,0.959 19.581,0.38c15.231,-0.634 26.001,-5.791 31.264,-10.103c5.106,-4.182 16.345,-24.818 7.857,-39.701c-11.746,-20.593 -36.822,-22.318 -44.27,-22.853"
        }
      }, "letter")
      .fromTo(leftEye, 0.2, {scale:0, opacity:0}, {scale:1, opacity: 1, visibility:'visible'}, "face")
      .fromTo(rightEye, 0.2, {scale:0, opacity:0}, {scale:1, opacity: 1, visibility:'visible'}, "face")
      .fromTo(mouth, 0.2, {scale:0, opacity:0}, {scale:1, opacity: 1, visibility:'visible'}, "face")
      .to(body, 0.3, {
        transformOrigin: "50% 50%", 
        rotation: 12
      });
    
    logo.addEventListener('mouseenter', () => {
      if (letterLoad.isActive()) {
        letterLoad.pause(0);
        letterLoad.clear();
      }
    
      tlmLogo.play().timeScale(1);
    });
    
    logo.addEventListener('mouseleave', () => {
      tlmLogo.reverse().timeScale(2);
    });
    

  }
  
  render() {
    return (
      <div className="gsap">
        <Link className="logo" to="/">
        <svg id="body" style={{ width: `50px`, height: `40px` }} viewBox="0 0 113 89" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5">
            <path id="a" d="M45.452,21.193c0,0 1.247,9.783 -2.423,15.718c-3.427,5.542 -10.969,9.942 -20.496,9.66c-19.728,-0.583 -20.592,-28.891 -7.719,-37.947c10.903,-7.669 25.537,-0.074 28.681,7.289c4.342,10.168 3.618,12.506 4.144,20.509c0.466,7.081 0.079,9.256 0.238,12.434" fill="none" stroke="#000" strokeWidth="6"/>
            <path id="d" d="M103.392,45.792c0,0 -29.804,-7.678 -33.612,11.111c-3.808,18.789 7.434,28.34 22.364,25.488c14.929,-2.852 14.843,-17.955 14.222,-25.789c-2.606,-32.846 -12.432,-48.603 -13.454,-50.273" fill="none" stroke="#000" strokeWidth="6"/>
            <path id="mouth" d="M45.277,45.083c0,0 1.639,2.969 5.28,2.327c1.92,-0.339 3.296,-1.524 3.48,-4.442" fill="none" stroke="#000" strokeWidth="5"/>
            <path id="left-eye" d="M28.752,41.528c0,0 0.001,3.885 0.003,3.996" fill="none" stroke="#000" strokeWidth="5"/>
            <path id="right-eye" d="M70.787,31.428c0,0 0.174,1.429 0.615,3.948" fill="none" stroke="#000" strokeWidth="5"/>
        </svg>
        </Link>
      </div>
    )
  }
}


