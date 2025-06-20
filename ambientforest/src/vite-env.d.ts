/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VITE_APP_TITLE: string
  readonly VITE_PROD_API_URL: string
  readonly VITE_DEV_API_URL: string
  readonly VITE_S3_URL: string
  readonly VITE_CLOUDFRONT_URL: string
  readonly VITE_DOMAIN: string
  readonly VITE_USE_CLOUDFRONT?: "true" | "false"
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}