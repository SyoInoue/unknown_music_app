import React, { useState } from 'react'
import Loader from 'react-loader-spinner'
import ReactHowler from 'react-howler'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Slider from '@mui/material/Slider'
import Snackbar from '@mui/material/Snackbar'
import NotInterestedIcon from '@mui/icons-material/NotInterested'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import ParamsGraph from './ParamsGraph'
import TrackCard from './TrackCard'
import Trail from './animation/Trail'
import useTrackParams from './hooks/useTrackParams'
import useQueryTracks from './hooks/useQueryTracks'
import useArtistParams from './hooks/useArtistParams'
import useRecommend from './hooks/useRecommend'
import useReTrackParams from './hooks/useReTrackParams'
import { Track } from 'spotify-types'
import {
  SearchProps,
  SelectedTrackProps,
  SelectedRecommendProps,
} from './types/SearchTypeProps'

const Search: React.FC<SearchProps> = (props) => {
  const { token, wordFormData } = props //wordFormDataはQueryTracksで使用。
  const [playing, setPlaying] = useState(false) //再生停止
  const [playSrc, setPlaySrc] = useState('') //再生する曲のリロード
  const [volumeToggle, setVolumeToggle] = useState(0.2) //初期音量
  const [trailOpen, setTrailOpen] = useState(true) //React-Springの挙動制御
  const [snackBarOpen, setSnackBarOpen] = useState(false) //曲を選んだ後のポップアップ
  const [graphReDisplay, setGraphReDisplay] = useState('none') //選び直した曲がRadarChartにセットされる
  const [selectedRecommend, setSelectedRecommend] = //類似曲のパラメーター
    useState<SelectedRecommendProps>({
      reTrackId: '',
      reTrackName: 'none',
      reTrackPopularity: 0,
      reTrackArtwork: '',
    })
  const [selectedTrack, setSelectedTrack] = useState<SelectedTrackProps>({
    //曲のパラメーター
    trackId: '',
    trackName: '',
    trackArtistId: '',
    trackArtistName: '',
    trackArtworkUrl: '',
    trackPopularity: 0,
  })
  const trackId = selectedTrack.trackId
  const reTrackId = selectedRecommend.reTrackId
  const artistId = selectedTrack.trackArtistId
  // 選ばれた曲のパラメータを取得
  const trackInfo = useTrackParams({ token, trackId })
  // 選ばれた類似曲のパラメータ取得
  const reTrackInfo = useReTrackParams({ token, reTrackId })
  // 入力された単語から曲を検索
  const itemResult = useQueryTracks({ token, wordFormData })
  // 選ばれた曲のアーティスト情報を取得
  const artistInfo = useArtistParams({ token, artistId })
  // ジャンル数が多いと検索に出ない為、3つまでしか取得しない
  const artistGenres = artistInfo.genres.slice(0, 3)
  //選ばれた類似曲のアーティスト情報等取得
  const lookRecommend = useRecommend({
    token,
    artistId,
    artistGenres,
    trackId,
  })
  //ボリュームノブの制御
  const handleChange = (event: Event, newValue: number | number[]): void => {
    setVolumeToggle(newValue as number)
  }
  //選んだ曲の通知
  const handleSnackBarOpen = () => {
    setSnackBarOpen(true)
  }
  const handleSnackBarClose = () => {
    setSnackBarOpen(false)
  }
  //選び直した曲をグラフにセット
  const handleSearchView = () => {
    setGraphReDisplay('none')
    setTrailOpen(true)
  }
  const handleDataView = () => {
    setGraphReDisplay('block')
    setTrailOpen(false)
  }

  return (
    <div className='max-w-sm pt-10 sm:max-w-4xl'>
      <div className='rounded-xl bg-gray-900 text-gray-200'>
        {/* 音楽再生コントローラー */}
        {playSrc !== null && playSrc.length !== 0 && (
          <ReactHowler
            format={'mp3'}
            playing={playing}
            src={playSrc}
            volume={volumeToggle}
          />
        )}
        {/* 曲を選んだ通知 */}
        <Snackbar
          open={snackBarOpen}
          autoHideDuration={2000}
          onClose={handleSnackBarClose}
          sx={{ height: '10%' }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <Alert
            severity='success'
            elevation={24}
            variant='filled'
            action={
              <button
                onClick={() => handleDataView()}
                className='rounded-full bg-green-900 py-2 px-4 text-xs font-bold text-purple-200 hover:bg-green-800'
              >
                open!
              </button>
            }
          >
            データグラフとおすすめ曲が準備されました
          </Alert>
        </Snackbar>
        {/* 要素表示トグル 音量調節 */}
        <Grid container spacing={0}>
          <Grid
            item={true}
            className='flex justify-center whitespace-nowrap pt-6 pb-6 text-center'
            xs={6}
            sm={3}
          >
            <button
              onClick={() => handleDataView()}
              className='rounded-full bg-purple-900 py-2 px-2 font-serif text-xs font-bold text-purple-200 hover:bg-purple-700 sm:px-3'
            >
              レコメンド曲
            </button>
          </Grid>
          <Grid
            item={true}
            className='flex justify-center whitespace-nowrap pt-6 pb-6 text-center'
            xs={6}
            sm={3}
          >
            <button
              className='rounded-full bg-purple-900 py-2 px-3 font-serif text-xs font-bold text-purple-200 hover:bg-purple-700'
              onClick={() => handleSearchView()}
            >
              検索結果
            </button>
          </Grid>
          <Grid
            item={true}
            className='flex items-center justify-center'
            xs={2}
            sm={1}
          >
            <VolumeDownIcon style={{ color: '#9900ff' }} />
          </Grid>
          <Grid
            item={true}
            className='flex items-center justify-center'
            xs={8}
            sm={4}
          >
            <Slider
              value={volumeToggle}
              style={{ color: '#9900ff' }}
              min={0}
              step={0.001}
              max={1}
              onChange={handleChange}
              aria-labelledby='continuous-slider'
            />
          </Grid>
          <Grid
            item={true}
            className='flex items-center justify-center'
            xs={2}
            sm={1}
          >
            <VolumeUpIcon style={{ color: '#9900ff' }} />
          </Grid>
        </Grid>
        {/* グラフコンポーネントへの値設定 */}
        <Grid container direction='row' justifyContent='center'>
          <Grid item={true} xs={10} sm={6} style={{ display: graphReDisplay }}>
            {trackInfo !== undefined && reTrackInfo !== undefined && (
              <ParamsGraph
                // 検索結果で選んだ曲のパラメータをグラフに投入
                trackName={selectedTrack.trackName}
                FirstPopularity={selectedTrack.trackPopularity}
                FirstDanceAbility={trackInfo.danceability}
                FirstEnergy={trackInfo.energy}
                FirstLoudness={trackInfo.loudness}
                FirstTempo={trackInfo.tempo}
                FirstValence={trackInfo.valence}
                // サジェストで選んだ曲のパラメータをグラフに投入
                reTrackName={selectedRecommend.reTrackName}
                RePopularity={selectedRecommend.reTrackPopularity}
                ReDanceAbility={reTrackInfo.danceability}
                ReEnergy={reTrackInfo.energy}
                ReLoudness={reTrackInfo.loudness}
                ReTempo={reTrackInfo.tempo}
                ReValence={reTrackInfo.valence}
              />
            )}
          </Grid>
          {/* 類似曲の表示条件分岐 */}
          <Grid item={true} xs={12} md={6} style={{ display: graphReDisplay }}>
            {lookRecommend !== undefined && artistInfo.genres !== undefined && (
              <>
                <Grid item={true} xs={12} sm={12}>
                  <Typography
                    variant='h4'
                    className='text-center font-serif text-purple-400'
                  >
                    RecommendList
                  </Typography>
                </Grid>
                <ul>
                  {lookRecommend.map((props: Track) => (
                    <li
                      className='list-none border-b border-solid border-purple-700 pt-3 pb-3 pl-0 transition-all'
                      key={props.id}
                      onClick={() =>
                        setSelectedRecommend({
                          reTrackArtwork: props.album.images[1].url,
                          reTrackId: props.id,
                          reTrackName: props.name,
                          reTrackPopularity: props.popularity,
                        })
                      }
                    >
                      <TrackCard
                        artistName={props.album.artists[0].name}
                        artworkUrl={props.album.images[1].url}
                        trackName={props.name}
                        previewUrl={props.preview_url}
                        playing={playing}
                        playSrc={playSrc}
                        setPlaying={setPlaying}
                        setPlaySrc={setPlaySrc}
                      ></TrackCard>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </Grid>
        </Grid>
        <Typography
          variant='subtitle2'
          className='block pl-3 pb-3 pt-3 text-center text-gray-300'
        >
          <div className='inline-block text-left'>
            <br />
            １）曲をクリックすると解析が始まります。
            <br />
            ２）再生/停止はアートワークでも操作可能です。
            <br />
            ３）
            <NotInterestedIcon style={{ fontSize: 15 }} />
            は権利元によりプレビューが許可されていません。
          </div>
        </Typography>
        {itemResult !== undefined && itemResult.length === 0 ? (
          <div className='container mx-auto flex justify-center pb-10 pt-4'>
            <Loader
              type='Audio'
              color='rgba(109, 40, 217)'
              height={60}
              width={60}
            />
          </div>
        ) : (
          <>
            <Typography
              variant='h4'
              className='pl-3 text-center font-serif text-purple-400'
            >
              TrackList
            </Typography>
            <ul className='m-0 p-0' onClick={handleSnackBarOpen}>
              {itemResult.map((props: Track) => (
                <li
                  className='list-none border-b border-solid border-purple-700 pt-3 pb-3 pl-0 transition-all'
                  key={props.id}
                  onClick={() =>
                    setSelectedTrack({
                      trackId: props.id,
                      trackName: props.name,
                      trackArtistId: props.artists[0].id,
                      trackArtistName: props.artists[0].name,
                      trackArtworkUrl: props.album.images[1].url,
                      trackPopularity: props.popularity,
                    })
                  }
                >
                  {/* Trail発火で消えてしまうため、RadarChartの下のTrackCard表示 */}
                  {trailOpen == false ? (
                    <TrackCard
                      artistName={props.album.artists[0].name}
                      artworkUrl={props.album.images[1].url}
                      trackName={props.name}
                      previewUrl={props.preview_url}
                      playing={playing}
                      playSrc={playSrc}
                      setPlaying={setPlaying}
                      setPlaySrc={setPlaySrc}
                    ></TrackCard>
                  ) : undefined}
                  {/* Trail発火で消えてしまうため、RadarChartの下のTrackCard表示 */}
                  <Trail open={trailOpen}>
                    <TrackCard
                      artistName={props.album.artists[0].name}
                      artworkUrl={props.album.images[1].url}
                      trackName={props.name}
                      previewUrl={props.preview_url}
                      playing={playing}
                      playSrc={playSrc}
                      setPlaying={setPlaying}
                      setPlaySrc={setPlaySrc}
                    ></TrackCard>
                  </Trail>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}
export default Search
