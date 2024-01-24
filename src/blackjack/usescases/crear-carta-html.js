
/**Crear carta
 * 
 * @param {String} carta recibe una carta para crear una ruta a la imagen
 * @returns {HTMLImageElement} retorna una imagen html para insertar
 */

export const crearCartaHTML = (carta) =>{
    if(!carta) throw Error('Se requiere una carta')

    const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');

        return imgCarta
}