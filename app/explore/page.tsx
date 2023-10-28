import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Test from '../_components/test'

const Explore = () => {
  return (
    <main className='flex flex-col items-center'>
      <p className='mt-4'>This is explore page</p>
      <Button asChild className='my-4'>
        <Link href='/'>HomePage</Link>
      </Button>
      <Test></Test>
    </main>
  )
}

export default Explore
