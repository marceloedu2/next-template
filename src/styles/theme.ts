import { rgba } from 'polished'

const theme = {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.8rem'
  },
  font: {
    family: 'roboto, sans-serif',
    light: 400,
    normal: 500,
    bord: 700,
    sizes: {
      xxsmall: '1rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem'
    }
  },
  colors: {
    Primary: '#272eb7',
    Secondary: '#464646',

    Default: '#B4B4B4',

    Background: '#F5F5F5',
    BackgroundLight: '#ffffff',

    Text: '#020306',
    TextLight: '#ffffff',

    //Alert Colors
    Success: '#1cc88a',
    Info: '#36b9cc',
    Warning: '#f6c23e',
    Danger: '#e74a3b',
    Light: '#f8f9fc',
    Dark: '#5a5c69',

    Froly: '#F68181',
    Masala: '#3D3131',
    MineShaft: '#353535',
    Tundora: '#464646',
    DoradoDark: '#6D5B5B',
    Dorado: '#726060',
    DoveGray: '#707070',
    Gray: '#818181',
    Nobel: '#B7B5B5',
    SilverChalice: '#AFAFAF',
    Lima: '#5BB727',
    Whatsapp: '#27B73A',
    Pink: '#C82EEC',
    GovernorBay: '#272EB7',

    display: {
      0: '#FFFFFF',
      50: '#F7FAFD',
      100: '#EFF4F8',
      200: '#E6ECF2',
      300: '#D5DEE8',
      400: '#BCC8D6',
      500: '#919DAB',
      600: '#67707D',
      700: '#424A53',
      800: '#31383F',
      900: '#20252A'
    },
    stone: {
      50: '#E8FEF3',
      100: '#CEFDE5',
      200: '#86FDC1',
      300: '#42EC9A',
      400: '#0FCC7D',
      500: '#00A868',
      600: '#008E5A',
      700: '#00734D',
      800: '#005C41',
      900: '#004033'
    },
    ton: {
      50: '#ECFEE8',
      100: '#D2FDC9',
      200: '#9AFD86',
      300: '#5FFA40',
      400: '#39E61C',
      500: '#00AD00',
      600: '#008C00',
      700: '#006E00',
      800: '#005100',
      900: '#003B00'
    },
    danger: {
      100: '#FDE5E2',
      200: '#FBBDB6',
      300: '#F77B6E',
      400: '#DD4F40',
      500: '#C6322A',
      600: '#830700'
    },
    warning: {
      100: '#FFF7E0',
      200: '#FFE8A3',
      300: '#FFCE5B',
      400: '#F2B417',
      500: '#CF810C',
      600: '#BA6708'
    },

    Shadow: rgba(0, 0, 0, 0.2)
  },
  spacings: {
    xxxsmall: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysONTop: 50
  },
  breakpoint: {
    xs: '360px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px'
  }
} as const

export default theme

export type Theme = typeof theme
