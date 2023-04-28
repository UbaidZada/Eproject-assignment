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

  let sendbtn = document.getElementById("send")
  let form = document.getElementById("sirdard")

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  })
  sendbtn.addEventListener('click', (e) => {
    var Name = document.getElementById("name").value
    var Email = document.getElementById("email").value
    var Password = document.getElementById("password").value
    var Cpassword = document.getElementById("cpassword").value

    localStorage.setItem("Name1", Name)
    localStorage.setItem("Email1", Email)
    localStorage.setItem("Password1", Password)
    localStorage.setItem("Cpassword1", Cpassword)


    if (Name == 0) {

    }
    else if (Password == 0) {

    }
    else if (Cpassword == 0) {

    }
    else if (Password != Cpassword) {
      alert("You put wrong password in confirm field ")
    }

    else if (Email == 0) {

    }

    else {
      window.location.href = "login.html"
    }

  })