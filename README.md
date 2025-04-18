# taiy.me

taiyのサイトのソースコードです。 <https://taiy.me/>

## 仕様

- パッケージマネージャー
  - [mise](https://mise.jdx.dev/)
  - [pnpm](https://pnpm.io/)
- 言語
  - [TypeScript](https://www.typescriptlang.org/)
  - [Hono JSX](https://hono.dev/docs/guides/jsx)
- フレームワーク
  - [Vite](https://vite.dev/)
  - [Hono](https://hono.dev/)
  - [HonoX](https://github.com/honojs/honox)
  - [Tailwind CSS](https://tailwindcss.com/)
- リンター
  - [ESLint](https://eslint.org/)

## 開発

```sh
# 依存関係のインストール
pnpm install

# 開発サーバー立ち上げ
pnpm dev

# Lint実行 (基本的に自動修正するので、あまり出番ないかも)
pnpm lint
pnpm lint:fix

# 依存関係のアップデート
pnpm up
```

## ライセンス

[MIT License](./LICENSE)
