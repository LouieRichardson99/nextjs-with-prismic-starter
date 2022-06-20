import { SliceZone } from "@prismicio/react"
import { components } from "../../slices"
import styles from "./styles.module.scss"

export const Footer = ({ slices }) => (
  <footer className={styles.footer}>
    <nav>
      <ul className={styles.navList}>
        <SliceZone slices={slices} components={components} />
      </ul>
    </nav>
  </footer>
)
