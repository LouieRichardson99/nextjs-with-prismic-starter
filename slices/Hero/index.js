import { PrismicLink, PrismicRichText } from "@prismicio/react"

const Hero = ({
  slice: {
    primary: { title, description, link, linkText },
  },
}) => (
  <section className="container">
    <PrismicRichText field={title} />
    <PrismicRichText field={description} />
    <PrismicLink field={link}>{linkText}</PrismicLink>
  </section>
)

export default Hero
