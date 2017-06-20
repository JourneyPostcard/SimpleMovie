export default {
    install (Vue, options) {
        Vue.prototype.$stopBubble = function (e) {
            if (e && e.stopPropagation)
                e.stopPropagation()
            else
                window.event.cancelBubble = true
        }
    }
}