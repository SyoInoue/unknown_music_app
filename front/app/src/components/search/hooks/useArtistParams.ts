import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ArtistInfoProps, ArtistParamsProps } from '../types/SearchTypeProps'

//受け取ったアーティストIDから
const useArtistParams = (props: ArtistParamsProps) => {
  const { token, artistId } = props
  const [artistInfo, setArtistInfo] = useState<ArtistInfoProps>({
    external_urls: {},
    followers: {},
    genres: '',
    href: '',
    id: '',
    images: {},
    name: '',
    popularity: 0,
    type: '',
    uri: '',
  }) //アーティスト情報の取得 ArtistInfo,
  useEffect(() => {
    axios(`https://api.spotify.com/v1/artists/${artistId}`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    })
      .then((artistResponse) => {
        setArtistInfo(artistResponse.data)
        console.debug(artistResponse.data)
      })
      .catch((err) => {
        console.debug('err:', err)
      })
  }, [artistId])
  return artistInfo
}
export default useArtistParams
