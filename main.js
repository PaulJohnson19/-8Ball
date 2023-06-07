var userName = ''
var userQuestion = 'Will I win?'
var randomNumber = Math.floor(Math.random() * 8)
var eightball = ''

console.log(`Hello ${userName}`)
console.log(userQuestion)

if (userName === true) {
    console.log `Hello ${userName}!`}


if (randomNumber === 1) {
    console.log (`${userName} It is certain!`)}
    else if (randomNumber === 2) {
        console.log(`${userName} It is decidedly so`)
    }
    else if (randomNumber === 3) {
        console.log(`${userName} Reply hazy try again`)
    } 
    else if (randomNumber === 4) {
        console.log(`${userName} I cannot predict now`)
    } 
    else if (randomNumber === 5) {
        console.log(`${userName} Do not count on it`)
    } 
    else if (randomNumber === 6) {
        console.log(`${userName} My sources say no`)
    } 
    else if (randomNumber === 7) {
        console.log(`${userName} Outlook not so good`)
    } 
    else if (randomNumber === 8) {
        console.log(`${userName} Signs point to yes`)
    } 
    else if (randomNumber === 0) {
        console.log(`${userName} You must ask more fervently!`)
    }
