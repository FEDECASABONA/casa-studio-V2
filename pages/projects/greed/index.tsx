import Head from 'next/head'
import ProjectLayout from '../../../components/ProjectLayout'

export default function GreedProject() {
  const description = `Greed is a bold typographic exploration that pushes the boundaries of traditional typography. This project features custom typeface design, variable fonts, and experimental layouts that express complex human emotions and societal themes.

The project includes hand-crafted letterforms, dynamic weight variations, strategic color psychology, and motion typography. Featured in Typography Annual 2024 and winner of Design Excellence Award, Greed is now used by 100+ brands worldwide with a 4.9/5 designer rating.`

  const images: string[] = [
    '/images/projects/greed/typography1.jpg',
    '/images/projects/greed/brand2.jpg',
    '/images/projects/greed/motion3.jpg'
  ]

  return (
    <>
      <Head>
        <title>Greed - Fede Casabona Portfolio</title>
        <meta name="description" content="Greed project by Fede Casabona - Typography & Brand Identity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Roboto+Condensed:wght@300;400;700&family=Doto:wght@300&display=swap" rel="stylesheet" />
      </Head>

      <ProjectLayout
        projectName="Greed"
        description={description}
        images={images}
      />
    </>
  )
}
