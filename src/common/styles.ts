const LINE_SPACE = '-2.5%'
const LINE_HEIGHT = '140%'

const font = {
  B: {
    24: {
      fontSize: '24px',
      fontWeight: 'bold',
      lineHeight: LINE_HEIGHT,
      letterSpacing: LINE_SPACE,
    },
    20: {
      fontSize: '20px',
      fontWeight: 'bold',
      lineHeight: LINE_HEIGHT,
      letterSpacing: LINE_SPACE,
    },
    16: {
      fontSize: '16px',
      fontWeight: 'bold',
      lineHeight: LINE_HEIGHT,
      letterSpacing: LINE_SPACE,
    }
  },
  M: {
    24: {
      fontSize: '24px',
      fontWeight: 'medium',
      lineHeight: LINE_HEIGHT,
      letterSpacing: LINE_SPACE,
    },
    20: {
      fontSize: '20px',
      fontWeight: 'medium',
      lineHeight: LINE_HEIGHT,
      letterSpacing: LINE_SPACE,
    },
    16: {
      fontSize: '16px',
      fontWeight: 'medium',
      lineHeight: LINE_HEIGHT,
      letterSpacing: LINE_SPACE,
    }
  },
  R: {
    24: {
      fontSize: '24px',
      fontWeight: 'regular',
      lineHeight: LINE_HEIGHT,
      letterSpacing: LINE_SPACE,
    },
    20: {
      fontSize: '20px',
      fontWeight: 'regular',
      lineHeight: LINE_HEIGHT,
      letterSpacing: LINE_SPACE,
    },
    16: {
      fontSize: '16px',
      fontWeight: 'regular',
      lineHeight: LINE_HEIGHT,
      letterSpacing: LINE_SPACE,
    }
  }
}

const color = {
  white: '#FFFFFF',
  black: '#000000',
  mono: {
    50: '#F8FAFC',
    100: '#E2E8F0',
    200: '#CBD5E1',
    300: '#94A3B8',
    400: '#64748B',
    500: '#475569',
    600: '#1E293B',
    700: '#1E293B',
    800: '#0F172A',
    900: '#0A0E1A'
  },
  point: {
    100: '#FFECB3',
    200: '#FFE082',
    300: '#FFD54F',
    400: '#FFCA28',
    500: '#FFC300',
    600: '#FFB300',
    700: '#FFA000',
    800: '#FF8F00',
    900: '#FF6F00'
  }
}

export const theme = {
  font,
  color
}

export type ThemeType = typeof theme;
