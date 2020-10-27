import React, { useEffect } from 'react'
import { useRouter, } from 'next/router'

const Home = () => {
  const router = useRouter()
  useEffect(() => {
    router.push("/bestMenu")
  }, [])
  return (
    <></>
  )

}

export default Home;