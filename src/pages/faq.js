import React from 'react'
import Layout from '../components/layout'
import { getResponsive } from '../shared/js/responsive'
import Chat from '../components/chat/chat'

export default ({ data }) => {
  const responsive = getResponsive()
  const device = responsive.getDevice()

  return (
    <Layout device={device} title="FAQ" theme="pink">
      <Chat device={device}/>
    </Layout>
  )
}
