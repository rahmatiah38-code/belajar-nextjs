'use client'

import { createContext, useContext, useMemo, useState } from 'react'

const FavoriteContext = createContext()

export function FavoriteProvider ({ children }) {
  const [favorites, setFavorites] = useState([])

  // Fungsi untuk mengecek apakah userid tertentu ada di dalam daftar favorit
  const isFavorite = userid => favorites.includes(userid)

  // Fungsi untuk menambah atau menghapus userid dari daftar favorit
  const toggleFavorite = userid => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(userid)) {
        // Jika sudah ada, hapus dari array
        return prevFavorites.filter(id => id !== userid)
      } else {
        // Jika belum ada, tambahkan ke array
        return [...prevFavorites, userid]
      }
    })
  }

  const value = useMemo(() => ({
    favorites,
    isFavorite,
    toggleFavorite
  }), [favorites])

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  )
}

export function useFavorite () {
  const context = useContext(FavoriteContext)

  if (context === undefined) {
    throw new Error('jenis favoriteharus ada dalam <FavoriteContext>')
  }

  return context
}
