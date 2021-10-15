import type { ComponentProps } from 'react'

export type ButtonProps = {
  children: ComponentProps<'button'>['children']
  isSelected?: boolean
  onClick: ComponentProps<'button'>['onClick']
}
