'use client'
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react'
import { PostInterface } from 'app/services/blog/types'
import { useState } from 'react'

interface ComboboxProps {
  posts: PostInterface[]
}

/* const posts = [
  { id: 1, title: { rendered: 'Durward Reynolds' } },
  { id: 2, title: { rendered: 'Kenton Towne' } },
  { id: 3, title: { rendered: 'Therese Wunsch' } },
  { id: 4, title: { rendered: 'Benedict Kessler' } },
  { id: 5, title: { rendered: 'Katelyn Rohan' } },
] */

const ComboboxComponent = ({ posts }: ComboboxProps) => {
  const [selectedArticle, setSelectedArticle] = useState(posts[0])
  const [query, setQuery] = useState('')

  const filteredArticle =
    query === ''
      ? posts
      : posts.filter((article) => {
          return article.title.rendered
            .toLowerCase()
            .includes(query.toLowerCase())
        })

  return (
    <div className='w-[40%] max-w-96 md:w-full md:pt-20'>
      <Combobox
        value={selectedArticle}
        onChange={(value: PostInterface) => setSelectedArticle(value)}
        onClose={() => setQuery('')}
      >
        <div className='relative'>
          <ComboboxInput
            className='w-full md:h-10 rounded-full border-none bg-white py-1.5 pr-8 pl-3 text-sm/6 text-black outline-none focus:border-brand-white focus:ring-brand focus:ring-2'
            displayValue={(article: PostInterface) => article?.title?.rendered}
            onChange={(event) => setQuery(event.target.value)}
            placeholder='Buscar...'
            value={query || ''}
          />
        </div>

        <ComboboxOptions
          anchor='bottom'
          transition
          className='w-[calc(var(--input-width)-20px)] mt-4 rounded-xl border border-white/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
        >
          {filteredArticle.length !== 0 ? (
            filteredArticle.map((article) => (
              <ComboboxOption
                key={article.id}
                value={article}
                className='group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10'
              >
                <div className='text-sm text-white'>
                  {article.title.rendered}
                </div>
              </ComboboxOption>
            ))
          ) : (
            <ComboboxOption
              value={null}
              className='group flex cursor-default text-black items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10'
            >
              No se encontraron resultados...
            </ComboboxOption>
          )}
        </ComboboxOptions>
      </Combobox>
    </div>
  )
}

export default ComboboxComponent
