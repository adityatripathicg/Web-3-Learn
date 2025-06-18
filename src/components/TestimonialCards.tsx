'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "This platform helped me go from zero to deploying my first smart contract on Ethereum. The hands-on projects are exactly what beginners need.",
    name: 'Aman Verma',
    title: 'Smart Contract Developer',
  },
  {
    quote:
      "The support from mentors and the community is amazing. I built my first DApp and even contributed to a DAO through what I learned here.",
    name: 'Sneha Roy',
    title: 'Web3 Contributor',
  },
  {
    quote:
      "The NFT development track is top-notch. I launched my own NFT collection and understood the real tech behind the hype.",
    name: 'Karan Kapoor',
    title: 'NFT Creator',
  },
  {
    quote:
      "As someone from a non-tech background, the structured learning path made it easy to break into blockchain. Highly recommended!",
    name: 'Priya Mehta',
    title: 'DAO Strategist',
  },
  {
    quote:
      "The Web3 security module was a game-changer for me. I now audit smart contracts and actively contribute to open-source tools.",
    name: 'Yash Patel',
    title: 'Blockchain Security Auditor',
  }
];


function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Built on Chain: Stories of Transformation</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials