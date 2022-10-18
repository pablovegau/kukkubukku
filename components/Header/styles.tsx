import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  /* TODO: Check why this is necessary, on hover a card the image appears on top of the header */
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 72px;
  padding-left: var(--kkbk--spacing--16);
  padding-right: var(--kkbk--spacing--16);
  background-color: var(--kkbk--color--background--app);
`;

export const Tools = styled.div`
  display: flex;
  align-items: center;

  > div:not(:last-child) {
    margin-right: var(--kkbk--spacing--24);
  }
`;

export const TemporalSwitchWrapper = styled.div`
  display: flex;
  align-items: center;
`
