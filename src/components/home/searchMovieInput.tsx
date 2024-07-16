import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover.tsx'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { Search } from 'lucide-react'
import * as colors from 'tailwindcss/colors'

export function SearchMovieInput() {
  return (
    <div className={'mt-4 max-w-96 flex items-center bg-white rounded-md px-2'}>
      <Search color={colors.black} />
      <Popover className={'w-full'}>
        <PopoverTrigger className={'flex w-full '}>
          <Input className={'border-0 text-black w-full flex flex-1 '} />
        </PopoverTrigger>
        <PopoverContent
          align={'start'}
          onOpenAutoFocus={(e) => e.preventDefault()}
        ></PopoverContent>
      </Popover>
    </div>
  )
}
