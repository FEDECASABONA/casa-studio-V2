import Head from 'next/head'
import ProjectLayout from '../../../components/ProjectLayout'

export default function CollectiveProject() {
  const description = `COLLECTIVE is a creative collaboration platform that brings together designers, artists, and creatives from around the world. This digital space enables real-time collaboration, portfolio sharing, and mentorship opportunities.

The platform features a global network of over 10,000 active creators, advanced file sharing systems, and AI-powered matching algorithms to connect like-minded professionals. With representation from 50+ countries, COLLECTIVE has facilitated over 500 completed collaborations.`

  const images: string[] = [
    '/images/projects/collective/collaboration1.jpg',
    '/images/projects/collective/community2.jpg',
    '/images/projects/collective/network3.jpg'
  ]

  return (
    <>
      <Head>
        <title>COLLECTIVE - Fede Casabona Portfolio</title>
        <meta name="description" content="COLLECTIVE project by Fede Casabona - Creative Collaboration Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Roboto+Condensed:wght@300;400;700&family=Doto:wght@300&display=swap" rel="stylesheet" />
      </Head>

      <ProjectLayout
        projectName="COLLECTIVE"
        description={description}
        images={images}
      />
    </>
  )
}
