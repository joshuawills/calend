// react-dom.d.ts

declare module 'react-dom' {
  export function createRoot(
    container: Element | Document | DocumentFragment | null,
    options?: { hydrate?: boolean }
  ): ReactRoot;
}

interface ReactRoot {
  render(children: React.ReactNode): void;
  unmount(): void;
}
