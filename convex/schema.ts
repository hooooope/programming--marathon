import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  video: defineTable({
    title: v.string(),
    userId: v.string(),
    coverImage: v.optional(v.string()),
    description: v.optional(v.string()),
    isPublished: v.boolean()
  }).index('by_user', ['userId'])
})
