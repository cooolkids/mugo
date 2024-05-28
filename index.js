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

let clearId;
function bannerRotate() {
    $('.rotate').animate({ 'rotate': '+=5deg' }, '50', 'linear')
}
$('.quick').mouseenter(function () {
    clearId = setInterval(bannerRotate, 5)
    $('.rotate img').attr({ 'src': './images/quick-menu-line.png' })
    $('.quicktxt').css({ 'background': '#d91114' })
});
$('.quick').mouseleave(function () {
    $('.rotate').stop(1, 0)
    $('.rotate img').attr({ 'src': './images/quick-menu-line-02.png' })
    $('.quicktxt').css({ 'background': '#ed4043' })
    clearInterval(clearId)
});

$('.tab-menu li').click(function (e) {
    e.preventDefault()

    let idx= $(this).index()
    $('.tab-menu li').removeClass('on')
    $(this).addClass('on')

    $('.item-tab').removeClass('on')
    $('.item-tab').eq(idx).addClass('on')
})
