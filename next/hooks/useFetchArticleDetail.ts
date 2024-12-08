import camelcaseKeys from 'camelcase-keys'
import { fetcher } from '@/utils'
import useSWR from 'swr'

type Article = {
  title: string
  content: string
  createdAt: string
  updatedAt: string
  user: {
    name: string
  }
}

export const useFetchArticleDetail = (id: string | string[] | undefined) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/articles/`
  const { data, error } = useSWR<Article>(id ? url + id : null, fetcher)

  return {
    article: data ? camelcaseKeys(data) : null,
    isLoading: !data && !error,
    isError: error,
  }
}
