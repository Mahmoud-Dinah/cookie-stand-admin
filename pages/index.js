import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>cookie-stand-admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className="flex item-center justify-between p-4 bg-gray-500 text-gray-50">
         <h1 className="text-4xl">cookie-stand-admin</h1>
         <p>some text</p>
        </header>
      </main>
    </div>
  )
}
