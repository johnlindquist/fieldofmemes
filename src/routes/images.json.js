const fs = require("fs").promises
const path = require("path")

export async function get(req, res, next) {
  const images = await fs.readdir(path.join(__dirname, `../../../images`))
  res.end(JSON.stringify(images))
}
