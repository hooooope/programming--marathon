import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600']
})

interface IProps {
  hiddenOnMobile?: boolean
}

const Logo = ({ hiddenOnMobile = true }: IProps) => {
  return (
    <div
      className={cn(
        'items-center gap-x-2',
        hiddenOnMobile ? 'hidden md:flex' : 'flex'
      )}
    >
      <Image src='/logo.svg' height='40' width='40' alt='logo' />
      <p className={cn('font-semibold text-xl', font.className)}>QNTok</p>
    </div>
  )
}

export default Logo
