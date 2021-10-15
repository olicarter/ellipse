import type { RadioInputProps } from './RadioInput.types'
import * as Styled from './RadioInput.styled'

export function RadioInput({
  checked = false,
  description,
  heading,
  name,
  onSelect,
}: RadioInputProps) {
  return (
    <Styled.Option checked={checked} onClick={() => onSelect()}>
      <Styled.Input
        checked={checked}
        name={name}
        onChange={() => onSelect()}
        type="radio"
      />
      <div>
        <Styled.Heading>{heading}</Styled.Heading>

        <Styled.Description>{description}</Styled.Description>
      </div>
    </Styled.Option>
  )
}
