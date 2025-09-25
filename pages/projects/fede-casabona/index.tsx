import Head from 'next/head'
import ProjectLayout from '../../../components/ProjectLayout'

export default function FedeCasabonaProject() {
  const description = `Product Designer with over 10 years of experience specializing in AI prototyping, motion design, branding, and strategic design thinking. I create digital experiences that bridge the gap between human needs and technological possibilities.

My approach combines deep user research, innovative design systems, and cutting-edge technology to deliver products that are not only beautiful but also meaningful and impactful. I believe in design as a powerful tool for positive change.`

  // Example images - replace with actual project images
  const images: string[] = [
    '/images/projects/fede-casabona/portrait1.jpg',
    '/images/projects/fede-casabona/work1.jpg',
    
  ]

  return (
    <>
      <Head>
        <title>Fede Casabona - Product Designer Portfolio</title>
        <meta name="description" content="Fede Casabona - Product Designer, AI Prototype, 10y+ Experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Roboto+Condensed:wght@300;400;700&family=Doto:wght@300&display=swap" rel="stylesheet" />
      </Head>
      
      <ProjectLayout
        projectName="Fede Casabona"
        description={description}
        images={images}
      />
    </>
  )
}
