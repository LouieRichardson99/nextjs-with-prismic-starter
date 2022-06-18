import Image from "next/image"
import Link from "next/link"
import * as prismicHelpers from "@prismicio/helpers"
import { SliceZone } from "@prismicio/react"
import { components } from "../../slices"
import styles from "./styles.module.scss"

export const Header = ({ logo, slices }) => {
  const image = {
    src: prismicHelpers.asImageSrc(logo),
    alt: logo?.alt,
    width: logo?.dimensions.width,
    height: logo?.dimensions.height,
  }

  return (
    <header className={styles.container}>
      <Link href="/">
        <div className={styles.image}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </div>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <SliceZone slices={slices} components={components} />
        </ul>
      </nav>
    </header>
  )
}
