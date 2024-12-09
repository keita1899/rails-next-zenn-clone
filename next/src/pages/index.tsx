import { Box, Container } from '@mui/material'
import type { NextPage } from 'next'
import { styles } from '@/styles'
import Loading from '@/components/Loading'
import Error from '@/components/Error'
import React from 'react'
import { useRouter } from 'next/router'
import { ArticlePagination } from '@/components/ArticlePagination'
import { ArticleCardList } from '@/components/ArticleCardList'
import { useFetchArticles } from '../../hooks/useFetchArticles'

const Index: NextPage = () => {
  const router = useRouter()
  const page = 'page' in router.query ? Number(router.query.page) : 1

  const { articles, meta, isLoading, isError } = useFetchArticles(page)

  if (isError) return <Error />
  if (isLoading) return <Loading />

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`/?page=${value}`)
  }

  return (
    <Box css={styles.pageMinHeight} sx={{ backgroundColor: '#e6f2ff' }}>
      <Container maxWidth='md' sx={{ pt: 6 }}>
        <ArticleCardList articles={articles} />
        <ArticlePagination
          count={meta?.totalPages || 0}
          page={meta?.currentPage || 0}
          onChange={handleChange}
        />
      </Container>
    </Box>
  )
}

export default Index
