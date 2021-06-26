let txt = document.getElementById('a1')
        txt.addEventListener('mouseover', changeTxt)

        function changeTxt() {
            console.log('entra')
            txt.innerHTML = '¡Sí!'
        }