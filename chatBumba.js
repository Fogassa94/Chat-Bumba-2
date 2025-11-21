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
    "Item 1: Apresentador.",
    "Item 2: Levantador de Toadas.",
    "Item 3: Batucada (Caprichoso) / Marujada (Garantido).",
    "Item 4: Ritual Indígena.",
    "Item 5: Porta-Estandarte.",
    "Item 6: Amo do Boi.",
    "Item 7: Sinhazinha da Fazenda.",
    "Item 8: Rainha do Folclore.",
    "Item 9: Cunhã-poranga.",
    "Item 10: Boi Bumbá evolução.",
    "Item 11: Toada, letra e música.",
    "Item 12: Pajé.",
    "Item 13: Povos Indígenas.",
    "Item 14: Tuxauas.",
    "Item 15: Figura típica regional.",
    "Item 16: Alegoria.",
    "Item 17: Lenda amazônica.",
    "Item 18: Vaqueirada.",
    "Item 19: Galera.",
    "Item 20: Coreografia.",
    "Item 21: Organização do Conjunto Folclórico."
  ],
  bumbodromo:
    "O Bumbódromo de Parintins é uma arena localizada em Parintins, Amazonas, que serve como palco do Festival Folclórico de Parintins, uma das festas populares mais importantes do Brasil. Inaugurado em 1988, o Bumbódromo tem capacidade para mais de 25 mil espectadores e é conhecido por sua arquitetura inspirada na cabeça de um boi, dividida em setores azul e vermelho, representando os bois Caprichoso e Garantido. O local também funciona como um centro cultural, oferecendo oficinas de dança, teatro e artes visuais, além de ser um espaço para eventos culturais e exposiçõe.",
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
    "O evento movimenta fortemente o turismo e a economia do Amazonas.",
    "há uma modificação das cores dos rótulos de refrigerantes, cervejas e outros produtos para as cores dos bois durante o festival."
  ],
  rivalidade:
    "A rivalidade entre os bois Caprichoso e Garantido no Festival de Parintins é uma das mais intensas e históricas do Brasil. Desde 1965, a disputa entre esses dois bois rivais transforma Parintins em dois territórios, azul e vermelho, cada um representando um boi. O Caprichoso, com sua torcida azul, é o favorito do público, enquanto o Garantido, com sua torcida vermelha, é o campeão histórico. O festival, que é considerado Patrimônio Cultural do Brasil, é um espetáculo de dança, música e alegria que atrai milhões de visitantes anualmente. A rivalidade é marcada por uma competição saudável, onde cada boi busca superar o outro em criatividade, coreografia e apresentação, resultando em um espetáculo vibrante e emocionante para todos os presentes.",
  festival:
    "O Festival de Parintins é uma festividade folclórica que ocorre anualmente na cidade de Parintins, no estado do Amazonas, e que se baseia na tradição do boi-bumbá, apresentando elementos como música, ritual, e o emblemático auto do boi. Composto por dois bois-bumbás rivais, o Boi Garantido e o Boi Caprichoso, o festival é marcado por intensa rivalidade, mobilizando as apaixonadas torcidas vermelha e azulada. Ao longo de sua rica história, desde a década de 1960, o evento conquistou o status de patrimônio cultural brasileiro, preservando as tradições da região amazônica. Os resultados ao longo dos anos mostram uma alternância de vitórias, com o Boi Garantido conquistando mais títulos do que o Boi Caprichoso. O festival transcende suas origens sendo um fenômeno cultural nacional, influenciando a música, a moda. É considerado o segundo maior espetáculo folclórico do Brasil, perdendo apenas para o Carnaval."
};

// ==============================
// Informações Caprichoso & Garantido
// ==============================
const caprichosoInfo =
  "💙 O Boi Caprichoso, também conhecido como touro negro, é uma das agremiações culturais que competem no Festival Folclórico de Parintins. Fundado em 1913, o Caprichoso é conhecido por sua coroa azul e branco, simbolizando a estrela azulada na testa do touro. O boi Caprichoso foi criado por famílias nordestinas, e se tornou um símbolo importante de Parintins. É considerado o boi da tradição mais inovadora, trazendo modernidade às alegorias e toadas. Sua torcida é conhecida como 'Nação Azul' e sua batucada é chamada de 'Batucada'. O Caprichoso valoriza muito os temas ligados à floresta, à resistência e ao espírito amazônico.";

const garantidoInfo =
  "❤️ O Boi Garantido, também conhecido como boi do povão,  é uma das agremiações culturais que competem no Festival Folclórico de Parintins. fundado em 1913 e nasceu de uma promessa feita a São João Batista. Quando seu criador, Lindolfo Monteverde ficou gravemente doente, prometeu que, se fosse curado, construiria um boi para alegrar as pessoas durante as festividades de junho. é representado pela cor vermelha e o símbolo do coração na Testa. É considerado o boi mais tradicional, mantendo raízes fortes no folclore e nas toadas emocionantes. Sua torcida é chamada de 'Nação Vermelha' e sua batucada é conhecida como 'Marujada'. O Garantido destaca a cultura cabocla, o romantismo e a força popular.";

// ==============================
// Detalhamento Item a Item
// ==============================
const infoDetalhada = {
  1: "Apresentador: Anfitrião, Mestre de Cerimônia, Porta voz.<br><br>MÉRITOS: Domínio de arena e de público, fluência verbal, carisma, impostação sem interferência ou intervenção que dificulte audição ou compreensão do espetáculo de voz, dicção, alegria, atenção desenvolvimento do tema.<br><br>ELEMENTOS COMPARATIVOS: Indumentária e significado, voz, desenvoltura, animação.<br><br>Caprichoso: Edmundo Oran <br><br>Garantido: Israel Paulain.",
  2: "Levantador de Toadas: Sua voz é o fio condutor para o desenvolvimento do tema.<br><br>MÉRITOS: Interpretação, afinação, dicção, timbre e técnica de canto.<br><br>ELEMENTOS COMPARATIVOS: Afinação, extensão vocal, dicção, respiração e timbre.<br><br>Caprichoso: Patrick Araújo<br><br>Garantido: David Assayag.",
  3: "Batucada (Caprichoso) / Marujada (Garantido): Sustentação rítmica, base para o espetáculo, agrupamento de percussão que fornece um referencial rítmico indispensável às toadas.<br><br>MÉRITOS: Harmonia, cadência, ritmo, constância.<br><br>ELEMENTOS COMPARATIVOS: Harmonia, disposição de arena, ritmo, indumentária, cadência.",
  4: "Ritual Indígena: Recriação de rito xamanístico, fundamentado através de pesquisa, dentro do contexto folclórico do boi-bumbá.<br><br>MÉRITOS: Teatralização, criatividade, beleza, originalidade e efeitos.<br><br>ELEMENTOS COMPARATIVOS: Fidelidade à toada cantada na apresentação do ritual, desenvolvimento, beleza e encenação, observada a sua fundamentação (pesquisa/referências) dentro da folclorização do boi-bumbá.",
  5: "Porta-Estandarte: Símbolo do Boi em movimento.<br><br>MÉRITOS: Bailado, garra, desenvoltura, simpatia, elegância e alegria.<br><br>ELEMENTOS COMPARATIVOS: Indumentária, estandarte, leveza, graça, sincronia de movimentos entre o bailado e o estandarte.<br><br>Caprichoso: Marcela Marialva.<br><br>Garantido: Jeveny Mendonça.",
  6: "Amo do Boi: O dono da fazenda, menestrel que tira versos dentro dos fundamentos do espetáculo.<br><br>MÉRITOS: Dicção, desenvoltura, postura expressões cênicas.<br><br>ELEMENTOS COMPARATIVOS: Indumentária, voz, afinação, poder de improvisação e qualidade poética.<br><br>Caprichoso: Caetano Medeiros.<br><br>Garantido: João Paulo Faria.",
  7: "Sinhazinha da Fazenda: Filha do dono da fazenda no auto do Boi-Bumbá de Parintins.<br><br> MÉRITOS: Beleza, graça, desenvoltura e alegria.<br><br>ELEMENTOS COMPARATIVOS: Indumentária, movimentos, saudação ao boi e ao público, simpatia e carisma.<br><br>Caprichoso: Valentina Cid.<br><br>Garantido: Atualmente se encontra em aberto.",
  8: "Rainha do Folclore: Item que representa a diversidade de valores expressados pela manifestação popular. MÉRITOS: Beleza, simpatia, desenvoltura e incorporação as suas representações.<br><br>ELEMENTOS COMPARATIVOS: Beleza, graça, movimentos, simpatia e indumentária.<br><br>Caprichoso: Cleise Simas.<br><br>Garantido: Lívia Christina.",
  9: "Cunhã-poranga: Moça bonita, guerreira e guardiã, expressa a força através da beleza.<br><br>MÉRITOS: Beleza, simpatia, desenvoltura e incorporação as suas representações.<br><br>ELEMENTOS COMPARATIVOS: Beleza, movimentos, simpatia e indumentária.<br><br>Caprichoso: Marciele Albuquerque.<br><br>Garantido: Isabelle Nogueira.",
  10: "Boi Bumbá evolução: Símbolo da manifestação popular, motivo e razão de ser do Festival Folclórico de Parintins.<br><br>MÉRITOS: Evolução e encenação dos tripas (Pessoas Responsáveis por dar vida aos Bois).<br><br>ELEMENTOS COMPARATIVOS: Geometria idêntica, leveza, coreografia e movimentos de um boi real.<br><br>Caprichoso: Edson e Alexandre Azevedo.<br><br>Garantido: Denison Piçanã.",
  11: "Toada, letra e música: Suporte lítero musical do festival, elo entre a individualidade e o grupo.<br><br>MÉRITOS: Agrega elementos históricos, geográficos, culturais e sociais, desde os momentos primitivos até os nossos dias.<br><br>ELEMENTOS COMPARATIVOS: Melodia, métrica, conteúdo, interpretação, composição e harmonia.",
  12: "Pajé: Suporte lítero musical do festival, elo entre a individualidade e o grupo.<br><br> MÉRITOS: Agrega elementos históricos, geográficos, culturais e sociais, desde os momentos primitivos até os nossos dias.<br><br>ELEMENTOS COMPARATIVOS: Melodia, métrica, conteúdo, interpretação, composição e harmonia.<br><br>Caprichoso: Erick Beltrão.<br><br>Garantido: Adriano Paketá.",
  13: "Povos Indígenas: Grupos étnicos que compões os povos indígenas do Brasil, dentro do contexto folclórico do boi- bumbá de Parintins.<br><br>MÉRITOS: Sincronia de movimentos, cores e expressões cênicas e danças.<br><br>ELEMENTOS COMPARATIVOS: Sincronia, indumentária, fidelidade às raízes (dentro do contexto folclórico do boi- bumba) e efeitos visuais: plástica e adereços pertinentes ao contexto tribal folclorizados ou não.",
  14: "Tuxauas: Chefe da aldeia, o personagem caboclo em sua miscigenação, representação alegórica do universo indígena e caboclo da Amazônia.<br><br>MÉRITOS: Plástica adequada ao tema do espetáculo, criatividade e originalidade.<br><br>ELEMENTOS COMPARATIVOS: Indumentária, fidelidade ao tema do espetáculo e riqueza dos detalhes nas confecções do capacete (cocar alegórico).",
  15: "Figura típica regional: Símbolo da cultura amazônica, na sua soma de valores a partir dos elementos que compuseram a sua miscigenação.<br><br>MÉRITOS: Homenagem às raízes da terra, beleza e originalidade.<br><br>ELEMENTOS COMPARATIVOS: Fidelidade ao item, acabamento, estética, porte: encenação.",
  16: "Alegoria: Estruturas artísticas que funcionam como suporte cenográfico para apresentação.<br><br> MÉRITOS: Beleza, criatividade e originalidade.<br><br>ELEMENTOS COMPARATIVOS: Acabamento, execução, funcionalidade, estética e porte.",
  17: "Lenda amazônica: Ficção que ilustra a cultura dos povos da Amazônia dentro do contexto folclórico do Boi-Bumbá de Parintins.<br><br>MÉRITOS: Imaginação, envolvimento, porte cenográfico e encenação.<br><br>ELEMENTOS COMPARATIVOS: Acabamento, encenação, originalidade e desenvolvimento.",
  18: "Vaqueirada: Agrupamento coletivo, guardiões do boi em evolução.<br><br>MÉRITOS: Beleza e coreografia.<br><br>ELEMENTOS COMPARATIVOS: Indumentária, coreografia e sincronia.",
  19: "Galera: Agrupamento coletivo, guardiões do boi em evolução.<br><br>MÉRITOS: Beleza e coreografia.<br><br>ELEMENTOS COMPARATIVOS: Indumentária, coreografia e sincronia.",
  20: "Coreografia: Todos os movimentos de dança apresentados durante o espetáculo.<br><br>MÉRITOS: Dinâmica, criatividade nos movimentos, ritmo e sincronia.<br><br>ELEMENTOS COMPARATIVOS: Expressividade do movimento, sincronia e criatividade.",
  21: "Organização do Conjunto Folclórico: Reunião de itens individuais, artísticos e coletivos embasados no conteúdo do espetáculo, e, por sua vez, dispostos organizadamente na arena de apresentação.<br><br>MÉRITOS: Disposição em que se encontram suas diversidades (tribos, itens individuais, etc.), harmonia, liberdade de movimentos na arena e tempo compatível.<br><br>ELEMENTOS COMPARATIVOS: Indumentária, alegria pertinente ao conteúdo do espetáculo, diversidade de estrutura e fantasia com fidelidade ao tema."
};

// ==============================
// Funções específicas
// ==============================
const caprichoso = () => caprichosoInfo;
const garantido = () => garantidoInfo;
const festivalInfo = () => info.festival;

// ------------------------------
// Novo trecho: buscar item por nome
// ------------------------------
const nomesItens = {
  "apresentador": 1,
  "levantador de toadas": 2,
  "batucada": 3,
  "marujada": 3,
  "ritual indigena": 4,
  "porta-estandarte": 5,
  "porta estandarte": 5,
  "amo do boi": 6,
  "sinhazinha": 7,
  "rainha do folclore": 8,
  "cunha poranga": 9,
  "cunhã poranga": 9,
  "evolucao": 10,
  "evolução": 10,
  "toada": 11,
  "paje": 12,
  "pajé": 12,
  "povos indigenas": 13,
  "tuxauas": 14,
  "figura tipica": 15,
  "alegoria": 16,
  "lenda amazonica": 17,
  "vaqueirada": 18,
  "galera": 19,
  "coreografia": 20,
  "organizacao do conjunto folclorico": 21,
  "organização do conjunto folclórico": 21
  };

// ==============================
// Função de resposta
// ==============================
function responder(texto) {
  const p = texto.toLowerCase();

  if (p.includes("festival")) return "🎉 " + festivalInfo();
  if (p.includes("caprichoso")) return caprichoso();
  if (p.includes("garantido")) return garantido();

  if (p.includes("21 itens") || p.includes("itens"))
    return "📋 Há 21 Itens Oficiais no Festival:<br><br><br><br>" + info.itens.join("<br><br>");

  if (p.includes("item")) {
    const num = parseInt(p.match(/\d+/));
    if (num && infoDetalhada[num]) return "ℹ️ " + infoDetalhada[num];
  }
  for (const nome in nomesItens) {
    if (p.includes(nome)) {
      const n = nomesItens[nome];
      return "ℹ️ " + infoDetalhada[n];
    }
  }

  if (p.includes("bumbódromo") || p.includes("bumbodromo")) 
    return "🏟️ " + info.bumbodromo;

  if (p.includes("quando") || p.includes("data") || p.includes("onde"))
    return "📅 " + info.quando;

  if (p.includes("pontuação") || p.includes("pontuacao"))
    return "⚖️ " + info.pontuacao;

  if (p.includes("curiosidades"))
    return "✨ Curiosidades:<br><br>- " + info.curiosidades.join("<br><br>- ");

  if (p.includes("rivalidade")) return "🔥 " + info.rivalidade;


  return `🤔 Telezé maninho, não entendi nada. Tente pergunta alguma coisa do:<br><br>
  - o Festival de Parintins<br><br>
  - os 21 itens<br><br>
  - um item específico (ex: item 8)<br><br>
  - o Bumbódromo<br><br>
  - a pontuação<br><br>
  - quando acontece<br><br>
  - curiosidades<br><br>
  - rivalidade<br><br>
  - Caprichoso<br><br>
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
