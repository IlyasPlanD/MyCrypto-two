<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>

$(document).ready(function () {

    $('#navtoggle').on('click', function () {
        $('#sidebar').addClass('d-flex')
        $('#sidebar').removeClass('d-none')
        $('#sidebar').addClass('d-flex')

    })

    $('#toggle-out').on('click', function () {
        $('#sidebar').removeClass('d-flex')
        $('#sidebar').addClass('d-none')
        $('#sidebar').removeClass('d-flex')
    })


});


