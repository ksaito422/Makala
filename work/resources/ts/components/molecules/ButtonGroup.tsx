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
        disabled={props.disabledCard}
        ButtonOnClick={props.CardOnClick}
      >
        CARD
      </Button>
      <Button
        disabled={props.disabledPreview}
        ButtonOnClick={props.PreviewOnClick}
      >
        PREVIEW
      </Button>
    </>
  )
}
