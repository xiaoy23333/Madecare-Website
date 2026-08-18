import React from 'react';
// import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
/* eslint-disable import/no-extraneous-dependencies */
// import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true

import styles from './index.module.scss';
import Link from '../components/Link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { loadNews, pickNews, resolveImg } from '../data/news';
import VideoBg from '../components/VideoBg/VideoBg';
import poster from "../assets/imgs/Index/video_cover.jpeg";
import Header from '../components/Header';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import { LANGS} from '../config';



class Index extends React.Component {
  state = { newsData: null };
  //fullpage options

  // scrollingSpeed = {1000} /* Options here */

  // render={() => {


  onLeave(origin, destination, direction) {
    if (origin.index=="1") {
      var s = document.getElementsByTagName("video")[0];
      s.play();
    };
    // console.log(direction);
  }
  // afterLoad(origin, destination, direction) {
  //   // console.log("After load: " + destination.index);    
  //   if (destination.index==="0") this.setState();
  //   if (origin.index ===1) {
  //     var s = document.getElementsByTagName("video")[0];
  //     s.play();
  //   };
  // }
  afterLoad(origin, destination, direction) {
    // console.log("After load: " + destination.index);    
    if (destination.index=="0") this.setState();
    if (origin.index ==1) {
      var s = document.getElementsByTagName("video")[0];
      s.play();
    };
    var obj = document.getElementsByClassName("section");
    for(var i=0;i<obj.length;i++){
      obj[i].style.opacity = 1; 
    }
  }
	
	componentDidMount() {
		document.title = "冀德远健官网";
		const meta = document.createElement('meta');
		meta.content = 'never';
		meta.name = 'referrer';
		console.log(document.getElementsByTagName('head'))
		document.getElementsByTagName('head')[0].appendChild(meta);
		// 远健动态:远程数据加载成功后刷新(失败则维持内置数据)
		loadNews().then(data => {
			if (data) this.setState({ newsData: data });
		});
	}
	
  render() {
    // console.log(rest);
    // console.log("&&^*")

    // { state, fullpageApi }

    let {intl} = this.props;
    // console.log('index-intl',intl);

    const newsList = pickNews(this.state.newsData, intl.locale);

    const newsSlick = {
      dots: true,
      infinite: true,
      speed: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const anchors = ["1", "2", "3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22"];

    return (
      <ReactFullpage
    //   //fullpage options
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    // licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {500} /* Options here */
      // scrollOverflow={true}
      // sectionsColor={["", "purple", "green"]}
      onLeave={this.onLeave.bind(this)}
      afterLoad={this.afterLoad.bind(this)}

render={({ state, fullpageApi }) => {
          // console.log(state);
          // console.log('@%@@@');
          // global.indexStateContext = state;          
// const indexStateContext = React.createContext(...state);

          return ( 
            <div id="fullpage-wrapper">
              <div className="section section1" style={{}}>
                {/* <h3>Section 1</h3> */}
                {/* <VideoBg loop muted autoPlay>
                    <VideoBg.Source src={mp4} type="video/mp4" />
                    
                </VideoBg> */}
                {/* <iframe height={498} width={510} src={'https://vku.youku.com/live/ilpshare?id=8063211'} frameborder={0} ></iframe> */}
                <VideoBg loop muted autoPlay>
                    <VideoBg.Source src={require('../assets/mp4/2k-ffa96772cabead64113b654f2b13bf01.mp4').default} />
                </VideoBg>
              </div>
              <div className="section">
                  {/* P2 */}
                  <div className={styles.sfy_container}>
                    <Header {...this.props}/>
                    <div className={styles.sfy_row}>
                        <div className={styles.cpzx}>
                          <div className={styles.sfy_index_title} >
                                <div className={styles.index_title}>
                                    <FormattedMessage
                                      id="cpzs.cpjj"
                                      defaultMessage=" "
                                      values={{
                                      }}
                                    />
                                </div> 
                          </div>
                          <div className={styles.sfy_product1} >
                                <div className={styles.product3} >
                                      <div style={{    height: '89%'}}  >
                                          <img className={styles.images} src={require('../assets/imgs/Index/overview/02.png').default} />
                                      </div>
                                      <div className={styles.sfy_right_xzkf} style={{}}>
                                          <button className={styles.button_style} onClick={() => fullpageApi.moveTo(3, 0)}><span className={styles.word_20}>{intl.formatMessage({ id: "cpzs.xzkf"})}</span></button>
                                      </div>
                                </div>
                                <div className={styles.product3} >
                                      <div style={{    height: '89%'}}  >
                                          <img className={styles.images} src={require('../assets/imgs/Index/overview/04.png').default} />
                                      </div>
                                      <div className={styles.sfy_right_xzkf} style={{}}>
                                          <button className={styles.button_style} onClick={() => fullpageApi.moveTo(5, 0)}><span className={styles.word_20}>{intl.formatMessage({ id: "cpzs.cpx"})}</span></button>
                                      </div>
                                </div>
                                <div className={styles.product3} >
                                      <div style={{    height: '89%'}}  >
                                          <img className={styles.images} src={require('../assets/imgs/Index/rse_02.png').default} />
                                      </div>
                                      <div className={styles.sfy_right_xzkf} style={{}}>
                                          <button className={styles.button_style} onClick={() => fullpageApi.moveTo(8, 0)}><span className={styles.word_20}>{intl.formatMessage({ id: "cpzs.rse"})}</span></button>
                                      </div>
                                </div>
                                <div className={styles.product3} >
                                      <div style={{    height: '89%'}}  >
                                          <img className={styles.images} src={require('../assets/imgs/Index/mwt_01_nav.png').default} />
                                      </div>
                                      <div className={styles.sfy_right_xzkf} style={{}}>
                                          <button className={styles.button_style} onClick={() => fullpageApi.moveTo(11, 0)}><span className={styles.word_20}>{intl.formatMessage({ id: "cpzs.mwt"})}</span></button>
                                      </div>
                                </div>
                          </div>
                          <div className={styles.sfy_product2} >
                                <div className={styles.product2} >
                                      <div style={{    height: '90%'}} >
                                          <img className={styles.images_middle} src={require('../assets/imgs/Index/overview/01.png').default} />
                                      </div>
                                      <div className={styles.kfzy1} >
                                          <button className={styles.button_style} onClick={() => fullpageApi.moveTo(13, 0)}>{intl.formatMessage({ id: "cpzs.kfzy1" })}</button>
                                      </div>
                                </div>
                                <div className={styles.product2} >
                                      <div style={{    height: '90%'}}   >
                                          <img  className={styles.images_small} src={require('../assets/imgs/Index/overview/06.png').default} />
                                      </div>
                                      <div className={styles.kfzy1} >
                                      <button className={styles.button_style} onClick={() => fullpageApi.moveTo(15, 0)}>{intl.formatMessage({ id: "cpzs.kfzy2" })}</button>
                                      </div>
                                </div>
                                <div className={styles.product1} >
                                    <div style={{    height: '86%', textAlign: 'center'}}  >
                                        <img  src={require('../assets/imgs/Index/overview/001.png').default} />
                                    </div>
                                    <div className={styles.cpzs_left1} >
                                      <button className={styles.button_style} onClick={() => fullpageApi.moveTo(17, 0)}> {intl.formatMessage({ id: "cpzs.left1" })}</button>
                                    </div>
                                </div>
                                <div className={styles.product1} >
                                    <div style={{height: '89%',marginTop:'0%', textAlign: 'center'}} >
                                      <img src={require('../assets/imgs/Index/overview/03.png').default} />
                                    </div>
                                    <div className={styles.cpzs_left1} style={{bottom: '0%'}}>
                                      <button className={styles.button_style} onClick={() => fullpageApi.moveTo(19, 0)}> {intl.formatMessage({ id: "cpzs.left2" })} </button>
                                    </div>
                                </div>
                          </div>
                      </div>
                          {/* <div className={styles.sfy_middle}>
                              <div className={styles.middle_inner}>
                                <p className={styles.index_title}>
                                    <FormattedMessage
                                      id="cpzs.cpjj"
                                      defaultMessage=" "
                                      values={{
                                      }}
                                    />
                                </p> 
                                <div className={styles.middle1} >
                                    <img className={styles.images_middle} src={require('../assets/imgs/Index/overview/01.png').default} />                                    
                                    <p className={styles.kfzy1} >
                                    <button className={styles.button_style} onClick={() => fullpageApi.moveTo(13, 0)}>{intl.formatMessage({ id: "cpzs.kfzy1" })}</button>
                                    </p>
                                </div>                               
                                <div className={styles.middle2} >
                                    <img className={styles.images_small} src={require('../assets/imgs/Index/overview/06.png').default} />
                                    <p className={styles.kfzy2} >
                                    <button className={styles.button_style} onClick={() => fullpageApi.moveTo(15, 0)}>{intl.formatMessage({ id: "cpzs.kfzy2" })}</button>
                                    </p>                                    
                                </div>
                              </div>
                          </div>
                          <div className={styles.sfy_right}>	
                            <img className={styles.images} src={require('../assets/imgs/Index/overview/02.png').default} />                            
                                <p className={styles.sfy_right_xzkf} style={{}}>
                                <button className={styles.button_style} onClick={() => fullpageApi.moveTo(3, 0)}><span className={styles.word_20}>{intl.formatMessage({ id: "cpzs.xzkf"})}</span></button>
                                </p> 
                            <img className={styles.images2} src={require('../assets/imgs/Index/overview/04.png').default} />
                            
                              <p className={styles.sfy_right_cpx} style={{color:'#333333',width: '100%',textAlign:'center', marginTop: '-1%' }}>
                              <button className={styles.button_style}  onClick={() => fullpageApi.moveTo(5, 0)}><span className={styles.word_20}>{intl.formatMessage({ id: "cpzs.cpx" })}</span></button>
                              </p>                            
                          </div>                     */}
                    </div>

                    <div className={styles.sfy_bottom} >
                          <div className={styles.images_bottom}  style={{backgroundSize:'100%',backgroundPosition:'center',backgroundRepeat:'no-repeat',
                                backgroundImage: `url(${require('../assets/imgs/Index/group2.png').default}) `,
                                // backgroundColor: '#f6f6f6',
                              }}><p style={{display: 'flex',
                                justifyContent: 'space-around'}} ><span className={styles.word_20} style={{color:'#ffffff',marginRight: '50%'}}  >{intl.formatMessage({ id: "cpzs.znhl" })}</span>
                              <span className={styles.word_24} style={{color:'#ffffff'}}  >{intl.formatMessage({ id: "cpzs.znkf" })}</span>
                                  </p>
                      
                          </div>
                    </div>
                    
                  </div>

              </div>
              <div className="section">
                  {/* P3 */}
                  <Header {...this.props}/>
                  <div className={styles.back_top}>
                    <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                      <div className={styles.back_icon}>
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png').default} />
                      </div>
                      <div className={styles.backto} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>                   
                  </div>

                  <div className="wrapper">
                    <div className={styles.web_bg}  style={{backgroundImage: `url(${require('../assets/imgs/Index/dws1000_1.png').default})` }}>
                          <div style={{}}>
                              <p className={styles.Index} style={{  marginTop: '70vh',marginLeft: '12.5rem'}} >
                                01
                              </p>
                          </div>

                          <div className={styles.descrip1} style={{}}  >
                              <div style={{marginBottom: '-3%',  marginLeft: '10%',    width: '2rem',  height: '2rem'}}>
                                <FormattedMessage
                                      id="index3.tm"
                                      defaultMessage=" "
                                      values={{
                                      }}
                                    />
                                </div>
                              <div className={styles.word_24}>     
                                  <FormattedMessage
                                      id="index3.dws100.title"
                                      defaultMessage="力感减重&nbsp;&nbsp;&nbsp;&nbsp;下肢康复机器人"
                                      values={{
                                        space:""                                        
                                      }}
                                    />                                  
                              </div>
                                <div style={{width:'6rem',height:'.125rem',backgroundColor:'#ff6600'}} ></div>
                              <div className={styles.word_title} style={{lineHeight: '190%'}}>                                  
                                  <FormattedMessage
                                      id="index3.dws100.descrip"
                                      defaultMessage="多维“力感”动态减重步态训练系统"
                                      values={{
                                      }}
                                    />
                              </div>
                          </div>
                    </div>
                </div>

              </div>
              <div className="section">
                  {/* P4 */}
                  <Header {...this.props}/>
                  <div className={styles.back_top}>
                    <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                      <div className={styles.back_icon}>
                          <img alt="冀德远健" style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png').default} />
                      </div>
                      <div className={styles.backto} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>
                  </div>
                  
                  <div className={styles.web_bg} style={{backgroundImage: `url(${require('../assets/bigimg/dws1000webbg.png').default})` }} />

                    <div className={styles.dws1000_container}>
                      <div className={styles.dws1000} >
                      
                      </div>
                      <div className={styles.dws1000_info}>
                              <div style={{marginBottom: '-3%',  marginLeft: '7em', width:'2rem',  height:'1rem'}}>
                                {intl.formatMessage({ id: "index3.tm" })}
                                </div>
                              <div className={styles.dws1000_title}><p  className={styles.word_30}>
                                    <FormattedMessage
                                      id="index3.dws100.title"
                                      defaultMessage="力感减重&nbsp;&nbsp;&nbsp;下肢康复机器人"
                                      values={{
                                      }}
                                    />         
                                </p></div>

                                    <div className={styles.product_dws1000}> 
                                          <div className={styles.dws1000_function}>
                                            <div className={styles.word_24}  style={{lineHeight: '190%'}}>{intl.formatMessage({ id: "index4.productfunc" })}</div>
                                            <div className={styles.word_18}>
                                                <ul className={styles.ul2}>
                                                  <li className={styles.li_index}>{intl.formatMessage({ id: "index4.dtjz" })}</li>
                                                  <li className={styles.li_index}>{intl.formatMessage({ id: "index4.zngs" })}</li> 
                                                  <li className={styles.li_index}>{intl.formatMessage({ id: "index4.zlfz" })}</li>
                                                  <li className={styles.li_index}>{intl.formatMessage({ id: "index4.xltj" })}</li>
                                                  <li className={styles.li_index}>{intl.formatMessage({ id: "index4.ddfh" })}</li>
                                                </ul>
                                            </div>                               
                                          </div>
                                          <div className={styles.dws1000_apply}>
                                            <div className={styles.word_24} style={{lineHeight: '200%', marginLeft: '56%'}}>{intl.formatMessage({ id: "index4.productapply" })}</div>
                                            <div className={styles.word_18}>
                                                <ul className={styles.ul3}>
                                                  <li className={styles.li_index}>{intl.formatMessage({ id: "index4.zkkfyy" })}</li>
                                                  <li className={styles.li_index}>{intl.formatMessage({ id: "index4.zhyykfk" })}</li>                                
                                                </ul>   
                                            </div>                            
                                          </div>
                                    </div>

                              <div className={styles.product_text}><p className={styles.word_18}>
                                {intl.formatMessage({ id: "index4.productintro" })}                               
                                    </p></div>
                      </div>
                </div>

              </div>
              <div className="section">
                  {/* P5 */}
                  <Header {...this.props}/>
                  <div className={styles.back_top}>
                    <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                      <div className={styles.back_icon}>
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png').default} />
                      </div>
                      <div className={styles.backto} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>                    
                  </div>

                  <div className={styles.cpx_left}>
                        <div className={styles.descrip2} style={{float:"left"}}  >
                            
                            <div className={styles.word_24}>
                                {intl.formatMessage({ id: "index5.cpx" })}
                            </div>
                              <div style={{width:'6rem',height:'.125rem',backgroundColor:'#ff6600'}} ></div>
                            <div className={styles.word_title} style={{width: '100%',lineHeight: '190%'}}>
                              {intl.formatMessage({ id: "index5.cpxintro" })}
                            </div>
                        </div>
                        <div >
                              <p className={styles.Index} style={{marginTop: '45%',marginLeft: '10%'}} >02</p>
                        </div>
                                                
                    </div>
                  <div className={styles.cpx_image} >        
                      <img style={{Width: '75%'}} src={require('../assets/imgs/Index/cpx_01.png').default} />
                  </div>

              </div>
              <div className="section">
                  {/* P6 */}
                  <Header {...this.props}/>
                  <div className={styles.back_top}>
                    <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                      <div className={styles.back_icon}>
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png').default} />
                      </div>
                      <div className={styles.backto} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>                    
                  </div>

                    <div className={styles.cpx_container}>
                      <div className={styles.cpx} >    
                          <img src={require('../assets/imgs/Index/cpx_02.png').default} />
                      </div>               
                      <div className={styles.cpx_info}>         
                        <div className={styles.cpx_title}><p  className={styles.word_30}> {intl.formatMessage({ id: "index6.cpx" })}</p></div>
                            <div className={styles.product_cpx}> 
                                      <div className={styles.cpx_function}>
                                      <div className={styles.word_24} style={{lineHeight: '200%'}}>{intl.formatMessage({ id: "index4.productfunc" })}</div>
                                          <div className={styles.word_18}>
                                              <ul className={styles.ul2}>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index6.ul2.li1" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index6.ul2.li2" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index6.ul2.li3" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index6.ul2.li4" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index6.ul2.li5" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index6.ul2.li6" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index6.ul2.li7" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index6.ul2.li8" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index6.ul2.li9" })}</li>                               
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index6.ul2.li11" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index6.ul2.li12" })}</li>
                                              </ul>
                                          </div>                               
                                    </div>
                                    <div className={styles.cpx_apply}>
                                        <div className={styles.word_24} style={{lineHeight: '200%', marginLeft: '56%'}}>{intl.formatMessage({ id: "index6.producttrait" })}</div>
                                        <div className={styles.word_18}>
                                            <ul className={styles.ul3}>
                                              <li className={styles.li_index}> {intl.formatMessage({ id: "index6.ul3.li1" })}</li>
                                              <li className={styles.li_index2}>{intl.formatMessage({ id: "index6.ul3.li2" })}</li>
                                              <li className={styles.li_index2}>{intl.formatMessage({ id: "index6.ul3.li3" })}</li>
                                              <li className={styles.li_index}> {intl.formatMessage({ id: "index6.ul3.li4" })}</li>
                                              <li className={styles.li_index2}>{intl.formatMessage({ id: "index6.ul3.li5" })}</li>
                                              <li className={styles.li_index2}>{intl.formatMessage({ id: "index6.ul3.li6" })}</li>
                                              <li className={styles.li_index2}>{intl.formatMessage({ id: "index6.ul3.li7" })}</li>
                                              <li className={styles.li_index}> {intl.formatMessage({ id: "index6.ul3.li8" })}</li>
                                              <li className={styles.li_index}> {intl.formatMessage({ id: "index6.ul3.li9" })}</li> 
                                              <li className={styles.li_index}> {intl.formatMessage({ id: "index6.ul3.li10" })}</li>
                                            </ul>  
                                        </div> 
                                                         
                                    </div>
                              </div>                  

                      <div style={{marginLeft: '2%', marginTop: '1vh', clear: 'both'}}>
                        <span className={styles.word_24} style={{lineHeight: '200%'}}>{intl.formatMessage({ id: "index6.apply" })}</span>
<span  className={styles.li_index} style={{lineHeight: '200%'}}>&nbsp;&nbsp;{intl.formatMessage({ id: "index6.applyintro" })}</span>     
                      </div>      
                  </div>          

              </div>
              </div>
              <div className="section">
                  {/* P7 SEM 运动负荷试验测试踏车 */}
                  <Header {...this.props}/>
                  <div className={styles.back_top}>
                    <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                      <div className={styles.back_icon}>
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png').default} />
                      </div>
                      <div className={styles.backto} >
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>
                      </div>
                    </button>
                  </div>

                    <div className={styles.cpx_container}>
                      <div className={styles.cpx} >
                          <img src={require('../assets/imgs/Index/sem_01.jpeg').default} />
                      </div>
                      <div className={styles.cpx_info}>
                        <div className={styles.cpx_title}><p  className={styles.word_30}> {intl.formatMessage({ id: "index7sem.title" })}</p></div>
                            <div className={styles.product_cpx}>
                                      <div className={styles.cpx_function}>
                                      <div className={styles.word_24} style={{lineHeight: '200%'}}>{intl.formatMessage({ id: "index7sem.paramtitle" })}</div>
                                          <div className={styles.word_18}>
                                              <ul className={styles.ul2}>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7sem.ul2.li1" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7sem.ul2.li2" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7sem.ul2.li3" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7sem.ul2.li4" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7sem.ul2.li5" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7sem.ul2.li6" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7sem.ul2.li7" })}</li>
                                              </ul>
                                          </div>
                                    </div>
                                    <div className={styles.cpx_apply}>
                                        <div className={styles.word_24} style={{lineHeight: '200%', marginLeft: '56%'}}>{intl.formatMessage({ id: "index7sem.featuretitle" })}</div>
                                        <div className={styles.word_18}>
                                            <ul className={styles.ul3}>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7sem.ul3.li1" })}</li>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7sem.ul3.li2" })}</li>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7sem.ul3.li3" })}</li>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7sem.ul3.li4" })}</li>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7sem.ul3.li5" })}</li>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7sem.ul3.li6" })}</li>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7sem.ul3.li7" })}</li>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7sem.ul3.li8" })}</li>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7sem.ul3.li9" })}</li>
                                            </ul>
                                        </div>

                                    </div>
                              </div>

                      <div style={{marginLeft: '2%', marginTop: '1vh', clear: 'both'}}>
                        <span className={styles.word_24} style={{lineHeight: '200%'}}>{intl.formatMessage({ id: "index7sem.apply" })}</span>
