/**
 * ============================================
 * PRESENTE PARA ANA 
 * ============================================
 */
const CONFIG = {
  // Nomes
  de: 'João',
  para: 'Ana',

  // Data do início do relacionamento (Ano, Mês-1, Dia, Hora, Minuto)
  dataInicio: new Date(2021, 4, 13, 0, 0, 0),

  // Música de fundo opcional (deixe vazio para desativar)
  musicaFundo: 'assets/musicas/driverslicense.mp3',

  // Spotify / YouTube embeds (cole a URL completa do embed)
  spotifyEmbed: '',
  youtubeEmbed: 'https://youtu.be/ttRz03c208g?list=RDttRz03c208g',
};

/**
 * Texto da Seção 1 — Nosso Início
 */
const TEXTO_INICIO = {
  titulo: 'O começo de tudo.',
  subtitulo: 'Onde tudo começou',
  paragrafos: [
    'Lembro como se fosse ontem o momento em que nossos caminhos se cruzaram. Eu não sabia mas uma simples pergunta mudaria nossa vida. "Muito legal esse jogo, quer assistir?"',
    'Uma companhia maravilhosa. De repente, a saudade da sua presença, o que eu mais gostava de fazer naquele momento só tinha graça com você.',
    'Os primeiros sentimentos surgiram de forma natural, cada conversa que tinhamos, a ansiedade pra você responder quando eu lhe mandava mensagem... Você se tornou minha pessoa favorita no mundo.',
  ],
  foto: 'assets/fotos/BATMANS.jpeg',
  fotoAlt: 'Nosso primeiro momento especial',
};

/**
 * Seção 4 — Motivos pelos quais eu amo você (mínimo 12 cartões)
 */
const MOTIVOS_AMOR = [
  { frente: 'Seu sorriso', verso: 'Sorriso lindo e natural, gosto muito.' },
  { frente: 'Sua risada', verso: 'Doidinha maluquinha birutinha' },
  { frente: 'Seu carinho', verso: 'Demorei a conquistar e por isso é tão bom!' },
  { frente: 'Sua inteligência', verso: 'Você é bem capaz, não pense o contrário, eu percebi como você aprende rápido sobre o que te ensino.' },
  { frente: 'Sua força', verso: 'A mais forte do mundo e cuidadora!!!' },
  { frente: 'Seus olhos', verso: 'Amo seu zoião verde tão lindo e fofinho' },
  { frente: 'Sua paciência', verso: 'Aqui eu prefiro não opinar.' },
  { frente: 'Seu abraço', verso: 'Saudade do seu abração de urso (não devia ter te ensinado a dar mata-leão)' },
  { frente: 'Sua autenticidade', verso: 'Você é genuína, única e muito companheira, te amo ❤️' },
  { frente: 'Seus sonhos', verso: 'Conta pra mim pra gente poder realiza-los.' },
  { frente: 'Sua falta', verso: 'Sinto muito sua falta.' },
  { frente: 'Seu amor', verso: 'Pra mim um dos maiores gestos é fazer coisinhas pra eu comer enquanto eu to ocupado 😁' },
];

/**
 * Seção 5 — Cartinha Epecial ❤️
 */
const CARTA_AMOR = {
  titulo: 'Uma Carta Para Você',
  texto: `Minha querida Ana,

Obrigado por ser uma pessoa tão doce, tão amável, linda, carinhosa e protetora, eu amo tudo isso em você.

Um dia essa distância não será mais um obstáculo e faremos tudo o que quisermos novamente. Por enquanto, vamos cuidar para que tudo aconteça da maneira certa.

Seu sorriso é muito bonito, seu cabelo é muito bonito, VOCÊ é bonita! Você é muito especial pra mim por ser cuidadora, me sentim muito mimado por você e quero fazer o mesmo agora.

Obrigado por ser minha poiudinha parceira, obrigado pelos incontáveis presentes que me deu e por toda a companhia que me fez, seja estudando, assistindo ou jogando por todo esse tempo.

Você merece tudo de bom, ta bom? Prometo que vou tentar ser bem bonzão pra você! ❤️❤️
>>>>>>>>>>>>FELIZ DIA DOS NAMORADOS!!<<<<<<<<<<<<<<<<<<<

Com muito amor,`,
  assinatura: 'João ❤️',
};

/**
 * Seção 7 — Nossas Musiquinhas
 */
