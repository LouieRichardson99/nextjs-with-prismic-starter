import { PrismicLink, PrismicRichText } from "@prismicio/react"
import styles from "./styles.module.scss"

const FooterLinks = ({ slice: { items, primary } }) => (
  <li>
    <div className={styles.navItemsTitle}>
      <PrismicRichText field={primary.sectionTitle} />
    </div>
    <div className={styles.navItems}>
      {items.map(({ link, linkText }, index) => (
        <PrismicLink key={index} field={link}>
          {linkText}
        </PrismicLink>
      ))}
    </div>
  </li>
)

export default FooterLinks
