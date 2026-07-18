# TSUZURI RESIDENCE 神戸御影
## デザイントークン定義書 v1.2

**作成日**：2026年7月17日  
**前版**：別紙① デザイントークン定義書 v1.1  
**対象**：HP・問い合わせ・入居者向けアプリHTMLプロトタイプ  
**実装形式**：Tailwind CSS v4 `@theme`＋CSS Custom Properties  
**正本ファイル**：`src/styles/tokens.css`  
**ステータス**：HP大型ビジュアル表現の追加仕様を反映

---

# 0. v1.2改訂内容

v1.1のカラー、タイポグラフィ、操作寸法、状態色、フォーカス、アプリ文字サイズ切替を維持し、HP再設計に必要なトークンを追加する。

追加内容。

1. コンテンツ最大幅、グリッド、ガター
2. Hero、ヘッダー、写真全面セクションの寸法
3. 流動的なHP見出しサイズ
4. 画像アスペクト比
5. 画像上文字のオーバーレイ
6. エディトリアルグリッド比率
7. 写真の角丸運用
8. セクション背景リズム
9. 画像リビール用モーション
10. HPとアプリでの写真・UI対応関係

---

# 1. トークン設計方針

## 1-1. 3階層

```text
Primitive Tokens
    ↓
Semantic Tokens
    ↓
Component / Pattern Tokens
```

- Primitive：色、数値、フォントなどの素材
- Semantic：用途を示す。HP層とアプリ層で割り当てを変える
- Component / Pattern：ボタン、カード、Hero、フォトグリッドなどの主要パターン

## 1-2. レイヤー

```html
<body>                         <!-- HP layer -->
<div data-layer="app">       <!-- App layer -->
```

- `:root`：HP層
- `[data-layer="app"]`：アプリ層
- `[data-textsize="base|large|xlarge"]`：アプリ文字サイズ

## 1-3. 直接値の制限

ブランドカラー、フォントサイズ、余白、角丸、影、操作寸法、最大幅、オーバーレイには直接値を使用しない。

ページ固有の`object-position`や装飾座標は、コメントで理由を記録した場合のみ例外とする。

---

# 2. Primitive Tokens

## 2-1. Color

| Token | Value | Name |
|---|---|---|
| `--color-white-100` | `#FCFAF6` | Warm White |
| `--color-ivory-100` | `#F4F0E7` | Residence Ivory |
| `--color-ivory-200` | `#ECE6D8` | Ivory Dark |
| `--color-greige-400` | `#B7AEA1` | Stone Greige |
| `--color-charcoal-700` | `#4A4843` | Soft Charcoal |
| `--color-charcoal-900` | `#282724` | Deep Charcoal |
| `--color-green-700` | `#40584B` | Botanical Green |
| `--color-bronze-400` | `#A98C59` | Champagne Bronze |
| `--color-pink-500` | `#D94F74` | Camellia Pink |
| `--color-success-700` | `#2F6B4F` | Success Green |
| `--color-amber-700` | `#9A6A25` | Attention Amber |
| `--color-red-700` | `#A23D3D` | Alert Red |
| `--color-blue-700` | `#2C5A78` | Information Blue |

## 2-2. Font Family

| Token | Value |
|---|---|
| `--font-sans-jp` | `"Noto Sans JP", sans-serif` |
| `--font-serif-jp` | `"Shippori Mincho", serif` |
| `--font-serif-en` | `"Cormorant Garamond", serif` |

## 2-3. Static Font Size

| Token | rem | px | Main use |
|---|---:|---:|---|
| `--text-300` | 0.875 | 14 | Caption |
| `--text-400` | 1 | 16 | HP body |
| `--text-450` | 1.125 | 18 | Important body / App base |
| `--text-475` | 1.3125 | 21 | App large |
| `--text-490` | 1.4375 | 23 | App xlarge |
| `--text-500` | 1.25 | 20 | Small heading |
| `--text-520` | 1.625 | 26 | App emphasis xlarge |
| `--text-560` | 1.75 | 28 | App title large |
| `--text-600` | 1.5 | 24 | Heading S |
| `--text-700` | 2 | 32 | Heading M |
| `--text-800` | 2.5 | 40 | Heading L |
| `--text-900` | 3.5 | 56 | Hero lower range |
| `--text-1000` | 4.5 | 72 | Hero upper range |

