// ==============================
// Elementos do DOM
// ==============================
const mensagens = document.getElementById("messages");
const input = document.getElementById("userInput");

// ==============================
// Base de informações do Festival
// ==============================
const info = {
  itens: [
    "1. Apresentador: Anfitrião, Mestre de Cerimônia, Porta voz.\nMÉRITOS: Domínio de arena e de público, fluência verbal, carisma, impostação sem interferência ou intervenção que dificulte audição ou compreensão do espetáculo de voz, dicção, alegria, atenção desenvolvimento do tema.\nELEMENTOS COMPARATIVOS: Indumentária e significado, voz, desenvoltura, animação.\nCaprichoso: Edmundo Oran \nGarantido: Israel Paulain",
    "2. Levantador de Toadas: cantor principal.",
    "3. Batucada (Caprichoso) / Marujada (Garantido): grupo de percussão.",
    "4. Toada: música tema apresentada.",
    "5. Porta-Estandarte.",
    "6. Sinhazinha da Fazenda.",
    "7. Rainha do Folclore.",
    "8. Cunhã-Poranga.",
    "9. Pajé.",
    "10. Figura Típica Regional.",
    "11. Alegoria.",
    "12. Tribos Indígenas.",
    "13. Tuxaua.",
    "14. Amo do Boi.",
    "15. Boi-Bumbá (Tripa do Boi).",
    "16. Lenda Amazônica: encenação de mitos/contos.",
    "17. Ritual Indígena: pajelança, canto e dança.",
    "18. Galera/Evolução: participação da torcida.",
    "19. Amo do Campo/Tradições.",
    "20. Coreografia/Conjunto Cênico.",
    "21. Tema/Coerência Geral."
  ],
  bumbodromo:
    "O Bumbódromo é a arena de Parintins onde ocorre o festival desde 1988. Tem capacidade para cerca de 35 mil pessoas e, além do festival, abriga atividades culturais durante todo o ano.",
  quando:
    "O Festival de Parintins acontece sempre no último fim de semana de junho (sexta, sábado e domingo) em Parintins-AM. É considerado o segundo maior festival folclórico do Brasil, depois do Carnaval.",
  pontuacao:
    "Cada um dos 21 itens recebe notas de jurados em três noites. O campeão é o boi com a maior soma. Em alguns anos, a menor nota é descartada segundo regulamento. As notas variam de 8 a 10, em décimos.",
  curiosidades: [
    "Caprichoso é representado pela cor azul e pela estrela.",
    "Garantido é representado pela cor vermelha e pelo coração.",
    "O festival é transmitido por TV e plataformas de streaming.",
    "As toadas autorais e a estética amazônica são marcas registradas.",
    "O Festival surgiu em 1965, a partir de festas juninas locais.",
    "Mais de 3 mil brincantes participam diretamente das apresentações.",
    "O evento movimenta fortemente o turismo e a economia do Amazonas."
  ],
  rivalidade:
    "A rivalidade entre Caprichoso (azul) e Garantido (vermelho) é histórica, mas pacífica dentro da arena. Envolve torcida, alegorias, músicas e tradição cultural passada de geração em geração.",
  festival:
    "O Festival de Parintins é uma celebração cultural que acontece todos os anos no município de Parintins, no Amazonas. Nele, dois bois-bumbás — Garantido (vermelho) e Caprichoso (azul) — competem em três noites de apresentações no Bumbódromo. O evento reúne música, dança, teatro, artes visuais e tradições amazônicas, sendo considerado o segundo maior espetáculo folclórico do Brasil, perdendo apenas para o Carnaval."
};

// ==============================
// Informações Caprichoso & Garantido
// ==============================
const caprichosoInfo =
  "💙 O Boi Caprichoso é representado pela cor azul e o símbolo da estrela. É considerado o boi da tradição mais inovadora, trazendo modernidade às alegorias e toadas. Sua torcida é conhecida como 'Nação Azul' e sua batucada é chamada de 'Batucada'. O Caprichoso valoriza muito os temas ligados à floresta, à resistência e ao espírito amazônico.";

const garantidoInfo =
  "❤️ O Boi Garantido é representado pela cor vermelha e o símbolo do coração. É considerado o boi mais tradicional, mantendo raízes fortes no folclore e nas toadas emocionantes. Sua torcida é chamada de 'Nação Vermelha' e sua batucada é conhecida como 'Marujada'. O Garantido destaca a cultura cabocla, o romantismo e a força popular.";

