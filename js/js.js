function buscador(data) {
    const key = 'LbrnJHz7FEjFfYnz5pWawLJLa0Y6FlQ6omMAObHD'

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data}`,
        dataType: 'json',
        success: function (dados) {
            document.getElementById('imagem').src = dados.url
            document.getElementById('titulo').innerText = dados.title
            document.getElementById('par').innerText = dados.explanation
        }
    })
}

$("#botao").click(function (event) {
    event.preventDefault()
    var dataValue = $("#dataApod").val()
    buscador(dataValue)
})