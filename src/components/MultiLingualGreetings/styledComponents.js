import styled from 'styled-components'

export const StyButton = styled.button`
  color: ${props => (props.active ? '#ffffff' : '#db1c48')};
  background-color: ${props => (props.active ? '#db1c48' : '#ffffff')};
  border-style: solid;
  border-color: #db1c48;
  border-width: 1px;
  border-radius: 20px;
  margin: 10px;
  padding: 10px;
`
export const StyListItem = styled.li`
  display: ${props => (props.active ? 'inline' : 'none')};
`
