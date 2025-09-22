import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ExpertSection } from "@/components/expert-section"
import { JobUpdatesSection } from "@/components/job-updates-section"
import { ExperienceSection } from "@/components/experience-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ExpertSection />
        <JobUpdatesSection />
        <ExperienceSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
