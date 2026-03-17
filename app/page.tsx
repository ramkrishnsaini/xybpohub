import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import Testimonials from '@/components/home/Testimonials'
import PainSection from '@/components/home/PainSection'
import PlatformOverview from '@/components/home/PlatformOverview'
import FeaturesGrid from '@/components/home/FeaturesGrid'
import PlatformModules from '@/components/home/PlatformModules'
import CallFlow from '@/components/home/CallFlow'
import ApiIntegrations from '@/components/home/ApiIntegrations'
import WorkflowSteps from '@/components/home/WorkflowSteps'
import StatsBar from '@/components/home/StatsBar'
import RoleTabs from '@/components/home/RoleTabs'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'XyBPO Hub — Sales Operating System for BPO Call Centers',
  description:
    'The AI-powered Sales OS built exclusively for BPO teams. Track agents, campaigns, subscriptions, payments and QA in one real-time platform. Go live in minutes.',
  alternates: {
    canonical: 'https://xybpohub.com',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesGrid />
      <PlatformModules />
      <CallFlow />
      <ApiIntegrations />
      <PlatformOverview />
      <Testimonials />
      <PainSection />
      <WorkflowSteps />
      <StatsBar />
      <RoleTabs />
      <CTABanner />
    </>
  )
}
