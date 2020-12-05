$(document).ready(function(){
    changeColor();
    $('li>a').on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000, function(){
            window.location.hash = hash;
        });
    });
    $('.navbar-nav').on('click', function (e) {
        //$('.navbar-toggler').click(); //bootstrap 3.x
        console.log(e);
    });
});
function changeColor(){
    if ( location.hash == '#project'){
        if ( document.getElementById("sideNav").classList.contains('bg-primary') ){
            document.getElementById("sideNav").classList.remove('bg-primary');
            document.getElementById("sideNav").classList.add('bg-dark');
        }
    }else {
        if ( document.getElementById("sideNav") && document.getElementById("sideNav").classList.contains('bg-dark') ){
            document.getElementById("sideNav").classList.remove('bg-dark');
            document.getElementById("sideNav").classList.add('bg-primary');
        }
    }
}
