import { SliceZone } from "@prismicio/react"
import { components } from "../../slices"

export const Footer = ({ slices }) => (
  <footer>
    <nav>
      <ul>
        <SliceZone slices={slices} components={components} />
      </ul>
    </nav>
  </footer>
)
