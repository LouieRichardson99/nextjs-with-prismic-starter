import { exitPreview } from "@prismicio/next"

const exit = async (req, res) => {
  exitPreview({ res, req })
}

export default exit
