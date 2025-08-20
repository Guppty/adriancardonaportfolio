"use client";

import React from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { TextReveal } from "@/components/magicui/text-reveal";

// SVG Icons
const Icons = {
  home: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 3l11 9h-3v9h-6v-6H10v6H4v-9H1z" />
    </svg>
  ),
  github: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  ),
  linkedin: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.368 4.268 5.455v6.288zM5.337 7.433c-1.144 0-2.067-.926-2.067-2.067 0-1.144.923-2.066 2.067-2.066 1.144 0 2.066.922 2.066 2.066 0 1.141-.922 2.067-2.066 2.067zm1.777 13.019H3.559V9h3.555v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
    </svg>
  ),
};

// Dock component (fixed top)
export function DockDemo() {
  return (
    <div style={{ position: "fixed", top: "10px", left: "50%", transform: "translateX(-50%)", zIndex: 1000 }}>
      <Dock direction="middle">
        <DockIcon>
          <a href="/" aria-label="Home">
            <Icons.home width={40} height={40} />
          </a>
        </DockIcon>
        <DockIcon>
          <a href="https://github.com/Guppty" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Icons.github width={40} height={40} />
          </a>
        </DockIcon>
        <DockIcon>
          <a href="https://www.linkedin.com/in/adrian-cardona/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Icons.linkedin width={40} height={40} />
          </a>
        </DockIcon>
      </Dock>
    </div>
  );
}

// Page component
export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh" }}>
      {/* Fixed Dock */}
      <DockDemo />

      {/* Spacer to prevent dock overlap */}
      <div style={{ height: "80px" }} />

      {/* TextReveal */}
      <div style={{ textAlign: "center" }}>
        <TextReveal style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Hello 
          I'm Adrian Cardona 
          I'm a Computer Science Student 
          at California Polytechnic University, San Luis Obispo
        </TextReveal>
      </div>

      {/* Additional content example */}
      <div style={{ marginTop: "60px", maxWidth: "600px", textAlign: "center" }}>
        <p>
          This is an example of a second section. Even with more content, the dock stays fixed at the top and never overlaps your text.
        </p>
      </div>
    </main>
  );
}