<span  className={styles.li_index} style={{lineHeight: '200%'}}>&nbsp;&nbsp;{intl.formatMessage({ id: "index7sem.applyintro" })}</span>
                      </div>
                  </div>
                      </div>

              </div>
              <div className="section">
                  {/* P7b RSE 运动心电测试系统 标题页 */}
                  <Header {...this.props}/>
                  <div className={styles.back_top}>
                    <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                      <div className={styles.back_icon}>
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png').default} />
                      </div>
                      <div className={styles.backto} >
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>
                      </div>
                    </button>
                  </div>

                  <div className={styles.cpx_left} style={{position:'relative', zIndex:1}}>
                        <div className={styles.descrip2} style={{float:"left"}}  >
                            <div className={styles.word_24}>
                                {intl.formatMessage({ id: "index7rse.subtitle" })}
                            </div>
                              <div style={{width:'6rem',height:'.125rem',backgroundColor:'#ff6600'}} ></div>
                            <div className={styles.word_title} style={{width: '100%',lineHeight: '190%'}}>
                              {intl.formatMessage({ id: "index7rse.title" })}
                            </div>
                        </div>
                        <div >
                              <p className={styles.Index} style={{marginTop: '45%',marginLeft: '10%'}} >03</p>
                        </div>
                    </div>
                  <div className={styles.cpx_image} style={{position:'relative', zIndex:1}} >
                      <img style={{height: '100%', width: 'auto', marginTop: '0%'}} src={require('../assets/imgs/Index/rse_01_t.png').default} />
                  </div>

              </div>
              <div className="section">
                  {/* P7c RSE 详情页 */}
                  <Header {...this.props}/>
                  <div className={styles.back_top}>
                    <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                      <div className={styles.back_icon}>
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png').default} />
                      </div>
                      <div className={styles.backto} >
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>
                      </div>
                    </button>
                  </div>

                    <div className={styles.cpx_container} style={{marginTop: '-6vh'}}>
                      <div className={styles.cpx} >
                          <img src={require('../assets/imgs/Index/rse_02.png').default} />
                      </div>
                      <div className={styles.cpx_info}>
                        <div className={styles.cpx_title}><p  className={styles.word_30}> {intl.formatMessage({ id: "index7rse.subtitle" })}</p></div>
                            <div className={styles.product_cpx}>
                                      <div className={styles.cpx_function}>
                                      <div className={styles.word_24} style={{lineHeight: '200%'}}>{intl.formatMessage({ id: "index4.productfunc" })}</div>
                                          <div className={styles.word_18}>
                                              <ul className={styles.ul2}>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7rse.ul2.li1" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7rse.ul2.li2" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7rse.ul2.li3" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7rse.ul2.li4" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7rse.ul2.li5" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7rse.ul2.li6" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7rse.ul2.li7" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7rse.ul2.li8" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7rse.ul2.li9" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7rse.ul2.li10" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7rse.ul2.li11" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7rse.ul2.li12" })}</li>
                                                {intl.locale !== 'en' && <li className={styles.li_index}>{intl.formatMessage({ id: "index7rse.ul2.li13" })}</li>}
                                              </ul>
                                          </div>
                                    </div>
                                    <div className={styles.cpx_apply}>
                                        <div className={styles.word_24} style={{lineHeight: '200%', marginLeft: '56%'}}>{intl.formatMessage({ id: "index6.producttrait" })}</div>
                                        <div className={styles.word_18}>
                                            <ul className={styles.ul3}>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7rse.ul3.li1" })}</li>
                                              {intl.locale !== 'en' && <li className={styles.li_index2}>{intl.formatMessage({ id: "index7rse.ul3.li2" })}</li>}
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7rse.ul3.li3" })}</li>
                                              {intl.locale !== 'en' && <li className={styles.li_index2}>{intl.formatMessage({ id: "index7rse.ul3.li4" })}</li>}
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7rse.ul3.li5" })}</li>
                                              {intl.locale !== 'en' && <li className={styles.li_index2}>{intl.formatMessage({ id: "index7rse.ul3.li6" })}</li>}
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7rse.ul3.li7" })}</li>
                                              {intl.locale !== 'en' && <li className={styles.li_index2}>{intl.formatMessage({ id: "index7rse.ul3.li8" })}</li>}
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7rse.ul3.li9" })}</li>
                                              {intl.locale !== 'en' && <li className={styles.li_index2}>{intl.formatMessage({ id: "index7rse.ul3.li10" })}</li>}
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7rse.ul3.li11" })}</li>
                                              {intl.locale !== 'en' && <li className={styles.li_index2}>{intl.formatMessage({ id: "index7rse.ul3.li12" })}</li>}
                                            </ul>
                                        </div>
                                    </div>
                              </div>
                      <div style={{marginLeft: '2%', marginTop: '1vh', clear: 'both'}}>
                        <span className={styles.word_24} style={{lineHeight: '200%'}}>{intl.formatMessage({ id: "index7sem.apply" })}</span>
