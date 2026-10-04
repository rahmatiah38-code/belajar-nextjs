"use client"

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

export default function DeleteDialog({ id, name, action }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        type="button"
        className="
          inline-flex
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
          hover:shadow-md
        "
      >
        <Trash2 className="size-4" />
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Hapus pesan?
          </AlertDialogTitle>

          <AlertDialogDescription>
            Apakah Anda yakin ingin menghapus{" "}
            <span className="font-semibold">
              {name}
            </span>
            ?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>
            Batal
          </AlertDialogCancel>

          <form action={action}>
            <input
              type="hidden"
              name="id"
              value={id}
            />

            <Button
              type="submit"
              variant="destructive"
            >
              Hapus
            </Button>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}