'use client'
// Importa useState y useEffect si no están ya importados
import React from 'react'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogCancel
} from '@/components/ui/alert-dialog'

export function PopUpImage ({ onClose, onSelect }) {
  const memojiImages = Array.from({ length: 5 }, (_, i) => `/assets/avatars/memojis/${i + 1}.webp`)

  const handleImageClick = (index) => {
    const selectedImage = memojiImages[index]
    onSelect(selectedImage)
    onClose()// Cierra el diálogo después de la selección de la imagen
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="flex-shrink-0" onClick={onClose}>
          <img
            src="/assets/close-icon.png" // Puedes utilizar un ícono de cierre o cualquier otro elemento
            alt="Close"
            className="w-6 h-6 cursor-pointer"
          />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="flex flex-wrap">
          {memojiImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Memoji ${index + 1}`}
              className="w-16 h-16 m-2 cursor-pointer"
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        <AlertDialogCancel>Close</AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  )
}
