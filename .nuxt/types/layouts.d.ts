import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "nonav" | "project"
declare module "/Users/ryanturner/Desktop/portfolio-2023-the-latest/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}