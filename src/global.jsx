import { Head } from "minista"
import Header from "@/layouts/header"
import "./styles"
import Footer from "@/layouts/footer"

export default (props) => {
  const { children, url } = props

  return (
    <>
      <Head htmlAttributes={{ lang: "en" }}>
        <title>Hello!</title>
        <script src="/src/main.js" type="module" />
      </Head>
      <Header url={url} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
