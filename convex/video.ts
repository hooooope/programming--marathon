import { v } from 'convex/values'
import { mutation, query } from './_generated/server'

export const get = query({
  handler: async ctx => {
    const identity = await ctx.auth.getUserIdentity()

    if (!identity) throw new Error('Not authenticated')

    const videos = ctx.db.query('video').collect()

    return videos
  }
})

export const create = mutation({
  args: {
    title: v.string()
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()

    if (!identity) throw new Error('Not authenticated')

    const userId = identity.subject

    const video = await ctx.db.insert('video', {
      title: args.title,
      userId,
      isPublished: false
    })

    return video
  }
})
