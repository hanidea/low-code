import Post from '../model/Post'
import Links from '../model/Links'
import moment from 'dayjs'
import config from '@/config'
import mkdir from 'make-dir'
import fs from 'fs'
import { checkCode, getJWTPayload } from '@/common/Utils'
import User from '@/model/User'
import PostTags from '@/model/PostTags'
import UserCollect from '../model/UserCollect'
import qs from 'qs'
import { v4 as uuidv4 } from 'uuid'
import { dirExists } from "@/common/Utils"


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
    // 上传图片接口
    async uploadImg (ctx) {
        const file = ctx.request.files.file
        console.log(file)
        // 图片名称，图片格式，存储的位置，返回可以读取的路径
        const ext = file.originalFilename.split('.').pop()
        const dir = `${config.uploadPath}/${moment().format('YYYYMMDD')}`
        // 判断路径是否存在，不存在则创建
        // await dirExists(dir)
        await mkdir(dir)
        const picname = uuidv4()
        const destPath = `${dir}/${picname}.${ext}`
        const reader = fs.createReadStream(file.filepath)
        const upStream = fs.createWriteStream(destPath)
        const filePath = `/${moment().format('YYYYMMDD')}/${picname}.${ext}`
        // method
        reader.pipe(upStream)
        // method 2
        // const stat = fs.statSync(file.filepath)
        // console.log('size', stat.size)
        // let totalLength = 0
        // reader.on('data', (chunk) =>{
        //     totalLength += chunk.length
        //     if (upStream.write(chunk) === false) {
        //         reader.pause()
        //     }
        // })
        //
        // reader.on('drain', () => {
        //     reader.resume()
        // })
        //
        // reader.on('end', () => {
        //     upStream.end()
        // })

        ctx.body = {
            code: 200,
            msg: '图片上传成功',
            data: filePath
        }
    }
}

export default new ContentController()
