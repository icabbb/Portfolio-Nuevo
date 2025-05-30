/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />


interface ImportMetaEnv {
    readonly FORMSPREE_ENDPOINT: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}