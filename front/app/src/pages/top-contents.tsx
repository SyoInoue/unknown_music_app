import React, { useState } from 'react'
import Layout from '../components/common/Layout'
import Search from '../components/search/Search'
import TextField from '@mui/material/TextField'
import useCredentials from '../components/search/hooks/useCredentials'
import { NextPage } from 'next'

const TopContents: NextPage = () => {
  const token = useCredentials()
  const [wordFormData, setWordFormData] = useState('')

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault()
    if (wordFormData === '') {
      alert('入力してください')
    }
  }

  return (
    <Layout title='Top-Contents'>
      <div className=' container mx-auto mt-32 pb-16 text-purple-900 sm:max-w-xl md:max-w-2xl lg:max-w-4xl'>
        <form
          className='mx-auto w-[350px] sm:w-full'
          noValidate
          onSubmit={handleSubmit}
        >
          <TextField
            className='bg-white'
            id='standard-basic'
            label='アーティスト名? or 曲名?'
            value={wordFormData}
            fullWidth
            variant='filled'
            onChange={(e) => setWordFormData(e.target.value)}
          />
        </form>
        {wordFormData.length !== 0 && (
          <Search token={token} wordFormData={wordFormData} />
        )}
      </div>
    </Layout>
  )
}
export default TopContents
