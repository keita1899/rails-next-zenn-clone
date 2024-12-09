import Error from '@/components/Error'
import Loading from '@/components/Loading'
import { Box, Container, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ArticleMain } from '@/components/ArticleMain'
import { ArticleSidebar } from '@/components/ArticleSidebar'
import { ArticleTitle } from '@/components/ArticleTitle'
import { ArticleIcon, PersonIcon, UpdateIcon } from '@/utils/icons'
import { useFetchArticleDetail } from '../../../hooks/useFetchArticleDetail'

const ArticleDetail: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  const { article, isLoading, isError } = useFetchArticleDetail(id)

  if (isError) return <Error />
  if (isLoading) return <Loading />

  const articleInfoList = [
    { icon: <PersonIcon />, label: '著者', value: article?.user.name || '' },
    { icon: <ArticleIcon />, label: '公開', value: article?.createdAt || '' },
    { icon: <UpdateIcon />, label: '本文更新', value: article?.updatedAt || '' },
  ]

  return (
    <Box
      sx={{
        backgroundColor: '#EDF2F7',
        pb: 6,
        minHeight: 'calc(100vh - 57px)',
      }}
    >
      <Box
        sx={{
          display: { xs: 'flex', lg: 'none' },
          alignItems: 'center',
          backgroundColor: 'white',
          borderTop: '0.5px solid #acbcc7',
          height: 56,
          pl: 4,
          color: '#6e7b85',
        }}
      >
        <Box sx={{ pr: 1 }}>
          <PersonIcon />
        </Box>
        <Box sx={{ mr: 2 }}>
          <Typography component='p'>著者:</Typography>
        </Box>
        <Typography component='p' sx={{ fontWeight: 'bold', color: 'black' }}>
          {article?.user.name}
        </Typography>
      </Box>
      <Container maxWidth='lg'>
        <Box sx={{ pt: 6, pb: 3 }}>
          <Box sx={{ maxWidth: 840, m: 'auto', textAlign: 'center' }}>
            <ArticleTitle title={article?.title || ''} />
          </Box>
          <Typography>{article?.createdAt}に公開</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '0 24px' }}>
          <ArticleMain content={article?.content || ''} />
          <ArticleSidebar articleInfoList={articleInfoList} />
        </Box>
      </Container>
    </Box>
  )
}

export default ArticleDetail
