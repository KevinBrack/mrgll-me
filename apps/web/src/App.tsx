import { useState, useEffect } from 'react'
import type { User, ApiResponse } from '@repo/types'
import './App.css'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('http://localhost:3001/api/users')
      .then(res => res.json())
      .then((data: ApiResponse<User[]>) => {
        if (data.success) {
          setUsers(data.data)
        } else {
          setError(data.error || 'Failed to fetch users')
        }
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="App">
      <h1>Users</h1>
      <div className="card">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
