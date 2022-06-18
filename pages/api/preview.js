import { linkResolver, createClient } from "../../prismicio"
import { setPreviewData, redirectToPreviewURL } from "@prismicio/next"

const preview = async (req, res) => {
  const client = createClient({ req })
  setPreviewData({ req, res })
  await redirectToPreviewURL({ req, res, client, linkResolver })
}

export default preview
