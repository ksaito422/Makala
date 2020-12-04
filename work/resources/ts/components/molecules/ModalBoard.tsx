import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { TextForm } from '../atoms/TextForm';
import { CloseIcon } from '../atoms/CloseIcon';
import { UpdateIcon } from '../atoms/UpdateIcon';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import { Button, Grid } from '@material-ui/core';

type Props = {
  defaultValueTitle: string,
  postOnClick: (data: any) => void,
  modalOnClose: () => void,
}

export const ModalBoard: React.FC<Props> = (props) => {
  // cssの定義
  // API import of react-hook-form
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  // モーダルに表示する内容の定義
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} className={classes.rightPlacement}>
          <CloseIcon
            onClick={props.modalOnClose}
          />
        </Grid>
        <form
          className={classes.form_board}
          onSubmit={handleSubmit((data) => {
            props.postOnClick(data);
          })}
        >
          <Grid item xs={12}>
            <TextForm
              name='board_name'
              multiline
              fullWidth
              rowsMax={1}
              defaultValue={props.defaultValueTitle}
              inputRef={
                register({
                  required: 'タイトルを入力して下さい',
                })
              }
              error={Boolean(errors.board_name)}
              helperText={errors.board_name && errors.board_name.message}
            />
          </Grid>
          <Grid item xs={12} className={classes.centerPlacement}>
            <UpdateIcon
              type='submit'
            />
          </Grid>
        </form>
      </Grid>
    </>
  );
}