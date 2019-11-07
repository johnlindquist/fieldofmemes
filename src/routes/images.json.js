const fs = require("fs").promises
const path = require("path")

export async function get(req, res, next) {
  const images = await fs.readdir(
    path.join(__dirname, `../../../static/images`)
  )
  res.end(JSON.stringify(images.map(image => `images/${image}`)))
}
