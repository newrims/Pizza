import { css, CSSObject } from "styled-components"

const sizes: { [key: string]: number } = {
    small: 600
}

type MediaQueries = {
    [key in keyof typeof sizes]: (...args: [TemplateStringsArray, ...CSSObject[]]) => ReturnType<typeof css>
}

export const media: MediaQueries = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args: [TemplateStringsArray, ...CSSObject[]]) => css`
        @media screen and (max-width: ${sizes[label]}px) {
            ${css(...args)};
        }
    `

    return acc
}, {} as MediaQueries)
