function handleSubmit(event) {
    event.preventDefault()
    
    const name = document.getElementById("name").value

    document.getElementById("fullname").innerHTML = name

    document.getElementById("form-box").reset()
}