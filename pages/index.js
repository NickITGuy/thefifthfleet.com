import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="head">
      <Head>
        <title>The Fifth Fleet</title>
      </Head>
    <header class="v-header container">
    <div class="fullscreen-video-wrap">
      <Image src="/bkg.jpg" alt="The Fifth Fleet" layout="fill" />
    </div>
    <div class="header-overlay"></div>
    <div class="header-content">
      <h1>The Fifth Fleet</h1>
      <p>
        The Fifth Fleet is a world wide gaming community! We play any games
        aslong as they are with our fellow friends and comrades.
      </p>
      <a href="https://discord.gg/xWtNFVR" class="btn">Discord</a>
    </div>
  </header>
  </div>
  )
}
