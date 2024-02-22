import solWrap from '../../hoc/solWrap';
import React from 'react';
import styles from './Remote.module.scss';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

export default @solWrap(<FormattedMessage id="en.yjy" />) @injectIntl
class Remote extends React.Component {
  render() {
    let {intl} = this.props;
    return (
      <div className={styles.trait}>
            <div className={styles.intro} style={{display: (intl.locale !== "en") ? 'block':'none'}} >
            <FormattedMessage id="solution.yjydescrip1" defaultMessage=" " />
            
            <br />
            <FormattedMessage id="solution.yjydescrip2" defaultMessage=" " />
            </div>
            <div className={styles.image} style={{width: (intl.locale !== "en") ? '70%':'100%'}} >
                <div className={styles.img}>
                    <img src={ (intl.locale !== "en") ? require('../../assets/imgs/Index/yjy.png') : require('../../assets/imgs/Index/yjy_en.png')} alt=""/>
                </div>                
            </div>        
      </div>
    );
  }
}
