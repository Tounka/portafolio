<?php
    require( __DIR__. "/../config/database.php");
    $db = conectarDB();

    $query = "SELECT * FROM portafolio";

    $resultado = mysqli_query($db, $query);
?>
<section class="frame framePortafolio" id="portafolio">
    <?php
        while($pagina = mysqli_fetch_assoc($resultado)):
    ?>
        <div class="contenedor">
            <div class="contenedorBtnRegresar">
                <div class="btn btnRegresar">Regresar</div> 
            </div>
    
            <div class="contenedorSuperiorPortafolio">
                <a href="#">
                    <picture class="pictureImgDesktop">
                        <source srcset="/build/img/imgGrandeKanye.webp">
                        <img src="/build/img/imgGrandeKanye.png" alt="Imagen de pagina web de ejemplo en modo escritorio">
                    </picture>
                </a>
      
            </div>
    
            <div class="contenedorInferiorPortafolio">
                <a href="#">
                    <picture class="pictureImgDesktop">
                        <source srcset="/build/img/imgPequeñaKanye.webp">
                        <img src="/build/img/imgPequeñaKanye.png" alt="Imagen de pagina web de ejemplo en modo telefono">
                    </picture>
                </a>
           
    
                <div class="contenedorTextoPortafolio">
                    <h4>
                        Pomo-Pomodoro
                    </h4>
                    <p>
                        El clásico pomodoro con la posibilidad de escribir, guardar y borrar notas :D y conservandolas en localStorage. Ademas al terminar cada ciclo sonaran fragmentos de la canción de tu artista favorito (solo agregue 3... que tampoco soy una api).
                    </p>
                    <ul>
                        <li>-</li>
                        <li>+</li>
                        <li>-</li>
                        <li>+</li>
                        <li>-</li>
                    </ul>
                </div>
            </div>
        </div>
        <?php
            endwhile;
        ?>
    </section>
