import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { TextForm } from '../atoms/TextForm';
import { CloseIcon } from '../atoms/CloseIcon';
import { SubmitIcon } from '../atoms/SubmitIcon';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import { Grid } from '@material-ui/core';

type Props = {
  defaultValueTitle: string,
  defaultValueContent: string,
  postOnSubmit: (data: {[x: string]: any;}) => void,
  modalOnClose: () => void,
}

export const ModalCard: React.FC<Props> = (props) => {
  /**
   * cssの定義
   * API import of react-hook-form
   */
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  // モーダルに表示する内容の定義
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} className={classes.rightPlacement}>
          <CloseIcon onClick={props.modalOnClose} />
        </Grid>
        <form
          className={classes.form_board}
          onSubmit={handleSubmit((data) => {
            props.postOnSubmit(data);
          })}
        >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextForm
                name='card_name'
                multiline
                fullWidth
                rowsMax={1}
                defaultValue={props.defaultValueTitle}
                inputRef={
                  register({
                    required: 'カード名を入力して下さい',
                  })
                }
                error={Boolean(errors.card_name)}
                helperText={errors.card_name && errors.card_name.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextForm
                name='card_content'
                multiline
                fullWidth
                rows={8}
                defaultValue={props.defaultValueContent}
                inputRef={
                  register({
                    required: 'カードの内容を入力して下さい',
                  })
                }
                error={Boolean(errors.card_content)}
                helperText={errors.card_content && errors.card_content.message}
              />
            </Grid>
            <Grid item xs={12} className={classes.centerPlacement}>
              <SubmitIcon type='submit' />
            </Grid>
          </Grid>
        </form>
      </Grid>
    </>
  );
}