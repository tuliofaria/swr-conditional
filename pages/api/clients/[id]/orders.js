import data from '../../../../data.json'

export default async function handle(req, res) {
  const orders = data.orders.filter(order => {
    return (order.client_id === Number(req.query.id))
  })
  res.json(orders)
}