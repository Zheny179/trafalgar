import { Head } from 'minista'
import Header from '@/layouts/header'
import './styles'
import Footer from '@/layouts/footer'
import Content from '@/layouts/Content'

export default (props) => {
  const { children, url, title } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>Trafalgar | {title}</title>
        <script
          src='/src/main.js'
          type='module'
        />
      </Head>
      <Header url={url} />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
