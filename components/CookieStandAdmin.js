import Head from 'next/head'
import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateForm from './CreateForm'
import ReportTable from './ReportTable'

export default function CookieStandAdmin() {

    const [cookiesInformations,setCookIesinfo] = useState([])
  
    function cookieInfoHandler(formInfo) {
      
      
     
      const cookiesInfo = {
        location: formInfo.location,
        hour_sales: formInfo.hour_sales
        
      }
  
      setCookIesinfo(info => [...info, cookiesInfo])
  
  
    }
    const hours = ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm']
    
    function getLatestReply() {
      if(cookiesInformations.length>=1){
        return cookiesInformations[cookiesInformations.length-1]
  
        
      
      } else{
        return "Nothing added"
      }
    }

    return (
        <div >
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>

            <main >
                <Header />
                <CreateForm cookieInfoHandler={cookieInfoHandler} />
                {cookiesInformations.length ?
                    <ReportTable hours={hours} cookiesInformations={cookiesInformations} /> :
                    <p className="text-center ">No Cookies Stand available</p>
                }
            </main>
            <footer className="p-4 mt-8 bg-green-500 text-black-50" >
                <Footer cookiesInformations={cookiesInformations} />
            </footer>
        </div>
    )

}