## 2-4. Fluid HP Typography

```css
--text-fluid-hero: clamp(2.5rem, 5.2vw, 4.5rem);
--text-fluid-display: clamp(2.125rem, 4vw, 4rem);
--text-fluid-heading: clamp(2rem, 3vw, 3.5rem);
--text-fluid-subheading: clamp(1.375rem, 2vw, 1.75rem);
```

| Semantic use | Token |
|---|---|
| Hero H1 | `--text-fluid-hero` |
| Concept large statement | `--text-fluid-display` |
| Section H2 | `--text-fluid-heading` |
| Card / item heading | `--text-fluid-subheading` |

## 2-5. Leading / Tracking

| Token | Value |
|---|---:|
| `--leading-none` | 1 |
| `--leading-tight` | 1.35 |
| `--leading-heading` | 1.45 |
| `--leading-body` | 1.75 |
| `--leading-relaxed` | 1.8 |
| `--tracking-normal` | 0 |
| `--tracking-wide` | 0.05em |
| `--tracking-display` | 0.02em |
| `--tracking-label` | 0.12em |

## 2-6. Spacing

4px基準を維持する。

| Token | px |
|---|---:|
| `--spacing-1` | 4 |
| `--spacing-2` | 8 |
| `--spacing-3` | 12 |
| `--spacing-4` | 16 |
| `--spacing-5` | 20 |
| `--spacing-6` | 24 |
| `--spacing-8` | 32 |
| `--spacing-10` | 40 |
| `--spacing-12` | 48 |
| `--spacing-16` | 64 |
| `--spacing-20` | 80 |
| `--spacing-24` | 96 |
| `--spacing-28` | 112 |
| `--spacing-32` | 128 |
| `--spacing-40` | 160 |

## 2-7. Radius

| Token | px | Use |
|---|---:|---|
| `--radius-none` | 0 | Full bleed photo |
| `--radius-sm` | 4 | HP button |
| `--radius-md` | 8 | App button |
| `--radius-lg` | 16 | Cards / app image |
| `--radius-xl` | 24 | Limited editorial image |
| `--radius-full` | 9999 | Badge |

写真全面セクションは原則`radius-none`。すべての写真へ一律角丸を適用しない。

## 2-8. Shadow

| Token | Value |
|---|---|
| `--shadow-sm` | `0 1px 3px rgb(40 39 36 / 0.06)` |
| `--shadow-md` | `0 4px 16px rgb(40 39 36 / 0.10)` |
| `--shadow-lg` | `0 16px 48px rgb(40 39 36 / 0.14)` |
| `--shadow-device` | `0 28px 72px rgb(40 39 36 / 0.18)` |

## 2-9. Motion

