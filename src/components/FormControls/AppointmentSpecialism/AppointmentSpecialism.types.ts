import type { Specialism } from 'src/types'

export type AppointmentSpecialismProps = {
  id: Specialism['id']
}

export type GetSpecialismData = {
  specialism: Specialism
}

export type GetSpecialismVars = {
  id: Specialism['id']
}