<span  className={styles.li_index} style={{lineHeight: '200%'}}>&nbsp;&nbsp;{intl.formatMessage({ id: "index7rse.applyintro" })}</span>
                      </div>
                  </div>
                      </div>

              </div>
              <div className="section">
                  {/* P7d STM 医用跑台 详情页 */}
                  <Header {...this.props}/>
                  <div className={styles.back_top}>
                    <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                      <div className={styles.back_icon}>
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png').default} />
                      </div>
                      <div className={styles.backto} >
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>
                      </div>
                    </button>
                  </div>

                    <div className={styles.cpx_container}>
                      <div className={styles.cpx} >
                          <img src={require('../assets/imgs/Index/stm_01.jpeg').default} />
                      </div>
                      <div className={styles.cpx_info}>
                        <div className={styles.cpx_title}><p  className={styles.word_30}> {intl.formatMessage({ id: "index7stm.title" })}</p></div>
                            <div className={styles.product_cpx}>
                                      <div className={styles.cpx_function}>
                                      <div className={styles.word_24} style={{lineHeight: '200%'}}>{intl.formatMessage({ id: "index7sem.paramtitle" })}</div>
                                          <div className={styles.word_18}>
                                              <ul className={styles.ul2}>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7stm.ul2.li1" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7stm.ul2.li2" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7stm.ul2.li3" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7stm.ul2.li4" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7stm.ul2.li5" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7stm.ul2.li6" })}</li>
                                              </ul>
                                          </div>
                                    </div>
                                    <div className={styles.cpx_apply}>
                                        <div className={styles.word_24} style={{lineHeight: '200%', marginLeft: '56%'}}>{intl.formatMessage({ id: "index7sem.featuretitle" })}</div>
                                        <div className={styles.word_18}>
                                            <ul className={styles.ul3}>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7stm.ul3.li1" })}</li>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7stm.ul3.li2" })}</li>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7stm.ul3.li3" })}</li>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7stm.ul3.li4" })}</li>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7stm.ul3.li5" })}</li>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7stm.ul3.li6" })}</li>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7stm.ul3.li7" })}</li>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7stm.ul3.li8" })}</li>
                                            </ul>
                                        </div>
                                    </div>
                              </div>
                      <div style={{marginLeft: '2%', marginTop: '1vh', clear: 'both'}}>
                        <span className={styles.word_24} style={{lineHeight: '200%'}}>{intl.formatMessage({ id: "index7sem.apply" })}</span>
