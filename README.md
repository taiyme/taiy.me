# taiy.me

taiyのサイトのソースコードです。 <https://taiy.me/>

## 仕様

- 言語
  - TypeScript <https://www.typescriptlang.org/>
  - React <https://react.dev/>
- フレームワーク
  - Next.js (App Router) <https://nextjs.org/>
  - Tailwind CSS <https://tailwindcss.com/>
- Linter
  - ESLint (Flat Config) <https://eslint.org/>

## 開発

前提: Corepackが有効であること

```sh
# 依存関係のインストール
pnpm i

# 開発サーバー立ち上げ
pnpm dev

# Lint実行 (基本的に自動修正するので、あまり出番ないかも)
pnpm lint
pnpm lint:fix

# 依存関係のアップデート
pnpm up
```

## コーディング規約的なやつ

- コンポーネントと型とクラスは `PascalCase` 、それ以外は基本的に `camelCase` で定義する
- App Routerに極力依存させないため、 `app/` 配下にはルーティングとして意味を持つファイルだけ配置する (`page.tsx` `layout.tsx` など)
- 特定のページでしか利用しないコンポーネントは `features/` 、それ以外全部は `components/` に配置する
- 関数はアロー関数で定義し、基本的に `utils/` に配置する
- 定数とかは `constants/` に配置する

## ライセンス

[MIT License](./LICENSE)
