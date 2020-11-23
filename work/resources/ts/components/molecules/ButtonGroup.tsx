import React from 'react';
import { Button } from '../atoms/Button';

type Props = {
  disabledCard: boolean,
  disabledPreview: boolean,
  cardOnClick: () => void,
  previewOnClick: () => void,
}

export const ButtonGroup: React.FC<Props> = (props) => {
  return (
    <>
      <Button
        disabled={props.disabledCard}
        onClick={props.cardOnClick}
      >
        CARD
      </Button>
      <Button
        disabled={props.disabledPreview}
        onClick={props.previewOnClick}
      >
        PREVIEW
      </Button>
    </>
  )
}
