import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>DUO Servis – Zakázkový systém</title>
      </Head>
      <main style={{ padding: '2rem' }}>
        <h1>Vítejte v zakázkovém systému DUO Servis</h1>
        <p>Začněte vytvořením nové zakázky nebo přejděte na seznam existujících.</p>
      </main>
    </>
  )
}
