import React from 'react';
import styles from './NewsDetail.module.scss';
import Breadcrumb from '../../components/Breadcrumb';
import { loadNews, findNews, resolveImg, isEnPath } from '../../data/news';
// import VideoBg from '../components/VideoBg/VideoBg';

export default class NewsDetail extends React.Component {
  state = { newsData: null };

  componentDidMount(){
    // 远健动态:远程数据加载成功后刷新(失败则维持内置数据)
    loadNews().then(data => {
      if (data) this.setState({ newsData: data });
    });
  }

  render() {
    const locale = isEnPath() ? 'en' : 'zh';
    const hash = (this.props.location.hash || '').replace('#', '');
    const n = findNews(this.state.newsData, locale, hash);
    const { title, time, publisher, body } = n || {};
    return (
      <div className={styles.dynamic}>
        <div className={styles.newscontent}>
            <div className={styles.head}>
              <h2 className={styles.title}>远健动态</h2>
              <Breadcrumb location={this.props.location}/>
            </div>
            <hr className={styles.hr}/>
            <h3 className={styles.sub_title}>{title}</h3><span>时间：{time} &nbsp;&nbsp;&nbsp;&nbsp; 发布者：{publisher}</span>
            {body && body.map((it, i) => {
              if (it.t === 'video') {
                return <video key={i} style={{ display:'block', margin:'auto'}} controls={{}} autoPlay={{}}><source src={it.v}/></video>
              }
              if (it.t === 'title') {
                return <div key={i}><p style={{fontWeight:"800"}}>{it.v}</p><br/></div>
              }
              if (it.t === 'img') {
                return <img key={i} referrerpolicy="no-referrer" src={resolveImg(it.v)}/>
              }
              if (it.t === 'iframe') {
                return <div key={i} style={{margin:'0 auto',width:'80%',height:'477px'}}><iframe width="100%" height="100%" frameborder="0" src={it.v} allowFullScreen="true"></iframe></div>
              }
              return <div key={i}><p>{it.v}</p><br/></div>
            })}
        </div>
      </div>
    );
  }
}
