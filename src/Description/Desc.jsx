import { useGSAP } from "@gsap/react";
import "./Desc.css";
import gsap from "gsap/all";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);
const Desc = () => {

  
  const textref = useRef(null);
  useGSAP(() => {
    const split = SplitText.create(textref.current, 
      {type: "words"});
  

    gsap.from(split.words, {
      scrollTrigger: {
        trigger: textref.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y:30,
      opacity:0,
      stagger:0.04,
      ease: "sine.inOut"
    });
  }, []);
 
  return (
    <div className="desc-container">
      <p ref={textref} className="desc">
        Hi pretty people ♡.<br></br>
        Thank you for dropping by — I’m Anjali. I love aesthetic, pretty things,
        and clean code. This space is like my digital diary,part aesthetic,
        part logic, part “what am I even doing but it’s working??” I get excited
        over the tiniest details, like the perfect font or prettiest colour i
        founf while editing. I'm still figuring things out — but hey, aren’t we
        all? Here, Ill be posting what it took me to be this small version of
        me, how i started to code and how im addicted to aesthetics (which
        irritates people sometimes ngl).<br></br>Hope u stay for a while
      </p>
    </div>
  );
};

export default Desc;
