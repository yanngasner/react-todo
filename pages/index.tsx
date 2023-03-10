import Head from 'next/head'
import Home from '../components/Home'


export default function App() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css' />
      </Head>
      <Home />
    </>
  )
}
