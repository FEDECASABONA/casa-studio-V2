import Head from 'next/head'
import ProjectLayout from '../../../components/ProjectLayout'

export default function TravelAssistantProject() {
  const description = `TRAVEL ASSISTANT is an AI-powered travel planning platform that makes trip planning effortless and personalized. Using advanced machine learning algorithms, it creates custom itineraries, monitors prices in real-time, and provides local recommendations.

The platform features natural language processing for travel queries, predictive analytics for optimal booking times, and multi-language support in 50+ languages. With over 1M+ trips planned successfully, users report 70% reduction in planning time and 35% average savings on travel costs.`

  const images: string[] = [
    '/images/projects/travel-assistant/dashboard1.jpg',
    '/images/projects/travel-assistant/mobile2.jpg',
    '/images/projects/travel-assistant/ai3.jpg'
  ]

  return (
    <>
      <Head>
        <title>Travel Assistant - Fede Casabona Portfolio</title>
        <meta name="description" content="Travel Assistant project by Fede Casabona - AI-Powered Travel Planning" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Roboto+Condensed:wght@300;400;700&family=Doto:wght@300&display=swap" rel="stylesheet" />
      </Head>

      <ProjectLayout
        projectName="TRAVEL ASSISTANT"
        description={description}
        images={images}
      />
    </>
  )
}
