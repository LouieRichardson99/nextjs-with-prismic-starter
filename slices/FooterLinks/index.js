import { PrismicLink, PrismicRichText } from "@prismicio/react"

const FooterLinks = ({ slice: { items, primary } }) => (
  <li>
    <PrismicRichText field={primary.sectionTitle} />
    {items.map(({ link, linkText }, index) => (
      <PrismicLink key={index} field={link}>
        {linkText}
      </PrismicLink>
    ))}
  </li>
)

export default FooterLinks
