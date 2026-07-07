import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Loader({ onComplete }: { onComplete?: () => void }) {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const leftDoor = useRef<HTMLDivElement>(null);
  const rightDoor = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    // Initial states
    gsap.set([leftDoor.current, rightDoor.current], { yPercent: 0 });
    gsap.set(textRef.current, { scale: 0.8, opacity: 0, filter: 'blur(10px)' });

    tl.to(textRef.current, { 
      scale: 1,
      opacity: 1, 
      filter: 'blur(0px)',
      duration: 1.5, 
      ease: 'expo.out',
    })
    .to(dotRef.current, {
      color: '#22d3ee',
      textShadow: '0 0 20px rgba(34,211,238,0.5)',
      duration: 0.5,
      ease: 'power2.out'
    }, "-=0.5")
    .to(textRef.current, {
      scale: 1.1,
      opacity: 0,
      filter: 'blur(10px)',
      duration: 0.8,
      ease: 'power2.inOut',
      delay: 0.2
    })
    .to([leftDoor.current, rightDoor.current], {
      yPercent: (i) => i === 0 ? -100 : 100,
      duration: 1.2,
      ease: 'power4.inOut',
      stagger: 0.1
    }, "-=0.4");

  }, { scope: container });

  return (
    <div 
      ref={container}
      className="fixed inset-0 z-[99999] pointer-events-none flex flex-col"
    >
      <div 
        ref={leftDoor}
        className="w-full h-1/2 bg-[#000B1D] origin-top border-b border-white/5"
      />
      <div 
        ref={rightDoor}
        className="w-full h-1/2 bg-[#000B1D] origin-bottom border-t border-white/5"
      />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="overflow-hidden">
          <div 
            ref={textRef}
            className="text-5xl md:text-7xl font-black text-white font-mono tracking-widest flex items-center"
          >
            FOX<span ref={dotRef} className="text-white/20 inline-block mx-1">.</span>SYSTEM
          </div>
        </div>
      </div>
    </div>
  );
}
