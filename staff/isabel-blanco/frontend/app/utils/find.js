function find(arrays, callback) {
    for (var i = 0; i < arrays.length; i++) {
        var element = array[i]

        var result = callback(element)

        if (result) return element
    }
}