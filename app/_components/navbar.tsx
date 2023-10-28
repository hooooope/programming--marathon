'use client'

import useScrollTop from '@/hooks/use-scroll-top'
import { cn } from '@/lib/utils'
import Logo from './logo'
import { ModeToggle } from '@/components/mode-toggle'
import { useConvexAuth } from 'convex/react'
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/spinner'
import Link from 'next/link'

const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()
  const { user } = useUser()
  const scrolled = useScrollTop()

  return (
    <div
      className={cn(
        'z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6',
        scrolled && 'border-b shadow-sm'
      )}
    >
      <Logo hiddenOnMobile={false} />
      <div className='md:ml-auto md:justify-end justify-end w-full flex items-center gap-x-2'>
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <SignInButton mode='modal'>
            <Button
              size='sm'
              className='mr-1 bg-brand text-white sm:mr-2 px-3 sm:px-4 md:px-12'
            >
              Login
            </Button>
          </SignInButton>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <p>{user?.username}</p>
            <UserButton afterSignOutUrl='/' />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar
