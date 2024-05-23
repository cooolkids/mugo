$('.character ul li a').click(function () {
    $('.character ul li a').removeClass('on')
    $(this).addClass('on')

    let href = $(this).attr('href')

    $('article').removeClass('on')
    $(href).addClass('on')
})

$('.character ul li a').click(function(){


    let after = $(this).attr('after')

    $('.character li a').removeClass('on')
    $(this).addClass('on')
})


