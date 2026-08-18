import solWrap from "../../hoc/solWrap"
import React from "react"
import styles from './Prevent.module.scss';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

class Prevent extends React.Component{
  render(){
    let {intl} = this.props;
    return(
      <div className={styles.trait}>
            <div className={styles.left}>
                <img src={require('../../assets/imgs/Solution/Prevent/vector_obj.png').default} alt="膀胱保护和康复"/>
            </div>

            <div className={styles.right}>
                <div className={styles.intro}>
                <p className={styles.word_14}>
                <FormattedMessage id="p14.sc600descrip" />
                  </p>
                </div>
                <div className={styles.bedcare} style={{marginTop: intl.locale === 'en' ? '1.8rem' : undefined}}>
                    <img src={require('../../assets/imgs/Index/sc800d_01.jpeg').default} alt="膀胱保护和康复"/>
                </div>
            </div>

      </div>
      // <img src={require('../../assets/imgs/Solution/Prevent/prevent.png').default} alt="膀胱保护和康复"/>
    )
  }
}

export default solWrap(<FormattedMessage id="en.zndn" />)(injectIntl(Prevent));