<span  className={styles.li_index} style={{lineHeight: '200%'}}>&nbsp;&nbsp;{intl.formatMessage({ id: "index7stm.applyintro" })}</span>
                      </div>
                  </div>
                      </div>

              </div>
              <div className="section">
                  {/* P7e 6MWT 六分钟步行实验测试系统 标题页 */}
                  <Header {...this.props}/>
                  <div className={styles.back_top}>
                    <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                      <div className={styles.back_icon}>
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png').default} />
                      </div>
                      <div className={styles.backto} >
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>
                      </div>
                    </button>
                  </div>

                  <div className={styles.web_bg}>
                    <div style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', backgroundImage: `url(${require('../assets/imgs/Index/mwt_bg.jpg').default})`, backgroundSize: 'cover', backgroundPosition: 'center', WebkitMaskImage: 'linear-gradient(to right, black 0%, black 30%, transparent 60%)', maskImage: 'linear-gradient(to right, black 0%, black 30%, transparent 60%)'}} />
                  <div className={styles.cpx_left} style={{position:'relative', zIndex:1}}>
                        <div className={styles.descrip2} style={{float:"left", marginLeft: '15%', background: 'rgba(255, 255, 255, .55)', WebkitBackdropFilter: 'blur(.5rem)', backdropFilter: 'blur(.5rem)', border: '.0625rem solid rgba(255, 255, 255, .7)', borderRadius: '.5rem', boxShadow: '0 .5rem 1.5rem rgba(1, 58, 70, .12)', padding: '4% 5%', boxSizing: 'border-box'}}  >
                            <div className={styles.word_24}>
                                {intl.formatMessage({ id: "index7mwt.subtitle" })}
                            </div>
                              <div style={{width:'6rem',height:'.125rem',backgroundColor:'#ff6600'}} ></div>
                            <div className={styles.word_title} style={{width: '100%',lineHeight: '190%'}}>
                              {intl.formatMessage({ id: "index7mwt.title" })}
                            </div>
                        </div>
                        <div >
                              <p className={styles.Index} style={{marginTop: '45%',marginLeft: '15%'}} >04</p>
                        </div>
                    </div>
                  <div className={styles.cpx_image} style={{position:'relative', zIndex:1}} >
                      <img style={{height: '100%', width: 'auto', marginTop: '0%'}} src={require('../assets/imgs/Index/mwt_01_t.png').default} />
                  </div>
                  </div>

              </div>
              <div className="section">
                  {/* P7f 6MWT 详情页 */}
                  <Header {...this.props}/>
                  <div className={styles.back_top}>
                    <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                      <div className={styles.back_icon}>
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png').default} />
                      </div>
                      <div className={styles.backto} >
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>
                      </div>
                    </button>
                  </div>

                    <div className={styles.cpx_container}>
                      <div className={styles.cpx} >
                          <img src={require('../assets/imgs/Index/mwt_02.png').default} />
                      </div>
                      <div className={styles.cpx_info}>
                        <div className={styles.cpx_title}><p  className={styles.word_30}> {intl.formatMessage({ id: "index7mwt.subtitle" })}</p></div>
                            <div className={styles.product_cpx}>
                                      <div className={styles.cpx_function}>
                                      <div className={styles.word_24} style={{lineHeight: '200%'}}>{intl.formatMessage({ id: "index4.productfunc" })}</div>
                                          <div className={styles.word_18}>
                                              <ul className={styles.ul2}>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7mwt.ul2.li1" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7mwt.ul2.li2" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7mwt.ul2.li3" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7mwt.ul2.li4" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7mwt.ul2.li5" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7mwt.ul2.li6" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7mwt.ul2.li7" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7mwt.ul2.li8" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7mwt.ul2.li9" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7mwt.ul2.li10" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "index7mwt.ul2.li11" })}</li>
                                              </ul>
                                          </div>
                                    </div>
                                    <div className={styles.cpx_apply}>
                                        <div className={styles.word_24} style={{lineHeight: '200%', marginLeft: '56%'}}>{intl.formatMessage({ id: "index6.producttrait" })}</div>
                                        <div className={styles.word_18}>
                                            <ul className={styles.ul3}>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7mwt.ul3.li1" })}</li>
                                              {intl.locale !== 'en' && <li className={styles.li_index2}>{intl.formatMessage({ id: "index7mwt.ul3.li2" })}</li>}
                                              {intl.locale !== 'en' && <li className={styles.li_index2}>{intl.formatMessage({ id: "index7mwt.ul3.li3" })}</li>}
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7mwt.ul3.li4" })}</li>
                                              {intl.locale !== 'en' && <li className={styles.li_index2}>{intl.formatMessage({ id: "index7mwt.ul3.li5" })}</li>}
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7mwt.ul3.li6" })}</li>
                                              {intl.locale !== 'en' && <li className={styles.li_index2}>{intl.formatMessage({ id: "index7mwt.ul3.li7" })}</li>}
                                              {intl.locale !== 'en' && <li className={styles.li_index2}>{intl.formatMessage({ id: "index7mwt.ul3.li8" })}</li>}
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "index7mwt.ul3.li9" })}</li>
                                              <li className={styles.li_index2}>{intl.formatMessage({ id: "index7mwt.ul3.li10" })}</li>
                                            </ul>
                                        </div>
                                    </div>
                              </div>
                      <div style={{marginLeft: '2%', marginTop: '1vh', clear: 'both'}}>
                        <span className={styles.word_24} style={{lineHeight: '200%'}}>{intl.formatMessage({ id: "index7sem.apply" })}</span>
