
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: 'Discover Your Niche in Web3: Personalized Learning Paths',
    description:
      'Begin a journey tailored to your Web3 goals. Whether it’s smart contracts, NFTs, or DeFi, we adapt our learning experience to your interests and skill level, helping you grow into a confident Web3 professional.',
  },
  {
    title: 'Build Real DApps with Practical Projects',
    description:
      'Our platform emphasizes hands-on learning by guiding you through real-world decentralized applications. From writing your first smart contract to launching a full-stack DApp—experience blockchain development like never before.',
  },
  {
    title: 'Learn from Web3 Experts & Developers',
    description:
      'Courses are led by industry veterans, auditors, and builders who’ve contributed to live protocols. Get insights that go beyond tutorials—real advice from people building the decentralized future.',
  },
  {
    title: 'Code Reviews & Community Mentorship',
    description:
      'Gain real-time feedback on your smart contracts, front-end integration, and tokenomics ideas from our active dev community and mentors. Get unstuck and move forward fast.',
  },
  {
    title: 'Always Up-to-Date Curriculum',
    description:
      'Web3 evolves fast. That’s why our content is regularly updated with the latest tools, frameworks, and Layer 2 tech like zkSync, Optimism, Base, and more—so you’re always ahead of the curve.',
  },
  {
    title: 'Limitless Opportunities to Explore & Contribute',
    description:
      'From open-source contributions to hackathon prep and DAO building, our platform connects you with opportunities to apply your skills and grow your network in the Web3 ecosystem.',
  }
];


function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs