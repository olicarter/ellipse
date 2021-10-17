import { makeVar } from '@apollo/client'
import { v4 as uuid } from 'uuid'

import {
  Appointment,
  AppointmentMedium,
  AppointmentType,
  Counsellor,
  Specialism,
} from 'src/types'
import availabilityMock from 'src/availability-mock.json'
import counsellorsMock from 'src/counsellor-mock.json'

// Extract unique specialisms from mock data and map to array of objects
// with unique IDs to mimic structure of data fetched from GraphQL API
export const specialismsVar = makeVar<Specialism[]>(
  counsellorsMock
    .reduce<string[]>(
      (prev, curr) => Array.from(new Set([...prev, ...curr.specialisms])),
      [],
    )
    .sort((a, b) => a.localeCompare(b))
    .map(name => ({ id: uuid(), name })),
)

export const counsellorsVar = makeVar<Counsellor[]>(
  counsellorsMock.map(
    ({
      id: counsellorId,
      appointment_mediums,
      appointment_types,
      specialisms,
      ...rest
    }) => ({
      id: counsellorId,
      // appointments: availabilityData[counsellorId].map(
      //   ({ id: appointmentId, datetime: startsAt }) => ({
      //     id: appointmentId,
      //     startsAt,
      //   }),
      // ),
      appointmentMedia: appointment_mediums as AppointmentMedium[],
      appointmentTypes: appointment_types as AppointmentType[],
      avatar: `https://i.pravatar.cc/320?u=${counsellorId}`,
      specialisms: specialismsVar().filter(({ name }) =>
        specialisms.includes(name),
      ),
      ...rest,
    }),
  ),
)

type AvailabilityData = {
  [key: string]: {
    id: string
    datetime: string
  }[]
}

const availabilityData: AvailabilityData = availabilityMock

const a: Appointment[] = []

Object.entries(availabilityData).forEach(([counsellorId, appointments]) => {
  appointments.forEach(({ id, datetime }) =>
    a.push({
      id,
      counsellor: counsellorsVar().find(({ id }) => id === counsellorId)!,
      startsAt: datetime,
    }),
  )
})

export const appointmentsVar = makeVar<Appointment[]>(a)