| Token | Value |
|---|---|
| `--duration-fast` | 150ms |
| `--duration-base` | 300ms |
| `--duration-slow` | 600ms |
| `--duration-reveal` | 900ms |
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--ease-soft` | `cubic-bezier(0.25, 0.1, 0.25, 1)` |

## 2-10. Tap / Control Size

| Token | px |
|---|---:|
| `--size-tap-min` | 44 |
| `--size-tap-primary` | 48 |
| `--size-tap-app-action` | 64 |
| `--size-header-hp` | 80 |
| `--size-header-hp-compact` | 68 |

---

# 3. Layout Primitive Tokens

## 3-1. Container

```css
--container-reading: 45rem;   /* 720px */
--container-info: 70rem;      /* 1120px */
--container-site: 80rem;      /* 1280px */
--container-wide: 90rem;      /* 1440px */
```

## 3-2. Page Padding

```css
--page-padding-inline: clamp(1.25rem, 4vw, 5rem);
--page-padding-inline-narrow: clamp(1.25rem, 3vw, 3rem);
```

## 3-3. Grid

```css
--grid-columns-desktop: 12;
--grid-columns-tablet: 8;
--grid-columns-mobile: 4;
--grid-gap: clamp(1.25rem, 2.2vw, 2rem);
```

## 3-4. Section Spacing

```css
--space-section-hp: clamp(6rem, 10vw, 10rem);
--space-section-hp-compact: clamp(4.5rem, 7vw, 7rem);
--space-section-app: 3rem;
```

- HeroとFinal CTAはセクション余白ではなく内部レイアウトで高さを作る
- Medical、Informationは`compact`使用可

## 3-5. Hero Height

```css
--hero-min-height: 100svh;
--hero-content-max-width: 34rem;
```

## 3-6. Editorial Ratios

```css
--ratio-editorial-wide: 7 / 5;
--ratio-editorial-strong: 2 / 1;
--ratio-editorial-balanced: 3 / 2;
```

実装ではCSS Gridのカラム数として表現する。

---

# 4. Image Tokens

## 4-1. Aspect Ratio

| Token | Ratio | Use |
|---|---|---|
| `--ratio-hero` | `16 / 9` or cover | Hero |
| `--ratio-landscape` | `3 / 2` | Lounge / dining |
| `--ratio-wide` | `16 / 9` | Full width image |
| `--ratio-portrait` | `4 / 5` | Room / art |
| `--ratio-square` | `1 / 1` | Detail |
| `--ratio-food` | `4 / 3` | Dish |
| `--ratio-device` | `3 / 4` | Tablet |

## 4-2. Image Overlay

```css
--overlay-hero-start: rgb(20 24 21 / 0.74);
--overlay-hero-middle: rgb(20 24 21 / 0.34);
--overlay-hero-end: rgb(20 24 21 / 0.06);
--overlay-cta: rgb(20 24 21 / 0.58);
```

Hero標準。

```css
background:
  linear-gradient(
    90deg,
    var(--overlay-hero-start) 0%,
    var(--overlay-hero-middle) 48%,
    var(--overlay-hero-end) 78%
  );
```

SPでは縦方向または左下中心へ変更可能。

## 4-3. Image Treatment

```css
--image-filter-brand: saturate(0.92) contrast(0.98);
--image-filter-dark-section: saturate(0.9) brightness(0.92);
```

画像生成・現像段階で統一できる場合は、CSSフィルターを使用しない。

## 4-4. Object Position

Primitive化せず、画像単位で設定する。次の命名を推奨。

```css
--image-position-desktop: 50% 50%;
--image-position-mobile: 62% 50%;
```

値はコンポーネントのstyle属性またはデータ定義から渡す。

---

# 5. Semantic Tokens

## 5-1. Color

| Semantic | HP | App |
|---|---|---|
| `--color-text-primary` | charcoal-900 | charcoal-900 |
| `--color-text-secondary` | charcoal-700 | charcoal-700 |
| `--color-text-inverse` | white-100 | white-100 |
| `--color-surface-default` | white-100 | white-100 |
| `--color-surface-alt` | ivory-100 | ivory-100 |
| `--color-surface-dark` | charcoal-900 | charcoal-900 |
| `--color-surface-brand` | green-700 | green-700 |
| `--color-action-primary` | charcoal-900 | charcoal-900 |
| `--color-action-secondary-bg` | transparent | ivory-200 |
| `--color-brand-accent` | bronze-400 | bronze-400 |
| `--color-brand-feature` | green-700 | green-700 |
| `--color-brand-highlight` | pink-500 | pink-500 dot only |
| `--color-status-success` | success-700 | success-700 |
| `--color-status-attention` | amber-700 | amber-700 |
| `--color-status-alert` | red-700 | red-700 |
| `--color-status-info` | unused | blue-700 |

## 5-2. Typography

### HP

```css
:root {
  --font-heading-brand: var(--font-serif-jp);
  --font-body: var(--font-sans-jp);
  --font-accent-en: var(--font-serif-en);

  --text-body: var(--text-400);
  --text-body-important: var(--text-450);
  --text-heading-sm: var(--text-fluid-subheading);
  --text-heading-md: var(--text-fluid-heading);
  --text-heading-display: var(--text-fluid-display);
  --text-heading-hero: var(--text-fluid-hero);
  --leading-default: var(--leading-body);
}
```

### App

```css
[data-layer="app"] {
  --font-heading-brand: var(--font-sans-jp);
  --font-body: var(--font-sans-jp);
  --text-body: var(--text-450);
  --text-body-emphasis: var(--text-500);
  --text-heading-sm: var(--text-600);
  --leading-default: var(--leading-relaxed);
}

