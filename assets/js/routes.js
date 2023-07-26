export class Router {
    routes = {}

    getRoute(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]

        document.querySelector("body").style.transition = "all 2s";

        if (route.includes("home")) {
            document.querySelector("body").style.backgroundImage = "url('./assets/img/home-bg.png')";
        } else if (route.includes("universe")) {
            document.querySelector("body").style.backgroundImage = "url('./assets/img/universe-bg.png')";
        } else {
            document.querySelector("body").style.backgroundImage = "url('./assets/img/explore-bg.png')";
        }

        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector("#app").innerHTML = html
        })
    }
}