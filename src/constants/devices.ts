export const breakpoints = {
    xs: 360,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
} as const;

export const devices = {
    xs: `(max-width: ${breakpoints.xs - 1}px)`,
    sm: `(max-width: ${breakpoints.sm - 1}px)`,
    md: `(max-width: ${breakpoints.md - 1}px)`,
    lg: `(max-width: ${breakpoints.lg - 1}px)`,
    xl: `(max-width: ${breakpoints.xl - 1}px)`,
    '2xl': `(max-width: ${breakpoints['2xl'] - 1}px)`,
} as const;

export const DEVICE_TYPE = {
    MOBILE: `(max-width: ${breakpoints.md - 1}px)`,
    TABLET: `(min-width: ${breakpoints.md}px)`,
    DESKTOP: `(min-width: ${breakpoints.lg}px)`,
    ONLY_TABLET: `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`,
} as const;
