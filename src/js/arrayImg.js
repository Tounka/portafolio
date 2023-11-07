
const idContenedorPortafolio = document.getElementById('idContenedorPortafolio');

function Pagina(titulo, descripcion, tecnologias, url,imgGrande, imgPeque) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.tecnologias = tecnologias;
    this.url = url;
    this.imgGrande = imgGrande;
    this.imgPeque = imgPeque;
  }

  
  const paginaPomo = new Pagina("Pomo-Pomodoro", "Es el clásico reloj Pomodoro para mejorar la productividad, pero esta vez con música de tus artistas favoritos :D (solo 3, que tampoco soy una API...).  ", ["html", "css", "sass", "js", "git"], "https://pomo-pomodoro.netlify.app/", "build/img/imgPaginasD/paginaKanye/grande", "build/img/imgPaginasD/paginaKanye/peque");
  const paginaGravity = new Pagina("Gravity Falls Fan", "Es una versión hecha por mí mismo de la página oficial de Disney de la serie.", ["html", "css", "sass", "js", "git"], "https://gravity-falls-fanpage-p3.netlify.app/", "build/img/imgPaginasD/paginaGravityFalls/grande", "build/img/imgPaginasD/paginaGravityFalls/peque");
  const paginaPortafolio = new Pagina("Portafolio", "Se trata de mi portafolio personal. Espero que te guste. :D Existen dos versiones, una hecha con PHP y otra con JavaScript (la que ves aquí es la hecha con JS). Netlify no soporta PHP, por lo que tuve que desarrollar la segunda.  Puedes ver las distintas versiones aquí. :D  ", ["html", "css", "sass", "js", "git", "php"], "https://github.com/Tounka/portafolio", "build/img/imgPaginasD/paginaPortafolio/grande", "build/img/imgPaginasD/paginaPortafolio/peque");
  const paginaPaseos = new Pagina("Paseos Castillo", "Se trata de una página web para la promoción de paseos hipotéticos. Fue mi primer proyecto, en esta página utilicé muchos elementos visuales generados por inteligencia artificial.", ["html", "css", "js"], "https://buscatupaseo.netlify.app/", "build/img/imgPaginasD/paginaPaseos/grande", "build/img/imgPaginasD/paginaPaseos/peque");
  const paginaSolar = new Pagina("SolarWeb", "Se trata de una pagina web enfocada a la verificar la factibilidad de la compra de paneles solares, en esta pagina aprendí el uso de bootstrap.", ["html", "css", "sass", "js", "git", "bootstrap"], "https://solarong.netlify.app/", "build/img/imgPaginasD/paginaSolar/grande", "build/img/imgPaginasD/paginaSolar/peque");
  const paginaCocina = new Pagina("Solución Especifica Cocina con IA", "Esta pagina se trata de una solución especifica para mi cocina, es una pagina que utilizare de forma personal en mi cocina. En esta podre ver diferentes imágenes personales cada vez que recargue la pagina, ver el clima, reproducir videos, crear recetas mediante inteligencia artificial (API GPT), etc... El link que se encuentra en las imágenes es una version capada de la pagina (Sin la funcionalidad IA, por el costo asociado a la función)", ["html", "css", "sass", "js", "git", "bootstrap"], "https://6547d8f4b9207a76c640ad49--cocinacasatounka.netlify.app/", "build/img/imgPaginasD/paginaCocina/grande", "build/img/imgPaginasD/paginaCocina/peque");
  //const pagina = new Pagina("", "", ["html", "css", "sass", "js", "git", "bootstrap"], "linkPagina", "build/img/imgPaginasD/carpeta/grande", "build/img/imgPaginasD/carpeta/peque");



const arregloDePaginas = [paginaCocina,paginaSolar, paginaPomo, paginaGravity,paginaPortafolio, paginaPaseos];
arregloDePaginas.forEach(function (pagina) {
  const contenedorSuperior = document.createElement('div');
  contenedorSuperior.classList.add('contenedorSuperiorPortafolio');
  
  const enlace = document.createElement('a');
  enlace.href = pagina.url;
  
  const picture = document.createElement('picture');
  picture.classList.add('pictureImgDesktop');
  
  const source = document.createElement('source');
  source.srcset = pagina.imgGrande + '.webp';
  
  const imagenGrande = document.createElement('img');
  imagenGrande.src = pagina.imgGrande + '.png';
  imagenGrande.alt = 'Imagen de página web de ejemplo en modo escritorio';
  
  picture.appendChild(source);
  picture.appendChild(imagenGrande);
  enlace.appendChild(picture);
  contenedorSuperior.appendChild(enlace);
  
  const contenedorInferior = document.createElement('div');
  contenedorInferior.classList.add('contenedorInferiorPortafolio');
  
  const enlaceInferior = document.createElement('a');
  enlaceInferior.href = pagina.url;
  
  const pictureInferior = document.createElement('picture');
  pictureInferior.classList.add('pictureImgDesktop');
  
  const sourceInferior = document.createElement('source');
  sourceInferior.srcset = pagina.imgPeque + '.webp';
  
  const imagenPeque = document.createElement('img');
  imagenPeque.src = pagina.imgPeque + '.png';
  imagenPeque.alt = 'Imagen de página web de ejemplo en modo teléfono';
  
  pictureInferior.appendChild(sourceInferior);
  pictureInferior.appendChild(imagenPeque);
  enlaceInferior.appendChild(pictureInferior);
  contenedorInferior.appendChild(enlaceInferior);
  
  const contenedorTextoPortafolio = document.createElement('div');
  contenedorTextoPortafolio.classList.add('contenedorTextoPortafolio');
  
  const titulo = document.createElement('h4');
  titulo.textContent = pagina.titulo;
  const descripcion = document.createElement('p');
  descripcion.textContent = pagina.descripcion;
  
  contenedorTextoPortafolio.appendChild(titulo);
  contenedorTextoPortafolio.appendChild(descripcion);
  
  const listaTecnologias = document.createElement('ul');
  pagina.tecnologias.forEach(function(tecnologia) {
    const li = document.createElement('li');
    li.classList.add(tecnologia); 
    listaTecnologias.appendChild(li);
  });
  
  contenedorTextoPortafolio.appendChild(listaTecnologias);
  
  contenedorInferior.appendChild(contenedorTextoPortafolio);
  


  
  idContenedorPortafolio.appendChild(contenedorSuperior);
  idContenedorPortafolio.appendChild(contenedorInferior);
  
  const separador = document.createElement('hr');
  separador.classList.add('separador');
  idContenedorPortafolio.appendChild(separador);
});

  

  
  
