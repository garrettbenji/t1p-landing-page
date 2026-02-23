export interface Stat {
  value: number
  suffix: string
  prefix?: string
  label: string
  icon: string
  sublabel?: string
}

export const stats: Stat[] = [
  { value: 134, suffix: '+', label: 'Locations Nationwide', icon: '📍' },
  { value: 4479, suffix: '+', label: '5-Star Google Reviews', icon: '⭐' },
  { value: 13, suffix: '+', label: 'Years of Experience', icon: '🏆' },
  { value: 1, suffix: '', prefix: '#', label: 'Painting Franchise', icon: '🥇', sublabel: 'Entrepreneur Franchise 500 — 2026 Rankings' },
]
