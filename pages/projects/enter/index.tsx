import Head from 'next/head'
import ProjectLayout from '../../../components/ProjectLayout'

export default function EnterProject() {
  const description = `Enter is an experimental platform exploring the future of human-computer interaction through immersive digital environments. This project creates transformative experiences that blur the line between reality and virtuality.

The platform features photorealistic 3D environments, interactive elements with touch and gesture controls, spatial audio, and AI companions. Using WebXR technology and real-time rendering, Enter has achieved 95% user engagement rates and is influencing industry standards for immersive experiences.`

  const images: string[] = [
    '/images/projects/enter/virtual1.jpg',
    '/images/projects/enter/interaction2.jpg',
    '/images/projects/enter/ar3.jpg'
  ]

  return (
    <>
      <Head>
        <title>Enter - Fede Casabona Portfolio</title>
        <meta name="description" content="Enter project by Fede Casabona - Immersive Digital Experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Roboto+Condensed:wght@300;400;700&family=Doto:wght@300&display=swap" rel="stylesheet" />
      </Head>

      <ProjectLayout
        projectName="Enter"
        description={description}
        images={images}
      />
    </>
  )
}
