
function validate_number( e ){
    var $el = $(e.target); //alert( e.which );

    $el.val( $el.val().replace(/[^\d].+/, "") );
    if( ( e.which < 48 || e.which > 57 ) && e.which != 8 && e.which != 0 )
    {
        e.preventDefault();
    }
}


function validate_upper( upper ) {

    upper.value = upper.value.toUpperCase();
}

// bloqueo de copy/page
window.onload = function() {

    var myInput = document.getElementsByClassName('b-copy-page')[0];

    myInput.onpaste = function(e) {
        e.preventDefault();

        $('.alert-danger').html('');
        $('.alert-danger').append( 'Esta prohibido pegar' );

        $('.alert-success').removeClass("show").addClass("hide");
        $('.alert-danger').removeClass("hide").addClass("show");
    }

    myInput.oncopy = function(e) {
        e.preventDefault();
        $('.alert-danger').html('');
        $('.alert-danger').append( 'Esta prohibido copiar' );

        $('.alert-success').removeClass("show").addClass("hide");
        $('.alert-danger').removeClass("hide").addClass("show");
    }
}
