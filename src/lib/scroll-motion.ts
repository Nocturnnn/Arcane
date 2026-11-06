export type ScrollMotion = {
  x: number;
  y: number;
  rotate: number;
  scale: number;
};

// Full travel across a section. At its centre, every layer returns to the
// reference composition. Text moves less than artwork to preserve reading.
const trajectories: Record<string, ScrollMotion> = {
  "city-piltover": { x: -80, y: -300, rotate: -9, scale: 1.04 },
  "city-zaun": { x: 90, y: 270, rotate: 10, scale: 1.03 },
  "city-number": { x: -40, y: 150, rotate: 0, scale: 1 },
  "cities-title": { x: -100, y: 65, rotate: 0, scale: 1 },
  "sister-jinx": { x: -100, y: -270, rotate: -8, scale: 1.05 },
  "sister-vi": { x: 95, y: 240, rotate: 9, scale: 1.04 },
  "sisters-memory": { x: 100, y: -200, rotate: -12, scale: 1 },
  "sisters-title": { x: -85, y: 80, rotate: 0, scale: 1 },
  "ekko-cutout": { x: 45, y: -300, rotate: -7, scale: 1.07 },
  "portrait-caitlyn": { x: -70, y: 220, rotate: -12, scale: 1.02 },
  "portrait-viktor": { x: 85, y: -250, rotate: 13, scale: 1.02 },
  "portrait-jayce": { x: 75, y: 270, rotate: -10, scale: 1.03 },
  "characters-title": { x: -85, y: 70, rotate: 0, scale: 1 },
  "hextech-crystal": { x: -75, y: -290, rotate: 18, scale: 1.13 },
  "blueprint-one": { x: -100, y: 190, rotate: -18, scale: 1 },
  "blueprint-two": { x: 95, y: -180, rotate: 20, scale: 1 },
  "gear-one": { x: -90, y: 240, rotate: -65, scale: 1 },
  "gear-two": { x: 105, y: -240, rotate: 75, scale: 1 },
  "hextech-viktor": { x: 75, y: 240, rotate: -10, scale: 1.04 },
  "hextech-title": { x: -90, y: 65, rotate: 0, scale: 1 },
  "history-flare": { x: -80, y: -280, rotate: -8, scale: 1.04 },
  "history-bridge": { x: 110, y: 240, rotate: 11, scale: 1.02 },
  "history-sisters": { x: 70, y: 190, rotate: -12, scale: 1.03 },
  "history-eye": { x: -90, y: -230, rotate: 13, scale: 1.05 },
  "history-title": { x: -85, y: 70, rotate: 0, scale: 1 },
  vinyl: { x: 80, y: -180, rotate: 360, scale: 1.03 },
  "album-cover": { x: -65, y: -230, rotate: -12, scale: 1.03 },
  "soundtrack-memory": { x: 80, y: 210, rotate: 14, scale: 1 },
  "soundtrack-title": { x: -80, y: 75, rotate: 0, scale: 1 },
  tracklist: { x: 0, y: 70, rotate: 0, scale: 1 },
  waveform: { x: -140, y: 55, rotate: 0, scale: 1.12 },
};

export const sectionMotionSelector = [
  "[data-parallax]",
  ".editorial-note",
  ".section-meta",
  ".scribble",
  ".place-caption",
  ".city-coordinate",
  ".sisters-quote",
  ".character-hint",
  ".hextech-caption",
  ".history-label",
  ".tracklist",
  ".waveform",
  ".map-route",
].join(",");

export function getSectionMotion(el: HTMLElement, index: number): ScrollMotion {
  const specific = Array.from(el.classList).find((name) => trajectories[name]);
  if (specific) return trajectories[specific];
  const direction = index % 2 ? 1 : -1;
  if (
    el.matches(
      ".editorial-note, .section-meta, .place-caption, .city-coordinate, .sisters-quote, .character-hint, .hextech-caption, .history-label",
    )
  ) {
    return { x: direction * 24, y: direction * 65, rotate: 0, scale: 1 };
  }
  if (el.matches(".scribble")) {
    return {
      x: direction * 45,
      y: direction * 130,
      rotate: direction * 8,
      scale: 1,
    };
  }
  const smallFragment = el.classList.contains("inset-shard");
  const gain = smallFragment ? 2.2 : 1.65;
  return {
    x: (Number(el.dataset.x) || direction * 35) * gain,
    y: (Number(el.dataset.y) || direction * 100) * gain,
    rotate:
      (Number(el.dataset.rotate) || direction * 6) * (smallFragment ? 1.5 : 1),
    scale: Number(el.dataset.scale) || 1,
  };
}
