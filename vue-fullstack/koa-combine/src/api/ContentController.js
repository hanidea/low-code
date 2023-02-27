import Post from '../model/Post'
import Links from '../model/Links'
import moment from 'dayjs'
import config from '@/config'
import { checkCode, getJWTPayload } from '@/common/Utils'
import User from '@/model/User'
import PostTags from '@/model/PostTags'
import UserCollect from '../model/UserCollect'
import qs from 'qs'

class ContentController {
    // 获取文章列表
    async getPostList (ctx) {
        const body = qs.parse(ctx.query)

        const sort = body.sort ? body.sort : 'created'
        const page = body.page ? parseInt(body.page) : 0
        const limit = body.limit ? parseInt(body.limit) : 20
        const options = {}

        if (body.title) {
            options.title = { $regex: body.title }
        }
        if (body.catalog && body.catalog.length > 0) {
            options.catalog = { $in: body.catalog }
        }
        if (body.isTop) {
            options.isTop = body.isTop
        }
        if (body.isEnd) {
            options.isEnd = body.isEnd
        }
        if (body.status) {
            options.status = body.status
        }
        if (typeof body.tag !== 'undefined' && body.tag !== '') {
            options.tags = { $elemMatch: { name: body.tag } }
        }
        const result = await Post.getList(options, sort, page, limit)
        const total = await Post.countList(options)

        ctx.body = {
            code: 200,
            data: result,
            msg: '获取文章列表成功',
            total: total
        }
    }

    // 查询友链
    async getLinks (ctx) {
        const result = await Links.find({ type: 'links' })
        ctx.body = {
            code: 200,
            data: result
        }
    }

    // 查询温馨提醒
    async getTips (ctx) {
        const result = await Links.find({ type: 'tips' })
        ctx.body = {
            code: 200,
            data: result
        }
    }

    // 本周热议
    async getTopWeek (ctx) {
        const result = await Post.getTopWeek()
        ctx.body = {
            code: 200,
            data: result
        }
    }
}

export default new ContentController()
