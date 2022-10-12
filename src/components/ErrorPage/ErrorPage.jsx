import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <div className='flex flex-col min-h-[700px] justify-center items-center'>
        <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
        <br />
        {error && (
          <div>
            <h3 className='text-red-600 text-xl'>{error.statusText || error.message}</h3>
            <p className='text-center'>{error.status}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default ErrorPage
