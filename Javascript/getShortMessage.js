function getShortMessage(array) {
    var array2 = []
    array.map(x => {
        if (x.length < 50) {
            array2.push(x)
        }
    })
    return array2
}