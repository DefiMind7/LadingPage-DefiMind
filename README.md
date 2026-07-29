# DeFiMind · Landing Page

Página de entrada da DeFiMind. HTML, CSS e JavaScript puros, sem build e sem dependências.
Abre-se num browser e está a funcionar.

## Estrutura

```
index.html               A página inteira
assets/css/styles.css    Estilos e tokens de design
assets/js/i18n.js        Dicionários e motor de idiomas
assets/js/main.js        Navegação, animações, simulador, moeda, formulário
assets/img/logo.png      Logótipo original (500×500, fundo transparente)
vercel.json              Cabeçalhos de segurança e cache
```

O `logo.png` é o ficheiro original da marca, usado tal e qual na navegação, no
cartão, no rodapé e como ícone do separador. Não foi redesenhado nem convertido.

## Ver localmente

```bash
python -m http.server 4173
```

Depois abre `http://localhost:4173`.

## Publicar

O site é estático, por isso funciona em qualquer alojamento. Na Vercel:

```bash
npx vercel --prod
```

O `vercel.json` já traz cabeçalhos de segurança (HSTS, `nosniff`, `X-Frame-Options`) e
cache longo para os ficheiros em `assets/`.

## Idiomas

A página fala **português, inglês e espanhol**. O idioma é escolhido a partir de
`navigator.language`; se o país não estiver coberto, entra em inglês. Quem carregar no
selector fica com essa escolha guardada e ela passa a ganhar à detecção automática.

O português está escrito directamente no `index.html` e serve de original. Ao arrancar,
o `i18n.js` fotografa esse texto para memória e traduz a partir daí, o que permite voltar
ao português sem recarregar a página.

Para traduzir um texto novo: põe `data-i18n="chave"` no elemento (com o português dentro)
e acrescenta a mesma chave aos dicionários `en` e `es` em `assets/js/i18n.js`. Para
atributos, usa `data-i18n-attr="placeholder:chave"`. Textos gerados por JavaScript usam
`DFM_I18N.t('chave')`.

O `i18n.js` é carregado sem `defer`, de propósito: corre no momento em que o HTML acaba
de ser lido, antes de a página pintar, para não se ver o português a piscar.

**Por decidir:** o português é o de Portugal ("telemóvel", "levantar"). Como o produto
tem o Brasil como mercado, pode valer a pena um `pt-BR` separado. É acrescentar um
dicionário e mapear `pt-BR` na detecção.

## Cores

