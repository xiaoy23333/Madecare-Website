import solWrap from '../../hoc/solWrap';
import React from 'react';
import styles from './Cpx.module.scss';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

class Monitor extends React.Component {
  render() {
    let {intl} = this.props;
    // console.log('cpx-intl',this.props)
    return (
      <div>
      <div className={styles.trait}>
            <div className={styles.intro} style={{paddingRight: '6%', width: '42%'}}>
            <p className={styles.subtitle}><FormattedMessage id="solution.cpxtitle" /></p>
            <FormattedMessage id="solution.cpxdescrip1" />
            <br />
            <FormattedMessage id="solution.cpxdescrip2" />
            </div>
          <img src={require('../../assets/imgs/Solution/solution_cpx.png').default}
                                                         alt=""/>

      </div>
      <div className={styles.trait}>
            <div className={styles.intro} style={{paddingRight: '8%', width: '40%'}}>
            <p className={styles.subtitle}><FormattedMessage id="solution.rse.title" /></p>
            <FormattedMessage id="solution.rse.descrip" />
            </div>
          <img style={{width: '52%'}} src={require('../../assets/imgs/Solution/solution_rse.png').default}
                                                         alt=""/>
      </div>
      <div className={styles.trait}>
            <div className={styles.intro} style={{paddingRight: '6%', width: '42%'}}>
            <p className={styles.subtitle}><FormattedMessage id="solution.rse6mwt.title" /></p>
            <FormattedMessage id="solution.rse6mwt.descrip" />
            </div>
          <img style={{width: '38%', marginTop: '2rem'}} src={require('../../assets/imgs/Solution/solution_rse6mwt.png').default}
                                                         alt=""/>
      </div>
      </div>
    );
  }
}

export default solWrap(<FormattedMessage id="en.cpx" />)(injectIntl(Monitor));
