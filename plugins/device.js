// 设备判断
function isMoible(UA) {
    return /(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(UA);
}

export default (context) => {
    context.app.router.beforeEach((to, from, next) => {
        let userAgent = process.server ? context.req.headers["user-agent"] : navigator.userAgent;
        let isMob = isMoible(userAgent);
        process.isMob = isMob;

        if (isMob && to.path === "/") {
            next("/index-mob");
            return
        }

        if (!isMob && to.path === "/index-mob") {
            next("/");
            return
        }

        if (isMob && !to.path.endsWith("-mob")) {
            next(`${to.path}-mob`);
            return
        }

        if (!isMob && to.path.endsWith("-mob")) {
            next(to.path.substr(0, to.path.length - 4));
            return
        }

        if (process.client && isMob) {
            let htmlDom = document.getElementsByTagName("html")[0];
            htmlDom.style.fontSize = `${100 * (htmlDom.clientWidth / 375)}px`
        }
        next();
    })
}