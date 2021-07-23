let API_KEY = `iHWNo36RdXk3wiJTyX73LjvdxzSBr3EM`
// let URL = `https://api.giphy.com/v1/gifs/search?api_key=&limit=&q=`
let searchBtn = document.querySelector('button')


const display = () => {
    searchBtn.addEventListener('click', e => {
        e.preventDefault()
        let val = document.querySelector('input').value
        if(val === '') return
        let query = val.trim()
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=1&q=${query}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                let img = document.querySelector('#gif')
                img.setAttribute('src', data.data[0].images.downsized.url)
                document.querySelector('input').value = ''
            })
            .catch(err => console.log(err))
    })
}

document.addEventListener('DOMContentLoaded', display)