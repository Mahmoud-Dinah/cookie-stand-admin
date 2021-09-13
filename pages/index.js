import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>cookie-stand-admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className="flex items-center justify-between p-4 bg-green-500 text-green-50">
          <h1 className="text-4xl">cookie-stand-admin</h1>
          <p>some text</p>
        </header>
        <form className="m-8 p-4 bg-green-200  rounded-md"> 
        
        <h2 className="text-3xl">cookie-stand-admin</h2>
        <div className="flex items-stretch">
        <label className=" m-3"for="location">Location</label>
        <input name="location"className= " bg-gray-100 m-3 w-2/3" />
          </div>
        <table className="mx-auto w-1/2 my-8">
          <thead>
            <tr>
              <th className="border border-gray-70">Max Customer per Hour</th>
              <th className="border border-gray-70">Min Customer per Hour</th>
              <th className="border border-gray-70">Average Cookie per sale</th>
            </tr>
          </thead>
          <tbody>
                <td className="pl-2 border border-gray-700">1</td>
                <td className="pl-2 border border-gray-700">2</td>
                <td className="pl-2 border border-gray-700">3</td>
          </tbody>
        </table>
        <button className="px-2 p-1 m-4 bg-green-500 text-black-50" >Create</button>
        </form>
        <footer className="p-4 mt-8 bg-green-500 text-green-50">
            <p>&copy; 2021</p>
            
        </footer>
      </main>
    </div>
  )
}
