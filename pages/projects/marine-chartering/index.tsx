import Head from 'next/head'
import ProjectLayout from '../../../components/ProjectLayout'

export default function MarineCharteringProject() {
  const description = `Marine Chartering Platform is a premium digital marketplace that connects yacht owners with charter clients worldwide. The platform simplifies luxury yacht chartering through advanced search capabilities, virtual tours, and streamlined booking management.

Features include AI-powered yacht discovery, 360° immersive experiences, secure payment processing, and custom itinerary planning. With 200+ luxury yachts listed across 50+ countries, the platform has facilitated $50M+ in charter bookings with 98% customer satisfaction.`

  const images: string[] = [
    '/images/projects/marine-chartering/yacht1.jpg',
    '/images/projects/marine-chartering/booking2.jpg',
    '/images/projects/marine-chartering/virtual3.jpg'
  ]

  return (
    <>
      <Head>
        <title>Marine Chartering Platform - Fede Casabona Portfolio</title>
        <meta name="description" content="Marine Chartering Platform by Fede Casabona - Luxury Yacht Charter Marketplace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Roboto+Condensed:wght@300;400;700&family=Doto:wght@300&display=swap" rel="stylesheet" />
      </Head>

      <ProjectLayout
        projectName="Marine Chartering Platform"
        description={description}
        images={images}
      />
    </>
  )
}
