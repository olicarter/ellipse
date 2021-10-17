import { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { format, parseISO } from 'date-fns'

import { useQueryParams } from 'src/hooks'
import { Modal } from 'src/components/Modal'

import type {
  ModalAppointmentBookingConfirmationProps,
  GetAppointmentData,
  GetAppointmentVars,
} from './ModalAppointmentBookingConfirmation.types'
import { queries } from './ModalAppointmentBookingConfirmation.gql'
import * as Styled from './ModalAppointmentBookingConfirmation.styled'

export function ModalAppointmentBookingConfirmation({
  visible,
}: ModalAppointmentBookingConfirmationProps) {
  const query = useQueryParams()

  const selectedAppointment = query.get('appointment')
  const selectedAppointmentMedium = query.get('medium')
  const selectedAppointmentType = query.get('type')

  const [getAppointment, { data }] = useLazyQuery<
    GetAppointmentData,
    GetAppointmentVars
  >(queries.GET_APPOINTMENT)

  useEffect(() => {
    if (selectedAppointment && visible) {
      getAppointment({ variables: { id: selectedAppointment } })
    }
  }, [selectedAppointment, visible])

  const avatar = data?.appointment.counsellor.avatar
  const firstName = data?.appointment.counsellor.firstName
  const lastName = data?.appointment.counsellor.lastName
  const startsAt = data?.appointment.startsAt

  const joiningInfo = (() => {
    switch (selectedAppointmentMedium) {
      case 'chat':
      case 'video':
        return 'We have emailed you an event which you can add to your calendar. There is also a link in the email that you can use to join the session when it starts.'
      case 'phone':
        return `We have emailed you an event which you can add to your calendar. <b>${firstName}</b> will call you when the appointment is due to start.`
    }
  })()

  return (
    <Modal visible={visible}>
      <Styled.CounsellorAvatar src={avatar} />

      <h1>All done 🌟</h1>

      <h3>Your appointment is confirmed</h3>

      <p>
        You will be speaking with{' '}
        <b>
          {firstName} {lastName}
        </b>{' '}
        at <b>{startsAt ? format(parseISO(startsAt), 'p') : ''}</b> on{' '}
        <b>{startsAt ? format(parseISO(startsAt), 'PPPP') : ''}</b>.
      </p>

      <p>
        Your appointment will last for around{' '}
        <b>
          {selectedAppointmentType === 'consultation' ? '20 minutes' : '1 hour'}
        </b>
        .
      </p>

      <p dangerouslySetInnerHTML={{ __html: joiningInfo! }} />

      <Styled.WarningMessage>
        You may now close your browser tab
      </Styled.WarningMessage>
    </Modal>
  )
}
