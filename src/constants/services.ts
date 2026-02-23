export interface Service {
  id: string
  name: string
  description: string
  icon: string
}

export const services: Service[] = [
  { id: 'interior', name: 'Interior Painting', description: 'Refresh any room with precision color and clean lines', icon: '🏠' },
  { id: 'exterior', name: 'Exterior Painting', description: 'Complete exterior transformations that boost curb appeal', icon: '🏡' },
  { id: 'cabinets', name: 'Cabinet Refinishing', description: 'Upgrade your kitchen without a full remodel', icon: '🪵' },
  { id: 'carpentry', name: 'Carpentry', description: 'Trim, molding, and repair work done right', icon: '🔨' },
  { id: 'caulking', name: 'Caulking', description: 'Seal gaps and joints for a polished finish', icon: '🔧' },
  { id: 'deck-fence', name: 'Deck & Fence Staining', description: 'Protect and beautify your outdoor wood surfaces', icon: '🌿' },
  { id: 'drywall', name: 'Drywall Repair', description: 'Patch, smooth, and restore damaged walls', icon: '🧱' },
  { id: 'limewash', name: 'Limewashing & Masonry', description: 'Achieve a timeless European aesthetic', icon: '🏛️' },
  { id: 'popcorn', name: 'Popcorn Removal', description: 'Modernize your ceilings with smooth finishes', icon: '✨' },
  { id: 'pressure-wash', name: 'Pressure Washing', description: 'Deep clean driveways, siding, and more', icon: '💧' },
  { id: 'stucco', name: 'Stucco Repair', description: 'Fix cracks and restore stucco surfaces', icon: '🏗️' },
  { id: 'sell-ready', name: '"Sell Ready" Services', description: 'Get your home market-ready with our full prep package', icon: '🏷️' },
]

export const serviceOptions = services.map(s => ({
  value: s.id,
  label: s.name,
}))
