import React, { useContext } from 'react';
import { Box, Container, Paper, Typography } from '@material-ui/core';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

export const Rules: React.FC = () => {
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  return (
    <>
      <Container maxWidth='md'>
        <Paper elevation={2} className={classes.auth_container}>
          <Box component='div'>
            <Typography variant='h5' color='textPrimary' className={classes.rule_title}>
              利用規約
            </Typography>
            <Typography variant='subtitle2' color='textSecondary' className={classes.rule_text}>
              この利用規約（以下，「本規約」といいます。）は，本ウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
            </Typography>
          </Box>
          <Box component='div'>
            <Typography variant='h6' color='textPrimary' className={classes.rule_title}>
              第1条（適応）
            </Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              <ol>
                <li className={classes.rule_text}>
                  本規約は，本サービスの提供条件及び本サービス運営者（以下「運営者」といいます。）とユーザーとの間の本サービスの利用に関わる一切の関係に適用されるものとします。
                </li>
                <li className={classes.rule_text}>
                  運営者は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。
                </li>
                <li className={classes.rule_text}>
                  本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。
                </li>
              </ol>
            </Typography>
            <Typography variant='h6' color='textPrimary' className={classes.rule_title}>
              第2条（利用登録）
            </Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              <ol>
                <li className={classes.rule_text}>
                  本サービスにおいては，登録希望者が本規約に同意の上，運営者の定める方法によって利用登録を申請し，運営者がこれを承認することによって，利用登録が完了するものとします。
                </li>
                <li className={classes.rule_text}>
                  運営者は，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。
                </li>
                <ol>
                  <li className={classes.rule_text}>
                    利用登録の申請に際して虚偽の事項を届け出た場合
                  </li>
                  <li className={classes.rule_text}>
                    本規約に違反したことがある者からの申請である場合
                  </li>
                  <li className={classes.rule_text}>
                    未成年者，成年被後見人，被保佐人または被補助人のいずれかであり，法定代理人，後見人，保佐人または補助人の同意等を得ていなかった場合
                  </li>
                  <li className={classes.rule_text}>
                    反社会的勢力等（暴力団，暴力団員，右翼団体，反社会的勢力，その他これに準ずる者を意味します。）である，または資金提供その他を通じて反社会的勢力等の維持，運営もしくは経営に協力もしくは関与する等反社会的勢力との何らかの交流もしくは関与を行っているとMakalaが判断した場合
                  </li>
                  <li className={classes.rule_text}>
                    その他，運営者が利用登録を相当でないと判断した場合
                  </li>
                </ol>
              </ol>
            </Typography>
            <Typography variant='h6' color='textPrimary' className={classes.rule_title}>
              第3条（ユーザーIDおよびパスワードの管理）
            </Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              <ol>
                <li className={classes.rule_text}>
                  ユーザーは，自己の責任において，本サービスのユーザーIDおよびパスワードを適切に管理するものとします
                </li>
                <li className={classes.rule_text}>
                  ユーザーは，いかなる場合にも，ユーザーIDおよびパスワードを第三者に譲渡または貸与し，もしくは第三者と共用することはできません。運営者は，ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には，そのユーザーIDを登録しているユーザー自身による利用とみなします。
                </li>
                <li className={classes.rule_text}>
                  ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は，運営者に故意又は重大な過失がある場合を除き，運営者は一切の責任を負わないものとします。
                </li>
              </ol>
            </Typography>
            <Typography variant='h6' color='textPrimary' className={classes.rule_title}>
              第4条（利用料金および支払方法）
            </Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              <ol>
                <li className={classes.rule_text}>
                  ユーザーは，本サービスの有料部分の対価として，運営者が別途定め，本ウェブサイトに表示する利用料金を，運営者が指定する方法により支払うものとします。
                </li>
                <li className={classes.rule_text}>
                  ユーザーが利用料金の支払を遅滞した場合には，ユーザーは年14．6％の割合による遅延損害金を支払うものとします。
                </li>
              </ol>
            </Typography>
            <Typography variant='h6' color='textPrimary' className={classes.rule_title}>
              第5条（禁止事項）
            </Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。
            </Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              <ol>
                <li className={classes.rule_text}>法令または公序良俗に違反する行為</li>
                <li className={classes.rule_text}>犯罪行為に関連する行為</li>
                <li className={classes.rule_text}>
                  本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為
                </li>
                <li className={classes.rule_text}>
                  運営者，本サービスのほかのユーザー，またはその他第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為
                </li>
                <li className={classes.rule_text}>
                  本サービスによって得られた情報を商業的に利用する行為
                </li>
                <li className={classes.rule_text}>本サービスの運営を妨害するおそれのある行為</li>
                <li className={classes.rule_text}>不正アクセスをし，またはこれを試みる行為</li>
                <li className={classes.rule_text}>
                  他のユーザーに関する個人情報等を収集または蓄積する行為
                </li>
                <li className={classes.rule_text}>不正な目的を持って本サービスを利用する行為</li>
                <li className={classes.rule_text}>
                  本サービスの他のユーザーまたはその他の第三者に不利益，損害，不快感を与える行為
                </li>
                <li className={classes.rule_text}>他のユーザーに成りすます行為</li>
                <li className={classes.rule_text}>
                  運営者が許諾しない本サービス上での宣伝，広告，勧誘，または営業行為
                </li>
                <li className={classes.rule_text}>面識のない異性との出会いを目的とした行為</li>
                <li className={classes.rule_text}>
                  運営者のサービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為
                </li>
                <li className={classes.rule_text}>その他，運営者が不適切と判断する行為</li>
              </ol>
            </Typography>
            <Typography variant='h6' color='textPrimary' className={classes.rule_title}>
              第6条（本サービスの提供の停止等）
            </Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              <ol>
                <li className={classes.rule_text}>
                  運営者は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                </li>

                <ol>
                  <li className={classes.rule_text}>
                    本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
                  </li>
                  <li className={classes.rule_text}>
                    地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合
                  </li>
                  <li className={classes.rule_text}>
                    コンピュータまたは通信回線等が事故により停止した場合
                  </li>
                  <li className={classes.rule_text}>
                    その他，運営者が本サービスの提供が困難と判断した場合
                  </li>
                </ol>
                <li className={classes.rule_text}>
                  運営者は，本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。
                </li>
              </ol>
            </Typography>
            <Typography variant='h6' color='textPrimary' className={classes.rule_title}>
              第7条（利用制限および登録抹消）
            </Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              <ol>
                <li className={classes.rule_text}>
                  運営者は，ユーザーが以下のいずれかに該当する場合には，事前の通知なく，ユーザーに対して，本サービスの全部もしくは一部の利用を制限し，またはユーザーとしての登録を抹消することができるものとします。
                </li>
                <ol>
                  <li className={classes.rule_text}>本規約のいずれかの条項に違反した場合</li>
                  <li className={classes.rule_text}>
                    登録事項に虚偽の事実があることが判明した場合
                  </li>
                  <li className={classes.rule_text}>料金等の支払債務の不履行があった場合</li>
                  <li className={classes.rule_text}>
                    運営者からの連絡に対し，一定期間返答がない場合
                  </li>
                  <li className={classes.rule_text}>
                    本サービスについて，最終の利用から一定期間利用がない場合
                  </li>
                  <li className={classes.rule_text}>
                    その他，運営者が本サービスの利用を適当でないと判断した場合
                  </li>
                </ol>
                <li className={classes.rule_text}>
                  運営者は，本条に基づき運営者が行った行為によりユーザーに生じた損害について，一切の責任を負いません。
                </li>
              </ol>
            </Typography>
            <Typography variant='h6' color='textPrimary' className={classes.rule_title}>
              第8条（退会）
            </Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              ユーザーは，運営者の定める退会手続により，本サービスから退会できるものとします。
            </Typography>
            <Typography variant='h6' color='textPrimary' className={classes.rule_title}>
              第9条（保証の否認および免責事項）
            </Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              <ol>
                <li className={classes.rule_text}>
                  運営者は，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
                </li>
                <li className={classes.rule_text}>
                  運営者は，本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし，本サービスに関する運営者とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合，この免責規定は適用されません。
                </li>
                <li className={classes.rule_text}>
                  前項ただし書に定める場合であっても，運営者は，運営者の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（Makalaまたはユーザーが損害発生につき予見し，または予見し得た場合を含みます。）について一切の責任を負いません。また，運営者の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は，ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。
                </li>
                <li className={classes.rule_text}>
                  運営者は，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。
                </li>
              </ol>
            </Typography>
            <Typography variant='h6' color='textPrimary' className={classes.rule_title}>
              第10条（サービス内容の変更等）
            </Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              運営者は，ユーザーに通知することなく，本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし，これによってユーザーに生じた損害について一切の責任を負いません。
            </Typography>
            <Typography variant='h6' color='textPrimary' className={classes.rule_title}>
              第11条（利用規約の変更）
            </Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              運営者は，必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお，本規約の変更後，本サービスの利用を開始した場合には，当該ユーザーは変更後の規約に同意したものとみなします。
            </Typography>
            <Typography variant='h6' color='textPrimary' className={classes.rule_title}>
              第12条（個人情報の取扱い）
            </Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              運営者は，本サービスの利用によって取得する個人情報については，「プライバシーポリシー」に従い適切に取り扱うものとします。
            </Typography>
            <Typography variant='h6' color='textPrimary' className={classes.rule_title}>
              第13条（通知または連絡）
            </Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              ユーザーと運営者との間の通知または連絡は，運営者の定める方法によって行うものとします。運営者は,ユーザーから,運営者が別途定める方式に従った変更届け出がない限り,現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い,これらは,発信時にユーザーへ到達したものとみなします。
            </Typography>
            <Typography variant='h6' color='textPrimary' className={classes.rule_title}>
              第14条（権利義務の譲渡の禁止）
            </Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              ユーザーは，運営者の書面による事前の承諾なく，利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し，または担保に供することはできません。
            </Typography>
            <Typography variant='h6' color='textPrimary' className={classes.rule_title}>
              第15条（準拠法・裁判管轄）
            </Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              <ol>
                <li className={classes.rule_text}>
                  本規約の解釈にあたっては，日本法を準拠法とします。
                </li>
                <li className={classes.rule_text}>
                  本サービスに関して紛争が生じた場合には，札幌地方裁判所を第一審の専属的合意管轄裁判所とします。
                </li>
              </ol>
            </Typography>
          </Box>
          <Box component='div'>
            <Typography variant='h5' color='textPrimary' className={classes.rule_title}>
              附則
            </Typography>
            <Typography variant='subtitle2' color='textSecondary' className={classes.rule_text}>
              <ul>
                <li>2021年01月16日 制定</li>
              </ul>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </>
  );
};
