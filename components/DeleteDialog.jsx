'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'

import {Trash2} from "lucide-react"

export default function DeleteDialog ({ id, name, action }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        type='button'
        className='inline-flex
    items-center
    justify-center
    gap-2
    rounded-md
    bg-destructive
    px-4
    py-2
    text-sm
    font-medium
    text-destructive-foreground
    shadow-sm
    transition-all
    hover:-translate-y-0.5
    hover:bg-destructive/90
    hover:shadow-md'
      >
        <Trash2 className='size-4' />
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Hapus pesan?</AlertDialogTitle>

          <AlertDialogDescription>
            Apakah Anda yakin ingin menghapus pesan dari{' '}
            <span className='font-semibold'>{name}</span>?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>

          <form action={action}>
            <input type='hidden' name='id' value={id} />

            <AlertDialogAction aschild>
              <button type='submit'>Hapus</button>
            </AlertDialogAction>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
