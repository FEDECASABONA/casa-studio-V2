import Head from 'next/head'
import ProjectLayout from '../../../components/ProjectLayout'

export default function AIBrainProject() {
  const description = `AI—BRAIN represents the next evolution in artificial intelligence interfaces. This revolutionary platform combines advanced machine learning algorithms with intuitive user experience design to create a seamless bridge between human creativity and artificial intelligence.

The system features natural language processing, predictive analytics, and adaptive learning capabilities that evolve with user behavior. It's designed to augment human intelligence rather than replace it, creating powerful synergies between human intuition and machine precision.`

  // Example images - replace with actual project images
  const images: string[] = [
    '/images/projects/ai-brain/interface1.jpg',
    '/images/projects/ai-brain/interface2.jpg',
    
  ]

  return (
    <>
      <Head>
        <title>AI—BRAIN - Fede Casabona Portfolio</title>
        <meta name="description" content="AI—BRAIN project by Fede Casabona - Artificial Intelligence Interface" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Roboto+Condensed:wght@300;400;700&family=Doto:wght@300&display=swap" rel="stylesheet" />
      </Head>
      
      <ProjectLayout
        projectName="AI—BRAIN"
        description={description}
        images={images}
      />
    </>
  )
}
