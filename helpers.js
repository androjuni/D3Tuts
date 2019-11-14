function generateRandomData() {
    var fruits = ["Banana", "Apple", "Orange", "Peach", "Kiwi", "Lemon", "Tomato" ];
    var data = [];
    for(var i in fruits) { data.push({ name: fruits[i], value: Math.floor(Math.random() * 100) + 1 }) }
    return data;
}