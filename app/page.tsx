import Link from 'next/link'

import { Button } from '@/components/ui/button'

const HomePage = () => {
  return (
    <main className='flex flex-col items-center'>
      This is homepage
      <Button asChild>
        <Link href='/explore'>Explore Page</Link>
      </Button>
    </main>
  )
}

export default HomePage
