import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false }) // NProgress Configuration
const whiteList = ['/login', '/']
// 跳转之前
router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()
  const path = to.path
  if (whiteList.indexOf(path) === -1) {
    console.log(1)
    // next('/login')
    next()
  } else {
    // 在白名单内
    if (path === '/login') {
      console.log(2)
      // next('/')
      next()
    } else {
      console.log(3)
      next()
    }
  }
  NProgress.done()
})
// 跳转之后
router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
