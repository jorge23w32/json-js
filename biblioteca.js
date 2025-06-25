const libros = [];
let id = 1;
class Libro {
  constructor(titulo, autor, genero) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
    this.estado = "Disponible";
  }

  objeto() {
    return {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      genero: this.genero,
      estado: this.estado,
    };
  }
}

console.log(`
_________________________________________________________________________________
|                                                                               |
|                       Sistema Bibliotecario "JVT"                             |
|_______________________________________________________________________________|
|       1.- Consultar Libros.                                                   |
|                                                                               |
|       2.- Agregar Libro.                                                      |
|                                                                               |
|       3.- Solicitar Libro.                                                    |
|                                                                               |
|       4.- Devolver Libro.                                                      |
|_______________________________________________________________________________|
|                                                                               |
|Escribe la opción que gustes (escribe 0 para salir del sistema):               |
|_______________________________________________________________________________|`);

setTimeout(() => {
  menu();
}, 5000);

function menu() {
  let valor = true;

  while (valor) {
    let opcion = parseInt(prompt("Escribe la opción que gustes: "));
    let x = false;
    if (x) {
      menu();
    } else {
      x = true;
    }
    switch (opcion) {
      case 1:
        consultar();
        break;

      case 2:
        agregar();
        break;

      case 3:
        solicitar();
        break;

      case 4:
        devolver();
        break;

      case 0:
        valor = false;
        console.log("Saliendo del sistema...");
        break;

      default:
        console.log("Opción incorrecta, intentalo de nuevo.");
        break;
    }
  }
}

function consultar() {
  if (libros.length === 0) {
    return console.log("No hay libros en el sistema, agrega uno por favor.");
  }
  libros.forEach((element) => {
    console.log(element);
  });
}

function agregar() {
  let titulo = prompt("Escribe el titulo del libro");
  let autor = prompt("Escribe el nombre del autor");
  let genero = prompt("Escribe el género del libro");
  const libro = new Libro(titulo, autor, genero);
  setTimeout(() => {}, 1000);
  id++;
  libros.push(JSON.stringify(libro.objeto()));
  console.log("Libro agregado correctamente al sistema.");
}

function solicitar() {
  let id = prompt("Escribe el id del libro que deseas solicitar");
  let indexLibro = libros.findIndex((it) => {
    const libro = JSON.parse(it);
    return libro.id === parseInt(id) && libro.estado !== "Prestado";
  });
  setTimeout(() => {}, 2000);
  if (indexLibro !== -1) {
    let libro = JSON.parse(libros[indexLibro]);
    libro.estado = "Prestado";
    libros[indexLibro] = JSON.stringify(libro);
    console.log(
      `Felicidades. Fue aprobada tu solicitud, disfruta del libro ${libro.titulo}.`
    );
  } else {
    return console.log(
      `El libro con el ID '${id}' no se encuentra en el sistema o ya fue prestado a otra persona. Intenta tu solicitud con otro libro`
    );
  }
}

function devolver() {
  let id = prompt("Escribe el id del libro que deseas devolver");
  let indexLibro = libros.findIndex((it) => {
    const libro = JSON.parse(it);
    return libro.id === parseInt(id) && libro.estado === "Prestado";
  });
  setTimeout(() => {}, 2000);
  if (indexLibro !== -1) {
    let libro = JSON.parse(libros[indexLibro]);
    libro.estado = "Disponible";
    libros[indexLibro] = JSON.stringify(libro);
    console.log(
      `Felicidades. Fue aprobada tu solicitud, muchas gracias por devolver el libro ${libro.titulo}.`
    );
  } else {
    return console.log(
      `El libro con el ID '${id}' no se encuentra en el sistema o ya fue devuelto. Intenta tu solicitud con otro libro`
    );
  }
}
