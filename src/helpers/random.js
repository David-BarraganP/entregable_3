const getRandomNumber = (limit) => {
    // ? puede ser 0 pero nunca 1 ===> 0.9999999999 * 126 => 0 ===> 125.9999999 => 0 ===> 125 ==> 1 ==> 126
     return Math.floor(Math.random() * limit) + 1
}

export {getRandomNumber}