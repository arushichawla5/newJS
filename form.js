const myform=document.getElementById("form")
myform.addEventListener("submit",function(){
        const formData={
            name:document.getElementById("name").value,
            email: document.getElementById("email").value,
            number: document.getElementById("num").value,
            msg: document.getElementById("msg").value
        }
        localStorage.setItem("formData",JSON.stringify(formData))
        
})
 