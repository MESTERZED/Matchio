# Composants 3D, Matchio

Tous les modèles 3D sont construits programmatiquement avec React Three Fiber + Drei, sans GLB importé.

## Composants

### `Scene.tsx`
Wrapper Canvas standard avec lighting japandi (ambient + directional + environment apartment), ContactShadows, OrbitControls optionnels.

```tsx
<Scene cameraPosition={[0, 0.4, 2.6]} fov={32} interactive autoRotate>
 <ProductBox ... />
</Scene>
```

### `ProductBox.tsx`
Boîte de capsules, sleeve coloré, dorure, wordmark. Customisable par couleur :

```tsx
<ProductBox
 boxColor="#0E3B2E"
 sleeveColor="#C9A27E"
 foilColor="#D4B57E"
 name="FOCUS"
 rotationSpeed={0.25}
 float={true}
/>
```

### `HeritageBox.tsx`
Boîte céramique ouverte, mug grès sage, chasen bambou, chashaku, sachet kraft. État `open` pour vue ouverte/fermée.

### `RefillPack.tsx`
Sachet kraft Refill avec wordmark vert, bandeau matcha-deep en bas.

### `CircularLoop.tsx`
Animation centrale de la page Refill, 3 objets en orbite (Heritage / Refill / Dose) autour d'un cercle de matcha. Boucle infinie.

### `FallingLeaves.tsx`
50 feuilles instanced qui tombent en boucle, drift latéral. Utilisé en arrière-plan de la page Engagement.

## Performance

- `Suspense` boundary sur chaque scène (fallback null)
- `dynamic(() => …, { ssr: false })` sur tous les Canvas en page Server Component
- DPR clampé à `[1, 2]`
- Frustum culling actif par défaut (Three.js)
- `useFrame` se met en pause naturellement quand le canvas est hors viewport
- `prefers-reduced-motion` respecté (rotations à zéro)

## Pour ajouter un nouveau modèle

1. Créer `MyModel.tsx` dans `components/3d/`
2. Utiliser `RoundedBox`, `Cylinder`, `Sphere` de `@react-three/drei` pour les primitives
3. `useFrame` pour les rotations/floats
4. Toujours `castShadow` + `receiveShadow` sur les meshes principaux
5. Couleurs uniquement depuis la palette Matchio (cf `globals.css`)
6. Charger via `dynamic(... { ssr: false })` côté page

## Couleurs validées pour 3D

```ts
// Boîtes
boxColor: '#0E3B2E' | '#1A1A1A' | '#C9A27E' | '#F5F1E8'

// Sleeves
sleeveColor: '#C9A27E' | '#3A6B4F' | '#0E3B2E' | '#A8C6A1'

// Dorure (metalness 0.7, roughness 0.3)
foilColor: '#D4B57E' | '#0E3B2E' | '#3A6B4F'
```
