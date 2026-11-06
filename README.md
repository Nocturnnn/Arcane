# ARCANE — A beleza do caos

Experiência editorial de fã com sete seções, construída em Next.js 16, React 19, TypeScript, Tailwind CSS 4 e GSAP/ScrollTrigger. Todo o conteúdo visual é local. Os mockups completos não são usados como fundos ou imagens da página.

## Revisão visual — fragmentação

O hero agora tem Jinx ampliada, ARCANE mais alto com uma máscara vetorial de desgaste, oito fragmentos independentes recortados por CSS da imagem original enviada e nove lascas de espelho. A frase principal ocupa o plano inferior esquerdo sem ficar presa a uma linha abaixo do letreiro. As sete seções recebem desenhos, manchas, trajetórias de lápis, pequenas fotografias rasgadas e frases manuscritas com posições específicas para cada composição. As novas regras ficam em `src/app/chaos.css`.

Os fragmentos do hero se dispersam entre 130 e 354 px na vertical e até 256 px na horizontal, com giros individuais de até 40°. Nas demais seções, cada camada percorre uma trajetória linear contínua, atravessando a composição de referência no meio do percurso. Cidades, irmãs, Ekko, retratos, cristal, engrenagens e cenas da história têm movimentos próprios; legendas, títulos, desenhos e ondas sonoras também acompanham a rolagem. O vinil completa uma volta no intervalo da seção, limitado ao fim real da página. A amplitude continua reduzida no celular e a preferência por movimento reduzido continua desativando animações.

A revisão de movimento foi inspecionada no navegador em desktop e em 390 × 844. Foram medidas mudanças nas 124 camadas animadas das seis seções após o hero, incluindo títulos, imagens e legendas. Também foram verificados o retorno do vinil ao rolar para cima, a seleção de Viktor e a ausência de rolagem horizontal no celular. As capturas `desktop.png` e `mobile.png` em `artifacts/` são da primeira implementação; `scroll-hextech.png` e `scroll-motion-checks.json` documentam a revisão atual.

## Executar

Requer Node.js 20.9 ou superior.

```sh
npm install
npm run dev
```

Abra http://127.0.0.1:3000.

```sh
npm run typecheck
npm run build
npm start
```

## Composição e interação

- `src/app/page.tsx`: as sete composições, navegação, grafismos e destinos da trilha sonora.
- `src/app/globals.css`: direção editorial, recortes, planos e layouts específicos para desktop/mobile.
- `src/app/chaos.css`: composição revisada, desgaste da tipografia, fragmentos e intervenções gráficas.
- `src/components/editorial.tsx`: componentes reutilizáveis `Section`, `Layer`, `Photo`, `Note` e `Paint`; contexto GSAP com limpeza e atualização após imagens/fontes.
- `src/lib/scroll-motion.ts`: trajetórias individuais e seleção de elementos animados nas seis seções após o hero.
- `src/components/character-panel.tsx`: quatro personagens selecionáveis em um diálogo HTML nativo, foco contido, fechamento por Escape/botão/clique no fundo e restauração de foco.
- `public/images/SOURCES.md`: inventário, URLs oficiais, proveniência e observações dos assets.
- `docs/generated-assets.md`: instruções utilizadas para os assets derivados das referências com Imagegen.

Os parâmetros do hero ficam próximos de cada camada. As trajetórias das demais composições ficam em `src/lib/scroll-motion.ts`. Cada seção compartilha um ScrollTrigger, mas cada elemento tem deslocamento, rotação e escala próprios. Isso reduz os controladores e mantém uma velocidade contínua ao atravessar a composição. Atualizações de geometria causadas pelo carregamento de imagens aguardam o fim da rolagem. O movimento usa `scrub`, sem estado React por frame. As amplitudes são reduzidas no celular, e `prefers-reduced-motion` desativa os ScrollTriggers. A página continua legível sem animação.

As faixas abrem os vídeos oficiais em uma nova aba. Não há áudio distribuído, reprodução simulada ou autoplay.

## Referências e limites visuais

Os recortes de Jinx, Vi, Ekko e Hextech têm alpha real. As três imagens secundárias dos personagens foram reconstruídas individualmente a partir dos mockups, com Imagegen; não são frames originais da série. Fotografias usam máscaras CSS independentes. Os grafismos, projéteis, peças mecânicas, vinil e ondas sonoras são elementos separados, desenhados com SVG/CSS.

O layout reproduz a direção dos mockups, com adaptações: as cidades e várias cenas são assets oficiais alternativos; as fontes são equivalentes locais; detalhes pequenos são recriações vetoriais. O quadro do sinalizador é um recorte de 430 × 180 do mockup, portanto sua nitidez é inferior à dos demais assets. Não se trata de uma reprodução pixel a pixel.

Projeto local, sem deploy automático. Arcane e seus personagens pertencem aos respectivos titulares. Sem afiliação oficial com Riot Games, Fortiche ou Netflix. A licença do repositório não concede direitos sobre as imagens de terceiros.

## Validação

Build de produção e verificação TypeScript. Inspeção no navegador de desktop e em viewport de 390 × 844: sete seções, navegação, painéis, Escape/restauração de foco, imagens, rolagem reversa e largura da página. Os ajustes de camadas corrigem a interceptação do retrato de Viktor pelo recorte de Ekko. A configuração de movimento reduzido é implementada por media queries e GSAP matchMedia; não foi alterada a preferência de acessibilidade do sistema durante os testes.
