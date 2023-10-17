function find(array, calback) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i]
        var result = calback(element)


        if (result)
            return element
    }
}