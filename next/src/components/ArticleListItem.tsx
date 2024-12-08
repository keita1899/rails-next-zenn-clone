import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { ArticleStatus } from './ArticleStatus'
import Link from 'next/link'
import { ChevronRightIcon } from '@/utils/icons'

type ArticleProps = {
  id: number
  title: string
  status: '下書き' | '公開中'
}

type ArticleItemProps = {
  article: ArticleProps
}

export const ArticleListItem = ({ article }: ArticleItemProps) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: 80,
        }}
      >
        <Box sx={{ width: 'auto', pr: 3 }}>
          <Typography
            component='h3'
            sx={{
              fontSize: { xs: 16, sm: 18 },
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            {article.title}
          </Typography>
        </Box>
        <Box
          sx={{
            minWidth: 180,
            width: 180,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <ArticleStatus status={article.status} />
          <Box>
            <Link href={`/current/articles/edit/${article.id}`}>
              <Avatar>
                <Tooltip title='編集する'>
                  <IconButton sx={{ backgroundColor: '#F1F5FA' }}>
                    <EditIcon sx={{ color: '#99AAB6' }} />
                  </IconButton>
                </Tooltip>
              </Avatar>
            </Link>
          </Box>
          <Box>
            <Link href={`/current/articles/${article.id}`}>
              <Avatar>
                <Tooltip title='表示を確認'>
                  <IconButton sx={{ backgroundColor: '#F1F5FA' }}>
                    <ChevronRightIcon sx={{ color: '#99AAB6' }} />
                  </IconButton>
                </Tooltip>
              </Avatar>
            </Link>
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  )
}
