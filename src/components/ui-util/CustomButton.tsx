import React from 'react'
import { Button } from '../ui/button'

interface ButtonProp extends React.ButtonHTMLAttributes<HTMLButtonElement>{}

export default function CustomButton({children,...rest}:ButtonProp) {
  return (
    <Button {...rest} className='bg-main text-background hover:bg-main rounded-lg hover:brightness-110'>
        {children}
    </Button>
  )
}
