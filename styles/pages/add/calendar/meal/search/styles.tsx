import styled from 'styled-components'

export const Container = styled.div`
  margin-left: var(--kkbk--spacing--32);
  margin-right: var(--kkbk--spacing--32);
`

// TODO: Check how to improve this, probably with grid
export const RecipesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: var(--kkbk--spacing--32);
`

export const CardWrapper = styled.div`
  margin-bottom: var(--kkbk--spacing--24);
`
