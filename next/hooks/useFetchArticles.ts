import camelcaseKeys from 'camelcase-keys'
import { fetcher } from '@/utils'
import useSWR from 'swr'

type Article = {
  id: number
  title: string
  createdAt: string
  fromToday: string
  user: {
    name: string
  }
}

type Meta = {
  totalPages: number
  currentPage: number
}

type ArticlesResponse = {
  articles: Article[]
  meta: Meta
}

export const useFetchArticles = (page: number) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/articles?page=${page}`

  const { data, error } = useSWR<ArticlesResponse>(url, fetcher)

  return {
    articles: data ? camelcaseKeys(data.articles) : [],
    meta: data ? camelcaseKeys(data.meta) : null,
    isLoading: !data && !error,
    isError: error,
  }
}
