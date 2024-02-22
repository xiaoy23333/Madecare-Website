import solWrap from '../../hoc/solWrap';
import React from 'react';
import styles from './Cpx.module.scss';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

export default @solWrap(<FormattedMessage id="en.cpx" />) @injectIntl
class Monitor extends React.Component {
  render() {
    let {intl} = this.props;
    // console.log('cpx-intl',this.props)
    return (
      <div className={styles.trait}>
            <div className={styles.intro}>
            <FormattedMessage id="solution.cpxdescrip1" />
            <br />
            <FormattedMessage id="solution.cpxdescrip2" />
            </div>
          <img src={require('../../assets/imgs/Solution/solution_cpx.png')}
                                                         alt=""/>
        
      </div>
    );
  }
}
