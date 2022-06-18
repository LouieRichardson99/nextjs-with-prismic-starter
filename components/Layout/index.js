import { Fragment } from "react"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { Seo } from "../Seo"

export const Layout = ({ seo, header, footer, children }) => (
  <Fragment>
    <Seo {...seo} />
    <Header {...header?.data} />
    <main>{children}</main>
    <Footer {...footer?.data} />
  </Fragment>
)
