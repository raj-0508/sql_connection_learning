"use client"

import { useQuery } from '@tanstack/react-query'

type Item = {
  id: number
  name: string
  description: string
}

export default function HomePage() {
  const { data: items, isLoading, error } = useQuery<Item[]>({
    queryKey: ['items'],
    queryFn: () => fetch('http://localhost:8000/items').then(res => res.json()),
    refetchInterval: 5000, // optional, refetch every 5 seconds
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error fetching items</div>

  return (
    <main>
      <h1>Dummy Items</h1>
      <ul>
        {items?.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </main>
  )
}
