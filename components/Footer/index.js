import { SliceZone } from "@prismicio/react"
import { components } from "../../slices"
import styles from "./styles.module.scss"

export const Footer = ({ slices }) => (
  <footer className="container">
    <nav>
      <ul className={styles.navLinks}>
        <SliceZone slices={slices} components={components} />
      </ul>
    </nav>
  </footer>
)
