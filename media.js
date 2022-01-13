export const SMALL_MOBILE_BREAKPOINT = 400
export const MOBILE_BREAKPOINT = 600
export const TABLET_BREAKPOINT = 800
export const NARROW_DEVICE = 1200
export const BIG_SCREEN_BREAKPOINT = 1600


// export let isMobile = window.innerWidth <= MOBILE_BREAKPOINT
// export let isNarrowDevice = window.innerWidth <= NARROW_DEVICE
// export let isTablet = window.innerWidth <= TABLET_BREAKPOINT

export const smallMobileMediaQuery = `@media only screen and (max-width: ${SMALL_MOBILE_BREAKPOINT}px)`
export const regularMobileMediaQuery = `@media only screen and (max-width: ${MOBILE_BREAKPOINT}px)`
export const desktopMediaQuery = `@media only screen and (min-width: ${NARROW_DEVICE}px)`
export const narrowMediaQuery = `@media only screen and (max-width: ${NARROW_DEVICE}px)`
export const tabletMediaQuery = `@media only screen and (max-width: ${TABLET_BREAKPOINT}px)`
export const bigScreenMediaQuery = `@media only screen and (min-width: ${BIG_SCREEN_BREAKPOINT}px)`