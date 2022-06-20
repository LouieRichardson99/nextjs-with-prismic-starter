import { Fragment } from "react"
import { PrismicLink } from "@prismicio/react"
import styles from "./styles.module.scss"

const NavLinks = ({ slice: { items } }) => (
  <Fragment>
    {items.map(({ link, linkText }, index) => (
      <li key={index}>
        <PrismicLink field={link}>{linkText}</PrismicLink>
      </li>
    ))}
  </Fragment>
)

export default NavLinks
