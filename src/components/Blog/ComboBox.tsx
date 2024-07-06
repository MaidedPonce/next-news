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

const posts = [
  { id: 1, title: { rendered: 'Durward Reynolds' } },
  { id: 2, title: { rendered: 'Kenton Towne' } },
  { id: 3, title: { rendered: 'Therese Wunsch' } },
  { id: 4, title: { rendered: 'Benedict Kessler' } },
  { id: 5, title: { rendered: 'Katelyn Rohan' } },
]

const ComboboxComponent = () => {
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
    <Combobox
      value={selectedArticle}
      onChange={setSelectedArticle}
      onClose={() => setQuery('')}
    >
      <ComboboxInput
        aria-label='Assignee'
        displayValue={(article: any) => article?.title?.rendered}
        onChange={(event) => setQuery(event.target.value)}
        className='rounded-full h-8 w-[40%] pl-5 max-w-96 md:w-full md:h-10 focus:outline-none focus:ring-2 focus:ring-brand focus:shadow-brand focus:shadow'
      />
      <div className='relative w-full'>
        <ComboboxOptions
          anchor='bottom'
          className='border w-auto empty:invisible'
        >
          {filteredArticle.map((article: any) => (
            <ComboboxOption
              key={article.id}
              value={article}
              className='data-[focus]:bg-blue-100'
            >
              {article.title.rendered}
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </div>
    </Combobox>
  )
}

export default ComboboxComponent
