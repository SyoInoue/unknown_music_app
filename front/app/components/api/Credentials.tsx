import React,{ useEffect }from 'react'
import axios from 'axios'

const Credentials:React.FC = (props : any) => {
  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization:
        "Basic " + btoa(process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID + ":" + process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET),
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: "grant_type=client_credentials"
    }).then((tokenResponse) => {
      console.log(
          "アクセストークン："
          + tokenResponse.data.access_token)
          {props.setToken(tokenResponse.data.access_token)}
    }
    )
  }, [])
  return (
    <div>
      { props.setToken }
    </div>
  )
  }
  export default Credentials;