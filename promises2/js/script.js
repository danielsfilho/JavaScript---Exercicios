const botao = document.querySelector("#botao")
const spinner = document.querySelector("#spinner")
const message = document.querySelector("#message")
const result = document.querySelector("#result")
const form = document.querySelector("#form")

function job(msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve(msg)
    }, 10000)
  })
}

form.onsubmit = function(e) {
  e.preventDefault()

  const inputMsg = message.value

  botao.classList.add('hidden')
  spinner.classList.remove('hidden')

  job(inputMsg).then(msg => {
    form.classList.add('hidden')
    result.innerHTML += msg
  })
}