import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover.tsx'

import { ChevronDown, ChevronsUpDown, Lightbulb, Search } from 'lucide-react'
import * as colors from 'tailwindcss/colors'
import { SearchResult } from '@/components/searchResult.tsx'

export function SearchMovieInput() {
  return (
    <div className={'mt-4 max-w-96 flex items-center bg-white rounded-md pl-2'}>
      <Search color={colors.black} />
      <Popover className={'w-full '}>
        <PopoverTrigger className={'flex w-full '}>
          <Input className={'border-0 text-black w-full flex flex-1 '} />
        </PopoverTrigger>
        <PopoverContent
          className={'w-[95%]'}
          align={'start'}
          side={'bottom'}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <div
            className={
              'overflow-y-scroll max-h-[300px] overflow-x-hidden no-scrollbar w-full'
            }
          >
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
          </div>

          <div className={'flex gap-2 mt-6 justify-center'}>
            <Lightbulb className={'text-muted-foreground'} />
            <span className={'text-muted-foreground'}>
              Scrolle para ver mais
            </span>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
