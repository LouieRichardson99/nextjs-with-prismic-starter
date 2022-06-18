import Link from "next/link"
import { Layout } from "../components/Layout"
import { createClient } from "../prismicio"

const Custom404 = ({ lang, ...layout }) => {
  const seo = {
    metaTitle: "404 - Page not found",
    metaDescription:
      "The page you were looking for unfortunately does not exist",
    metaImage: null,
    url: "/404",
    article: false,
    lang,
  }

  return (
    <Layout seo={seo} {...layout}>
      <h1>Page not found</h1>
      <p>The page you were looking for unfortunately does not exist</p>
      <Link href="/">Return to the homepage</Link>
    </Layout>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const header = await client.getSingle("header")
  const footer = await client.getSingle("footer")

  return {
    props: { header, footer },
  }
}

export default Custom404
