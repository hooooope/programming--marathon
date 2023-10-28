'use client'

import { toast } from 'sonner'
import { useConvexAuth, useMutation, useQuery } from 'convex/react'
import Link from 'next/link'

import { api } from '@/convex/_generated/api'
import { CREATE_VIDEO_DEFAULT_SONNER } from '@/constants/sonner'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/spinner'

const Test = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()
  const videos = useQuery(api.video.get)
  const create = useMutation(api.video.create)

  const handleCreateVideo = () => {
    const promise = create({
      title: 'qntok video'
    })
    toast.promise(promise, CREATE_VIDEO_DEFAULT_SONNER)
  }

  if (isLoading)
    return (
      <div className='h-full flex items-center justify-center'>
        <Spinner size='lg' />
      </div>
    )

  if (!isAuthenticated) return <p>Please sign in</p>

  return (
    <>
      <Button onClick={handleCreateVideo}>Create a video</Button>
      <ul>
        <h6 className='font-bold mt-2 mb-1'>video list:</h6>
        {videos?.map(video => (
          <li key={video._id} className='list-disc'>
            {video.title}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Test