[data-layer="app"][data-textsize="large"] {
  --text-body: var(--text-475);
  --text-body-emphasis: var(--text-490);
  --text-heading-sm: var(--text-560);
}

[data-layer="app"][data-textsize="xlarge"] {
  --text-body: var(--text-490);
  --text-body-emphasis: var(--text-520);
  --text-heading-sm: var(--text-700);
}
```

## 5-3. Space / Radius

| Semantic | HP | App |
|---|---|---|
| `--space-section` | section-hp | section-app |
| `--space-section-compact` | section-hp-compact | section-app |
| `--space-card-padding` | spacing-8 | spacing-6 |
| `--space-stack` | spacing-6 | spacing-4 |
| `--radius-card` | radius-lg | radius-lg |
| `--radius-action` | radius-sm | radius-md |
| `--radius-image` | context dependent | radius-lg |

---

# 6. Derived Colors

```css
:root {
  --color-border-subtle:
    color-mix(in srgb, var(--color-greige-400) 30%, transparent);

  --button-primary-hover-bg:
    color-mix(in srgb, var(--color-charcoal-900) 92%, var(--color-white-100) 8%);

  --surface-green-soft:
    color-mix(in srgb, var(--color-green-700) 8%, var(--color-white-100));

  --alert-success-bg:
    color-mix(in srgb, var(--color-success-700) 10%, var(--color-white-100));

  --alert-attention-bg:
    color-mix(in srgb, var(--color-amber-700) 10%, var(--color-white-100));

  --alert-alert-bg:
    color-mix(in srgb, var(--color-red-700) 10%, var(--color-white-100));

  --alert-info-bg:
    color-mix(in srgb, var(--color-blue-700) 10%, var(--color-white-100));
}

