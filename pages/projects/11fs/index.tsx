import Head from 'next/head'
import ProjectLayout from '../../../components/ProjectLayout'

export default function ElevenFSProject() {
  const description = `11:FS Content Hub is a comprehensive content platform for financial services, featuring cutting-edge fintech insights, research, and thought leadership. The platform serves as a central repository for industry expertise and innovation.

The hub covers fintech innovation, digital banking trends, regulatory updates, and real-world case studies. With 100,000+ monthly readers and 50+ expert contributors, it has become an industry-leading resource with exceptional engagement rates across the financial services sector.`

  const images: string[] = [
    '/images/projects/11fs/content1.jpg',
    '/images/projects/11fs/research2.jpg',
    '/images/projects/11fs/insights3.jpg'
  ]

  return (
    <>
      <Head>
        <title>11:FS Content Hub - Fede Casabona Portfolio</title>
        <meta name="description" content="11:FS Content Hub by Fede Casabona - Financial Services Content Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Roboto+Condensed:wght@300;400;700&family=Doto:wght@300&display=swap" rel="stylesheet" />
      </Head>

      <ProjectLayout
        projectName="11:FS / Content Hub"
        description={description}
        images={images}
      />
    </>
  )
}
