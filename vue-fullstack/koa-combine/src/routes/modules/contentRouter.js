import Router from "koa-router";
import contentController from "@/api/ContentController";

const router = new Router()

router.prefix('/content')

router.post('/upload', contentController.uploadImg)

// 发表新贴
router.post('/add', contentController.addPost)

// 更新帖子
router.post('/update', contentController.updatePost)

router.post('/updateId', contentController.updatePostByTid)

// 删除帖子
router.post('/delete', contentController.deletePost)

export default router
