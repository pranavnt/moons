import moons from "../../moons";

export default function handler(req, res) {
  let moon = req.query.moon;

  if (moon) {
    res.json(moons[moon]);
  } else {
    res.json(moons);
  }
}
