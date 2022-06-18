import { SliceZone } from "@prismicio/react"
import { createClient } from "../prismicio"
import { Layout } from "../components/Layout"
import { components } from "../slices"
import { ContactForm } from "../components/Form/Contact"

const Contact = ({ data, url, lang, ...layout }) => {
  const seo = {
    metaTitle: data?.metaTitle,
    metaDescription: data?.metaDescription,
    metaImage: data?.metaImage,
    url,
    article: false,
    lang,
  }

  return (
    <Layout seo={seo} {...layout}>
      <ContactForm />
      <SliceZone slices={data?.slices} components={components} />
    </Layout>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle("contact")
  const header = await client.getSingle("header")
  const footer = await client.getSingle("footer")

  return {
    props: { header, footer, ...page },
  }
}

export default Contact
