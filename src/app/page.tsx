import { CharacterGallery } from "@/components/character-panel";
import Image from "next/image";
import {
  Layer,
  Note,
  Paint,
  Photo,
  ScrollScene,
  Section,
  HeroFragments,
} from "@/components/editorial";

const tracks = [
  {
    name: "Enemy",
    artist: "Imagine Dragons, JID",
    duration: "02:53",
    href: "https://www.youtube.com/watch?v=F5tSoaJ93ac",
  },
  {
    name: "Guns for Hire",
    artist: "Woodkid",
    duration: "03:46",
    href: "https://www.youtube.com/watch?v=pKNEx-9OqRM",
  },
  {
    name: "What Could Have Been",
    artist: "Sting, Ray Chen",
    duration: "03:33",
    href: "https://www.youtube.com/watch?v=liPu1_aPH5k",
  },
];

function Cartridge({
  className = "",
  y = 45,
  rotate = 5,
}: {
  className?: string;
  y?: number;
  rotate?: number;
}) {
  return (
    <Layer
      className={`cartridge ${className}`}
      y={y}
      rotate={rotate}
      decorative
    >
      <svg viewBox="0 0 35 130" fill="none">
        <defs>
          <linearGradient id={`brass-${className}`}>
            <stop stopColor="#36291f" />
            <stop offset=".3" stopColor="#e1b990" />
            <stop offset=".5" stopColor="#7b5534" />
            <stop offset=".8" stopColor="#dfc6a9" />
            <stop offset="1" stopColor="#392a1c" />
          </linearGradient>
        </defs>
        <path
          d="M10 39 11 20Q17-9 24 20L25 39 29 44 29 115 32 118 32 125 3 125 3 118 6 115 6 44Z"
          fill={`url(#brass-${className})`}
          stroke="#493d32"
        />
        <path d="M7 47h21M5 116h26M5 121h26" stroke="#e1cfb5" strokeWidth="2" />
      </svg>
    </Layer>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#universo">
        Pular para o conteúdo
      </a>
      <header className="masthead">
        <a className="wordmark" href="#inicio" aria-label="Arcane — início">
          ARCANE
        </a>
        <nav aria-label="Navegação principal">
          <a href="#universo">UNIVERSO</a>
          <a href="#personagens">PERSONAGENS</a>
          <a href="#historia">HISTÓRIA</a>
          <span className="nav-end" aria-hidden="true">
            — ⊙
          </span>
        </nav>
      </header>
      <main>
        <ScrollScene>
          <section
            id="inicio"
            className="editorial-section hero"
            aria-label="01 — A beleza do caos"
          >
            <span className="hero-universe eyebrow">
              LEAGUE
              <br />
              OF
              <br />
              LEGENDS<span className="note-dash">—</span>
            </span>
            <Layer className="hero-background-type" y={-35} x={-20} decorative>
              <span>ARCANE</span>
            </Layer>
            <Paint className="hero-streak-one" variant="streak" />
            <Paint className="hero-crown" variant="crown" />
            <HeroFragments />
            <Layer
              className="hero-jinx"
              y={-190}
              x={30}
              rotate={-4}
              scale={1.08}
            >
              <Image
                src="/images/jinx-cutout.webp"
                alt="Jinx, de cabelos azuis, estende a mão em direção ao observador"
                width={1024}
                height={1536}
                sizes="(max-width: 767px) 125vw, (max-width: 1800px) 75vw, 1350px"
                quality={85}
                fetchPriority="high"
                loading="eager"
              />
            </Layer>
            <Layer className="hero-title" y={25} x={-22}>
              <h1>
                <span className="serif">A BELEZA</span>
                <span className="hero-title-bottom">
                  <span className="serif">DO</span>{" "}
                  <em className="graffiti blue-ink">CAOS.</em>
                </span>
              </h1>
            </Layer>
            <Paint className="hero-smile" variant="smile" />
            <Note className="hero-side-note">
              MESMA
              <br />
              GAROTA.
              <br />
              MAIS
              <br />
              FAÍSCAS.
            </Note>
            <Note className="hero-bottom-note">
              LOUCA
              <br />
              BRILHANTE
              <br />
              PERIGOSA
              <br />
              INCOMPARÁVEL
            </Note>
            <Cartridge className="bullet-one" rotate={-6} />
            <Cartridge className="bullet-two" y={-65} rotate={4} />
            <Cartridge className="bullet-three" y={80} rotate={6} />
            <a className="explore eyebrow" href="#universo">
              EXPLORE <span aria-hidden="true">⟶</span>
            </a>
            <div className="hero-bottom-meta eyebrow">
              <span>01 — 07</span>
              <span>O CAOS É SÓ O COMEÇO.</span>
            </div>
          </section>

          <Section
            id="universo"
            number="02"
            kicker={
              <>
                DUAS CIDADES.
                <br />
                UM MUNDO EM CHAMAS.
              </>
            }
            label="02 — Duas cidades, um conflito"
            className="cities"
          >
            <Layer className="city-number" y={-45} x={-10} decorative>
              02
            </Layer>
            <Paint className="city-splash" variant="streak" />
            <Photo
              src="piltover.jpg"
              alt="Piltover: torres douradas, pontes monumentais e céu luminoso"
              className="city-piltover"
              y={-100}
              rotate={-3}
            />
            <Photo
              src="zaun.jpg"
              alt="Zaun: a cidade subterrânea com passarelas industriais sob a névoa verde"
              className="city-zaun"
              y={95}
              rotate={4}
            />
            <span className="map-route" aria-hidden="true" />
            <p className="place-caption caption-piltover">
              PILTOVER <span>●</span>
            </p>
            <p className="place-caption caption-zaun">
              ZAUN <span>●</span>
            </p>
            <Note className="piltover-note">
              PILTOVER
              <br />
              50.2967° N<br />
              <br />
              ORDEM
              <br />
              PROGRESSO
              <br />
              LUZ
            </Note>
            <Note className="zaun-note">
              SOBREVIVÊNCIA
              <br />
              LIBERDADE
              <br />
              CAOS
            </Note>
            <Layer className="cities-title" x={-30} y={15}>
              <h2>
                <span className="serif">DUAS CIDADES.</span>
                <span className="cities-line">
                  <span className="serif">UM</span>
                  <em className="graffiti pink-ink">CONFLITO.</em>
                </span>
              </h2>
            </Layer>
            <span className="city-coordinate eyebrow">
              ZAUN
              <br />
              50.4542° N<br />—
            </span>
          </Section>

          <Section
            id="irmas"
            number="03"
            kicker={
              <>
                LAÇOS MAIS FORTES
                <br />
                QUE O DESTINO.
              </>
            }
            label="03 — Ninguém vence sozinho"
            className="sisters"
          >
            <Layer className="sisters-title" y={30} x={-20}>
              <h2>
                <span className="serif">NINGUÉM</span>
                <span className="serif">VENCE</span>
                <em className="graffiti pink-ink">SOZINHO.</em>
              </h2>
            </Layer>
            <Paint className="sisters-cross" color="pink" />
            <Paint className="sisters-streak" variant="streak" />
            <Photo
              src="sister-jinx.webp"
              alt="Jinx olha para cima, entre lembranças de Powder"
              className="sister-jinx"
              y={-100}
              x={-20}
              rotate={-4}
            />
            <Photo
              src="sister-vi.webp"
              alt="Vi, de cabelos magenta, encara seu futuro"
              className="sister-vi"
              y={80}
              x={25}
              rotate={4}
            />
            <Photo
              src="sisters-scene.jpg"
              alt="Uma cena de Vi e Jinx em Arcane"
              className="sisters-memory monochrome"
              y={-55}
              rotate={-5}
            />
            <p className="scribble jinx-sign blue-ink" aria-hidden="true">
              JINX
            </p>
            <p className="scribble vi-sign pink-ink" aria-hidden="true">
              VI
            </p>
            <blockquote className="sisters-quote eyebrow">
              “ALGUMAS PESSOAS
              <br />
              TE DESTROEM.
              <br />
              OUTRAS TE FAZEM
              <br />
              SENTIR VIVA.”<span>— JINX</span>
            </blockquote>
            <Note className="sisters-note">
              AMIZADE
              <br />
              TRAUMA
              <br />
              REINVENÇÃO
              <br />
              PARA SEMPRE
            </Note>
            <p className="scribble memory-sign">
              MESMO
              <br />
              LADO DO
              <br />
              CAOS.
            </p>
          </Section>

          <div className="interlude eyebrow" aria-hidden="true">
            <span>ARCANE / CONTINUE A HISTÓRIA</span>
            <span>PASSADO — PRESENTE — O QUE AINDA VEM ⊙</span>
          </div>

          <Section
            id="personagens"
            number="04"
            kicker={
              <>
                PESSOAS.
                <br />
                IDEIAS.
                <br />
                PERMANECEM.
              </>
            }
            label="04 — Cada escolha deixa uma marca"
            className="characters"
          >
            <Layer className="characters-title" x={-22} y={25}>
              <h2>
                <span className="serif">CADA</span>
                <span className="serif">ESCOLHA</span>
                <span className="serif">DEIXA UMA</span>
                <em className="graffiti pink-ink">MARCA.</em>
              </h2>
            </Layer>
            <Paint className="ekko-crown" variant="crown" />
            <Paint className="character-streak" variant="streak" />
            <Paint className="character-cross" />
            <CharacterGallery />
            <Note className="characters-note">
              ALIADOS
              <br />
              RIVAIS
              <br />
              IDEAIS
              <br />
              CONSEQUÊNCIAS
            </Note>
            <span className="character-hint eyebrow">SELECIONE UM ROSTO ↗</span>
          </Section>

          <Section
            id="hextech"
            number="05"
            kicker={
              <>
                INOVAÇÃO
                <br />
                TEM UM
                <br />
                CUSTO.
              </>
            }
            label="05 — O preço do progresso"
            className="hextech"
          >
            <Layer
              className="blueprint blueprint-one"
              y={-55}
              rotate={-3}
              decorative
            >
              <Blueprint />
            </Layer>
            <Layer
              className="blueprint blueprint-two"
              y={65}
              rotate={5}
              decorative
            >
              <Blueprint />
            </Layer>
            <Paint className="crystal-streak" variant="streak" />
            <Paint className="hex-cross" color="pink" />
            <Layer className="hextech-title" x={-25} y={20}>
              <h2>
                <span className="serif">O PREÇO DO</span>
                <span className="serif">PROGRESSO.</span>
              </h2>
            </Layer>
            <Layer className="hextech-crystal" y={-110} rotate={6} scale={1.06}>
              <Image
                src="/images/hextech-crystal.webp"
                alt="Cristal Hextech azul luminoso envolvido por uma estrutura de metal dourado"
                width={800}
                height={1200}
                sizes="(max-width: 767px) 75vw, (max-width: 1800px) 36vw, 648px"
                loading="lazy"
              />
            </Layer>
            <Layer className="mechanism gear-one" y={85} rotate={-6} decorative>
              <Gear />
            </Layer>
            <Layer className="mechanism gear-two" y={-75} rotate={5} decorative>
              <Gear />
            </Layer>
            <Photo
              src="viktor-evolution.jpg"
              alt="Viktor diante das possibilidades da Hextech"
              className="hextech-viktor"
              position="90% center"
              y={85}
              rotate={-4}
            />
            <div className="hextech-caption">
              <h3>HEXTECH</h3>
              <Note>
                ENERGIA
                <br />
                INFINITA
                <br />
                POSSIBILIDADES
                <br />
                SEM LIMITES.
              </Note>
            </div>
            <p className="scribble viktor-sign blue-ink">
              VIKTOR
              <br />
              ALÉM
              <br />
              DO HUMANO.
            </p>
            <Note className="hextech-note">
              CIÊNCIA
              <br />
              AMBIÇÃO
              <br />
              PODER
              <br />
              QUANTO MAIS
              <br />
              LONGE?
            </Note>
            <Cartridge className="hex-bullet-one" y={-50} rotate={-5} />
            <Cartridge className="hex-bullet-two" y={70} />
          </Section>

          <Section
            id="historia"
            number="06"
            kicker={
              <>
                CICATRIZES
                <br />
                TAMBÉM
                <br />
                CONTAM HISTÓRIAS.
              </>
            }
            label="06 — O mundo não esquece"
            className="history"
          >
            <Layer className="history-title" x={-20} y={25}>
              <h2>
                <span className="serif">O MUNDO</span>
                <em className="graffiti blue-ink">NÃO</em>
                <span className="serif">ESQUECE.</span>
              </h2>
            </Layer>
            <Paint className="history-cross" color="pink" />
            <Paint className="history-streak" variant="streak" />
            <Photo
              src="history-flare.jpg"
              alt="Jinx acende um sinalizador azul sobre a cidade"
              className="history-flare"
              y={-95}
              rotate={-3}
            />
            <Photo
              src="history-bridge.jpg"
              alt="Uma visão de um futuro transformado pela Hextech"
              className="history-bridge"
              y={80}
              rotate={4}
            />
            <Photo
              src="sisters-scene.jpg"
              alt="Jinx e Vi, ligadas por uma história que não desaparece"
              className="history-sisters"
              y={55}
              rotate={-5}
            />
            <Photo
              src="jinx-memory.jpg"
              alt="O olhar de Jinx em um momento de silêncio"
              className="history-eye"
              y={-75}
              rotate={4}
            />
            <Note className="history-note">
              O PASSADO
              <br />
              SEMPRE
              <br />
              ENCONTRA
              <br />
              UM JEITO
              <br />
              DE VOLTAR.
            </Note>
            <Note className="history-footer-note">
              ZAUN
              <br />
              PILTOVER
              <br />E TUDO
              <br />
              ENTRE ELES.
            </Note>
            <p className="scribble history-sign pink-ink">
              MESMO
              <br />
              LADO.
              <br />
              SEMPRE
              <br />
              LIGADAS.
            </p>
            <span className="history-label eyebrow">
              JINX
              <br />E VI
              <br />—
            </span>
          </Section>

          <Section
            id="trilha"
            number="07"
            kicker={
              <>
                MESMAS VOZES.
                <br />
                NOVOS SIGNIFICADOS.
              </>
            }
            label="07 — Ouça o caos"
            className="soundtrack"
          >
            <Layer className="soundtrack-title" y={20} x={-15}>
              <h2>
                <span className="serif">OUÇA O</span>
                <em className="graffiti pink-ink">CAOS.</em>
              </h2>
            </Layer>
            <div className="waveform" aria-hidden="true">
              {Array.from({ length: 110 }, (_, i) => (
                <i
                  key={i}
                  style={{
                    height: `${8 + Math.abs(Math.sin(i * 7.3) * Math.cos(i * 0.11)) * 140}px`,
                  }}
                />
              ))}
            </div>
            <Layer className="vinyl" y={-40} rotate={150} decorative>
              <div className="vinyl-label">
                <span>ARCANE</span>
                <span>— SIDE A —</span>
                <i />
              </div>
            </Layer>
            <Layer className="album-cover" y={-75} rotate={-5}>
              <Image
                src="/images/sister-jinx.webp"
                alt="Capa editorial da trilha sonora de Arcane, com Jinx"
                width={900}
                height={1000}
                sizes="(max-width: 767px) 58vw, (max-width: 1800px) 32vw, 576px"
                loading="lazy"
              />
              <div className="album-type">
                <span>ARCANE</span>
                <small>LEAGUE OF LEGENDS</small>
                <p>
                  SOUNDTRACK
                  <br />
                  FROM THE ANIMATED SERIES
                </p>
              </div>
              <span className="scribble album-sign blue-ink" aria-hidden="true">
                JINX
              </span>
            </Layer>
            <div className="tracklist">
              <span className="tracklist-dots" aria-hidden="true">
                •••
              </span>
              <h3>
                ARCANE
                <br />
                SOUNDTRACK
              </h3>
              <ol>
                {tracks.map((track, i) => (
                  <li key={track.name}>
                    <a
                      href={track.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ouvir ${track.name}, ${track.artist}, em nova aba`}
                    >
                      <span className="play-icon" aria-hidden="true">
                        ↗
                      </span>
                      <span className="track-number">0{i + 1}</span>
                      <span className="track-info">
                        <strong>{track.name}</strong>
                        <small>{track.artist}</small>
                      </span>
                      <time>{track.duration}</time>
                    </a>
                  </li>
                ))}
              </ol>
              <p className="listen-note eyebrow">
                OUÇA NAS PLATAFORMAS OFICIAIS ↗
              </p>
            </div>
            <Photo
              src="jinx-memory.jpg"
              alt=""
              className="soundtrack-memory monochrome"
              y={55}
              rotate={5}
            />
            <p className="scribble music-sign blue-ink">
              MÚSICA
              <br />
              TAMBÉM
              <br />É MEMÓRIA.
            </p>
            <Note className="soundtrack-note">
              MESMAS
              <br />
              VOZES
              <br />
              NOVOS
              <br />
              SIGNIFICADOS.
            </Note>
            <Cartridge className="music-bullet" y={-40} rotate={5} />
          </Section>
        </ScrollScene>
      </main>
      <footer>
        <div className="footer-top">
          <a href="#inicio" className="wordmark">
            ARCANE
          </a>
          <span className="eyebrow">UM UNIVERSO DE HISTÓRIAS.</span>
          <span className="footer-line" />
          <a className="eyebrow" href="#inicio">
            VOLTE AO INÍCIO ↑
          </a>
        </div>
        <div className="footer-bottom">
          <p>
            PROJETO DE FÃ. SEM AFILIAÇÃO COM RIOT GAMES, FORTICHE OU NETFLIX.
          </p>
          <nav aria-label="Navegação do rodapé">
            <a href="#universo">UNIVERSO</a>
            <a href="#personagens">PERSONAGENS</a>
            <a href="#trilha">TRILHA SONORA</a>
          </nav>
          <span>© ARCANE / RIOT GAMES</span>
        </div>
      </footer>
    </>
  );
}

function Blueprint() {
  return (
    <svg viewBox="0 0 400 400" fill="none">
      <g stroke="currentColor" strokeWidth="1">
        <circle cx="200" cy="200" r="132" />
        <circle cx="200" cy="200" r="115" />
        <circle cx="200" cy="200" r="64" />
        <circle cx="200" cy="200" r="42" />
        <path d="M0 200h400M200 0v400M50 50l300 300M50 350 350 50M117 21v358M283 21v358M21 117h358M21 283h358M164 106l72 188m0-188-72 188" />
        <path d="m169 46 31-35 31 35m-62 308 31 35 31-35M46 169l-35 31 35 31m308-62 35 31-35 31" />
        <rect x="15" y="15" width="370" height="370" />
      </g>
      <g fill="currentColor" fontSize="9" fontFamily="monospace">
        <text x="25" y="36">
          HEXTECH / FIG. 05
        </text>
        <text x="270" y="365">
          CORE Ø 128.4
        </text>
        <text x="215" y="90">
          ENERGY FIELD
        </text>
      </g>
    </svg>
  );
}
function Gear() {
  return (
    <svg viewBox="0 0 200 200" fill="none">
      <g stroke="#8e714f" strokeWidth="12">
        <circle cx="100" cy="100" r="69" strokeDasharray="30 8" />
        <circle cx="100" cy="100" r="50" strokeWidth="5" />
        <path
          d="M100 28v45m0 54v45m-72-72h45m54 0h45M49 49l32 32m38 38 32 32M49 151l32-32m38-38 32-32"
          strokeWidth="9"
        />
      </g>
      <circle cx="100" cy="100" r="22" stroke="#b28a59" strokeWidth="7" />
    </svg>
  );
}
