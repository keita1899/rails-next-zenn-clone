import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

type LogoProps = {
  width: number
  height: number
}

export const Logo = ({ width, height }: LogoProps) => {
  return (
    <Box>
      <Link href="/">
        <Image src="/logo.png" width={width} height={height} alt="logo" />
      </Link>
    </Box>
  )
}
