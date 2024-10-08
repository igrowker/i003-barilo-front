import { useEffect, useState } from 'react'
import { getProfile} from '@/services/authService'
import {UserProfile} from '@/services/authService'

const UserProfileComponent = () => {
  const [user, setUser] = useState<UserProfile | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await getProfile()
      if (profile) {
        setUser(profile)
      }
    }

    fetchProfile()
  }, [])

  return (
    <div>
      {user ? (
        <div>
          <h1>Nombre: {user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Rol: {user.role}</p>
        </div>
      ) : (
        <p>Cargando perfil...</p>
      )}
    </div>
  )
}

export default UserProfileComponent
