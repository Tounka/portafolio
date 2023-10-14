<?php

    function conectarDB(){
        $db = mysqli_connect('localhost', 'root', 'luis2009', 'portafolio');
        if($db){
            echo "se conecto";
        } else {
            echo "no se conecto";
        }
    }
?> 