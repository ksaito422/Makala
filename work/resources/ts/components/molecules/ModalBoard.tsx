import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { TextForm } from '../atoms/TextForm';
import { CloseIcon } from '../atoms/CloseIcon';
import { SubmitIcon } from '../atoms/SubmitIcon';
import { AuthContext } from '../../contexts/childContexts/AuthContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import { Grid } from '@material-ui/core';

type Props = {
  defaultValueTitle: string,
  postOnClick: (data: {[x: string]: any}, user: number) => void,
  modalOnClose: () => void,
}

export const ModalBoard: React.FC<Props> = (props) => {
  // cssの定義
  // ログインユーザーの情報  { user_id: value, user_name: value }
  // API import of react-hook-form
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const { authUserState } = useContext<any>(AuthContext);
  const { register, handleSubmit, errors } = useForm();

  const user_id = authUserState.id;

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
            props.postOnClick(data, user_id);
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
            <SubmitIcon
              type='submit'
            />
          </Grid>
        </form>
      </Grid>
    </>
  );
}