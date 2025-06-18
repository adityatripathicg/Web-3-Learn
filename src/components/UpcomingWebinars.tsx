'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
  {
    title: 'Understanding Blockchain Technology',
    description:
      'Dive deep into the fundamentals of blockchain, its structure, and how it powers decentralized ecosystems.',
    slug: 'understanding-blockchain-technology',
    isFeatured: true
  },
  {
    title: 'The Art of Writing Smart Contracts',
    description:
      'Learn to write secure and efficient smart contracts using Solidity and best practices.',
    slug: 'writing-smart-contracts',
    isFeatured: true
  },
  {
    title: 'Mastering DApp Development',
    description:
      'Explore the end-to-end process of building decentralized applications using Web3 tools.',
    slug: 'mastering-dapp-development',
    isFeatured: true
  },
  {
    title: 'Web3 Development Essentials',
    description:
      'A comprehensive introduction to wallets, Web3.js, Ethers.js, RPCs, and interacting with the blockchain.',
    slug: 'web3-development-essentials',
    isFeatured: true
  },
  {
    title: 'Deploying Smart Contracts on Testnets',
    description:
      'Learn how to deploy and verify smart contracts on Ethereum testnets like Sepolia and Goerli.',
    slug: 'deploying-on-testnets',
    isFeatured: true
  },
  {
    title: 'Marketing Your Web3 Project',
    description:
      'Understand how to build community, leverage X (Twitter), and grow your Web3 product with on-chain credibility.',
    slug: 'marketing-web3-project',
    isFeatured: true
  }
];


  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Web3 Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars