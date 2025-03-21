// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "desde el dia en que te vi", time: 10 },
  { text: "senti como que ya te conocia", time: 13 },
  { text: "un minuto fue suficiente", time: 16 },
  { text: "y ya sentia quererte", time: 20 },
  { text: "me entanta que seas tan ocurrente", time: 23 },
  { text: "de repente dices cosas", time: 25 },
  { text: "que me vuelan la mente", time: 26 },
  { text: "simplemente", time: 27 },
  { text: "pero simpre estas presente", time: 29 },
  { text: "aunque no pueda verte", time: 34 },
  { text: "de locura casi estamos igual", time: 36 },
  { text: "de un dia a otro me volvi tu mega fan", time: 42 },
  { text: "y ya eres mi persona favorita<3", time: 46 },
  { text: "cada minuto a tu lado es genial", time: 50 },
  { text: "y no hay nadie en el mundo mundial", time: 53 },
  { text: "que ame mas que estar contigo", time: 55 },
  { text: "cada momento lo haces especial", time: 58 },
  { text: "tu eres mi persona favorita<3", time: 62 },
  { text: "y aun que no simpre lo ando diciendo", time: 65 },
  { text: "es buen momento de decirte que te quiero", time: 68 },
  { text: "te quiero", time: 69 },
  { text: "te quiero y siempre asi sera", time: 70.4 },
  { text: "creo que por mas que pase y pase el tiempo", time: 80 },
  { text: "aunque llueva o truene", time: 85 },
  { text: "nunca pasara lo nuestro", time: 87 },
  { text: "almenos eso siento", time: 91 },
  { text: "de locura casi estamos igual", time: 93 },
  { text: "de un dia a otro me volvi tu mega fan", time: 98 },
  { text: "y ya eres mi persona favorita<3", time: 104 },
  { text: "cada minuto a tu lado es genial", time: 106 },
  { text: "y no hay nadie en el mundo mundial", time: 110 },
  { text: "que ame mas que estar contigo", time: 112 },
  { text: "cada momento lo haces especial", time: 115 },
  { text: "tu eres mi persona favorita<3", time: 119 },
  { text: "y aun que no simpre lo ando diciendo", time: 122 },
  { text: "es buen momento de decirte que te quiero", time: 125 },
  { text: "de decirte que te quierooo", time: 129 },
  { text: "apareciste justamente", time: 134 },
  { text: "cuando ya estaba listo para quererte", time: 138 },
  { text: "que suerte, como te fui a encontrar", time: 141 },
  { text: "y ya eres mi persona favorita<3", time: 144.5 },
  { text: "cada minuto a tu lado es genial", time: 147 },
  { text: "y no hay nadie en el mundo mundial", time: 151 },
  { text: "que ame mas que estar contigo", time: 153 },
  { text: "cada momento lo haces especial", time: 157 },
  { text: "tu eres mi persona favorita<3", time: 160 },
  { text: "y aun que no simpre lo ando diciendo", time: 164 },
  { text: "es buen momento de decirte que te quiero", time: 166 },
  { text: "te quiero", time: 167 },
  { text: "te quierooo!", time: 168.3 },
  { text: "y siempre asi sera...", time: 173.5 },
  { text: "y siempre asi seraa 🩷", time: 180 },
  { text: "TE AMO ANDRI 🩷", time: 181.3 },
];



// Animar las letras
function updateLyrics() {
  var time = audio.currentTime;
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 1.5s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 500); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
