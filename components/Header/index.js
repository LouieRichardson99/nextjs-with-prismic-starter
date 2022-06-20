import * as prismicHelpers from "@prismicio/helpers"
import styles from "./styles.module.scss"
import { DesktopNav } from "./DesktopNav"
import { MobileNav } from "./MobileNav"

export const Header = ({ logo, slices }) => {
  const image = {
    src: prismicHelpers.asImageSrc(logo),
    alt: logo?.alt,
    width: logo?.dimensions.width,
    height: logo?.dimensions.height,
  }

  return (
    <header className={styles.container}>
      <DesktopNav image={image} slices={slices} />
      <MobileNav image={image} slices={slices} />
    </header>
  )
}
