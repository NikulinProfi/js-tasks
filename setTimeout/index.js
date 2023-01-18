// const one = setTimeout(() => {
//   console.log('one')
// }, 3000)

// const three = 3
// const two = setInterval(() => {
//   console.log('2' + three * 3)
// }, 1000)

// clearInterval(three)

// const container = document.getElementById('container')
// console.log(container)
// const start = document.getElementById('start')
// // console.log(start)
// const one = setInterval(() => {
//   console.log('one')
// }, 1000)

// const onStart = () => {
//   one, 1000
// }
// start.addEventListener('click', onStart)

// const two = clearInterval(one)

// console.log(start)
// const stop = document.getElementById('stop')
// console.log(stop)

// console.log(listener)

// const onStart = addEventListener('click', listener, 5000)

// console.log(onStart)

// const onStop = addEventListener('click', clearTimeout(onStart))

// start.onStart()
// stop.onStop()

// start.onclick = function () {
//   alert('asdasd')
// }

const container = document.getElementById('container')
const start = document.getElementById('start')
const stop = document.getElementById('stop')

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const interval = setInterval(() => {
  addNumberInDiv, addNumberInDiv2
  console.log(addNumberInDiv), console.log(addNumberInDiv2)
}, 5000)

const addNumberInDiv = document.createElement('div')
addNumberInDiv.classList = 'element'
addNumberInDiv.innerHTML = random(0, 20)
container.appendChild(addNumberInDiv)
console.log(addNumberInDiv)

const addNumberInDiv2 = document.createElement('div')
addNumberInDiv2.classList = 'element'
addNumberInDiv2.innerHTML = random(0, 20)
container.appendChild(addNumberInDiv2)
console.log(addNumberInDiv2)
