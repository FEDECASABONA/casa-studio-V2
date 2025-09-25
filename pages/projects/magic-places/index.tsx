import Head from 'next/head'
import ProjectLayout from '../../../components/ProjectLayout'

export default function MagicPlacesProject() {
  const description = `Magic Places is a location-based discovery app that helps users find extraordinary locations, hidden gems, and magical experiences through community-driven recommendations and AI-powered discovery algorithms.

The app features AI recommendations, community reviews, augmented reality overlays, offline maps, and social sharing. Covering natural wonders, urban secrets, cultural sites, and adventure spots across 50+ countries, Magic Places has helped discover 1M+ places with 500K+ active users and a 4.9/5 app store rating.`

  const images: string[] = [
    '/images/projects/magic-places/app1.jpg',
    '/images/projects/magic-places/ar2.jpg',
    '/images/projects/magic-places/discovery3.jpg'
  ]

  return (
    <>
      <Head>
        <title>Magic Places - Fede Casabona Portfolio</title>
        <meta name="description" content="Magic Places project by Fede Casabona - Location-Based Discovery App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Roboto+Condensed:wght@300;400;700&family=Doto:wght@300&display=swap" rel="stylesheet" />
      </Head>

      <ProjectLayout
        projectName="Magic Places"
        description={description}
        images={images}
      />
    </>
  )
}
