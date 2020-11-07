import React from 'react';
import { Button } from '../atoms/Button';

type Props = {
  disabledCard: boolean,
  disabledPreview: boolean,
  cardOnClick: () => void,
  previewOnClick: () => void,
}

export const ButtonGroup: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Button
        color='primary'
        disabled={props.disabledCard}
        onClick={props.cardOnClick}
      >
        CARD
      </Button>
      <Button
        color='primary'
        disabled={props.disabledPreview}
        onClick={props.previewOnClick}
      >
        PREVIEW
      </Button>
    </>
  )
}