const PLAYLIST = [
  {
    titulo: 'Nossa Música',
    artista: 'Mr Loverman',
    mensagem: 'Olha eu aí!!! SOU EEEUU!!!',
    tipo: 'local', // 'local' | 'spotify' | 'youtube'
    src: 'assets/musicas/mrloverman.mp3',
    capa: 'assets/fotos/mrloverman.jpe',
  },
  {
    titulo: 'Primeira música',
    artista: 'I Wanna Be Yours',
    mensagem: 'Não foi a primeira que escutamos mas você diz que foi a primeira que lembrou de mim!',
    tipo: 'local',
    src: 'assets/musicas/yours.mp3',
    capa: 'assets/fotos/yours.jpg',
  },
  {
    titulo: 'Memória Especial',
    artista: 'End of Begginning',
    mensagem: 'Obrigado por me ajudar com meu medo de brinquedos...',
    tipo: 'youtube',
    src: 'assets/musicas/end.mp3',
    capa: 'assets/fotos/END.png',
  },
];

/**
 * Seção 8 — Céu dos Desejos (mínimo 30 mensagens)
 */
const MENSAGENS_ESTRELAS = [
  'FAZ UM NESQUIKZINHO PRA MIM BOOOOORA FAÇA',
  'DAAAAAANTEEEEEEEEEE',
  'POSSO FAZER UM LANCHINHO VEGANO PRA VOCÊ?',
  'ESPERO QUE VOCÊ ME AME VELHO, POIS EU VOU LHE AMAR!',
  'PODEMOS SENTAR NAQUELE BANQUINHO PRA OUVIR O ÁLBUM NOVO QUE VOCÊ QUERIA',
  'Sonho em dançar com você sob as estrelas.',
  'POIUDINHOS PARCEIROS!',
  'KATARIIIIIINAAAAAAAAA',
  'OBRIGADO POR TUDO, VOCÊ É INCRIVEL E LINDA!!! ❤️',
  'VAMOS MONTAR UMA BANDA, IGUAL OS TOTTYS!!!',
  'VAMOS ESCUTAR AVENGED SEVENFOLD',
  'VAMOS ESCUTAR CREED',
  'VAMOS ESCUTAR TAYLOR SWIFT',
  'TE AMOOOOOO ❤️❤️',
];

/**
 * Seção 9 — Futuro
 */
const SONHOS_FUTURO = [
  { icone: '✈️', titulo: 'Viajar Juntos', descricao: 'Conhecer novos países, vamos conhecer todas as comidas e os lugares bonitos por todo o mundo!' },
  { icone: '🏡', titulo: 'Construir Nossa Casa', descricao: 'Sinceramente, eu não acho que quero um apartamento, pode ser uma casinha?' },
  { icone: '🌍', titulo: 'Explorar o Mundo', descricao: 'Descobrir praias, lugares bonitos que vemos em jogos e filmes que espero conhecer contigo, poiudita!' },
  { icone: '📸', titulo: 'Criar Novas Memórias', descricao: 'Gosto muito das fotinhas que você tira, você é realmente uma aprendiz da olivia com suas técnicas secretas.' },
  { icone: '💍', titulo: 'Nosso Grande Dia', descricao: 'Quero um dia casar com você. Estar contigo na doença ou na saúde.' },
  { icone: '🌱', titulo: 'Crescer Juntos', descricao: 'Apoiar um ao outro em cada sonho, conquista e desafio da vida.' },
];

/**
 * Página Secreta — Sonhos ainda por viver
 */
const SONHOS_SECRETOS = [
  'Viajar muitos países e conhecer muitos lugareszinhos novos e bonitos.',
  'Assistir muitas sériezinhas boas quando tivermos tempo.',
  'Morar junto',
  'Te ensinar tudo (ou quase tudo) que eu sei sobre PCs.',
  'Montar uma casa beeeem bonita, quentinha pros dias frios e talvez com piscina pros dias quentes',
  'Zerar todos os Resident Evils (importantíssimo).',
  'Te ajudar a cuidar de todos os gatinhos.',
  'Poder passar com você o tempo que a gente quiser, sem problemas e sem preocupações.',
  'Aprender a tocar algum instrumento enquanto você aprende a tocar piano.',
  'Passar um dia todinho de chuva escutando música e admirando a paisagem num lugar bem calmo e bonito',
  'Fazer algo vegano bem saboroso pra vegana mais linda do mundo.',
];
