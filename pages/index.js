import { useState } from "react"
import useSWR from "swr"

const Index = () => {
  const [showClients, setShowClients] = useState(false)
  const [ selectedClient, setSelectedClient] = useState(null)
  const { data: clients } = useSWR(showClients ? '/api/clients' : null)
  const { data: client } = useSWR(() => '/api/clients/'+ selectedClient + '/orders')
  return(
    <div>
      <h1>Clients</h1>
      <button onClick={() => {
        setShowClients(old => !old)
        setSelectedClient(null)
      }}>Showing clients: {JSON.stringify(showClients)}</button>
      <h2>Client {selectedClient}:</h2>
      { client && <pre>{JSON.stringify(client)}</pre>}
      <h2>Clients:</h2>
      {clients && clients.map(item => {
        return <p>{item.id}: {item.first_name} {item.last_name} <button onClick={()=> setSelectedClient(item.id)}>Select</button></p>
      })}
    </div>
  )
}
export default Index