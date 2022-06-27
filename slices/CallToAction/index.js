import { PrismicLink, PrismicRichText } from "@prismicio/react"

const CallToAction = ({
  slice: {
    primary: { title, link, linkText },
  },
}) => (
  <section className="container">
    <PrismicRichText field={title} />
    <PrismicLink field={link}>{linkText}</PrismicLink>
  </section>
)

export default CallToAction
