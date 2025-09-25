import Head from 'next/head'
import Portfolio from '../components/Casa-studio'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fede Casabona - Product Designer</title>
        <meta name="description" content="Portfolio of Fede Casabona - Product Designer, AI Prototype, 10y+ Experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Roboto+Condensed:wght@300;400;700&family=Doto:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <Portfolio />
    </>
  )
}
