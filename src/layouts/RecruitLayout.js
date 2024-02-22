import React from "react"
import Breadcrumb from "../components/Breadcrumb"
import styles from './RecruitLayout.module.scss';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

export default class RecruitLayout extends React.Component{
  render(){
    let {intl} = this.props;
    return(
      <>
        <div className={styles.banner} style={{
          background: `url(${require('../assets/imgs/Recruit/banner.png')}) no-repeat`,
          backgroundSize: '100% auto'
        }}>
          {/* <p className={styles.banner_title}>加入我们</p> */}
        </div>
        <div className={styles.recruit}>
          <h2 className={styles.title}>远健招聘</h2>
          <Breadcrumb  location={this.props.location}/>
          {this.props.children}
        </div>
      </>
    )
  }
}
