import heroClinic from '@/assets/hero_clinic.png'
import veneersSmile from '@/assets/veneers_smile.png'
import invisalignAligner from '@/assets/invisalign_aligner.png'
import dentalImplant from '@/assets/dental_implant.png'
import doctorSarah from '@/assets/doctor_sarah.png'
import doctorMichael from '@/assets/doctor_michael.png'
import doctorElena from '@/assets/doctor_elena.png'
import galleryInterior from '@/assets/gallery_interior.png'

export const DEFAULT_FALLBACK_IMAGE = heroClinic

export function handleImageError(e: React.SyntheticEvent<HTMLImageElement, Event>) {
  e.currentTarget.src = DEFAULT_FALLBACK_IMAGE
}

export const IMAGES = {
  hero: heroClinic,
  veneers: veneersSmile,
  invisalign: invisalignAligner,
  implants: dentalImplant,
  clinic: heroClinic,
  interior: galleryInterior,
  doctor1: doctorSarah,
  doctor2: doctorMichael,
  doctor3: doctorElena,
  map: heroClinic
}
