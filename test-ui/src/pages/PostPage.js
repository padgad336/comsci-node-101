import axios from 'axios'
import React, { Fragment, useState } from 'react'
import Post from '../components/Post'

import './page.css'

const PostPage = () => {
  const [dataActor, setActor] = useState([])
  const data = {
    url: 'https://i.pinimg.com/originals/28/d2/e6/28d2e684e7859a0dd17fbd0cea00f8a9.jpg',
    species: 'Humen',
    gender: "male",
    name: "Ben Stiller"

  }
  // const createfetch = async () => {
  //   const res = await axios.get('http://localhost:8000/actor')
  //   console.log(res?.data);
  //   setActor(res?.data)
  // }
  // console.log(dataActor);
  return (
    <Fragment>
      {/* <button onClick={createfetch}>gen Card</button> */}
      <div class="container">

        <Post url={data?.url} species={data?.species} gender={data?.gender} name={data?.name} />
      </div>
    </Fragment>
  )
}

export default PostPage
