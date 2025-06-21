// Contador de tiempo juntos
function updateContador() {
    const inicio = new Date("2024-10-20T00:00:00").getTime();
    const ahora = new Date().getTime();
    const diferencia = ahora - inicio;

    // Si la fecha aún no ha llegado
    if (diferencia < 0) {
        document.getElementById("dias-circulo").textContent = "0";
        document.getElementById("horas-circulo").textContent = "00";
        document.getElementById("minutos-circulo").textContent = "00";
        document.getElementById("segundos-circulo").textContent = "00";
        return;
    }

    // Cálculos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Actualizar círculo (porcentaje del año)
    const porcentajeDias = (dias % 365) / 365 * 100;
    document.querySelector(".circulo-externo").style.background = 
        `conic-gradient(var(--rosa-dorado) ${porcentajeDias}%, transparent ${porcentajeDias}%)`;

    // Actualizar valores
    document.getElementById("dias-circulo").textContent = dias;
    document.getElementById("horas-circulo").textContent = horas.toString().padStart(2, "0");
    document.getElementById("minutos-circulo").textContent = minutos.toString().padStart(2, "0");
    document.getElementById("segundos-circulo").textContent = segundos.toString().padStart(2, "0");
}

setInterval(updateContador, 1000);
updateContador();

// Efecto al abrir carta
function openCarta(numero) {
    const carta = document.querySelector(`.carta:nth-child(${numero})`);
    carta.style.transform = "rotateY(20deg) scale(0.95)";
    carta.style.opacity = "0.8";

    setTimeout(() => {
        carta.style.transform = "rotateY(0deg) scale(1)";
        carta.style.opacity = "1";
        window.location.href = `carta${numero}.png`;
    }, 800);
}

// Corazones flotantes
function createHearts() {
    const heartsContainer = document.querySelector(".hearts");
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "❤";
        heart.style.position = "absolute";
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heart.style.opacity = Math.random() * 0.3 + 0.1;
        heart.style.animation = `float ${Math.random() * 15 + 5}s linear infinite`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heartsContainer.appendChild(heart);
    }
}

createHearts();
