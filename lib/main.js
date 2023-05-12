export function addDiv () {
  const div = document.createElement('div')
  div.style = 'width: 100px; height: 100px; background-color: #001199;'
  div.innerText = 'TEST 库模式'
  document.body.appendChild(div)
}

export default {
  addDiv
}
