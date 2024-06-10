// src/WelcomePage.tsx
import React, { useRef, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { gsap } from "gsap";
import { Button } from "@/components"; // Import the custom Button component
import "./home.css"; // Add some basic styles

const WelcomePage: React.FC = () => {
  const welcomeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (welcomeRef.current) {
      gsap.fromTo(
        welcomeRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }

    if (titleRef.current) {
      const letters = titleRef.current.querySelectorAll(".letter");
      gsap.fromTo(
        letters,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "bounce.out",
          stagger: 0.05,
        }
      );
    }
  }, []);

  const title = "Welcome to My Website";

  return (
    <Dialog.Root defaultOpen>
      <Dialog.Trigger asChild>
        <Button style={{ display: "none" }}>Open Welcome Page</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content" ref={welcomeRef}>
          <h1 ref={titleRef}>
            {title.split("").map((letter, index) => (
              <span key={index} className="letter">
                {letter}
              </span>
            ))}
          </h1>
          <p>We are glad to have you here. Enjoy exploring!</p>
          <Dialog.Close asChild>
            <Button style={{ marginTop: "1rem" }}>Get Started</Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default WelcomePage;
