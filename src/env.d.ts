/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DOC_TITLE: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_DEV_SERVER: string;
  readonly VITE_SERVER: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
