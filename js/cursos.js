const cursos = [
{id:1, nombre: "Curso de Ingles", horario: 9 - 11, descripcion: "Habla ingles facil, rapido y sin salir de casa. Cumple tus metas y cambia tu vida hoy. Con nuestros profesores nativos certificados, aprendes a pronunciar como todo un experto.", precio: 12000, imagen: "ingles.png"},
{id:2, nombre: "Curso de Aleman", horario: 11 - 14, descripcion: "Enfoque Nuestros cursos de aleman proponen un enfoque comunicativo a traves del desarrollo de habilidades orales y escritas desde los niveles iniciales.", precio: 15000, imagen: "aleman.png"},
{id:3, nombre: "Curso de Arabe", horario: 14 - 17, descripcion: "En este curso de arabe, aprenderas a emplear las competencias linguisticas (escuchar, hablar, escribir y leer) de este idioma. Es facil de aprender y solo se requiere tener conocimientos elementales.", precio: 10000, imagen: "arabe.png"},
{id:4, nombre: "Curso de Chino", horario: 17 - 20, descripcion: "Hable Chino facilmente con un metodo de ensenanza y aprendizaje del idioma chino basado en el sistema Pinyin y en la ensenanza de los caracteres de manera progresiva y de acuerdo a la frecuencia de uso. Esta disenado para que personas adultas accedan a la resolucion de situaciones comunicacionales.", precio: 20000, imagen: "chino.png"},
{id:5, nombre: "Curso de Portugues", horario: 20 - 22, descripcion: "Los cursos de Portugues Online permiten desarrollar la habilidad oral y escrita, el estudio de la gramatica, la pronunciacion y el uso correcto del idioma portugues, ideales para los que comienzan, como para quienes ya tienen un conocimiento previo y desean profundizarlo.", precio: 7000, imagen: "portugues.png"},
{id:6, nombre: "Curso de Ruso", horario: 22 - 00, descripcion: "Aprende ruso desde casa. A tu ritmo y de una manera sencilla. listas de vocabulario, textos, dialogos, tablas gramaticales y ejercicios. Todos los niveles.", precio: 13000, imagen: "ruso.png"},
];

function guardarCursosLS(cursos){
    localStorage.setItem("cursos", JSON.stringify(cursos)) 
}

function cargarCursosLS(){
    return JSON.parse(localStorage.getItem("cursos")) || [];
}

guardarCursosLS(cursos);