import type { MouseEventHandler, Ref } from 'react'

export type ConfirmButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>
  ref?: Ref<HTMLButtonElement>
}
