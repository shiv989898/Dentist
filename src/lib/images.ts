// Centralized high-reliability Unsplash image repository with fallback handlers

export const DEFAULT_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop'

export function handleImageError(e: React.SyntheticEvent<HTMLImageElement, Event>) {
  e.currentTarget.src = DEFAULT_FALLBACK_IMAGE
}

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop',
  veneers: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop',
  invisalign: 'https://images.unsplash.com/photo-1598256989800-fea5ce5146f1?q=80&w=1200&auto=format&fit=crop',
  implants: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop',
  clinic: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1200&auto=format&fit=crop',
  doctor1: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop',
  doctor2: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop',
  doctor3: 'https://images.unsplash.com/photo-1594824432258-f7bc32fcd443?q=80&w=1200&auto=format&fit=crop',
  map: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop'
}
