export interface FeatureCard {
  icon: string
  title: string
  description: string
  bg: string
  border: string
  iconBg: string
}

export interface RoleCard {
  id: string
  role: string
  headline: string
  quote: string
  description: string
  features: string[]
  color: string
  bg: string
}

export interface WorkflowStep {
  icon: string
  label: string
  description: string
  color: string
}

export interface PricingTier {
  name: string
  subtitle: string
  badge?: string
  features: string[]
  cta: string
  highlighted?: boolean
}

export interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export interface Stat {
  value: string
  label: string
  description: string
}

export interface Integration {
  name: string
  category: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
}
