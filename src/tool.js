export default {
    //异步加载图片
    loadImageAsync (url) {
        return new Promise(function (resolve, reject) {
            var image = new Image();

            image.onload = function () {
                resolve(image.src);
            };

            image.onerror = function () {
                reject(new Error('Could not load image at ' + url));
            };

            image.src = url;
        });
    }
}