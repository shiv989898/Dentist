import { Hero } from '@/components/sections/Hero'
import { Statistics } from '@/components/sections/Statistics'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { MeetDoctors } from '@/components/sections/MeetDoctors'
import { BeforeAfterGallery } from '@/components/sections/BeforeAfterGallery'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { AppointmentCTA } from '@/components/sections/AppointmentCTA'

export function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Statistics />
      <ServicesGrid />
      <WhyChooseUs />
      <BeforeAfterGallery />
      <MeetDoctors />
      <Testimonials />
      <FAQ />
      <AppointmentCTA />
    </div>
  )
}
