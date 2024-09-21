# Blackjack - Vanilla JS con Vite

Este es un juego de Blackjack sencillo desarrollado utilizando **Vite** y **Vanilla JavaScript**. Es un proyecto pensado para practicar la manipulación del DOM y lógica básica de JavaScript.

## 🚀 Características

- Reglas básicas del Blackjack (21).
- El jugador compite contra la computadora (dealer).
- El mazo de cartas es barajado automáticamente usando la librería `underscore.js`.
- Interfaz minimalista con contadores de puntos y representación gráfica de las cartas.

## 🛠️ Tecnologías Utilizadas

- **Vite**: Para la configuración del entorno de desarrollo.
- **Vanilla JavaScript**: Lógica del juego y manipulación del DOM.
- **Underscore.js**: Para funciones de utilidad, como barajar el mazo.
- **CSS**: Diseño simple y responsivo.

## 📦 Instalación y Uso

1. Clona el repositorio:
    ```bash
    git clone https://github.com/usuario/repo-blackjack.git
    ```
   
2. Ve al directorio del proyecto:
    ```bash
    cd repo-blackjack
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```

5. Abre tu navegador en `http://localhost:3000` para jugar.

## 📋 Reglas Básicas del Juego

- El objetivo del Blackjack es tener una mano cuyo valor se acerque lo más posible a 21 sin pasarse.
- Las cartas numéricas valen su número.
- Las cartas con figuras (J, Q, K) valen 10 puntos.
- El As puede valer 1 o 11, dependiendo de lo que más beneficie al jugador.

## 🎮 Instrucciones del Juego

1. Presiona el botón **Pedir Carta** para robar una carta.
2. Si tu mano supera los 21 puntos, pierdes automáticamente.
3. Cuando estés satisfecho con tu mano, presiona el botón **Detener** para finalizar tu turno y dejar que la computadora juegue.
4. La computadora jugará automáticamente hasta que supere tus puntos o se pase de 21.

## 🖼️ Capturas de Pantalla

_Coloca aquí capturas de pantalla del juego si las tienes._

## 🤝 Contribuciones

Si deseas contribuir a este proyecto, siéntete libre de hacer un fork del repositorio y abrir un pull request.
