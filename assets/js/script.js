import { Router } from "./routes.js"

const router = new Router()

router.getRoute('/', "/pages/home.html")
router.getRoute(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
