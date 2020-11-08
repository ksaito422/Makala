import React from 'react';
import { Button } from '../atoms/Button';

type Props = {
  disabledCard: boolean,
  disabledPreview: boolean,
  CardOnClick: () => void,
  PreviewOnClick: () => void,
}

export const ButtonGroup: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Button
        color='secondary'
        disabled={props.disabledCard}
        onClick={props.CardOnClick}
      >
        CARD
      </Button>
      <Button
        color='secondary'
        disabled={props.disabledPreview}
        onClick={props.PreviewOnClick}
      >
        PREVIEW
      </Button>
    </>
  )
}
