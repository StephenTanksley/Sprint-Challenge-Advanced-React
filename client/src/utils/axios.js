import React from 'react'
import axios from 'axios'

export default function useAxios(userLink)
axios.get(`${userLink}`)
    this.render(res => {
      this.setState({players: res.data})
    })
      .catch(err=> {
        console.log(err)
      })