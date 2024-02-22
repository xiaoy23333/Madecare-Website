import React, { Component } from 'react';
import styles from './Footer.module.scss';
import Link from './Link';
import { injectIntl } from 'gatsby-plugin-intl';
import { NAVS } from '../config';

export default @injectIntl class Footer extends Component {
  render() {
    let {intl} = this.props;
    let msg = intl.formatMessage;
    return (
      <footer className={styles.footer_box}>
        <div className={styles.footer_nav}>
          {/* {NAVS.map(({txt,to,items:l}, i) => {
            return (
              <dl key={txt}>
                <u><dt><Link to={to}>{msg({id:txt})}</Link></dt></u>
                {
                  // l && l.map(({ txt, to }, i) =>
                  //  <dt key={txt}><Link to={to}>{msg({id:txt})}</Link></dt>) || 
                  //  <dt><Link to={to}>{msg({id:txt})}</Link></dt>
                   }
              </dl>
            );
          })} */}
        </div>
        <div className={styles.footer_bottom}><p>美德远健（北京）医疗系统科技有限公司 版权所有 COPYRIGHT 2020 MADECARE ALL RIGHTS RESERVED
          京ICP备18045046号</p></div>
        {/*</div>*/}
      </footer>
    );
  }
}
