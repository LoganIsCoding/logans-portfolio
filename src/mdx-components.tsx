import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 id={children?.toString().toLowerCase().replace(/\s+/g, '-')}>
        {children}
      </h2>
    ),
  }
}
