import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import styles from './SolutionLayout.module.scss'
import { ContextConsumer } from '../components/Context'
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import { IntlProvider } from 'gatsby-plugin-intl';
import { ContextProvider } from '../components/Context';

export default function SolutionLayout(props) {
  let { children, location,intl } = props
  // console.log('solution-layout',intl)
  // console.log('solution-layout-children',children)
  return (
    <IntlProvider>
            <ContextProvider>
    <div className={styles.content}>
      <div className={styles.content_bg}>
        {/* <div className={styles.content_box}>
          <p className={styles.banner_title}>解决方案</p>
          <img className={styles.banner} src={require('../assets/imgs/Solution/banner.png')} alt="banner"/>
        </div> */}
      </div>
      <div className={styles.solution}>
        <ContextConsumer>
          {({ data: { title } }) => <h2 className={styles.title}>{title}</h2>}
        </ContextConsumer>
        <Breadcrumb location={location}/>
        <hr className={styles.hr}/>
        {children}
      </div>
    </div>
    </ContextProvider>
    </IntlProvider>
  )
}
