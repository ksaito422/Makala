import React from 'react';
import { Button } from '../atoms/Button';

type Props = {
  cardOnClick: () => void,
  previewOnClick: () => void,
}

export const ButtonGroup: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Button
        color='primary'
        onClick={props.cardOnClick}
      >
        CARD
      </Button>
      <Button
        color='primary'
        onClick={props.previewOnClick}
      >
        PREVIEW
      </Button>
    </>
  )
}
