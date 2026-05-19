import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-8 flex flex-row gap-8 bg-gray-600 text-white p-12 text-3xl'>
        <div>
        <img src={data.avatar_url} alt="Git picture" width={200} />
        </div>
        <div className='ml-4 text-2xl text-left ' >
            Github followers-{data.followers}<br/>
            Repositories-{data.public_repos}<br/>
            following- {data.following}<br/>
            Login- {data.login}<br/>
            url- {data.html_url}<br/>
            Bio- {data.bio}<br/>
        </div>
    
    
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Ayushicodr')
    return response.json()
}
