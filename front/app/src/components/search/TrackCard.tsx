import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import NotInterestedIcon from '@mui/icons-material/NotInterested'
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import AddIcon from '@mui/icons-material/Add'
import Typography from '@mui/material//Typography'
import { TrackCardProps } from './types/SearchTypeProps'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const CardStyle = styled(Card)(() => ({
  display: 'flex',
  backgroundColor: '#1e1022',
  color: '#ff87d6',
  padding: 0,
  height: 100,
}))

const CardMediaStyle = styled(CardMedia)(() => ({
  width: 100,
  height: 100,
}))

const CardContentStyle = styled(CardContent)(() => ({
  width: 'calc(100% - 100px)',
  extOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  padding: 10,
}))

const TrackCard: React.FC<TrackCardProps> = (props) => {
  //再生ボタンの条件分岐に使用
  let ButtonLooks = false
  //マウントされた曲とカードの持つプレビュー曲が同じであれば停止ボタン表示
  if (props.playing === false) {
    ButtonLooks = false
  } else if (props.previewUrl === props.playSrc) {
    ButtonLooks = true
  }
  //音楽が再生されている場合,Search.js再生エンジンにURLを載せ替える
  const MountUrl = () => {
    props.setPlaySrc(props.previewUrl)
  }
  //音楽が再生されていない場合,再生指令をエンジンに送りURLをマウント
  const PlayAndMount = () => {
    MountUrl()
    props.setPlaying(true)
  }
  //音楽が再生されていない場合,再生指令をエンジンに送りURLをマウント
  const handleStartPlaying = () => {
    props.playing ? MountUrl() : PlayAndMount()
  }
  const handleStopPlaying = () => {
    props.setPlaying(false)
  }
  //再生停止を一つのボタンで管理
  const handleStartStop = () => {
    props.playing ? handleStopPlaying() : handleStartPlaying()
  }
  return (
    <>
      {/* ---------アルバムアートワーク--------- */}
      <ThemeProvider theme={theme}>
        <CardStyle elevation={2}>
          {props.previewUrl !== undefined ? (
            <CardMediaStyle
              onClick={() => {
                handleStartStop()
              }}
              image={props.artworkUrl}
            />
          ) : (
            <CardMediaStyle image={props.artworkUrl} />
          )}
          {/* ---------アーティスト情報--------- */}
          <CardContentStyle>
            <div>
              <Typography
                component='h6'
                variant='h6'
                style={{ color: '#bc00eb', fontSize: 18 }}
                noWrap
              >
                {props.trackName}
              </Typography>
              <div className='relative flex'>
                <Typography
                  variant='subtitle1'
                  noWrap
                  style={{ color: '#A78BFA' }}
                >
                  {props.artistName}
                </Typography>
              </div>
              {/* ------------------アイコン類------------------ */}
              <div className='px-30 -py-22 absolute'>
                {/* ---------後で聞く機能--------- */}
                <AddIcon
                  style={{ color: '#bc00eb', fontSize: 30, marginRight: 5 }}
                />
                {/* ---------いいね機能--------- */}
                <FavoriteBorderIcon
                  style={{ color: '#bc00eb', fontSize: 30, marginRight: 5 }}
                />
                <FavoriteIcon
                  style={{
                    color: '#bc00eb',
                    fontSize: 28,
                    display: 'none',
                    marginRight: 5,
                  }}
                />
                {/* ---------再生ボタン機能--------- */}
                {props.previewUrl !== null ? (
                  <>
                    {ButtonLooks ? (
                      <PauseCircleOutlineIcon
                        style={{
                          color: '#bc00eb',
                          fontSize: 30,
                          width: 30,
                          height: 'auto',
                          alignItems: 'center',
                        }}
                        onClick={() => {
                          handleStopPlaying()
                        }}
                      />
                    ) : (
                      <PlayCircleOutlineIcon
                        style={{
                          color: '#bc00eb',
                          fontSize: 30,
                          width: 30,
                          height: 'auto',
                          alignItems: 'center',
                        }}
                        onClick={() => {
                          handleStartPlaying()
                        }}
                      />
                    )}
                  </>
                ) : (
                  <NotInterestedIcon
                    style={{
                      color: '#7f7f7f',
                      fontSize: 30,
                      width: 30,
                      height: 'auto',
                      alignItems: 'center',
                    }}
                  />
                )}
              </div>
            </div>
          </CardContentStyle>
        </CardStyle>
      </ThemeProvider>
    </>
  )
}
export default TrackCard
