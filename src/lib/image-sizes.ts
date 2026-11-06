// Match the actual collage frames so a phone never requests a desktop-sized
// landscape photograph. Slightly oversize masked/rotated layers for sharp edges.
export function photoSizes(className: string): string {
  if (className.includes("inset-shard"))
    return "(max-width: 767px) 24vw, (max-width: 1800px) 15vw, 270px";
  if (className.includes("city-"))
    return "(max-width: 767px) 92vw, (max-width: 1800px) 56vw, 1008px";
  if (className.includes("sister-jinx") || className.includes("sister-vi"))
    return "(max-width: 767px) 60vw, (max-width: 1800px) 36vw, 648px";
  if (className.includes("sisters-memory"))
    return "(max-width: 767px) 58vw, (max-width: 1800px) 32vw, 576px";
  if (className.includes("history-flare"))
    return "(max-width: 767px) 94vw, (max-width: 1800px) 52vw, 936px";
  if (className.includes("history-bridge"))
    return "(max-width: 767px) 76vw, (max-width: 1800px) 48vw, 864px";
  return "(max-width: 767px) 46vw, (max-width: 1800px) 32vw, 576px";
}
