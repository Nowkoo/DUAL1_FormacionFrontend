/*
El Cifrado César es una de las técnicas de cifrado más simples y conocidas. 
Se trata de un tipo de cifrado de sustitución en el que cada letra del texto sin cifrar es reemplazada por otra letra 
que se encuentra un número fijo de posiciones hacia abajo en el alfabeto. 
Por ejemplo, con un desplazamiento hacia la derecha de 3, la letra E sería reemplazada por H, 
la F se convertiría en I, y así sucesivamente.
Esta transformación se puede representar alineando dos alfabetos: el alfabeto cifrado es el alfabeto normal 
rotado hacia la derecha un cierto número de posiciones.

A continuación tienes dos funciones que codifican y decodifican usando el cifrado César.
Tu tarea consiste en entender el código y refactorizarlo para que sea lo más limpio posible, 
según lo visto en la sesión de Clean Code
*/

const cipher = new Cipher();

console.assert(
  cipher.cipher('Hello World', 1) === 'Ifmmp!Xpsme',
  `${cipher.cipher('Hello World', 1)} === 'Ifmmp!Xpsme'`,
);

console.assert(
  cipher.decipher(cipher.cipher('Hello World', 3), 3) === 'Hello World',
  `${cipher.decipher(cipher.cipher('Hello World', 3), 3)} === 'Hello World'`,
);
