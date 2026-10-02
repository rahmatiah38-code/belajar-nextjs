'use client'

// import { useState } from 'react'
import { Button } from '@/components/ui/button'

import { useFavorite } from '@/context/FavoriteContext'
import { Heart } from 'lucide-react'

export default function FavoriteButton ({ user }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorite()
  const favorited = isFavorite(user.id)

  return (
    <Button
      variant={favorited ? 'secondary' : 'outline'}
      className='rounded-full'
      aria-pressed={favorited}
      onClick={() => (favorited ? removeFavorite(user.id) : addFavorite(user))}
    >
      <Heart className={favorited ? 'fill-red-500 text-red-500' : ''} />
      {favorited ? 'Favourite' : 'Add Favourite'}
    </Button>
  )
}
