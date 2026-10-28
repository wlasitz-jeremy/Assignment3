/**
 * CardFolio visual tokens transcribed from the Hi-Fidelity Prototype in Figma.
 * Color values are kept as hex strings for direct use in React Native styles.
 * The prototype contains both light and dark screens; neither palette is inferred.
 */
export const colors = {
  light: {
    /** Main light canvas used on the majority of prototype screens. */
    background: '#F4F4F8',
    /** Lavender structural surfaces and panel backgrounds. */
    surface: '#E2E1F4',
    /** Primary copy and dark outlines. */
    textPrimary: '#1E293B',
    /** Muted navigation and secondary copy. */
    textSecondary: '#424B57',
    /** Main purple accent. */
    accent: '#4A475C',
    /** Purple inner-shadow color used on card/store surfaces. */
    accentShadow: '#6B5A89',
    /** Additional neutral text and icon colors sampled from individual screens. */
    neutralText: '#595959',
    neutralTextSubtle: '#676767',
    neutralIcon: '#767677',
    neutralMid: '#656565',
    neutralMuted: '#888080',
    neutralDark: '#686868',
    neutralStrong: '#2D2D2D',
    neutralSoft: '#606060',
    /** Lighter near-white surface used on secondary prototype screens. */
    backgroundSoft: '#F4F6F8',
    white: '#FFFFFF',
    black: '#000000',
  },
  dark: {
    /** Dark canvas used on the alternate account and community screens. */
    background: '#111315',
    /** Raised dark surfaces and form fields. */
    surface: '#1F1E27',
    /** Main dark-mode copy. */
    textPrimary: '#F1F3F5',
    /** Supporting dark-mode copy and placeholders. */
    textSecondary: '#C4C7CA',
    /** Lavender action color and dark-mode outline accent. */
    accent: '#C1BBE1',
    /** Purple inner-shadow color shared by the prototype. */
    accentShadow: '#6B5A89',
  },
} as const;

/** Exact font faces observed in the prototype; custom faces require bundled font files. */
export const fontFamilies = {
  /** Used for bold display headings, labels, and button text. */
  oswald: 'Oswald',
  /** Used for regular and variable-weight Oswald text. */
  /** Figma's exact family name; the underscore is part of the registered face. */
  souliyoUnicode: 'Souliyo_Unicode',
} as const;

/** Figma face weights translated to React Native's numeric fontWeight values. */
export const fontWeights = {
  extraLight: '200',
  regular: '400',
  semiBold: '600',
  bold: '700',
} as const;

/** Every distinct non-zero text size measured in the 53 top-level frames, in dp. */
export const fontSizes = {
  micro: 5,
  tiny: 7,
  captionSmall: 10,
  caption: 12,
  labelSmall: 14,
  label: 15,
  bodySmall: 16,
  body: 20,
  titleSmall: 24,
  titleCompact: 25,
  title: 30,
  headingSmall: 32,
  heading: 40,
  headingLarge: 46,
  displaySmall: 48,
  display: 50,
  displayLarge: 64,
} as const;

/**
 * Observed tracking values. These are explicit letter-spacing measurements,
 * not multipliers; most positive values correspond to 2% of the font size.
 */
export const letterSpacing = {
  compactTight: -1.28,
  tight: -1.2,
  titleTight: -0.8,
  headingTight: -0.6,
  micro: 0.1,
  tiny: 0.14,
  caption: 0.2,
  captionWide: 0.24,
  label: 0.28,
  body: 0.32,
  bodyWide: 0.4,
  title: 0.48,
  titleCompactWide: 0.5,
  titleWide: 0.6,
  heading: 0.64,
  headingWide: 0.8,
  headingExtraWide: 0.92,
  display: 0.96,
  displayWide: 1,
  displayLarge: 1.28,
} as const;

/** Corner radii measured across cards, inputs, tabs, and controls (dp). */
export const borderRadius = {
  sharp: 2,
  subtle: 3,
  input: 5,
  card: 10,
  cardAlternate: 11,
  pill: 20,
} as const;

/** Stroke widths visibly used for controls and outlined panels (dp). */
export const borderWidths = {
  hairline: 1,
  emphasized: 2,
} as const;

/** Shadow measurements transcribed from Figma effects. */
export const shadows = {
  /** Light-mode raised button/card: x -5, y +5, blur 0, spread 0. */
  lightThick: {
    shadowColor: colors.light.textPrimary,
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  /** Smaller light-mode drop shadow: x -2, y +2, blur 0, spread 0. */
  lightSmall: {
    shadowColor: colors.light.textPrimary,
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 2,
  },
  /** Dark-mode raised button/card: x -5, y +5, blur 0, spread 0. */
  darkThick: {
    shadowColor: colors.dark.accent,
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  /** Figma inner shadow: x 0, y +4, blur 6, spread 2; represented as metadata. */
  purpleInner: {
    color: colors.light.accentShadow,
    offset: { width: 0, height: 4 },
    blurRadius: 6,
    spread: 2,
    kind: 'inner',
  },
} as const;

/** Repeated prototype frame and navigation measurements (dp). */
export const layout = {
  screenWidth: 390,
  screenHeight: 844,
  commonHorizontalInset: 25,
  commonTopInset: 38,
  bottomNavigationTop: 713,
  bottomNavigationHeight: 80,
  iconSmall: 20,
  icon: 24,
  iconLarge: 30,
  iconButton: 60,
} as const;

/** Frequent Figma text combinations, named by their intended use in the app. */
export const textStyles = {
  welcomeHeading: {
    fontFamily: fontFamilies.oswald,
    fontSize: 48,
    fontWeight: fontWeights.bold,
    letterSpacing: 0.96,
    color: colors.light.textPrimary,
  },
  pageHeading: {
    fontFamily: fontFamilies.oswald,
    fontSize: 46,
    fontWeight: fontWeights.bold,
    letterSpacing: 0.92,
    color: colors.light.textPrimary,
  },
  accountWordmark: {
    fontFamily: fontFamilies.oswald,
    fontSize: 64,
    fontWeight: fontWeights.bold,
    letterSpacing: 1.28,
    color: colors.light.textPrimary,
  },
  formLabel: {
    fontFamily: fontFamilies.oswald,
    fontSize: 24,
    fontWeight: fontWeights.bold,
    letterSpacing: 0.48,
    color: colors.light.textPrimary,
  },
  primaryButtonLabel: {
    fontFamily: fontFamilies.oswald,
    fontSize: 32,
    fontWeight: fontWeights.bold,
    letterSpacing: 0.64,
  },
  navigationLabel: {
    fontFamily: fontFamilies.souliyoUnicode,
    fontSize: 16,
    fontWeight: fontWeights.regular,
    letterSpacing: 0.32,
  },
  body: {
    fontFamily: fontFamilies.souliyoUnicode,
    fontSize: 14,
    fontWeight: fontWeights.regular,
    letterSpacing: 0.28,
    color: colors.light.textPrimary,
  },
  caption: {
    fontFamily: fontFamilies.souliyoUnicode,
    fontSize: 12,
    fontWeight: fontWeights.regular,
    letterSpacing: 0.24,
    color: colors.light.textSecondary,
  },
} as const;

/** Combined export for consumers that prefer one theme object. */
export const theme = {
  colors,
  fontFamilies,
  fontWeights,
  fontSizes,
  letterSpacing,
  borderRadius,
  borderWidths,
  shadows,
  layout,
  textStyles,
} as const;

export type Theme = typeof theme;
