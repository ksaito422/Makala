import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Grid, Typography } from '@material-ui/core';
import { TextForm } from '../atoms/TextForm';
import { CloseIcon } from '../atoms/CloseIcon';
import { SubmitIcon } from '../atoms/SubmitIcon';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

type Props = {
  nameChangeOnClick: (name: string) => void;
  modalOnClose: () => void;
};

export const ModalAccountName: React.FC<Props> = (props) => {
  /**
   * cssの定義
   * API import of react-hook-form
   */
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} className={classes.rightPlacement}>
          <CloseIcon onClick={props.modalOnClose} />
        </Grid>
        <Typography variant='subtitle1'>ユーザー名の変更</Typography>
        <form
          className={classes.form_board}
          onSubmit={handleSubmit((data) => {
            props.nameChangeOnClick(data.name);
          })}
        >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextForm
                name='name'
                multiline
                fullWidth
                rowsMax={1}
                inputRef={register({
                  required: '新しいユーザー名を入力して下さい',
                  minLength: {
                    value: 3,
                    message: 'ユーザー名は3文字以上20文字以下で入力して下さい',
                  },
                  maxLength: {
                    value: 20,
                    message: 'ユーザー名は3文字以上20文字以下で入力して下さい',
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9][a-zA-Z0-9_.-]+[a-zA-Z0-9]$/,
                    message:
                      'ユーザ名は半角英数字及び_.-のみ利用可能です。（_.-は先頭と末尾には使えません）',
                  },
                })}
                error={Boolean(errors.name)}
                helperText={errors.name && errors.name.message}
              />
            </Grid>
            <Grid item xs={12} className={classes.centerPlacement}>
              <SubmitIcon />
            </Grid>
          </Grid>
        </form>
      </Grid>
    </>
  );
};
