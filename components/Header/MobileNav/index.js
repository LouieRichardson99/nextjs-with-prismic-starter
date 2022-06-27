import { Fragment } from "react"
import Link from "next/link"
import Image from "next/image"
import { SliceZone } from "@prismicio/react"
import { components } from "../../../slices"
import styles from "./styles.module.scss"
import { MenuIcon, XIcon } from "@heroicons/react/solid"
import { Popover } from "@headlessui/react"

export const MobileNav = ({ slices, image }) => {
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

      <Popover>
        {({ open }) => (
          <Fragment>
            <Popover.Button className={styles.button}>
              <MenuIcon />
            </Popover.Button>

            {open && (
              <nav className={styles.nav}>
                <div className={styles.menuButtonContainer}>
                  <button className={styles.button}>
                    <XIcon />
                  </button>
                </div>
                <ul className={styles.navList}>
                  <SliceZone slices={slices} components={components} />
                </ul>
              </nav>
            )}
          </Fragment>
        )}
      </Popover>
    </div>
  )
}
