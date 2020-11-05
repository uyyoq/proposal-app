import React, { useEffect } from 'react'
import { useRouter, } from 'next/router'

const Home = () => {
  const router = useRouter()
  useEffect(() => {
    router.push("/promotion")
  }, [])
  return (
    <></>
  )

}

export default Home;