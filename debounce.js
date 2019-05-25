function debounceImp(fn, delay) {
    let timer = null;
    return function () {
        let context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay);
    }
}

