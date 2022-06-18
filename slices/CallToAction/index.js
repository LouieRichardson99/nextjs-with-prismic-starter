import { PrismicLink, PrismicRichText } from "@prismicio/react"

const CallToAction = ({
  slice: {
    primary: { title, link, linkText },
  },
}) => (
  <section>
    <PrismicRichText field={title} />
    <PrismicLink field={link}>{linkText}</PrismicLink>
  </section>
)

export default CallToAction