[data-layer="app"] {
  --color-border-subtle:
    color-mix(in srgb, var(--color-greige-400) 50%, transparent);
}
```

---

# 7. Focus Tokens

```css
:root {
  --color-focus-ring-on-light: var(--color-green-700);
  --color-focus-ring-on-dark: var(--color-white-100);

  --shadow-focus-on-light:
    0 0 0 2px var(--color-surface-default),
    0 0 0 5px var(--color-focus-ring-on-light);

  --shadow-focus-on-dark:
    0 0 0 2px var(--color-charcoal-900),
    0 0 0 5px var(--color-focus-ring-on-dark);
}
```

- 明背景：`--shadow-focus-on-light`
- 暗背景・Primary Button：`--shadow-focus-on-dark`
- `:focus-visible`へ適用

---

# 8. Component Tokens

## 8-1. Primary Button

```css
--button-primary-bg: var(--color-action-primary);
--button-primary-text: var(--color-text-inverse);
--button-primary-radius: var(--radius-action);
--button-primary-min-height: var(--size-tap-primary);
--button-primary-padding-inline: var(--spacing-6);
```

Heroの明色ボタン。

```css
--button-hero-bg: var(--color-white-100);
--button-hero-text: var(--color-charcoal-900);
```

## 8-2. Secondary Button

```css
--button-secondary-bg: transparent;
--button-secondary-text: currentColor;
--button-secondary-border: currentColor;
--button-secondary-min-height: var(--size-tap-primary);
```

## 8-3. Information Card

```css
--card-bg: var(--color-surface-default);
--card-radius: var(--radius-card);
--card-padding: var(--space-card-padding);
--card-border: var(--color-border-subtle);
--card-shadow: var(--shadow-sm);
```

HPではMedical、Pricing、FAQに限定して使用する。

## 8-4. Status Badge

v1.1を維持する。

- Success：Success Green＋白文字
- Attention：Attention Amber。小文字禁止
- Alert：Alert Red＋白文字
- Info：Information Blue＋白文字
- Pink：面として使わず、ドット＋Charcoalラベル

## 8-5. App Navigation Card

```css
--navcard-bg: var(--color-surface-alt);
--navcard-min-height: 96px;
--navcard-icon-size: 32px;
--navcard-radius: var(--radius-card);
```

## 8-6. Read Aloud Button

- 待機：スピーカー＋「読み上げ」
- 再生中：停止＋「停止」＋対象をIvory 200でハイライト
- 利用不可：利用不可メッセージ＋視覚ハイライト

---

# 9. Pattern Tokens

## 9-1. Hero

```css
--hero-min-height: 100svh;
--hero-content-width: min(34rem, 100%);
--hero-padding-top: calc(var(--size-header-hp) + var(--spacing-12));
--hero-padding-bottom: var(--spacing-16);
```

## 9-2. Trust Bar

```css
--trustbar-bg: var(--color-white-100);
--trustbar-border: var(--color-border-subtle);
--trustbar-padding-block: var(--spacing-6);
```

## 9-3. Editorial Photo Grid

```css
--editorial-gap: var(--grid-gap);
--editorial-large-span: 7;
--editorial-small-span: 5;
```

Residence標準。

- 主写真：7カラム
- 補助面：5カラム
- 下段：4＋4＋4または5＋3＋4

## 9-4. Dark Feature Section

```css
--feature-dark-bg: var(--color-green-700);
--feature-dark-text: var(--color-white-100);
--feature-dark-muted:
  color-mix(in srgb, var(--color-white-100) 76%, transparent);
```

Diningで使用する。

## 9-5. Device Showcase

```css
--device-frame-bg: var(--color-charcoal-900);
--device-frame-radius: 28px;
--device-frame-padding: 12px;
--device-shadow: var(--shadow-device);
```

アプリ側の実UIカード角丸とは分ける。

## 9-6. Full Bleed CTA

```css
--cta-visual-min-height: clamp(30rem, 70svh, 48rem);
--cta-visual-overlay: var(--overlay-cta);
```

---

# 10. Motion Patterns

## 10-1. Text Reveal

```css
--motion-text-distance: 20px;
--motion-text-duration: var(--duration-slow);
```

## 10-2. Image Reveal

```css
--motion-image-duration: var(--duration-reveal);
--motion-image-scale-from: 1.025;
--motion-image-scale-to: 1;
```

## 10-3. Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
  }
}
```

状態理解に必要な変化は、瞬時のopacityまたはスタイル変更で残す。

---

# 11. Accessibility Criteria

1. 通常文字：4.5:1以上
2. 大きな文字：3:1以上
3. UI部品・フォーカス：3:1以上
4. 操作対象：44×44px以上
5. HP主要CTA：48px以上
6. アプリ主要アクション：64px
7. 画像上文字は実配置で検証
8. ブラウザズーム200%で情報・機能を失わない
9. App特大文字で全画面破綻しない
10. 色だけで状態を伝えない
11. `prefers-reduced-motion`対応
12. 読み上げ不可でも同じ情報を文字で取得できる

## コントラスト参考

| Color on Warm White | Ratio approx. | Use |
|---|---:|---|
| Deep Charcoal | 15:1 | Body / heading |
| Botanical Green | 7.42:1 | Text / focus |
| Information Blue | 7.09:1 | App info |
| Alert Red | 6.16:1 | Alert |
| Success Green | 6.04:1 | Success |
| Attention Amber | 4.51:1 | Bold large / icon / border |
| Camellia Pink | 3.79:1 | Decoration only |
| Bronze on Ivory | 2.81:1 | Line only |

---

# 12. HP ⇄ App Correspondence

