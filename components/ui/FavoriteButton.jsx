'use client'

// import { useState } from 'react'
import { Button } from '@/components/ui/button'

import { useFavorite } from '@/context/FavoriteContext'

export default function FavoriteButton ({ userid }) {
  const { isFavorite, toggleFavorite } = useFavorite()
  const favorited = isFavorite(userid)

  return (
    <Button
      onClick={() => toggleFavorite(userid)} // jalankan fungsi toggle dengan parameter userid
      className={`group/btn ${
        favorited
          ? 'bg-primary hover:bg-accent-foreground/90'
          : 'bg-accent text-white hover:bg-primary'
      }`}
    >
      {favorited ? (
        <>
          <span className='group-hover/btn:hidden'>♥ Favourite</span>
          <span className='hidden group-hover/btn:inline'>Remove Favorite</span>
        </>
      ) : (
        '♡ Add Favourite'
      )}
    </Button>
  )
}
