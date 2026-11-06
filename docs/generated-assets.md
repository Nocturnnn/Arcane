# Assets derivados das referências

Ferramenta: Imagegen integrada (modo built-in). Não foi usada API externa via CLI. Todos os resultados finais foram copiados para `public/images`, redimensionados e codificados em WebP com Sharp, preservando alpha quando presente. As instruções abaixo são os prompts finais enviados à ferramenta, um por asset. As reconstruções podem diferir dos desenhos originais; não são assets oficiais.

## `jinx-cutout.webp`

Fonte: imagem original `Downloads/jinx.jpg` fornecida no ambiente do usuário.

> Use case: background-extraction. Edit target: supplied Jinx original image. Produce ONE clean transparent PNG cutout containing ONLY the main central blue-haired Jinx character and her large foreshortened reaching arm/hand, preserving the exact face, pose, hair strands, Arcane painted style, proportions and costume from this image. Remove ALL background mirrors, chains, photos, bullets, toys and other characters. Keep main Jinx complete from hair top to fingers and the visible torso; retain the soft focused foreground hand. Real alpha transparency outside the silhouette, no white background, no text, no added objects. This is the foreground asset for reconstructing the user's website mockup.

## `ekko-cutout.webp`

Fonte: primeiro plano da seção superior de `Arcane_ continuação em quatro atos.png`.

> Use case: background-extraction. Edit target: attached editorial mockup. Extract ONLY Ekko, the large white-haired dark-skinned central character in the top section pointing his glowing blue time device at the camera. Produce a single isolated transparent PNG cutout of Ekko plus the device in his outstretched hand. Preserve his exact facial likeness, white dreadlocks, face paint, clothing and pose as closely as possible. Reconstruct any small hidden edges. Remove ALL text, page texture, splashes, photographs and other characters. No collage. True alpha transparency around only Ekko and his held device. Vertical portrait framing, high detail.

## `hextech-crystal.webp`

Fonte: seção Hextech de `Arcane_ continuação em quatro atos.png`.

> Use case: background-extraction. Edit target: the second section of this supplied mockup. Isolate ONLY the large central luminous blue faceted elongated hextech crystal with its golden brass ring harness around its lower middle. Single object only on genuine alpha transparent background. Preserve Arcane painted cinematic materials and the pointed vertical diamond shape with electric blue triangular facets and restrained glow. Remove ALL text, paper, backgrounds, technical drawings, paint splashes, Viktor and every small floating mechanical fragment; these will be separate website elements. Portrait centered composition, no typography, actual transparent PNG.

## `sister-jinx.webp`

Fonte: retrato inferior de `Arcane_ A beleza do caos.png`.

> Use case: background-extraction. Edit target: supplied Arcane website reference, specifically bottom section. Isolate ONLY the blue-haired Jinx portrait in the lower middle (looking upward and to the right), head and visible shoulders with long blue braids. Preserve her exact facial features, pink eyes, blue hair, Arcane painterly cinematic style and upward pose. Reconstruct clean shoulder edges. Actual transparent alpha everywhere around her silhouette, individual portrait cutout asset. No text, splashes, borders, other people or background. Do not use the top hero version, use the lower section Jinx portrait.

## `sister-vi.webp`

Fonte: retrato inferior direito de `Arcane_ A beleza do caos.png`.

> Use case: background-extraction. Edit target: supplied Arcane website reference, bottom right section. Isolate ONLY the pink-haired Vi head and shoulders portrait from the lower right, facing slightly to the left, with her VI face tattoo visible. Preserve exact Arcane cinematic painterly style, facial features, hair color, eyes and pose, no goggles. Reconstruct visible shoulders cleanly. Transparent PNG asset with actual alpha around just Vi's silhouette. Remove ALL typography, other characters, photos, background, splashes and frames. Standalone Vi portrait cutout for the sisters section.

## `caitlyn-cinematic.webp`

Fonte: retrato superior direito de `Arcane_ continuação em quatro atos.png`.

> Use case: background-extraction. The edit target is the small Caitlyn portrait photograph at the TOP RIGHT of the supplied mockup. Return ONLY that individual Caitlyn portrait as a high quality standalone vertical 3:4 photograph with no page text, no labels, no frame, no graffiti. Preserve this exact mature cinematic Arcane Caitlyn face, dark-blue hair and black enforcer beret, gray eyes, turned three-quarter pose, painted realistic Fortiche-like style, muted gray background. Do not use the bright League of Legends game promotional render. Fill the image with her head and visible shoulders, as in the top right photo. This asset will be separately masked by CSS.

## `viktor-cinematic.webp`

Fonte: retrato secundário de Viktor na seção superior de `Arcane_ continuação em quatro atos.png`.

> Use case: background-extraction. Edit target is the small VIKTOR portrait photograph in the TOP section of this supplied Arcane mockup, below and left of Caitlyn, near Ekko's right shoulder. Return ONLY that individual Viktor portrait as a standalone vertical 3:4 image. Preserve exact cinematic Arcane Viktor likeness: pale young man, slightly wavy medium brown hair, thoughtful sad eyes looking right, fine angular face, gray and gold Academy clothing, muted smoky background. The human inventor Viktor, not his metal evolution. No text, page elements, labels, frames or splashes. Painterly cinematic Fortiche-style portrait faithfully based on that mockup photo, not a game character render.

## `jayce-cinematic.webp`

Fonte: retrato de Jayce na seção superior de `Arcane_ continuação em quatro atos.png`.

> Use case: background-extraction. Edit target is JAYCE portrait photograph at the far right of the TOP section of supplied Arcane editorial reference. Return ONLY this individual Jayce portrait as standalone vertical 3:4 image. Preserve exact face likeness: young strong-jawed man with short tousled brown hair and eyebrows, thoughtful determined gaze upward toward right, Academy black and gold outfit, cool smoky blue background. Detailed painted cinematic Arcane/Fortiche style, not a clean bright game promotional render. No other people, text, page, labels, paint, frames or graphics. This photo will be an independent CSS masked image.

## Elementos em código

Textura de papel, coroas, cruzes, rosto grafitado, pinceladas, esquemas técnicos, engrenagens e projéteis: SVGs independentes. Disco e onda sonora: CSS/HTML. Tipografia: pacotes locais Fontsource (Bodoni Moda, Anton, Permanent Marker e IBM Plex Mono). A capa editorial final combina o retrato independente de Jinx com textos reais e fundo CSS; a capa oficial original foi preservada no inventário como referência.

## Destinos de escuta

Verificados por pesquisa em 26/10/2026. Nenhum arquivo de áudio foi obtido.

- Enemy: https://www.youtube.com/watch?v=F5tSoaJ93ac
- Guns for Hire: https://www.youtube.com/watch?v=pKNEx-9OqRM
- What Could Have Been: https://www.youtube.com/watch?v=liPu1_aPH5k
- Álbum oficial: https://arcane.lnk.to/season1

O link de What Could Have Been foi confirmado por referências externas ao vídeo; o extrator de páginas não conseguiu ler diretamente a página do YouTube.
