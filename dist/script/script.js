function valSub() {
  let emailDiv = document.getElementById("email-div")
  let email = document.getElementById("email").value.trim()
  if (
    email.trim() === "" ||
    email.trim() === null ||
    email.trim() === undefined
  ) {
    emailDiv.classList.add("error")
  }
}

document.getElementById("btn-sub").addEventListener("click", function (event) {
  event.preventDefault()
})

document.getElementById("email").addEventListener("keydown", function () {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const val = document.getElementById("email").value.trim()

  if (val.length === 0) {
    document.getElementById("email-div").classList.remove("error")
  } else {
    if (!re.test(String(val).toLowerCase())) {
      document.getElementById("email-div").classList.add("error")
    } else {
      document.getElementById("email-div").classList.remove("error")
    }
  }
})
