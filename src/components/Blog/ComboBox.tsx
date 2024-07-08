'use client'
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react'
import { useQuery } from '@tanstack/react-query'
import { searchArticle } from 'app/services/blog/search-article'
import { PostInterface, SearchResult } from 'app/services/blog/types'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const ComboboxComponent = () => {
  const [selectedArticle, setSelectedArticle] = useState<PostInterface[]>([])
  const [query, setQuery] = useState('')
  const [search, setResults] = useState<SearchResult[]>([])
  const { isFetching, data } = useQuery({
    queryKey: ['search', query],
    queryFn: async () => {
      const response: SearchResult[] | undefined = await searchArticle({
        content: query,
      })
      return response
    },
    enabled: query.trim().length > 3,
    refetchOnWindowFocus: false,
  })
  const filteredArticle = (results: SearchResult[]) => {
    return results?.filter((article: SearchResult) => {
      return article.title?.toLowerCase().includes(query.toLowerCase())
    })
  }

  useEffect(() => {
    if (data) {
      const searchedData = filteredArticle([...data])
      setResults(searchedData)
    }
  }, [data])
  return (
    <div className=''>
      <Combobox
        value={selectedArticle}
        onChange={(value: PostInterface[] | null) =>
          setSelectedArticle(value || [])
        }
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
          className='w-[calc(var(--input-width)-20px)] z-20 mt-4 rounded-xl border border-white/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
        >
          {data !== undefined ? (
            search?.map((article) => (
              <ComboboxOption
                key={article.id}
                value={article}
                className='group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10'
              >
                <Link
                  href={`/${article.id}`}
                  className='text-sm hover:cursor-pointer text-black hover:bg-brand hover:text-white p-3 rounded-md'
                >
                  {article.title}
                </Link>
              </ComboboxOption>
            ))
          ) : (
            <ComboboxOption
              value={null}
              className='group flex cursor-default text-black items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10'
            >
              {query.trim().length < 3
                ? 'Buscar...'
                : isFetching
                ? 'Cargando...'
                : 'No se encontraron resultados...'}
            </ComboboxOption>
          )}
        </ComboboxOptions>
      </Combobox>
    </div>
  )
}

export default ComboboxComponent