| Concept | Shared | HP | App |
|---|---|---|---|
| Primary action | Charcoal / white / focus | 48px straight button | 64px large action |
| Image | Same photography tone | Full bleed / editorial | Meal card / message photo |
| Heading | Hierarchy | Shippori Mincho | Noto Sans JP |
| Surface | Warm White / Ivory | Large color fields | Card surfaces |
| Brand green | Botanical Green | Dining / focus | Brand accents |
| Bronze | Decorative line | Labels / separators | Minimal line only |
| Pink | Signature accent | Flower / art | Notification dot |
| Status | Functional colors | Form state | Meal / medicine state |

---

# 13. tokens.css Skeleton

```css
@theme {
  --color-white-100: #FCFAF6;
  --color-ivory-100: #F4F0E7;
  --color-ivory-200: #ECE6D8;
  --color-greige-400: #B7AEA1;
  --color-charcoal-700: #4A4843;
  --color-charcoal-900: #282724;
  --color-green-700: #40584B;
  --color-bronze-400: #A98C59;
  --color-pink-500: #D94F74;
  --color-success-700: #2F6B4F;
  --color-amber-700: #9A6A25;
  --color-red-700: #A23D3D;
  --color-blue-700: #2C5A78;

  --font-sans-jp: "Noto Sans JP", sans-serif;
  --font-serif-jp: "Shippori Mincho", serif;
  --font-serif-en: "Cormorant Garamond", serif;

  --text-300: 0.875rem;
  --text-400: 1rem;
  --text-450: 1.125rem;
  --text-475: 1.3125rem;
  --text-490: 1.4375rem;
  --text-500: 1.25rem;
  --text-520: 1.625rem;
  --text-560: 1.75rem;
  --text-600: 1.5rem;
  --text-700: 2rem;
  --text-800: 2.5rem;
  --text-900: 3.5rem;
  --text-1000: 4.5rem;

  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-5: 1.25rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-10: 2.5rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;
  --spacing-20: 5rem;
  --spacing-24: 6rem;
  --spacing-28: 7rem;
  --spacing-32: 8rem;
  --spacing-40: 10rem;

  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
}

:root {
  --text-fluid-hero: clamp(2.5rem, 5.2vw, 4.5rem);
  --text-fluid-display: clamp(2.125rem, 4vw, 4rem);
  --text-fluid-heading: clamp(2rem, 3vw, 3.5rem);
  --text-fluid-subheading: clamp(1.375rem, 2vw, 1.75rem);

  --container-reading: 45rem;
  --container-info: 70rem;
  --container-site: 80rem;
  --container-wide: 90rem;
  --page-padding-inline: clamp(1.25rem, 4vw, 5rem);
  --grid-gap: clamp(1.25rem, 2.2vw, 2rem);
  --space-section: clamp(6rem, 10vw, 10rem);
  --space-section-compact: clamp(4.5rem, 7vw, 7rem);

  --font-heading-brand: var(--font-serif-jp);
  --font-body: var(--font-sans-jp);
  --font-accent-en: var(--font-serif-en);
  --text-body: var(--text-400);
  --text-body-important: var(--text-450);
  --text-heading-sm: var(--text-fluid-subheading);
  --text-heading-md: var(--text-fluid-heading);
  --text-heading-display: var(--text-fluid-display);
  --text-heading-hero: var(--text-fluid-hero);
  --radius-action: var(--radius-sm);
}
```

---

# 14. 運用ルール

1. コンポーネントはSemanticまたはPattern Tokenを参照する
2. Primitiveの直接参照はtokens.css内部または限定的なユーティリティに留める
3. Hero、Residence、Dining、Appを先に実装し、トークンの妥当性を検証する
4. `object-position`は画像別データとして管理する
5. 写真上文字のコントラストはスクリーンショットで確認する
6. BronzeとPinkの使用量をコードレビューで確認する
7. HPとアプリのスクリーンショットを並べて一貫性を確認する
8. v1.1のアプリ機能・状態トークンを削除しない
9. 実装用AIへ渡す際は、本文コピーではなくファイル添付を使用する
10. 変更時は本書と`tokens.css`の両方を更新する
