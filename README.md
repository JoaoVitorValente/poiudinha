# Para Ana ❤️ — Presente Digital de João

Uma experiência web romântica e interativa criada exclusivamente para Ana.

## Como abrir

1. Abra o arquivo `index.html` no navegador (Chrome, Firefox, Edge ou Safari).
2. Não precisa instalar nada — funciona offline após o primeiro carregamento.
3. Para melhor experiência, use em tela cheia no celular ou computador.

> **Dica:** Se preferir, use uma extensão como "Live Server" no VS Code/Cursor para abrir com servidor local.

---

## Estrutura do projeto

```
para-ana/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos visuais
├── js/
│   └── script.js       # Interatividade
├── data/
│   ├── mensagens.js    # Textos, carta, playlist, estrelas, config
│   ├── timeline.js     # Linha do tempo
│   └── galeria.js      # Fotos da galeria
├── assets/
│   ├── fotos/          # Suas fotos reais
│   ├── musicas/        # Arquivos MP3
│   └── icones/         # Ícones e placeholders
└── README.md
```

---

## Onde editar cada coisa

### Nomes e data do relacionamento

Arquivo: `**data/mensagens.js**` → objeto `CONFIG`

```javascript
const CONFIG = {
  de: 'João',
  para: 'Ana',
  dataInicio: new Date(2022, 5, 12, 18, 30, 0), // Ano, Mês-1, Dia, Hora, Min
  musicaFundo: 'assets/musicas/nossa-musica.mp3',
};
```

### Fotos — Seção "Nosso Início"

Arquivo: `**data/mensagens.js**` → `TEXTO_INICIO`

- Troque `foto` pelo caminho da sua imagem (ex: `'assets/fotos/inicio.jpg'`)
- Edite os parágrafos em `paragrafos`

### Fotos — Galeria horizontal

Arquivo: `**data/galeria.js**`

Adicione quantas fotos quiser:

```javascript
{ src: 'assets/fotos/minha-foto.jpg', legenda: 'Legenda romântica', alt: 'Descrição' },
```

Coloque os arquivos em `**assets/fotos/**`.

### Linha do tempo

Arquivo: `**data/timeline.js**`

Cada evento tem: `data`, `titulo`, `descricao`, `foto`, `fotoAlt`.

Para adicionar um novo evento, copie um bloco existente e cole no array.

### Motivos pelos quais eu amo você (cartões 3D)

Arquivo: `**data/mensagens.js**` → array `MOTIVOS_AMOR`

```javascript
{ frente: 'Seu sorriso', verso: 'Mensagem personalizada aqui...' },
```

### Carta de amor

Arquivo: `**data/mensagens.js**` → objeto `CARTA_AMOR`

Edite `texto` e `assinatura` com suas palavras.

### Playlist do casal

Arquivo: `**data/mensagens.js**` → array `PLAYLIST`

Tipos suportados:


| tipo        | uso                      |
| ----------- | ------------------------ |
| `'local'`   | MP3 em `assets/musicas/` |
| `'spotify'` | URL do embed do Spotify  |
| `'youtube'` | URL do embed do YouTube  |


Exemplo MP3:

```javascript
{
  titulo: 'Nossa Música',
  artista: 'Artista',
  mensagem: 'Por que essa música é especial...',
  tipo: 'local',
  src: 'assets/musicas/musica-1.mp3',
  capa: 'assets/fotos/playlist-1.jpg',
}
```

### Céu dos desejos (mensagens das estrelas)

Arquivo: `**data/mensagens.js**` → array `MENSAGENS_ESTRELAS`

Adicione quantas mensagens quiser (já vêm 33).

### Sonhos do futuro

Arquivo: `**data/mensagens.js**` → array `SONHOS_FUTURO`

### Página secreta

Arquivo: `**data/mensagens.js**` → array `SONHOS_SECRETOS`

Ativada após **5 cliques** no coração da tela inicial.

### Mensagem final

Arquivo: `**index.html`** → seção `#secaoFinal`

Edite os parágrafos dentro de `.final-message`.

---

## Música de fundo

1. Coloque um arquivo MP3 em `**assets/musicas/**` (ex: `nossa-musica.mp3`).
2. Configure o caminho em `CONFIG.musicaFundo` em `**data/mensagens.js**`.
3. O visitante ativa pelo botão 🎵 no canto inferior direito.

Se não houver arquivo de música, o botão some automaticamente.

---

## Substituir fotos placeholder

O projeto já inclui placeholders SVG em `assets/fotos/`. Para usar suas fotos:

1. Copie suas imagens para `**assets/fotos/**` (JPG ou PNG).
2. Atualize os caminhos nos arquivos `data/*.js`.
3. Mantenha nomes simples, sem espaços (use hífens: `primeiro-beijo.jpg`).

---

## Sistema secreto

Na tela de abertura, clique **5 vezes** no coração animado para revelar a página secreta com sonhos ainda por viver. Edite a lista em `SONHOS_SECRETOS` no arquivo `mensagens.js`.

---

## Personalização avançada


| O que               | Onde                                |
| ------------------- | ----------------------------------- |
| Cores e visual      | `css/style.css` → variáveis `:root` |
| Animações e efeitos | `js/script.js`                      |
| Fontes              | `index.html` (Google Fonts)         |


---

## Compatibilidade

- Chrome, Firefox, Edge, Safari (desktop e mobile)
- Funciona offline (exceto embeds Spotify/YouTube e Google Fonts)
- Respeita `prefers-reduced-motion` para acessibilidade

---

Feito com amor por **João** para **Ana** ❤️