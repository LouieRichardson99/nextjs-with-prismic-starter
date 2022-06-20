import { SliceZone } from "@prismicio/react"
import { components } from "../../../slices"
import styles from "./styles.module.scss"
import Link from "next/link"
import Image from "next/image"

export const DesktopNav = ({ slices, image }) => {
  return (
    <div className={styles.container}>
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
    </div>
  )
}
