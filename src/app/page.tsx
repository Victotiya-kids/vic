import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import HelpSection from '@/components/Home/help-section';
import ValuesSection from '@/components/Home/values-section';
export const metadata: Metadata = {
  title: "Sustainable",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <HelpSection />
      <ValuesSection />
    </main>
  )
}
