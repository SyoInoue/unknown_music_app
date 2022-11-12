import Human from '../components/icon/Human'
import Music from '../components/icon/Music'
import Heart from '../components/icon/Heart'
import Post from '../components/icon/Post'
import { ContainerItemProps } from '../components/top-page/types/TopPageTypeProps'

const ContainerObject: ContainerItemProps[] = [
  {
    number: 1,
    title: 'Sign Up',
    text01: 'まずはアカウント登録をしてみよう！',
    text02: '所要時間約1分！',
    text03: 'ゲストユーザー機能を使ってみてもOK！',
    image: <Human />,
  },
  {
    number: 2,
    title: 'Music',
    text01: 'ログインできたら検索エンジンに',
    text02: 'お気に入りの曲を入れてみよう！',
    text03: '新たな音楽との出会いが始まるよ！',
    image: <Music />,
  },
  {
    number: 3,
    title: 'Like',
    text01: '好みにぴったりな一曲に出会えたら、',
    text02: 'ハートのいいね！ボタンを押してみよう！',
    text03: '聞きたい曲をストック出来るよ！',
    image: <Heart />,
  },
  {
    number: 4,
    title: 'Post',
    text01: 'このアプリで名曲に出会えたら、',
    text02: '是非他の人にもシェアしてみよう！',
    text03: '',
    image: <Post />,
  },
]

export default ContainerObject
