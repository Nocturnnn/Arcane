"use client";

import { useRef, useState } from "react";
import { Layer } from "./editorial";

const people = {
  ekko: {
    name: "Ekko",
    role: "O garoto que estilhaçou o tempo",
    city: "ZAUN / FIRELIGHTS",
    text: "Em uma cidade que aprendeu a sobreviver, Ekko insiste em construir um futuro. Inventor e líder dos Firelights, ele transforma lembranças em coragem para tentar outra vez.",
    words: "TEMPO. MEMÓRIA. SEGUNDAS CHANCES.",
  },
  caitlyn: {
    name: "Caitlyn",
    role: "Um olhar além dos muros",
    city: "PILTOVER / KIRAMMAN",
    text: "Criada entre os privilégios de Piltover, Caitlyn precisa confrontar as verdades que sua cidade prefere esconder. Sua busca por justiça atravessa a fronteira entre dever e convicção.",
    words: "ORDEM. JUSTIÇA. CONVICÇÃO.",
  },
  viktor: {
    name: "Viktor",
    role: "Além do humano",
    city: "ZAUN / HEXTECH",
    text: "Viktor vê na ciência a possibilidade de superar os limites impostos ao seu corpo e à sua origem. Mas a distância entre curar e transformar cobra um preço que nenhuma equação prevê.",
    words: "EVOLUÇÃO. SACRIFÍCIO. UM FUTURO DIFERENTE.",
  },
  jayce: {
    name: "Jayce",
    role: "O peso de inventar o amanhã",
    city: "PILTOVER / HEXTECH",
    text: "Jayce sonha em levar a magia às mãos de todos. Quando suas invenções encontram o poder político, ele descobre que progresso também significa assumir as consequências de cada escolha.",
    words: "PROGRESSO. RESPONSABILIDADE. ESCOLHAS DIFÍCEIS.",
  },
};
type Person = keyof typeof people;

export function CharacterGallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<Person>("ekko");
  const person = people[active];
  function open(id: Person) {
    setActive(id);
    dialog.current?.showModal();
  }
  return (
    <>
      <Layer className="ekko-cutout" y={-150} x={12} rotate={-3}>
        <button
          className="character-cutout"
          onClick={() => open("ekko")}
          aria-label="Conhecer Ekko"
        >
          <img
            src="/images/ekko-cutout.webp"
            alt="Ekko aponta seu dispositivo de tempo em nossa direção"
            width={800}
            height={1100}
            loading="lazy"
          />
          <span className="cutout-name">
            EKKO <span>↗</span>
          </span>
        </button>
      </Layer>
      {(["caitlyn", "viktor", "jayce"] as const).map((id, i) => (
        <Layer
          key={id}
          className={`character-portrait portrait-${id}`}
          y={[85, -55, 110][i]}
          x={[-15, 25, -20][i]}
          rotate={[-4, 5, -5][i]}
        >
          <button
            onClick={() => open(id)}
            aria-label={`Conhecer ${people[id].name}`}
          >
            <span className="portrait-frame">
              <img
                src={`/images/${id}-cinematic.webp`}
                alt={`Retrato de ${people[id].name}`}
                width={900}
                height={1200}
                loading="lazy"
              />
            </span>
            <span className="portrait-caption">
              <strong>{people[id].name} ↗</strong>
              <span>{people[id].words}</span>
            </span>
          </button>
        </Layer>
      ))}
      <dialog
        ref={dialog}
        className="character-dialog"
        aria-labelledby="character-name"
        aria-describedby="character-description"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <div className="dialog-content">
          <button
            className="dialog-close"
            onClick={() => dialog.current?.close()}
            aria-label="Fechar descrição"
          >
            FECHAR <span>×</span>
          </button>
          <img
            src={
              active === "ekko"
                ? "/images/ekko-cutout.webp"
                : `/images/${active}-cinematic.webp`
            }
            alt=""
            width={900}
            height={1200}
          />
          <div className="dialog-copy">
            <span className="eyebrow">{person.city}</span>
            <h2 id="character-name">{person.name}</h2>
            <p className="dialog-role">{person.role}</p>
            <p id="character-description">{person.text}</p>
            <span className="dialog-end">CADA ESCOLHA DEIXA UMA MARCA. ↗</span>
          </div>
        </div>
      </dialog>
    </>
  );
}
