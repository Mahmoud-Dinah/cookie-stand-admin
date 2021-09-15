import Link from 'next/link'
export default function Header(){

    return (<>
        <div className="flex-row">
        <header className = "flex items-start justify-between p-4 bg-green-500 text-black-500">
            <h1 className="text-xl">Cookie Stand Admin</h1>
            <Link  href="/overview"><button className="flex items-end p-4 m-4  bg-green-400 rounded-lg">Overview</button></Link>

        </header>
        </div>
          </> 
        )
        }