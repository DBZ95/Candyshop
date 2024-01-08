$(document).ready(
    function() {

        let productos=["Paletas","Pinta","Azul","Tupsi","Roll","Pop","Elote","Vero","Manitas","Chocolates","Carlos","V","Conejo","Turin","Huevo","Kinder","Joy","Bueno","Maxi","Gomitas","Aros","Panditas","Azucaradas","Sandia"];


        $( "#palabra" ).autocomplete({
            source: productos,
            minlength: 3
        });

        $('.card').hide();


        $('#btnPaletas').click(
            function() {
                $('.card').hide();
            $('.Paletas').show();
            }
            );

            $('#btnChocolates').click(
                function() {
                    $('.card').hide();
                $('.Chocolates').show();
                }
                );

                $('#btnGomitas').click(
                    function() {
                        $('.card').hide();
                    $('.Gomitas').show();
                    }
                    );

                    $('#btnbusqueda').click(
                        function() {
                        
                            let productos=document.getElementById('palabra').value;

                            if(productos=="Paleta"){
                                $('.card').hide();
                                $('.Paleta').show();
                            }

                            if(productos=="Pinta"){
                                $('.card').hide();
                                $('.Pinta').show();
                            }

                            if(productos=="Azul"){
                                $('.card').hide();
                                $('.Azul').show();
                            }

                            if(productos=="Tupsi"){
                                $('.card').hide();
                                $('.Tupsi').show();
                            }

                            if(productos=="Roll"){
                                $('.card').hide();
                                $('.Roll').show();
                            }

                            if(productos=="Pop"){
                                $('.card').hide();
                                $('.Pop').show();
                            }

                            if(productos=="Elote"){
                                $('.card').hide();
                                $('.Elote').show();
                            }

                            if(productos=="Vero"){
                                $('.card').hide();
                                $('.Vero').show();
                            }

                            if(productos=="Manitas"){
                                $('.card').hide();
                                $('.Manitas').show();
                            }

                            if(productos=="Chocolate"){
                                $('.card').hide();
                                $('.Chocolate').show();
                            }

                            if(productos=="Carlos"){
                                $('.card').hide();
                                $('.Carlos').show();
                            }

                            if(productos=="V"){
                                $('.card').hide();
                                $('.V').show();
                            }

                            if(productos=="Conejo"){
                                $('.card').hide();
                                $('.Conejo').show();
                            }

                            if(productos=="Turin"){
                                $('.card').hide();
                                $('.Turin').show();
                            }

                            if(productos=="Huevo"){
                                $('.card').hide();
                                $('.Huevo').show();
                            }

                            if(productos=="Kinder"){
                                $('.card').hide();
                                $('.Kinder').show();
                            }

                            if(productos=="Joy"){
                                $('.card').hide();
                                $('.Joy').show();
                            }

                            if(productos=="Bueno"){
                                $('.card').hide();
                                $('.Bueno').show();
                            }

                            if(productos=="Maxi"){
                                $('.card').hide();
                                $('.Maxi').show();
                            }

                            if(productos=="Gomitas"){
                                $('.card').hide();
                                $('.Gomitas').show();
                            }

                            if(productos=="Aros"){
                                $('.card').hide();
                                $('.Aros').show();
                            }

                            if(productos=="Panditas"){
                                $('.card').hide();
                                $('.Panditas').show();
                            }

                            if(productos=="Azucaradas"){
                                $('.card').hide();
                                $('.Azucaradas').show();
                            }

                            if(productos=="Sandia"){
                                $('.card').hide();
                                $('.Sandia').show();
                            }
                        }
                        );

    }

);