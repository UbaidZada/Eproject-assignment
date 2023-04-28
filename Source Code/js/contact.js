let Reg=()=>{
  
    let Name = document.getElementById("Name").value
    let last = document.getElementById("Last").value
    let Country = document.getElementById("Country").value
    let Comment = document.getElementById("Comments").value
    // let Contact = document.getElementById("Contact").value 
  
    localStorage.setItem("Name",Name)
    localStorage.setItem("Last",last)
    localStorage.setItem("Country",Country)
    localStorage.setItem("Comments",Comment)
  
    }