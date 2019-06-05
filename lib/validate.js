
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
