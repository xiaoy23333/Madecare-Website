import React from 'react';
import styles from './Breadcrumb.module.scss';
import Link from './Link';
import { LANGS, ROUTE_OBJ, ROUTE_OBJ_EN } from '../config';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

export default @injectIntl class Breadcrumb extends React.Component {
  /**
 * 合并数组前n项
 * @param arr
 * @param n
 * @param m
 */
 joinN = (arr, n, m) =>  {
  let str = m;
  for (let i = 0; i < n; i++) {
    str += arr[i];
  }
  return str;
}
    render() {
      // intl.locale !== "en"
    let {location} = this.props;
    let { pathname } = location;
    // console.log('location',location);
    // console.log(ROUTE_OBJ)
    // console.log(ROUTE_OBJ_EN)
    let ROUTE = {};
    if(pathname.split('/')[1] !== 'en'){
       ROUTE = ROUTE_OBJ;
    }else{
       ROUTE = ROUTE_OBJ_EN;
    }

    let paths = pathname.split('/').filter(p => p !== '' && LANGS.indexOf(p) < 0);
        return (
          <ol className={styles.breadcrumb}>
            <li><Link to={'/'}>
              {/* {intl.formatMessage({ id: "breadcrumb.index" })} */}
              <FormattedMessage
                id="breadcrumb.index"
                defaultMessage="HOME"
                values={{
                }}
              />
            </Link></li>
            {paths.map((name, index) =>        
              index === paths.length - 1 ?
                <li key={index + '-' + name} className={styles.active}>{ROUTE[name]}</li> :
                <li key={index + '-' + name}><Link to={this.joinN(paths, index + 1, '/')}>{ROUTE[name]}</Link></li>)}
          </ol>
        );
  }
}




