import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { SliceZone } from "@prismicio/react"
import { components } from "../../../slices"
import styles from "./styles.module.scss"
import { MenuIcon, XIcon } from "@heroicons/react/solid"

export const MobileNav = ({ slices, image }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => {
    setIsOpen(!isOpen)
  }

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

      <button className={styles.button} onClick={handleMenu}>
        <MenuIcon />
      </button>

      {isOpen && (
        <nav className={styles.nav}>
          <div className={styles.menuButtonContainer}>
            <button className={styles.button} onClick={handleMenu}>
              <XIcon />
            </button>
          </div>
          <ul className={styles.navList}>
            <SliceZone slices={slices} components={components} />
          </ul>
        </nav>
      )}
    </div>
  )
}
