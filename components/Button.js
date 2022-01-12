import styled from '@emotion/styled'


const CustomButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  padding: 0.6rem 3rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${props => props.theme.colors.primaryHovered};
    transform: translateY(-2px);
  }
`

export default function StyledButton({onClick, children}) {
    return (
        <CustomButton onClick={() => onClick && onClick()}>
            {children}
        </CustomButton>
    )
}
