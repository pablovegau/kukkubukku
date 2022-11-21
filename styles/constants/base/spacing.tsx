import { rem } from 'polished'

const base = 4

export const spacing = {
  '4': rem(`${base}px`),
  '8': rem(`${base * 2}px`),
  '12': rem(`${base * 3}px`),
  '16': rem(`${base * 4}px`),
  '24': rem(`${base * 6}px`),
  '32': rem(`${base * 8}px`),
  '40': rem(`${base * 10}px`),
  '48': rem(`${base * 12}px`),
  '64': rem(`${base * 16}px`),
  '80': rem(`${base * 20}px`),
}
