import { router, routes } from "../router"

export default (path: string) => {
    console.log(routes[0].meta)
    router.push(path)
}