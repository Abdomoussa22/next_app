import React from 'react'
import Link from 'next/link'
const Error = () => {
  return (
    <>
    <h3>
        this page is not available
    </h3>
        <Link className='btn btn-dark' href='/'>Go Home </Link>
    </>
  )
}

export default Error