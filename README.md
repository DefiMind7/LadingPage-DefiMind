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

## Ligar o formulário da lista de espera

Neste momento os emails ficam guardados apenas no `localStorage` do visitante, o que serve
para demonstração mas não recolhe nada de facto. Em `assets/js/main.js` procura o bloco
marcado `substituir por chamada ao backend` e troca o `setTimeout` por um `fetch` para o
serviço escolhido (Formspree, Supabase, Mailchimp, um endpoint próprio).

A validação, os estados de erro e sucesso, o bloqueio do botão durante o envio e a limpeza
do campo já estão feitos. Só falta o destino.

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
