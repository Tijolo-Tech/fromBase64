const decodeBase64 = () => {
    const text= document.getElementById('input').value
    const decoded = atob(text)
    document.getElementById('output').value = decoded
    return false
}
