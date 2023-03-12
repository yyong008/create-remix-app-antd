# create-remix-app-antd

This is remix project with `create-remix`

## Route File Naming (v2)

- [Route File Naming (v2)](https://remix.run/docs/en/main/file-conventions/route-files-v2#md-route-file-naming-v2)

```ts
module.exports = {
  future: {
    v2_routeConvention: true,
  },
};
```

## Getting Started

First, git clone this repository

```sh
git clone git@github.com:yyong008/create-remix-app-antd.git
```

then, run the development remix server:

```sh
pnpm dev # use pnpm
yarn dev # use yarn
npm run dev # use npm
```

You can open `http://localhost:3000` in your browser。

Now, you can editing route `_index.tsx` file， or add route with `about.tsx` file。

## Learn More

To Learn more about Remix, take about the following resources:

- [Remix Documentation]() -  Learn about Remix features and API.
- [Remix Example]() - Learn about Remix Example

create remix app with and

## remix deps

| packages name            | version |
| ------------------------ | ------- |
| @remix-run/node          | 1.14.0  |
| @remix-run/react         | 1.14.0  |
| @remix-run/serve         | 1.14.0  |
| @remix-run/dev           | 1.14.0  |
| @remix-run/eslint-config | 1.14.0  |
| eslint                   | 8.27.0  |
| remix-utils              | 6.0.0   |
## react deps

| packages name    | version |
| ---------------- | ------- |
| react            | 18.2.0  |
| react-dom        | 18.2.0  |
| @types/react     | 18.0.25 |
| @types/react-dom | 18.0.8  |

## typescript

| packages name | version |
| ------------- | ------- |
| typescript    | 4.8.4   |

## run command

```json
"scripts": {
  "build": "remix build", // build remix project
  "dev": "remix dev", // start dev server
  "start": "remix-serve build", // start remix server with build result
  "typecheck": "tsc" // use tsc check typescript types
}
```

## remix-utils

Use the ClientOnly component to work around antd in the component using the useLayoutEffect hook function.

