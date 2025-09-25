import Head from 'next/head'
import ProjectLayout from '../../../components/ProjectLayout'

export default function CasaProject() {
  const description = `Casa specializes in creating stunning architectural visualizations that bring architectural designs to life through photorealistic rendering and immersive experiences. The project helps architects, developers, and clients visualize projects before construction.

Services include detailed 3D modeling, photorealistic rendering, virtual tours, AR/VR integration, and cinematic animations. Using industry-standard tools and AI enhancement, Casa has completed 200+ projects for 50+ architectural firms, achieving 40% increase in client approval rates and 95% on-time delivery.`

  const images: string[] = [
    '/images/projects/casa/architectural1.jpg',
    '/images/projects/casa/virtual2.jpg',
    '/images/projects/casa/modeling3.jpg'
  ]

  return (
    <>
      <Head>
        <title>Casa - Fede Casabona Portfolio</title>
        <meta name="description" content="Casa project by Fede Casabona - Architectural Visualization" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Roboto+Condensed:wght@300;400;700&family=Doto:wght@300&display=swap" rel="stylesheet" />
      </Head>

      <ProjectLayout
        projectName="Casa"
        description={description}
        images={images}
      />
    </>
  )
}
