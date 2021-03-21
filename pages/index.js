import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="head-content">
      <h1>The Fifth Fleet - Gaming Community</h1>
      <video src="/video.mkv" autoPlay muted></video>
      <button>Discord</button>
    </div>
    )
}
