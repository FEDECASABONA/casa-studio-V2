import Head from 'next/head'
import ProjectLayout from '../../../components/ProjectLayout'

export default function SportifyProject() {
  const description = `SPORTIFY is a revolutionary sports analytics platform that combines cutting-edge analytics with intuitive design to help athletes, coaches, and teams optimize performance and strategy.

The platform offers real-time biometric analysis, AI-powered game plan recommendations, predictive injury modeling, and comprehensive team management tools. Used by 500+ professional teams, SPORTIFY has achieved 25% improvement in athlete performance and 40% reduction in injury rates.`

  const images: string[] = [
    '/images/projects/sportify/analytics1.jpg',
    '/images/projects/sportify/tracking2.jpg',
    '/images/projects/sportify/team3.jpg'
  ]

  return (
    <>
      <Head>
        <title>SPORTIFY - Fede Casabona Portfolio</title>
        <meta name="description" content="SPORTIFY project by Fede Casabona - Sports Analytics Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Roboto+Condensed:wght@300;400;700&family=Doto:wght@300&display=swap" rel="stylesheet" />
      </Head>

      <ProjectLayout
        projectName="SPORTIFY"
        description={description}
        images={images}
      />
    </>
  )
}
