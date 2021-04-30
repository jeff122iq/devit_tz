function deepClone (obj) {
    obj = JSON.parse(JSON.stringify(obj))
    console.log(obj)
}

deepClone({name: "Bogdan", isMale: true, isStudent: true})