// ==============================
// Detalhamento Item a Item
// ==============================
const infoDetalhada = {
  1: "Apresentador: Responsável por abrir e conduzir a apresentação, transmitindo emoção ao público.",
  2: "Levantador de Toadas: Cantor principal que guia a batucada/marujada e comanda a arena.",
  3: "Batucada / Marujada: Grupos de percussão que dão ritmo e energia, considerados o coração musical.",
  4: "Toada: Música oficial de cada ano, composta especialmente para a apresentação.",
  5: "Porta-Estandarte: Representa o símbolo oficial do boi com elegância e coreografia.",
  6: "Sinhazinha da Fazenda: Figura que simboliza a filha do fazendeiro dono do boi.",
  7: "Rainha do Folclore: Representa o domínio da cultura popular com dança e presença de palco.",
  8: "Cunhã-Poranga: Mulher indígena mais bela, símbolo de força, beleza e resistência.",
  9: "Pajé: Personagem central em rituais, invoca espíritos e traz misticismo.",
  10: "Figura Típica Regional: Representa tradições, profissões e o cotidiano amazônico.",
  11: "Alegoria: Estruturas gigantes que retratam lendas e temas, com movimentos e efeitos especiais.",
  12: "Tribos Indígenas: Representam os povos originários, com coreografias e pinturas corporais.",
  13: "Tuxaua: Líder indígena, com postura e presença de comando.",
  14: "Amo do Boi: Personagem que interage com o boi, mantendo o enredo folclórico.",
  15: "Boi-Bumbá: O próprio boi, figura central e símbolo máximo da festa.",
  16: "Lenda Amazônica: Encenação de mitos regionais, como Curupira, Iara e Boto.",
  17: "Ritual Indígena: Representações sagradas de pajelança, danças e invocações.",
  18: "Galera/Evolução: Torcida organizada que canta e vibra o tempo todo.",
  19: "Amo do Campo: Personagem ligado à vida cabocla e ao trabalho rural.",
  20: "Coreografia/Conjunto Cênico: Conjunto de danças, marcações e sincronias no palco.",
  21: "Tema/Coerência Geral: A linha narrativa e estética que dá unidade a todo o espetáculo."
};

// ==============================
// Funções específicas
// ==============================
const caprichoso = () => caprichosoInfo;
const garantido = () => garantidoInfo;
const festivalInfo = () => info.festival;

// ==============================
// Função de resposta
// ==============================
function responder(texto) {
  const p = texto.toLowerCase();

  if (p.includes("festival")) return "🎉 " + festivalInfo();
  if (p.includes("caprichoso")) return caprichoso();
  if (p.includes("garantido")) return garantido();

  if (p.includes("21 itens") || p.includes("itens"))
    return "📋 Há 21 Itens Oficiais no Festival:<br><br>" + info.itens.join("<br>");

  if (p.includes("item")) {
    const num = parseInt(p.match(/\d+/));
    if (num && infoDetalhada[num]) return "ℹ️ " + infoDetalhada[num];
  }

  if (p.includes("bumbódromo") || p.includes("bumbodromo"))
    return "🏟️ " + info.bumbodromo;

  if (p.includes("quando") || p.includes("data") || p.includes("onde"))
    return "📅 " + info.quando;

  if (p.includes("pontuação") || p.includes("pontuacao"))
    return "⚖️ " + info.pontuacao;

  if (p.includes("curiosidades"))
    return "✨ Curiosidades:<br>- " + info.curiosidades.join("<br>- ");

  if (p.includes("rivalidade")) return "🔥 " + info.rivalidade;

  return `🤔 Telezé maninho, não entendi nada. Tente pergunta alguma coisa do:<br>
  - o Festival de Parintins<br>
  - os 21 itens<br>
  - um item específico (ex: item 8)<br>
  - o Bumbódromo<br>
  - a pontuação<br>
  - quando acontece<br>
  - curiosidades<br>
  - rivalidade<br>
  - Caprichoso<br>
  - Garantido`;
}

// ==============================
// Funções do chat
// ==============================
function addMessage(text, role) {
  const div = document.createElement("div");
  div.className = "msg " + role;
  div.innerHTML = text;
  mensagens.appendChild(div);
  mensagens.scrollTop = mensagens.scrollHeight;
}

function send() {
  const txt = input.value.trim();
  if (!txt) return;

  addMessage(txt, "user");

  setTimeout(() => {
    const resposta = responder(txt);
    addMessage(resposta, "bot");
  }, 500);

  input.value = "";
}

// Enviar com Enter
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") send();
});

// Mensagem inicial
addMessage(
  "👋 Olha já mano, Eu sou o Bumbá! Faz logo uma pergunta sobre o Festival de Parintins.",
  "bot"
);
