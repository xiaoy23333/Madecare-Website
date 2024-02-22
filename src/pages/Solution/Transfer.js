import React from "react"
import styles from "./Transfer.module.scss"
import solWrap from "../../hoc/solWrap"
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
export default @solWrap(<FormattedMessage id="en.tr800" />) @injectIntl
class Transfer extends React.Component {

  render() {
    let {intl} = this.props;
    return (
      <div className={styles.trait}>
        <div className={styles.fir_q}><p  className={styles.word_14}><span>丨</span> <FormattedMessage id="solution.tr800descrip1" /></p>
          <ul>
            <li><img src={require('../../assets/imgs/Solution/Transfer/pt-1.png')}/> <span><FormattedMessage id="solution.tr800descrip2" /></span></li>
            <li><img src={require('../../assets/imgs/Solution/Transfer/pt-2.png')}/> <span><FormattedMessage id="solution.tr800descrip3" /></span></li>
            <li><img src={require('../../assets/imgs/Solution/Transfer/pt-3.png')}/> <span><FormattedMessage id="solution.tr800descrip4" /></span></li>
          </ul>
        </div>
        <div className={styles.sec_q}><p  className={styles.word_14}><span>丨</span> <FormattedMessage id="solution.tr800descrip5" /></p>
        <img src={require('../../assets/bigimg/pt-4.jpg')} alt=""/>
        </div>
      </div>
    )
  }
}
