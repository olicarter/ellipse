import { forwardRef } from 'react'

import { useQueryParams } from 'src/hooks'

import type { ConfirmButtonProps } from './ConfirmButton.types'
import * as Styled from './ConfirmButton.styled'

export const ConfirmButton = forwardRef<HTMLButtonElement, ConfirmButtonProps>(
  ({ onClick }, ref) => {
    const query = useQueryParams()

    const selectedAppointment = query.get('appointment')

    return (
      <Styled.ConfirmButton
        disabled={!selectedAppointment}
        onClick={e => selectedAppointment && onClick(e)}
        ref={ref}
      >
        Confirm appointment
      </Styled.ConfirmButton>
    )
  },
)
