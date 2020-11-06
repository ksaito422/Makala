import React from 'react';
import { Button } from '../atoms/Button';

type Props = {
  onClick: () => void,
}

export const ButtonGroup: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Button
        color='primary'
        onClick={props.onClick}
      >
        1
      </Button>
      <Button
        color='primary'
        onClick={props.onClick}
      >
        2
      </Button>
    </>
  )
}
