
function validate_email( email ) {

    if ( email.value.toString().trim() != '' ){

        emailRegex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        if (emailRegex.test(campo)){
            var msn = { 'type' : 'success', 'msn': 'Email correcto.' };
            this.getMsn( msn );
        }else {
            var msn = { 'type' : 'error', 'msn': 'El email ingresado no tiene un formato correcto, ejepmlo: prueba@dominio.com ' };
            this.getMsn( msn );
        }
    } else {
        var msn = { 'type' : 'error', 'msn': 'El email ingresado no tiene un formato correcto, ejepmlo: prueba@dominio.com ' };
        this.getMsn( msn );
    }
}

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







function getMsn( resValidate ) {

    // borramos la información de las cajas de mensaje
    $('.alert-success').html('');
    $('.alert-danger').html('');

    if( resValidate.type == 'error' ){
        $('.alert-danger').append( resValidate.msn );
        $('.alert-success').removeClass("show").addClass("hide");
        $('.alert-danger').removeClass("hide").addClass("show");
    }else{
        $('.alert-success').append( resValidate.msn );
        $('.alert-danger').removeClass("show").addClass("hide");
        $('.alert-success').removeClass("hide").addClass("show");
    }

}

