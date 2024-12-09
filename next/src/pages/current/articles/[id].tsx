import { Avatar, Box, Container, IconButton, Tooltip } from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { useUserState } from '../../../../hooks/useGlobalState'
import { useRequireSignedIn } from '../../../../hooks/useRequireSignin'
import { ArticleHeaderInfo } from '@/components/ArticleHeaderInfo'
import { ArticleMain } from '@/components/ArticleMain'
import { ArticleSidebar } from '@/components/ArticleSidebar'
import { ArticleTitle } from '@/components/ArticleTitle'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import { styles } from '@/styles'
import { fetcher } from '@/utils'
import { ArticleIcon, ChevronLeftIcon, SettingsIcon } from '@/utils/icons'

type CurrentArticleProps = {
  title: string
  content: string
  status: string
  createdAt: string
}

const ArticleDetail: NextPage = () => {
  useRequireSignedIn()
  const [user] = useUserState()
  const router = useRouter()
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/current/articles/`
  const { id } = router.query

  const { data, error } = useSWR(
    user.isSignedIn && id ? url + id : null,
    fetcher,
  )

  if (error) return <Error />
  if (!data) return <Loading />

  const article: CurrentArticleProps = camelcaseKeys(data)

  const articleInfoList = [
    { icon: <ArticleIcon />, label: '公開', value: article.createdAt },
    { icon: <SettingsIcon />, label: 'ステータス', value: article.status },
  ]

  return (
    <Box
      css={styles.pageMinHeight}
      sx={{
        backgroundColor: '#EDF2F7',
        pb: 6,
      }}
    >
      <ArticleHeaderInfo
        status={article.status}
        createdAt={article.createdAt}
      />
      <Container maxWidth="lg">
        <Box sx={{ pt: 6, pb: 3 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '0 8px',
              m: 'auto',
            }}
          >
            <Box sx={{ width: 40, height: 40 }}>
              <Link href={'/current/articles'}>
                <Avatar>
                  <Tooltip title="記事の管理に戻る">
                    <IconButton sx={{ backgroundColor: '#DDD' }}>
                      <ChevronLeftIcon sx={{ color: '#99AAB6' }} />
                    </IconButton>
                  </Tooltip>
                </Avatar>
              </Link>
            </Box>
          </Box>
          <Box sx={{ textAlign: 'center', width: '100%' }}>
            <ArticleTitle title={article.title} />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: '0 24px' }}>
          <ArticleMain content={article.content} />
          <ArticleSidebar articleInfoList={articleInfoList} />
        </Box>
      </Container>
    </Box>
  )
}

export default ArticleDetail
