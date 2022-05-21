const isFunction = fn => typeof fn === 'function'

export default (images = []) => {
    let pointer = 0;
    return {
        in: (updater, interval = 10000) => {
            let cleaner
            if (isFunction(updater)) {
                cleaner = setInterval(() => {
                    pointer += 1
                    let currentImage = images[pointer];
                    if (currentImage) {
                        updater(currentImage)
                    } else {
                        pointer = 0
                        if (images[0])
                            updater(images[0])
                    }
                }, interval);
            }
            return () => clearInterval(cleaner)
        }
    }
}
