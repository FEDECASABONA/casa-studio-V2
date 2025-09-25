import Head from 'next/head'
import ProjectLayout from '../../../components/ProjectLayout'

export default function ObserverProject() {
  const description = `Observer is a data visualization platform that transforms complex data into compelling visual stories. The platform makes data accessible and actionable through beautiful, interactive visualizations across industries and use cases.

Features include interactive charts, geographic maps, network diagrams, timeline views, and comprehensive dashboards. With support for real-time APIs, database integration, and collaborative editing, Observer has created 10,000+ visualizations for 500+ enterprise clients with 99.9% uptime reliability.`

  const images: string[] = [
    '/images/projects/observer/dashboard1.jpg',
    '/images/projects/observer/visualizations2.jpg',
    '/images/projects/observer/charts3.jpg'
  ]

  return (
    <>
      <Head>
        <title>Observer - Fede Casabona Portfolio</title>
        <meta name="description" content="Observer project by Fede Casabona - Data Visualization Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Roboto+Condensed:wght@300;400;700&family=Doto:wght@300&display=swap" rel="stylesheet" />
      </Head>

      <ProjectLayout
        projectName="Observer"
        description={description}
        images={images}
      />
    </>
  )
}
