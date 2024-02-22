import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import styles from './index.module.scss';
import Link from '../../components/Link';
import { NEWS_ABSTRACT } from '../../config';

export default class News extends React.Component {
	
	componentDidMount() {
		document.title = "美德远健官网";
		const meta = document.createElement('meta');
		meta.content = 'never';
		meta.name = 'referrer';
		console.log(document.getElementsByTagName('head'))
		document.getElementsByTagName('head')[0].appendChild(meta);
	}
	
  render() {
    return (
      <div style={{overflow: 'auto',paddingTop: '65px'}}>
        <div className={styles.banner} style={{
          background: `url(${require('../../assets/imgs/News/banner.png')}) no-repeat`,
          backgroundSize: '100% auto'
        }}>
          <div>智能·老人·健康</div>
        </div>
        <div className={styles.dynamic}>
          <div className={styles.dynamic_header}>
            <h2 className={styles.title}>远健动态</h2>
            <Breadcrumb location={this.props.location}/>
          </div>
          <div className={styles.media_main}>
            {NEWS_ABSTRACT.map(({title,cnt,time,src,to}) =>
              <div className={styles.media}>
                <div className={styles.media_left}><Link to={to}><img className={styles.media_object} src={src}/></Link>
                </div>
                <div className={styles.media_body}><Link to={to}><h4 className={styles.media_head}>
                  {title}</h4>
                  <p className={styles.time}>{time}</p>
                  <p className={styles.content}>{cnt}</p>
                  <span className={styles.particulars}>了解详情 ></span></Link></div>
                <hr className={styles.hr}/>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
