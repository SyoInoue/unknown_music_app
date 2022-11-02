import React, { useEffect, useState } from "react";
import axios from "axios";
import { Track } from "spotify-types";

interface RecommendProps{
  token: string;
  trackId: string;
  artistId: string;
  artistGenres: string;
}
//選んだ曲のアーティストID、ジャンル、トラックIDからトラックパラメータ取得
const useRecommend = (props : RecommendProps) => {
  const {token, trackId, artistId, artistGenres} = props;
  const [lookRecommend, setLookRecommend] = useState<Track[]>([]); //レコメンドする曲 Recommend
  console.debug(props.artistGenres);
  useEffect(() => {
    axios(
      `https://api.spotify.com/v1/recommendations?limit=10&seed_artists=${artistId}&seed_genres=${artistGenres}&seed_tracks=${trackId}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          Accept: "application/json",
          "Content-type": "application/json",
        },
      }
    )
      .then((recommendResponse) => {
        setLookRecommend(recommendResponse.data.tracks);
        console.debug(recommendResponse.data);
      })
      .catch((err) => {
        console.debug("err:", err);
      });
  }, [trackId]);
  return ( {lookRecommend, setLookRecommend} )
};
export default useRecommend;