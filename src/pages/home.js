import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticlesBg from "particles-bg";
import Homesection from './homesection';
import { ParallaxProvider } from "react-scroll-parallax";
// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);


const Home = () => {
  useEffect(() => {
    for (var i = 1; i <= 6; i++) {
      gsap.set(`.t${i} .thumbImg`, {
        background: `url(/images/img${i}.jpg)`, // Use the public URL
      });
    }
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: '.thumbs',
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (s) => {
        gsap.to('.thumbImg', {
          duration: 0.6,
          ease: 'expo',
          y: (i) => {
            return i % 2 === 0
              ? gsap.utils.interpolate(100, -300, s.progress)
              : gsap.utils.interpolate(350, -650, s.progress);
          },
          backgroundPosition: (i) => {
            var str = i % 2 === 0
              ? gsap.utils.interpolate(-200, 0, s.progress)
              : gsap.utils.interpolate(-500, 0, s.progress);
            return '50% ' + str + 'px';
          },
        });
      },
    });
    gsap.timeline({ repeat: -1 })
      .to('.nub', { opacity: 1 })
      .to('.nub', { attr: { points: '12,12 12,42' }, ease: 'power2' }, '+=0.1')
      .to('.nub', { attr: { points: '12,42 12,42', ease: 'power4.inOut' } })
      .to('.nub', { opacity: 0, ease: 'power2.in' }, '+=0.5');
    gsap.timeline({
      scrollTrigger: { trigger: '.section', start: '50px top', end: '150px top', scrub: 0.5 },
    }).to('.dir', { opacity: 0, ease: 'sine.inOut' });
  }, []);

 
  return (
    <div className="container">
			<ParticlesBg type="circle" bg={true} />
      <section>
        <h1>Scroll Down</h1>
        {/* Your SVG code here */}
      </section>
      <section>
        <div className="txtBlock">
          <h1>Lorem Ipsum</h1>
          <p>
            Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="thumbs">
          {/* Modify the structure of your image containers */}
          <div className="thumb">
            <div className="thumbImg" style={{ backgroundImage: 'url(/images/img1.jpg)' }} />
          </div>
          <div className="thumb">
            <div className="thumbImg" style={{ backgroundImage: 'url(/images/img2.jpg)' }} />
          </div>
					<div className="thumb">
            <div className="thumbImg" style={{ backgroundImage: 'url(/images/img1.jpg)' }} />
          </div>
          <div className="thumb">
            <div className="thumbImg" style={{ backgroundImage: 'url(/images/img2.jpg)' }} />
          </div>
					<div className="thumb">
            <div className="thumbImg" style={{ backgroundImage: 'url(/images/img1.jpg)' }} />
          </div>
          <div className="thumb">
            <div className="thumbImg" style={{ backgroundImage: 'url(/images/img2.jpg)' }} />
          </div>
          {/* Repeat for other image containers */}
        </div>
      </section>
			<ParallaxProvider>
        <Homesection />
      </ParallaxProvider>
			
	 </div>
      
  );
};

export default Home;
