import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

type Props = {
  defaultExpanded?: boolean;
};

export const AccordionArea: React.FC<Props> = (props) => {
  return (
    <>
      <Accordion defaultExpanded={props.defaultExpanded}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} />
        <AccordionDetails>{props.children}</AccordionDetails>
      </Accordion>
    </>
  );
};
