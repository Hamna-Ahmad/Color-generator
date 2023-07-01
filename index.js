
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()
    let color = document.getElementById('color').value.replace('#', '')
    const mode = document.getElementById('mode').value
    
fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
    .then(res => res.json())
    .then(data => {
        const colorArray = data.colors;
        let colorHtml = ''
        let hexHtml = ''

        for(let i = 0; i < colorArray.length; i++){
            colorHtml += 
            `
            <div id=${colorArray[i].hex.value} class="color color${i + 1}" style="background-color:${colorArray[i].hex.value};"></div>
            `
            hexHtml +=
            `
            <div id="hex${i + 1}" class="hex">${colorArray[i].hex.value}</div>
            `
        }
         document.getElementById('color-container').innerHTML = colorHtml;
         document.getElementById('hex-label-container').innerHTML = hexHtml;
    })
})

// Copy hex-color label to clipboard
document.getElementById('hex-label-container').addEventListener('click', function(e){
    const color = document.getElementById(e.target.id).textContent
    navigator.clipboard.writeText(color)
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Copied the color: ${color}`,
        showConfirmButton: false,
        timer: 1500
      })
    })


// Copy box hex-color to clipboard
document.getElementById('color-container').addEventListener('click', function(e){
    const color = e.target.id
    navigator.clipboard.writeText(color)
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Copied the color: ${color}`,
        showConfirmButton: false,
        timer: 1500
      })
    })
