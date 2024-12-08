import { NextPage } from 'next'
import { useRequireSignedIn } from '../../../hooks/useRequireSignin'
import {
  Box,
  Container,
  Typography,
} from '@mui/material'
import { styles } from '@/styles'
import useSWR from 'swr'
import { fetcher } from '@/utils'
import { useUserState } from '../../../hooks/useGlobalState'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import camelcaseKeys from 'camelcase-keys'
import { ArticleListItem } from '@/components/ArticleListItem'

type ArticleProps = {
  id: number
  title: string
  status: '下書き' | '公開中'
}

const CurrentArticles: NextPage = () => {
  useRequireSignedIn()
  const [user] = useUserState()

  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/current/articles`
  const { data, error } = useSWR(user.isSignedIn ? url : null, fetcher)

  if (error) return <Error />
  if (!data) return <Loading />

  const articles: ArticleProps[] = camelcaseKeys(data)

  return (
    <Box
      css={styles.pageMinHeight}
      sx={{
        borderTop: '0.5px solid #acbcc7',
        pb: 8,
      }}
    >
      <Container maxWidth='md' sx={{ pt: 6, px: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography component='h2' sx={{ fontSize: 32, fontWeight: 'bold' }}>
            記事の管理
          </Typography>
        </Box>

        {articles.map((article: ArticleProps, i: number) => (
          <ArticleListItem article={article} key={i} />
        ))}
      </Container>
    </Box>
  )
}
export default CurrentArticles
