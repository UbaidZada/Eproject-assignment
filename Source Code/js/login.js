(() => {

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  })
    ()
  let form = document.getElementById("Sirdard")

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  })

  let getbtn = document.getElementById("get")

  getbtn.addEventListener('click', (e) => {
    var email = document.getElementById("email2").value
    var password = document.getElementById("password2").value

    var Email1 = localStorage.getItem("Email1")
    var password1 = localStorage.getItem("Password1")

    if (email == 0) {

    }
    else if (password == 0) {

    }
    else if (password1 == 0) {

    }
    else if (email != Email1) {
      alert("You put Wrong Email")
    }
    else if (password != password1) {
      alert("You Put Wrong Password")
    }


    else if (Email1 == 0) {

    }

    else {
      window.location.href = "index.html"
    }
  })