import React, { useEffect, useState, useCallback } from 'react'
import axios from "axios"
import { TuneableTrack } from "spotify-types";

interface TrackParamsProps{
  token: string;
  trackId: string;
}

//曲IDからトラックパラメータ取得
const useTrackParams = (props:TrackParamsProps) => {
const {token, trackId} = props;
const [trackInfo, setTrackInfo] = useState<TuneableTrack>();

//曲のパラメーターの取得。TrackParams
  useEffect(() => {
    axios.get(`https://api.spotify.com/v1/audio-features/${trackId}`, {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
        "Content-type": "application/json"}
    }).then((trackInfoResponse) => {
      setTrackInfo(trackInfoResponse.data)
      console.debug(setTrackInfo)
    })
    .catch((err) => {
        console.debug("err:", err)
      })
  }, [trackId])

  return trackInfo
};
export default useTrackParams;