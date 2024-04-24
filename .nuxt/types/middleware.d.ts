import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/jessicaturner/Desktop/portfolio-2023-the-latest/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}