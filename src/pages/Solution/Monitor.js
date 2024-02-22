import solWrap from '../../hoc/solWrap';
import React from 'react';
import styles from './Monitor.module.scss';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

export default @solWrap(<FormattedMessage id="en.bedcare" />) @injectIntl
class Monitor extends React.Component {
  render() {
    let {intl} = this.props;
    return (
      <div className={styles.trait}>
      <div className={styles.left}>
          <img src={require('../../assets/imgs/Solution/Prevent/vector_obj.png')} alt="膀胱保护和康复"/>
      </div>

      <div className={styles.right}>
          <div className={styles.intro}>  
          <p className={styles.word_14}>
            <FormattedMessage id="solution.bedcaredescrip" />
            </p>
          </div>
          <div className={styles.bedcare}>
              <img src={require('../../assets/imgs/Solution/Monitor/monitor.png')} alt="膀胱保护和康复"/>
          </div>
      </div>
      </div>      
    );
  }
}
