import React from 'react';
import styles from './NewsDetail.module.scss';
import Breadcrumb from '../../components/Breadcrumb';
import { NEWS_DETAIL } from '../../config';
// import VideoBg from '../components/VideoBg/VideoBg';

export default class NewsDetail extends React.Component {
  componentDidMount(){

  }
  render() {
    let {hash} = this.props.location;
    let key = hash.replace('#','');
    let {title,time,publisher,items} = NEWS_DETAIL[key] || {};
    // console.log(items[items.length-1].video)
    return (
      <div className={styles.dynamic}>
        <div className={styles.newscontent}>
            <div className={styles.head}>
              <h2 className={styles.title}>远健动态</h2>
              <Breadcrumb location={this.props.location}/>
            </div>
            <hr className={styles.hr}/>
            <h3 className={styles.sub_title}>{title}</h3><span>时间：{time} &nbsp;&nbsp;&nbsp;&nbsp; 发布者：{publisher}</span>
            {items && items.map(({txt,src,title,video},i) =>{
									if(video){
										return <video style={{ display:'block', margin:'auto'}} controls={{}} autoPlay={{}}><source src={video}/></video>
									}
								 else if(title){
										return <div><p style={{fontWeight:"800"}} key={i}>{title}</p><br/></div>
									}
									else{
										return txt ? <div><p key={i}>{txt}</p><br/></div> : <img referrerpolicy="no-referrer" key={src+i} src={src}/>
									}
								}
              )}
            {/*items && items.map(({video},i)  => video ? <video style={{ display:'block', margin:'auto'}} controls={{}} autoPlay={{}}><source src={video}/></video> : null
            )*/}
			{items && items.map(({iframe},i)  => iframe ? <div style={{margin:'0 auto',width:'80%',height:'477px'}}><iframe width="100%" height="100%" frameborder="0" src={iframe} allowFullScreen="true"></iframe></div>  : null
			)}
            {/* <div style={{display:items[items.length-1].video?'block':'none'}}>
                <video controls={{}} autoplay={{}}><source src={{video}}/></video>
            </div> */}
            {/* <VideoBg loop muted autoPlay>
                    <VideoBg.Source src={'https://files.catbox.moe/b9hdw3.mp4'} />
            </VideoBg> */}
          </div>
      </div>
    );
  }
}
