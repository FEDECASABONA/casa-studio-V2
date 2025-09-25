import Head from 'next/head'
import ProjectLayout from '../../../components/ProjectLayout'

export default function NinjasProject() {
  const description = `Ninjas is a cutting-edge digital platform that revolutionizes the way teams collaborate and execute projects. Built with modern technologies and user-centric design principles, it provides seamless workflow management and real-time collaboration tools for distributed teams.

The platform features intuitive project management, advanced analytics, and integrated communication systems that enable teams to work more efficiently and deliver exceptional results.`

  // Example images - replace with actual project images
  const images: string[] = [
    '/images/projects/ninjas/image1.jpg',
    '/images/projects/ninjas/image2.jpg',
    
  ]

  return (
    <>
      <Head>
        <title>Ninjas - Fede Casabona Portfolio</title>
        <meta name="description" content="Ninjas project by Fede Casabona - Digital collaboration platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Roboto+Condensed:wght@300;400;700&family=Doto:wght@300&display=swap" rel="stylesheet" />
      </Head>
      
      <ProjectLayout
        projectName="Ninjas"
        description={description}
        images={images}
      />
    </>
  )
}
