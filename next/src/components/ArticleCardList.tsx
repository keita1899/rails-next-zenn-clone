import { Grid } from '@mui/material'
import Link from 'next/link'
import { ArticleCard } from './ArticleCard'

type ArticleProps = {
  id: number
  title: string
  createdAt: string
  fromToday: string
  user: {
    name: string
  }
}

type ArticleCardListProps = {
  articles: ArticleProps[]
}

export const ArticleCardList = ({ articles }: ArticleCardListProps) => {
  return (
    <Grid container spacing={4}>
      {articles.map((article: ArticleProps, i: number) => (
        <Grid key={i} item xs={12} md={6}>
          <Link href={`/articles/${article.id}`}>
            <ArticleCard
              title={article.title}
              fromToday={article.fromToday}
              userName={article.user.name}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}
