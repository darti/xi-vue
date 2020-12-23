import { UserConfig } from "vite"

let pathAliases = { "@/": "/src-js/", "+/": "/pkg/" }

// Completion !
const config: UserConfig = {
  // https://github.com/vitejs/vite/issues/1008
  resolvers: [
    {
      alias(path: string) {
        for (const [slug, res] of Object.entries(pathAliases)) {
          if (path.startsWith(slug)) {
            const alias = path.replace(slug, res)

            return alias
          }
        }
      },
    },
  ],
}

export default config
