import data from '../../../data.json'

export default async function handle(req, res) {
  res.json(data.clients)
}