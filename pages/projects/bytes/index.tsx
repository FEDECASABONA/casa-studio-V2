import Head from 'next/head'
import ProjectLayout from '../../../components/ProjectLayout'

export default function BytesProject() {
  const description = `BYTES is a comprehensive developer tools platform that empowers developers with cutting-edge tools, resources, and community features to accelerate development and improve code quality.

The platform includes an advanced IDE with AI assistance, comprehensive API testing suite, visual database management, enhanced Git workflows, and streamlined CI/CD pipelines. With 50,000+ active developers and 1M+ code snippets shared, BYTES has achieved 40% faster development cycles and 95% developer satisfaction.`

  const images: string[] = [
    '/images/projects/bytes/editor1.jpg',
    '/images/projects/bytes/api2.jpg',
    '/images/projects/bytes/collaboration3.jpg'
  ]

  return (
    <>
      <Head>
        <title>BYTES - Fede Casabona Portfolio</title>
        <meta name="description" content="BYTES project by Fede Casabona - Developer Tools Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Roboto+Condensed:wght@300;400;700&family=Doto:wght@300&display=swap" rel="stylesheet" />
      </Head>

      <ProjectLayout
        projectName="BYTES"
        description={description}
        images={images}
      />
    </>
  )
}