<span  className={styles.li_index} style={{lineHeight: '200%'}}>&nbsp;&nbsp;{intl.formatMessage({ id: "index7mwt.applyintro" })}</span>
                      </div>
                  </div>
                      </div>

              </div>
              <div className="section">
                  {/* P7 */}
                  <Header {...this.props}/>
                  <div className={styles.back_top}>
                    <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                      <div className={styles.back_icon}>
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png').default} />
                      </div>
                      <div className={styles.backto} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>                    
                  </div>

                  <div className={styles.web_bg} style={{backgroundImage: `url(${require('../assets/bigimg/tr800webbg.jpg').default})` ,height: '96.8%', marginTop: '3.2%'}} />
                    <div className={styles.tr800_right}>
                        <div className={styles.descrip3} style={{textAlign:"right"}}  >                        
                            <div className={styles.word_24} style={{ display: 'inline-block',  width: '100%'}}>
                                {intl.formatMessage({ id: "index7.tr800" })}
                            </div>
                            <div style={{width:'100%', overflow: 'hidden'}}>
                                <div style={{width:'6rem',height:'.125rem',backgroundColor:'#ff6600',float: 'right'}} ></div>
                            </div>
                            <div className={styles.word_title} style={{whiteSpace: 'nowrap'}}>
                                {intl.formatMessage({ id: "index7.tr800descrip" })}
                            </div>                            
                        </div>
                        <div >
                          <p className={styles.Index} style={{    float: 'left',    marginTop: '-14%',    marginLeft: '105%'}} >05</p>
                        </div>                        
                    </div>  
              </div>
              <div className="section">
                  {/* P8 */}
                  <Header {...this.props}/>
                  <div className={styles.back_top}>
                    <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                      <div className={styles.back_icon}>
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png').default} />
                      </div>
                      <div className={styles.backto} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>                    
                  </div>

                    <div >
                      <div className={styles.tr800}>             
                      </div>
                      <div className={styles.web_bg} style={{backgroundImage: `url(${require('../assets/imgs/Index/tr800_02.jpg').default})`, height: '97.6%', marginTop: '2.4%' }} />
                      <div className={styles.tr800_info}>
                              <div className={styles.tr800_title}><p  className={styles.word_30}> {intl.formatMessage({ id: "p8.tr800" })}</p></div>
                                  <div className={styles.product_tr800}> 
                                          <div className={styles.tr800_function}>
                                          <div className={styles.word_24} style={{lineHeight: '200%'}}>{intl.formatMessage({ id: "index4.productfunc" })}</div>
                                          <div className={styles.word_18}>
                                              <ul className={styles.ul2}>
                                                  <li className={styles.li_index}>{intl.formatMessage({ id: "p8.ul2.li1" })}</li>
                                                  <li className={styles.li_index}>{intl.formatMessage({ id: "p8.ul2.li2" })}</li>
                                                  <li className={styles.li_index}>{intl.formatMessage({ id: "p8.ul2.li3" })}</li>
                                                  <li className={styles.li_index}>{intl.formatMessage({ id: "p8.ul2.li4" })}</li>    
                                              </ul>
                                          </div>                               
                                          </div>
                                          <div className={styles.tr800_apply}>
                                          <div className={styles.word_24} style={{lineHeight: '200%', marginLeft: '56%'}}>{intl.formatMessage({ id: "index4.productapply" })}</div>
                                          <div className={styles.word_18}>
                                              <ul className={styles.ul3}>
                                                  <li className={styles.li_index}>{intl.formatMessage({ id: "p8.ul3.li1" })}</li>
                                                  <li className={styles.li_index}>{intl.formatMessage({ id: "p8.ul3.li2" })}</li>
                                                  <li className={styles.li_index}>{intl.formatMessage({ id: "p8.ul3.li3" })}</li>
                                                  <li className={styles.li_index}>{intl.formatMessage({ id: "p8.ul3.li4" })}</li>                                
                                              </ul>   
                                          </div>                            
                                          </div>
                                  </div>
                              <div className={styles.product_text}><p className={styles.word_18}>{intl.formatMessage({ id: "p8.tr800intro" })}
                                  </p></div>
                      </div>
                      </div>          

              </div>
              <div className="section">
                  {/* P9 */}
                  <Header {...this.props}/>
                  <div className={styles.back_top}>
                    <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                      <div className={styles.back_icon}>
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png').default} />
                      </div>
                      <div className={styles.backto} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>                    
                  </div>

                    <div className={styles.tr600_left}>
                        <div className={styles.Index} style={{marginTop: '0%',marginLeft: '0%',float: 'left',    width: '11rem',    height: '11rem'}} >06</div>
     
                        <div className={styles.descrip04} style={{}}  >                        
                            <div className={styles.word_24}>
                                {intl.formatMessage({ id: "p9.tr600" })}
                            </div>
                            <div>
                                <div style={{width:'6rem',height:'.125rem',backgroundColor:'#ff6600'}} ></div>
                            </div>                                
                            <div className={styles.word_title} style={{width: '100%',lineHeight: '190%'}}>
                                {intl.formatMessage({ id: "p9.tr600intro" })}
                            </div>
                        </div>                                                                
                    </div>
                    <div className={styles.web_bg} style={{backgroundImage: `url(${require('../assets/bigimg/product04webbg.jpg').default})` ,height: '96.7%', marginTop: '3.3%'}} />
                    
              </div>
              <div className="section">
                  {/* P10 */}
                  <Header {...this.props}/>
                  <div className={styles.back_top}>
                    <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                      <div className={styles.back_icon}>
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png').default} />
                      </div>
                      <div className={styles.backto} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>
                  </div>

                  <div className={styles.tr600_container}>
                      <div className={styles.tr600} style={{backgroundImage: `url(${require('../assets/imgs/Index/tr600_02.png').default})`,backgroundPosition: 'center' }} >             
                      </div>
                      <div className={styles.tr600_info}>
                              <div className={styles.tr600_title}><p  className={styles.word_30}>{intl.formatMessage({ id: "p10.tr600" })}</p></div>
                                  <div className={styles.product_tr600}> 
                                          <div className={styles.tr600_function}>
                                          <div className={styles.word_24} style={{lineHeight: '200%'}}>{intl.formatMessage({ id: "index4.productfunc" })}</div>
                                          <div className={styles.word_18}>
                                              <ul className={styles.ul2}>
                                                  <li className={styles.li_index}>{intl.formatMessage({ id: "p10.ul2.li1" })}</li>
                                                  <li className={styles.li_index}>{intl.formatMessage({ id: "p10.ul2.li2" })}</li>
                                                  <li className={styles.li_index}>{intl.formatMessage({ id: "p10.ul2.li3" })}</li>
                                                  <li className={styles.li_index}>{intl.formatMessage({ id: "p10.ul2.li4" })}</li>    
                                              </ul>
                                          </div>                               
                                          </div>
                                          <div className={styles.tr600_apply}>
                                          <div className={styles.word_24} style={{lineHeight: '200%', marginLeft: '56%'}}>{intl.formatMessage({ id: "index4.productapply" })}</div>
                                          <div className={styles.word_18}>
                                              <ul className={styles.ul3}>
                                                  <li className={styles.li_index}>{intl.formatMessage({ id: "p10.ul3.li1" })}</li>
                                                  <li className={styles.li_index}>{intl.formatMessage({ id: "p10.ul3.li2" })}</li>
                                                  <li className={styles.li_index}>{intl.formatMessage({ id: "p10.ul3.li3" })}</li>
                                                  <li className={styles.li_index}>{intl.formatMessage({ id: "p10.ul3.li4" })}</li>                                
                                              </ul>   
                                          </div>                            
                                          </div>
                                  </div>
                              <div className={styles.product_text}><p className={styles.word_18}>{intl.formatMessage({ id: "p10.tr600descrip" })}
                                  </p></div>
                      </div>
                    </div>    
              </div>
              <div className="section">
                  {/* P11 */}
                  <Header {...this.props}/>
                  <div className="wrapper">
                    <div className={styles.web_bg}  style={{backgroundImage: `url(${require('../assets/imgs/Index/pms600_01.jpg').default})` ,zIndex:'0'}}>
                    <div className={styles.back_top}>
                      <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                        <div className={styles.back_icon}>
                            <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon_white.png').default} />
                        </div>
                        <div className={styles.backto_white} >                                  
                                <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                        </div>        
                      </button>
                    </div>
                        <div className={styles.descrip11} style={{float: 'right'}} >
                          <div className={styles.word_24} style={{color:'#ffffff'}}>
                                {intl.formatMessage({ id: "p11.pms600" })}
                          </div>
                              <div style={{width:'6rem',height:'.125rem',backgroundColor:'#ff6600'}} ></div>
                          <div className={styles.word_title} style={{lineHeight: '190%'}}>
                                {intl.formatMessage({ id: "p11.pms600intro" })}
                        </div>
                        <div style={{}}>
                          <p className={styles.Index} style={{  marginTop: '0',marginLeft: '25rem'}} >07</p>
                        </div>
                      </div>
                    </div>
                  </div>

              </div>
              <div className="section">
                  {/* P12 */}
                  <Header {...this.props}/>
                  <div className={styles.back_top}>
                    <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                      <div className={styles.back_icon}>
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png').default} />
                      </div>
                      <div className={styles.backto} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>
                  </div>

                  <div className={styles.pms600_container}>
                    <div className={styles.pms600} >
                        <img src={require('../assets/imgs/Index/pms600_02.png').default} />
                        {/* <p className={styles.productname}>{intl.formatMessage({ id: "p12.cpjh" })}</p> */}
                    </div>
                    <div className={styles.pms600_info}>
                            <div className={styles.pms600_title}><p  className={styles.word_30}>{intl.formatMessage({ id: "p11.pms600" })}</p></div>
                                <div className={styles.product_pms600}> 
                                        <div className={styles.pms600_function}>
                                        <div className={styles.word_24} style={{lineHeight: '200%'}}>{intl.formatMessage({ id: "index4.productfunc" })}</div>
                                        <div className={styles.word_18}>
                                            <ul className={styles.ul2}>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "p12.ul2.li1" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "p12.ul2.li2" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "p12.ul2.li3" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "p12.ul2.li4" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "p12.ul2.li5" })}</li>   
                                            </ul>
                                        </div>                               
                                        </div>
                                        <div className={styles.pms600_apply}>
                                        <div className={styles.word_24} style={{lineHeight: '200%', marginLeft: '56%'}}>{intl.formatMessage({ id: "index4.productapply" })}</div>
                                        <div className={styles.word_18}>
                                            <ul className={styles.ul3}>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "p12.ul3.li1" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "p12.ul3.li2" })}</li>
                                                <li className={styles.li_index}>{intl.formatMessage({ id: "p12.ul3.li3" })}</li>
                                            </ul>   
                                        </div>                            
                                        </div>
                                </div>
                            <div className={styles.product_text}><p className={styles.word_18}> {intl.formatMessage({ id: "p12.pms600descrip" })}
                                </p></div>
                    </div>
                  </div>

              </div>
              <div className="section">
                  {/* P13 */}
                  <Header {...this.props}/>
                  <div className={styles.back_top}>
                    <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                      <div className={styles.back_icon}>
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon_white.png').default} />
                      </div>
                      <div className={styles.backto_white} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>
                  </div>
                  
                  <div className="wrapper">
                    <div className={styles.web_bg}  style={{backgroundImage: `url(${require('../assets/imgs/Index/sc800d_01.jpeg').default})` }}>
                      <div style={{}}>
                          <p className={styles.Index} style={{marginTop: '15%', marginRight: '2.5rem',marginLeft: '2.5rem'}} >08</p>
                      </div>

                      <div className={styles.descrip06} style={{float:"left"}}  >

                          <div className={styles.word_24}>
                                {intl.formatMessage({ id: "p13.sc800d" })}
                          </div>
                              <div style={{width:'6rem',height:'.125rem',backgroundColor:'#ff6600'}} ></div>
                          <div className={styles.word_title} style={{lineHeight: '190%'}}>
                                {intl.formatMessage({ id: "p13.sc800dintro" })}
                          </div>
                      </div>
                    </div>
                  </div>

              </div>
              <div className="section">
                  {/* P14 */}
                  <Header {...this.props}/>
                  <div className={styles.back_top}>
                    <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                      <div className={styles.back_icon}>
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png').default} />
                      </div>
                      <div className={styles.backto} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>
                  </div>

                  <div className={styles.sc600_container}>
                    <div className={styles.sc600_box} style={{height: '90vh'}}>
                        <div className={styles.sc600} style={{display: 'flex', alignItems: 'center', height: '100%', marginTop: '0', marginLeft: '6%'}} >
                            <img style={{height: '38vh', flexShrink: 0, objectFit: 'contain'}} src={require('../assets/imgs/Index/sc600_02_left.png').default} />
                            <img style={{height: '34vh', marginLeft: '2%', flexShrink: 0, objectFit: 'contain'}} src={require('../assets/imgs/Index/sc800d_02.png').default} />
                        </div>
                    </div>
                  <div className={styles.sc600_info} style={{height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                          <div className={styles.sc600_title}><p  className={styles.word_30}>{intl.formatMessage({ id: "p13.sc800d" })}</p></div>
                              <div className={styles.product_sc600}> 
                                      <div className={styles.sc600_function}>
                                      <div className={styles.word_24} style={{lineHeight: '200%'}}>{intl.formatMessage({ id: "index4.productfunc" })}</div>
                                      <div className={styles.word_18}>
                                          <ul className={styles.ul2}>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "p14.ul2.li1" })}</li>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "p14.ul2.li2" })}</li>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "p14.ul2.li3" })}</li>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "p14.ul2.li4" })}</li>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "p14.ul2.li5" })}</li>  
                                          </ul>
                                      </div>                               
                                      </div>
                                      <div className={styles.sc600_apply}>
                                      <div className={styles.word_24} style={{lineHeight: '200%', marginLeft: '56%'}}>{intl.formatMessage({ id: "index4.productapply" })}</div>
                                      <div className={styles.word_18}>
                                          <ul className={styles.ul3}>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "p14.ul3.li1" })}</li>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "p14.ul3.li2" })}</li> 
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "p14.ul3.li3" })}</li>
                                              <li className={styles.li_index}>{intl.formatMessage({ id: "p14.ul3.li4" })}</li>                               
                                          </ul>   
                                      </div>                            
                                      </div>
                              </div>
                          <div className={styles.product_text}><p className={styles.word_18}>{intl.formatMessage({ id: "p14.sc600descrip" })}
                              </p></div>
                  </div>
                  </div>

              </div>
              <div className="section">
                  {/* P15 */}
                  <Header {...this.props}/>
                  <div className={styles.back_top}>
                    <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                      <div className={styles.back_icon}>
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png').default} />
                      </div>
                      <div className={styles.backto} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>
                  </div>


                  <div className={styles.yjy_box} style={{height: (intl.locale !== "en") ? '72vh':'85vh'}}>
                      <div className={styles.yjy} > 
                          <img style={{width: '100%',    maxHeight: '99%',  backgroundSize: 'cover',    paddingTop: '1%'}} src={(intl.locale !== "en") ? require('../assets/bigimg/yjy.jpg').default : require('../assets/imgs/Index/yjy_en.png').default} />            
                      </div>
                  </div>

                  <div className={styles.yjy_info} style={{height: (intl.locale !== "en") ? '20vh':'0vh'}}>
                      <div>
                        <p className={styles.product_p}>
                          {intl.formatMessage({ id: "p15.yjydescrip" })}
                        </p>
                      </div> 
                  </div>
                  
              </div>
              <div className="section">
                 {/* P16 */}
                 <Header {...this.props}/>
                  <div className={styles.back_top}>
                    <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                      <div className={styles.back_icon}>
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png').default} />
                      </div>
                      <div className={styles.backto} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>
                  </div>

                    <div className={styles.footer_bottom}>
                    <h2 className={styles.news_title}>{intl.formatMessage({ id: "p16.news" })}</h2>
                    <div className={styles.news}>          
                      <div className={styles.left}>
                        <Slider {...newsSlick}>
                          {newsList.map((n, i) =>
                            <Link className={styles.news_a} key={n.id + i} to={`/news/newsdetail#${n.id}`}>
                              <img referrerPolicy="no-referrer" src={resolveImg(n.src)}/>
                            </Link>,
                          )}
                        </Slider>
                      </div>
                      <div className={styles.right}>
                        {newsList.map(n =>
                          <div key={n.id}><h3><Link to={`/news/newsdetail#${n.id}`}>{n.title}</Link></h3><span>{n.time}</span><p>{n.cnt}</p></div>,
                        )}
                      </div>   
                      <div className={styles.button}><Link to={'/news'}>更多动态 <img src={require('../assets/imgs/Index/more.png').default}
                                                                                alt=""/></Link></div>       
                    </div>
                    <div className={styles.lowright}>
                        <dl className="about_wrap">
                            <dd className={styles.about} ><Link to="/contact/" style={{color:'black',borderBottomStyle: 'groove'}}>{intl.formatMessage({ id: "p16.contact" })}</Link></dd>
                            <dd className={styles.about2} ><Link to="/recruit/" style={{color:'black',borderBottomStyle: 'groove'}}>{intl.formatMessage({ id: "p16.jobs" })}</Link></dd>
                            <dt className={styles.qrcode}><img alt={'微信二维码'} src={require('../assets/imgs/qrcode.png').default}/></dt>
                            <dd className={styles.about3} style={{color:'black'}}>{intl.formatMessage({ id: "p16.wechat" })}</dd>
                          </dl>
                      </div>
                  </div>

              </div>
            </div>
          );
        }}
      />    
    );
  }
}



export default injectIntl(Index);
