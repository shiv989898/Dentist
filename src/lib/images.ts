import heroClinic from '@/assets/hero_clinic.png'
import veneersSmile from '@/assets/veneers_smile.png'
import doctorSarah from '@/assets/doctor_sarah.png'
import doctorMichael from '@/assets/doctor_michael.png'

export const DEFAULT_FALLBACK_IMAGE = heroClinic

export function handleImageError(e: React.SyntheticEvent<HTMLImageElement, Event>) {
  e.currentTarget.src = DEFAULT_FALLBACK_IMAGE
}

export const IMAGES = {
  hero: heroClinic,
  veneers: veneersSmile,
  invisalign: veneersSmile,
  implants: heroClinic,
  clinic: heroClinic,
  doctor1: doctorSarah,
  doctor2: doctorMichael,
  doctor3: doctorSarah,
  map: heroClinic
}
