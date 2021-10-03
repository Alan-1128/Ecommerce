//Variables
const carrito           = document.querySelector( '#carrito' ),
      listaCursos       = document.querySelector( '#lista-cursos' ),
      contenedorCarrito = document.querySelector( '#lista-carrito tbody' ),
      vaciarCarritoBtn  = document.querySelector( '#vaciar-carrito' );


class Carrito {
  constructor( curso ) {
          this.curso = curso;
          this.id = new Date().getTime();
          this.creado = new Date();
  }
}     

class CarritoLista {

    constructor() {
        this.carrito = [];
    }

    nuevoCurso ( nuevo ) {
        this.carrito.push( nuevo );
    }

    eliminarCurso( id ) {
        this.carrito = this.carrito.filter( e => e.id != id );
    }

}

// Generar datos de un curso
const leerDatosCurso = (e) => {
    
    const infoCurso = {
        imagen: e.querySelector('img').src,
        titulo: e.querySelector('h4').textContent ,
        precio: e.querySelector('span').textContent ,
    }

    let nuevo = (carritoLista.carrito).map( arg => arg.curso )
    const exist = nuevo.some(curso => curso.titulo === infoCurso.titulo)

    if(exist === false){
        const carrito = new Carrito(infoCurso);
        carritoLista.nuevoCurso( carrito );

    }
    
}

const carritoHTML = () => {

    // Limpiar HTML
    contenedorCarrito.innerHTML = '';
    
    // Recorre el carrito y genera el HTML
    carritoLista.carrito.forEach( curs0o => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td> <img src='${curs0o.curso.imagen}' class="imgTabla"></td>
            <td>${curs0o.curso.titulo}</td>
            <td>${curs0o.curso.precio}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curs0o.id}" > X </a>
            </td>
        `;

        contenedorCarrito.appendChild(row);
        return row
    } );
}

//Eventos
listaCursos.addEventListener( 'click', (event) => {
    event.preventDefault();
    const btn = event.target.classList.contains('agregando-elemento')

    if( btn ) {
        const div = event.target.parentElement.parentElement;
        leerDatosCurso(div)
        carritoHTML();

    }

} )

carrito.addEventListener( 'click', (event) => {

    if( event.target.classList.contains('borrar-curso') ) {
        const id = event.target.getAttribute('data-id');
        carritoLista.eliminarCurso(id);
        carritoHTML();
    }
    

} )

vaciarCarritoBtn.addEventListener( 'click', () => {

    carritoLista.carrito.forEach(e => { 

        carritoLista.eliminarCurso(e.id);
        carritoHTML();

    })

} )



const carritoLista = new CarritoLista();

      




    















