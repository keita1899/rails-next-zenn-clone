import { Box, Container } from '@mui/material'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { useFetchArticles } from '../../hooks/useFetchArticles'
import { ArticleCardList } from '@/components/ArticleCardList'
import { ArticlePagination } from '@/components/ArticlePagination'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import { styles } from '@/styles'

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
      <Container maxWidth="md" sx={{ pt: 6 }}>
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