A paleta segue a da [Kast](https://www.kast.xyz/crypto-cards): preto puro, branco,
cinzentos e um único acento verde-menta.

| Papel | Valor |
| --- | --- |
| Fundo | `#000000` |
| Fundo alternado | `#0a0a0a` |
| Superfícies (cartões) | `#131313` |
| Texto principal | `#ffffff` |
| Texto secundário | `#cccccc` |
| Texto terciário | `#a8a8aa` |
| Acento | `#1eba98` |
| Borda de botão | `#676a79` |
| Gradiente de título | `#ffffff → #999999` |

Está tudo em tokens no topo de `styles.css`. Trocar o acento é mudar `--brand-500` e as
ocorrências de `rgba(30,186,152,…)`.

**Nota de contraste:** o botão principal é branco sobre verde, tal como na Kast, e isso
dá 2,46:1. Fica abaixo do mínimo das normas de acessibilidade (4,5:1). Passar o texto do
botão para escuro (`#04120e`) sobe para cerca de 7:1 sem mexer no verde.

## Moeda

O visitante vê os valores na moeda do sítio onde está. A deteção usa `navigator.language`
e está em `assets/js/main.js`, no mapa `REGION_CURRENCY`. Estão configuradas quatro moedas
(USD, EUR, BRL, GBP) e o USD é o valor por omissão para qualquer região não listada.

O simulador projeta uma percentagem de crescimento, e o resultado é matematicamente correcto
em qualquer moeda. Por isso não é preciso taxa de câmbio nenhuma: quem escreve 1000 e escolhe
BRL está a simular 1000 reais, não a converter dólares.

Para acrescentar uma moeda: junta uma entrada em `CURRENCIES`, mapeia os países em
`REGION_CURRENCY` e acrescenta o botão em `#curPicker` no `index.html`.

## Lista de espera (Supabase)

O formulário grava em Supabase. Falta **um passo manual** antes de funcionar: criar a
tabela. Abre o *SQL Editor* do projecto, cola o conteúdo de
`supabase/migrations/0001_waitlist.sql` e executa.

### Porque é que a chave está à vista

`assets/js/config.js` tem a chave *publishable* em texto simples. É suposto. Essa chave
viaja no JavaScript e qualquer visitante a consegue ler, em qualquer site que use Supabase
no browser. Não é um descuido nem se resolve escondendo-a.

Quem faz a segurança é a base de dados. A migração liga *row level security* e cria uma
única política: **inserir sim, ler não**. Não existe política de `select`, `update` ou
`delete`, portanto mesmo com a chave na mão ninguém descarrega a lista de emails a partir
do browser. Para ler é preciso a chave `service_role`, que nunca pode sair do servidor e
nunca deve entrar neste repositório.

A validação do email também está do lado do servidor, numa restrição `check`. A validação
do browser é conveniência; a que conta é a que não se consegue contornar.

### Emails repetidos

Um email já inscrito devolve `409`, e o JavaScript mostra na mesma a mensagem de sucesso.
Se dissesse "já estás inscrito", o formulário passava a ser uma forma de descobrir quem
está na lista, um email de cada vez.

A primeira tentativa foi `Prefer: resolution=ignore-duplicates`, que resolveria isto do
lado do servidor. Não dá: esse cabeçalho obriga o PostgREST a exigir privilégio de
`SELECT` na tabela, exactamente o que recusamos para ninguém poder ler a lista. Ou se tem
um ou se tem o outro, e a lista fechada vale mais.

### Cabeçalhos do pedido

Só `apikey`. A chave *publishable* não é um JWT, por isso mandá-la também em
`Authorization: Bearer` faz o PostgREST tentar lê-la como token e responder `401`.

### Ver as inscrições

Pelo painel do Supabase, em *Table editor → waitlist*. Não há maneira de as ler a partir
do site, de propósito.

### Verificado contra o projecto a sério

| Tentativa | Resultado |
| --- | --- |
| Inscrever email novo | `201`, gravado |
| Inscrever o mesmo outra vez | `409`, mensagem de sucesso à mesma |
| Inscrever email inválido | `400`, recusado pela restrição do servidor |
| **Ler a lista** com a chave pública | `401`, negado |
| **Alterar** uma linha | `401`, negado |
| **Apagar** uma linha | `401`, negado |

### Cache dos ficheiros

`assets/css` e `assets/js` são servidos com `must-revalidate`, não com `immutable`. Sem
build que ponha uma impressão digital no nome dos ficheiros, marcá-los como imutáveis
faria com que uma actualização nunca chegasse a quem já tivesse visitado o site. Só as
imagens levam cache longa, porque essas não mudam.

### Por fazer

- **Limitar a cadência.** O Supabase tem limites gerais de API, mas nada impede alguém de
  inserir milhares de emails válidos. Um gatilho que conte inserções por janela de tempo
  resolve.
- **Confirmar o email** antes de considerar a inscrição válida, se a lista for usada para
  envios a sério.
- **RGPD:** guardamos email, idioma e data, e mais nada. Sem IP, sem impressão digital do
  browser. Antes do lançamento é preciso a política de privacidade e uma forma de pedir
  a remoção.

## Antes de ir para o ar

- [ ] Trocar `https://defimind.com/` pelo domínio real nas meta tags do `<head>`
- [ ] Criar `assets/img/og-image.png` (1200×630) para as partilhas em redes sociais
- [ ] Ligar o formulário a um backend a sério
- [ ] Escrever as páginas legais e ligar os quatro links do rodapé
- [ ] Preencher os links das redes sociais no rodapé (estão a `#`)
- [ ] Rever as percentagens dos planos com quem trata do enquadramento legal

## Percentagens

As taxas aparecem em cinco sítios e têm de ser mudadas em conjunto:

| Onde | Ficheiro |
| --- | --- |
| Cartões dos planos (`data-count-to`) | `index.html` |
| Botões do simulador (`data-rate`) | `index.html` |
| Número grande no topo | `index.html` |
| Tabela comparativa | `index.html` |
| Cartão dentro do telemóvel | `index.html` |
| Taxa inicial do simulador (`var rate`) | `assets/js/main.js` |

## Notas técnicas

- Fonte Inter via Google Fonts. Os ícones da interface são SVG inline; o logótipo é o PNG
  original da marca. Não há pedidos a servidores externos além da fonte.
- O cartão cai e assenta ao entrar no ecrã (1,35s). A sombra de contacto aperta no embate
  para dar peso. Depois de pousar largamos a animação, senão ela ficaria a mandar no
  `transform` e o efeito de levantar no hover deixava de funcionar.
- Animações de entrada com `IntersectionObserver`, desligadas para quem tem
  `prefers-reduced-motion` activo.
- Testado sem overflow horizontal a 375px, 1000px, 1136px e 1440px.
- A navegação passa a menu aos 1120px, porque os sete links ocupam 1071px numa linha.
  É um breakpoint separado do layout (900px) de propósito: se fossem o mesmo, ou a barra
  quebrava em duas linhas ou as grelhas colapsavam cedo de mais.
- Os dois cartões flutuantes do hero só aparecem a partir dos 1280px. Abaixo disso a coluna
  do telemóvel não tem folga lateral e eles cairiam por cima do texto do ecrã.
- Acessibilidade: um único `<h1>`, link de salto, foco visível, menu com `aria-expanded`,
  tabela comparativa com `<caption>` e cabeçalhos de linha.
