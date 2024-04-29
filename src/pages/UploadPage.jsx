import { FileInput, Label } from 'flowbite-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function UploadPage() {
  // const [file, setFile] = useState()
  const API_URL = '/api/parser'

  const navigate = useNavigate()

  const onChange = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('file', file)
    formData.append('fileName', file.name)
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    }

    await axios.post(API_URL, formData, config).then(() => {
      navigate('/parser')
    })
  }

  return (
    <>
      <div className='flex items-center justify-center grid grid-rows-1'>
        <p className='mb-8'>
          Its demo for converting PDF to EXCEL. It works only with Kyivstar billing data. You can load your own or use{' '}
          <a href='https://drive.usercontent.google.com/u/0/uc?id=1AuVrCRtSmiO8g3goL_tvnm-7v3L1FQrq&export=download' download>
            <b>
              {' '}
              <ins>example of this data.</ins>
            </b>
          </a>
        </p>

        <div className='flex w-full items-center justify-center'>
          <Label htmlFor='dropzone-file' className='flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600'>
            <div className='flex flex-col items-center justify-center pb-6 pt-5'>
              <svg className='mb-4 h-8 w-8 text-gray-500 dark:text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 16'>
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2' />
              </svg>
              <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                <span className='font-semibold'>Click to upload</span> or drag and drop
              </p>
              <p className='text-xs text-gray-500 dark:text-gray-400'> PDF</p>
            </div>
            <FileInput
              id='dropzone-file'
              className='hidden'
              method='post'
              formEncType='multipart/form-data'
              accept='.pdf'
              onChange={(e) => {
                onChange(e)
              }}
            />
          </Label>
        </div>
      </div>
    </>
  )
}
export default UploadPage
