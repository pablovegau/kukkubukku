import styled from 'styled-components'
import { typography } from '../../styles/mixins'

interface Props {
  size: string
}

export const Container = styled.div<Props>`
  display: block;
  width: 100%;
  margin-bottom: var(--kkbk--spacing--16);
  cursor: pointer;

  &:hover {
    img {
      scale: 1.1;
      filter: contrast(1.2);
    }
  }
`

export const CardBottom = styled.div`
  margin-top: var(--kkbk--spacing--8);
`

export const RecipeName = styled.div`
  color: var(--kkbk--color--text--primary);
  ${typography.text.base}
  line-height: 16.8px;

  /* two lines ellipsis */
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const ImgWrapper = styled.div<Props>`
  height: 80px;
  border-radius: 4px;
  overflow: hidden;

  img {
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    object-fit: cover;
    transition: scale 0.3s ease-in-out, filter 0.3s ease-in-out;
  }
`
