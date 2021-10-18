import { useRef, useState } from 'react'
import { useIntersection } from 'react-use'

import { FormGroup } from 'src/components/Core'

import {
  AppointmentList,
  ConfirmationModal,
  ConfirmButton,
  SelectDayHeader,
} from './components'

export function AppointmentSelect() {
  const buttonRef = useRef(null)

  const [modalVisible, setModalVisible] = useState(false)

  const intersection = useIntersection(buttonRef, { threshold: 1 })

  const buttonObscured = intersection && intersection.intersectionRatio < 1

  return (
    <>
      <ConfirmationModal visible={modalVisible} />

      <FormGroup>
        <SelectDayHeader />
      </FormGroup>

      {buttonObscured && (
        <FormGroup>
          <ConfirmButton onClick={() => setModalVisible(true)} />
        </FormGroup>
      )}

      <FormGroup grow>
        <AppointmentList />
      </FormGroup>

      <FormGroup>
        <ConfirmButton onClick={() => setModalVisible(true)} ref={buttonRef} />
      </FormGroup>
    </>
  )
}
