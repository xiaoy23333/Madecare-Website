import React from 'react';
import styles from './Recovery.module.scss';
import solWrap from '../../hoc/solWrap';
import { injectIntl,FormattedMessage  } from 'gatsby-plugin-intl';

export default @injectIntl
@solWrap(<FormattedMessage id="en.tr600" />)
class Recovery extends React.Component {

  render() {
    let { intl } = this.props;
    return (
      <div className={styles.trait}>
        <div className={styles.sec_q}>
          <ul>
            <li><img src={require('../../assets/imgs/Solution/Recovery/train-1.png')} alt=""/>
            <span><FormattedMessage id="solution.tr600descrip1" /></span>
              {/* <span>{intl.formatMessage({ id: 'test' })}</span> */}
            </li>
            <li><img src={require('../../assets/imgs/Solution/Recovery/train-2.png')} alt=""/> <span><FormattedMessage id="solution.tr600descrip2" /></span>
            </li>
            <li><img src={require('../../assets/imgs/Solution/Recovery/train-3.png')} alt=""/>
              <span><FormattedMessage id="solution.tr600descrip3" /></span></li>
            <li><img src={require('../../assets/imgs/Solution/Recovery/train-4.png')} alt=""/>
              <span><FormattedMessage id="solution.tr600descrip4" /></span></li>
          </ul>
        </div>
      </div>
    );
  }
}
