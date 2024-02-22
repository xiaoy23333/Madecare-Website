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
import { NEWS_ABSTRACT } from '../config';
import VideoBg from '../components/VideoBg/VideoBg';
import poster from "../assets/imgs/Index/video_cover.jpeg";
import Header from '../components/Header';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import { LANGS} from '../config';



export default @injectIntl class Index extends React.Component {
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
		document.title = "美德远健官网";
		const meta = document.createElement('meta');
		meta.content = 'never';
		meta.name = 'referrer';
		console.log(document.getElementsByTagName('head'))
		document.getElementsByTagName('head')[0].appendChild(meta);
	}
	
  render({...rest }) {
    // console.log(rest);
    // console.log("&&^*")

    // { state, fullpageApi }

    let {intl} = this.props;
    // console.log('index-intl',intl);
    
    const newsSlick = {
      dots: true,
      infinite: true,
      speed: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const anchors = ["1", "2", "3","4","5","6","7","8","9","10","11","12","13","14","15","16"];

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
                    <VideoBg.Source src={require('../assets/mp4/2k-ffa96772cabead64113b654f2b13bf01.mp4')} />
                </VideoBg>
              </div>
              <div className="section">
                  {/* P2 */}
                  <div className={styles.sfy_container}>
                    <Header {...this.props}/>
                    <div className={styles.sfy_row}>
                          <div className={styles.sfy_left} >
                              {/* <div className={styles.sfy_left_banner}> */}
                                  <img className={styles.images_left} src={require('../assets/imgs/Index/overview/00.png')} />             
                                  {/* <div style={{paddingLeft: '14.75rem',display: 'block'}}></div> */}      
                                                  
                                  {/*
                                  <p className={styles.cpzs_left2}>
                                                                </p> */}
                              {/* </div> */}
                          </div>
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
                                <div className={styles.images_a} >
                                    <img src={require('../assets/imgs/Index/overview/a.png')} />
                                </div>
                                <div className={styles.product1} >
                                    <div style={{    height: '86%'}}  >
                                        <img  style={{marginTop:'-25%'}} src={require('../assets/imgs/Index/overview/001.png')} />
                                    </div>
                                    <div className={styles.cpzs_left1} >
                                      <button className={styles.button_style} onClick={() => fullpageApi.moveTo(11, 0)}> {intl.formatMessage({ id: "cpzs.left1" })}</button>
                                    </div>
                                </div>
                                <div className={styles.product2} >
                                      <div style={{    height: '89%'}} >
                                          <img className={styles.images_middle} src={require('../assets/imgs/Index/overview/01.png')} />   
                                      </div>                                 
                                      <div className={styles.kfzy1} >
                                          <button className={styles.button_style} onClick={() => fullpageApi.moveTo(7, 0)}>{intl.formatMessage({ id: "cpzs.kfzy1" })}</button>
                                      </div>
                                </div>
                                <div className={styles.product3} >
                                      <div style={{    height: '89%'}}  >
                                          <img className={styles.images} src={require('../assets/imgs/Index/overview/02.png')} />   
                                      </div>                         
                                      <div className={styles.sfy_right_xzkf} style={{}}>
                                          <button className={styles.button_style} onClick={() => fullpageApi.moveTo(3, 0)}><span className={styles.word_20}>{intl.formatMessage({ id: "cpzs.xzkf"})}</span></button>
                                      </div> 
                                </div>
                          </div>
                          <div className={styles.sfy_product2} >
                                <div className={styles.images_a} >
                                    <img   style={{    }}   src={require('../assets/imgs/Index/overview/a.png')} />
                                </div>
                                <div className={styles.product1} >
                                    <div style={{height: '89%',marginTop:'0%'}} >
                                      <img src={require('../assets/imgs/Index/overview/03.png')} />
                                    </div>
                                    <div className={styles.cpzs_left1} style={{bottom: '0%'}}>
                                      <button className={styles.button_style} onClick={() => fullpageApi.moveTo(13, 0)}> {intl.formatMessage({ id: "cpzs.left2" })} </button>
                                    </div>
                                </div>
                                <div className={styles.product2} >
                                      <div style={{    height: '90%'}}   >
                                          <img  className={styles.images_small} src={require('../assets/imgs/Index/overview/06.png')} />     
                                      </div>                               
                                      <div className={styles.kfzy1} >
                                      <button className={styles.button_style} onClick={() => fullpageApi.moveTo(9, 0)}>{intl.formatMessage({ id: "cpzs.kfzy2" })}</button>
                                      </div>
                                </div>
                                <div className={styles.product3} >
                                      <div style={{    height: '90%'}}   >
                                            <img   className={styles.images} src={require('../assets/imgs/Index/overview/04.png')} />                
                                      </div>            
                                      <div className={styles.sfy_right_xzkf} style={{}}>
                                      <button className={styles.button_style} onClick={() => fullpageApi.moveTo(5, 0)}><span className={styles.word_20}>{intl.formatMessage({ id: "cpzs.cpx"})}</span></button>
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
                                    <img className={styles.images_middle} src={require('../assets/imgs/Index/overview/01.png')} />                                    
                                    <p className={styles.kfzy1} >
                                    <button className={styles.button_style} onClick={() => fullpageApi.moveTo(7, 0)}>{intl.formatMessage({ id: "cpzs.kfzy1" })}</button>
                                    </p>
                                </div>                               
                                <div className={styles.middle2} >
                                    <img className={styles.images_small} src={require('../assets/imgs/Index/overview/06.png')} />
                                    <p className={styles.kfzy2} >
                                    <button className={styles.button_style} onClick={() => fullpageApi.moveTo(9, 0)}>{intl.formatMessage({ id: "cpzs.kfzy2" })}</button>
                                    </p>                                    
                                </div>
                              </div>
                          </div>
                          <div className={styles.sfy_right}>	
                            <img className={styles.images} src={require('../assets/imgs/Index/overview/02.png')} />                            
                                <p className={styles.sfy_right_xzkf} style={{}}>
                                <button className={styles.button_style} onClick={() => fullpageApi.moveTo(3, 0)}><span className={styles.word_20}>{intl.formatMessage({ id: "cpzs.xzkf"})}</span></button>
                                </p> 
                            <img className={styles.images2} src={require('../assets/imgs/Index/overview/04.png')} />
                            
                              <p className={styles.sfy_right_cpx} style={{color:'#333333',width: '100%',textAlign:'center', marginTop: '-1%' }}>
                              <button className={styles.button_style}  onClick={() => fullpageApi.moveTo(5, 0)}><span className={styles.word_20}>{intl.formatMessage({ id: "cpzs.cpx" })}</span></button>
                              </p>                            
                          </div>                     */}
                    </div>

                    <div className={styles.sfy_bottom} >
                          <div className={styles.images_bottom}  style={{backgroundSize:'100%',backgroundPosition:'center',backgroundRepeat:'no-repeat',
                                backgroundImage: `url(${require('../assets/imgs/Index/group2.png')}) `,
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
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png')} />
                      </div>
                      <div className={styles.backto} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>                   
                  </div>

                  <div className="wrapper">
                    <div className={styles.web_bg}  style={{backgroundImage: `url(${require('../assets/imgs/Index/dws1000_1.png')})` }}>
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
                          <img alt="美德远健" style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png')} />
                      </div>
                      <div className={styles.backto} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>
                  </div>
                  
                  <div className={styles.web_bg} style={{backgroundImage: `url(${require('../assets/bigimg/dws1000webbg.png')})` }} />

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
                                            <div className={styles.word_24} style={{lineHeight: '200%'}}>{intl.formatMessage({ id: "index4.productapply" })}</div>
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
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png')} />
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
                      <img style={{Width: '75%'}} src={require('../assets/imgs/Index/cpx_01.png')} />
                  </div>

              </div>
              <div className="section">
                  {/* P6 */}
                  <Header {...this.props}/>
                  <div className={styles.back_top}>
                    <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                      <div className={styles.back_icon}>
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png')} />
                      </div>
                      <div className={styles.backto} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>                    
                  </div>

                    <div className={styles.cpx_container}>
                      <div className={styles.cpx} >    
                          <img src={require('../assets/imgs/Index/cpx_02.png')} />
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
                                        <div className={styles.word_24} style={{lineHeight: '200%'}}>{intl.formatMessage({ id: "index6.producttrait" })}</div>
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

                      </div>
                      <div style={{float: 'left', marginLeft: '2%',marginTop: '1vh'}}>
                        <span className={styles.word_24} style={{lineHeight: '200%'}}>{intl.formatMessage({ id: "index6.apply" })}</span>
                        <span  className={styles.li_index} style={{lineHeight: '200%'}}>&nbsp;&nbsp;{intl.formatMessage({ id: "index6.applyintro" })}</span>     
                      </div>      
                  </div>          

              </div>
              <div className="section">
                  {/* P7 */}
                  <Header {...this.props}/>
                  <div className={styles.back_top}>
                    <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                      <div className={styles.back_icon}>
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png')} />
                      </div>
                      <div className={styles.backto} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>                    
                  </div>

                  <div className={styles.web_bg} style={{backgroundImage: `url(${require('../assets/bigimg/tr800webbg.jpg')})` ,height: '96.8%', marginTop: '3.2%'}} />
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
                          <p className={styles.Index} style={{    float: 'left',    marginTop: '-14%',    marginLeft: '105%'}} >03</p>
                        </div>                        
                    </div>  
              </div>
              <div className="section">
                  {/* P8 */}
                  <Header {...this.props}/>
                  <div className={styles.back_top}>
                    <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                      <div className={styles.back_icon}>
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png')} />
                      </div>
                      <div className={styles.backto} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>                    
                  </div>

                    <div >
                      <div className={styles.tr800}>             
                      </div>
                      <div className={styles.web_bg} style={{backgroundImage: `url(${require('../assets/imgs/Index/tr800_02.jpg')})`, height: '97.6%', marginTop: '2.4%' }} />
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
                                          <div className={styles.word_24} style={{lineHeight: '200%'}}>{intl.formatMessage({ id: "index4.productapply" })}</div>
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
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png')} />
                      </div>
                      <div className={styles.backto} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>                    
                  </div>

                    <div className={styles.tr600_left}>
                        <div className={styles.Index} style={{marginTop: '0%',marginLeft: '0%',float: 'left',    width: '11rem',    height: '11rem'}} >04</div>
     
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
                    <div className={styles.web_bg} style={{backgroundImage: `url(${require('../assets/bigimg/product04webbg.jpg')})` ,height: '96.7%', marginTop: '3.3%'}} />
                    
              </div>
              <div className="section">
                  {/* P10 */}
                  <Header {...this.props}/>
                  <div className={styles.back_top}>
                    <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                      <div className={styles.back_icon}>
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png')} />
                      </div>
                      <div className={styles.backto} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>
                  </div>

                  <div className={styles.tr600_container}>
                      <div className={styles.tr600} style={{backgroundImage: `url(${require('../assets/imgs/Index/tr600_02.png')})`,backgroundPosition: 'center' }} >             
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
                                          <div className={styles.word_24} style={{lineHeight: '200%'}}>{intl.formatMessage({ id: "index4.productapply" })}</div>
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
                    <div className={styles.web_bg}  style={{backgroundImage: `url(${require('../assets/imgs/Index/pms600_01.jpg')})` ,zIndex:'0'}}>
                    <div className={styles.back_top}>
                      <button className={styles.back_button_style} onClick={() => {fullpageApi.moveTo(1, 0);var s = document.getElementsByTagName("video")[0];s.play();}}>
                        <div className={styles.back_icon}>
                            <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon_white.png')} />
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
                          <p className={styles.Index} style={{  marginTop: '0',marginLeft: '25rem'}} >05</p>
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
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png')} />
                      </div>
                      <div className={styles.backto} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>
                  </div>

                  <div className={styles.pms600_container}>
                    <div className={styles.pms600} >
                        <img src={require('../assets/imgs/Index/pms600_02.png')} />
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
                                        <div className={styles.word_24} style={{lineHeight: '200%'}}>{intl.formatMessage({ id: "index4.productapply" })}</div>
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
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon_white.png')} />
                      </div>
                      <div className={styles.backto_white} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>
                  </div>
                  
                  <div className="wrapper">
                    <div className={styles.web_bg}  style={{backgroundImage: `url(${require('../assets/imgs/Index/sc600_01.jpg')})` }}>
                      <div style={{}}>
                          <p className={styles.Index} style={{marginTop: '15%', marginRight: '2.5rem',marginLeft: '2.5rem'}} >06</p>
                      </div>

                      <div className={styles.descrip06} style={{float:"left"}}  >

                          <div className={styles.word_24} style={{color:'#ffffff'}}>
                                {intl.formatMessage({ id: "p13.sc600" })}
                          </div>
                              <div style={{width:'6rem',height:'.125rem',backgroundColor:'#ff6600'}} ></div>
                          <div className={styles.word_title} style={{lineHeight: '190%'}}>
                                {intl.formatMessage({ id: "p13.sc600intro" })}
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
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png')} />
                      </div>
                      <div className={styles.backto} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>
                  </div>

                  <div className={styles.sc600_container}>
                    <div className={styles.sc600_box}>
                        <div className={styles.sc600} >  
                            <img style={{width: '100%'}} src={require('../assets/imgs/Index/sc600_02.png')} />     
                            {/* <p className={styles.productname}>{intl.formatMessage({ id: "p14.zndn" })}</p>       */}
                        </div>
                    </div>
                  <div className={styles.sc600_info}>
                          <div className={styles.sc600_title}><p  className={styles.word_30}>{intl.formatMessage({ id: "p13.sc600" })}</p></div>
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
                                      <div className={styles.word_24} style={{lineHeight: '200%'}}>{intl.formatMessage({ id: "index4.productapply" })}</div>
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
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png')} />
                      </div>
                      <div className={styles.backto} >                                  
                              <p className={styles.word_16} >{intl.formatMessage({ id: "backtop" })}</p>                                                                        
                      </div>        
                    </button>
                  </div>


                  <div className={styles.yjy_box} style={{height: (intl.locale !== "en") ? '72vh':'85vh'}}>
                      <div className={styles.yjy} > 
                          <img style={{width: '100%',    maxHeight: '99%',  backgroundSize: 'cover',    paddingTop: '1%'}} src={(intl.locale !== "en") ? require('../assets/bigimg/yjy.jpg') : require('../assets/imgs/Index/yjy_en.png')} />            
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
                          <img style={{width: '48%',marginBottom: '9%'}} src={require('../assets/imgs/Index/back_icon.png')} />
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
                          {NEWS_ABSTRACT.map(({ src, to }, i) =>
                            <Link className={styles.news_a} key={i} to={to}>
                              <img src={src}/>
                            </Link>,
                          )}
                        </Slider>
                      </div>
                      <div className={styles.right}>
                        {NEWS_ABSTRACT.map(({ title, time, cnt, to }) =>
                          <div key={title}><h3><Link to={to}>{title}</Link></h3><span>{time}</span><p>{cnt}</p></div>,
                        )}
                      </div>   
                      <div className={styles.button}><Link to={'/news'}>更多动态 <img src={require('../assets/imgs/Index/more.png')}
                                                                                alt=""/></Link></div>       
                    </div>
                    <div className={styles.lowright}>
                        <dl className="about_wrap">
                            <dd className={styles.about} ><Link to="/contact/" style={{color:'black',borderBottomStyle: 'groove'}}>{intl.formatMessage({ id: "p16.contact" })}</Link></dd>
                            <dd className={styles.about2} ><Link to="/recruit/" style={{color:'black',borderBottomStyle: 'groove'}}>{intl.formatMessage({ id: "p16.jobs" })}</Link></dd>
                            <dt className={styles.qrcode}><img alt={'微信二维码'} src={require('../assets/imgs/qrcode.png')}/></dt>
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


