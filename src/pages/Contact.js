import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import styles from './Contact.module.scss';
import { useIntl,injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

export default @injectIntl class Contact extends React.Component {
  // componentDidMount() {
  //   let opt = {
  //     id: 'map',
  //     title: { text: '美德远健（北京）医疗系统科技有限公司', className: 'title' },
  //     content: { className: 'content', text: ['地址：北京市海淀区永丰屯538号3号楼211'] },
  //     point: { lng: '116.231473', lat: '40.078212' },
  //     level: 15,
  //     zoom: true,
  //     type: ['地图', '卫星'],
  //     width: 320,
  //     height: 70,
  //     icon: { url: require('../assets/imgs/icon.png'), width: 36, height: 36 },
  //   };
  //   const {BMap,BMAP_SATELLITE_MAP,BMAP_NORMAL_MAP} = window;
  //   let map = new BMap.Map(opt.id);
  //   let p = new BMap.Point(opt.point.lng, opt.point.lat);
  //   map.centerAndZoom(p, opt.level);
  //   map.addControl(new BMap.NavigationControl());
  //   map.addControl(new BMap.ScaleControl());
  //   map.addControl(new BMap.OverviewMapControl());
  //   map.enableScrollWheelZoom(true);
  //   map.addControl(new BMap.MapTypeControl({ mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP] }));
  //   new BMap.Marker(opt.point);
  //   let m = new BMap.Marker(opt.point, { icon: new BMap.Icon(opt.icon.url, new BMap.Size(opt.icon.width, opt.icon.height)) });
  //   map.addOverlay(m);
  //   let msg = '<div class="content">地址：北京市海淀区永丰屯538号3号楼211</div>';
  //   let infoWindow = new BMap.InfoWindow(msg, {
  //     width: opt.width || 0,
  //     height: opt.height || 0,
  //     title: '<div class="' + opt.title.className + '">' + opt.title.text + '</div>',
  //   });
  //   map.addEventListener('click', function() {
  //     infoWindow.isOpen() || map.openInfoWindow(infoWindow, p);
  //   });
  //   map.openInfoWindow(infoWindow, p);
  // }

  render() {
    let {intl} = this.props;
    return (
      <div>
        <div className={styles.banner} style={{
          background: `url(${require('../assets/imgs/Contact/banner.png')}) no-repeat`,
          backgroundSize: '100% auto',
        }}>
          {/* <p>联系我们</p> */}
        </div>
        <div className={styles.contact}>
          <div className={styles.contact_head}>
            <p className={styles.title}><FormattedMessage id="contact.title" /></p>
            <Breadcrumb location={this.props.location}/>
          </div>
          {/* <div className={styles.map_wrap}>
            <div id="map" className={styles.container}/>
            <div className={styles.mes}><h3>美德远健（北京）医疗系统科技有限公司</h3>
              <p>地址：北京市海淀区永丰屯538号3号楼211<br/>邮箱：contact@madecare.com<br/>电话：010-53381056</p><h4>微信公众号</h4><img
                src={require('../assets/imgs/Contact/qrcode.png')} alt=""/></div>
            </div>
          </div> */}
          <div className={styles.contact_wrap}>
            <div className={styles.container}>
                  <div className={styles.map}>
                    <div className={styles.earth} style={{}}>
                        <img style={{width: '96%',marginTop:'3%'}} src={require('../assets/imgs/Contact/contact.png')} alt=""/>
                    </div>
                  </div>
                  <div className={styles.address}>
                    <div className={styles.address_wrap}>
                      <div className={styles.content}>
                        <p className={styles.word_18} style={{}}><FormattedMessage id="contact.comtitle1" /></p>
                        <br/>
                        <p className={styles.word_14}><FormattedMessage id="contact.comaddr1" /></p>
                        <br/>
                        <p className={styles.word_18}><FormattedMessage id="contact.comtitle2" /></p>
                        <br/>
                        <p className={styles.word_14}><FormattedMessage id="contact.comaddr2" defaultMessage="Address：3-211 NO538 YONGFENGTUN HAIDIAN DISTRICT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; BEIJING CHINA10094" /></p>
                        <br/>
                      </div>
                      <div className={styles.foot_bottom}>
                        <p className={styles.word_18} style={{fontSize:(intl.locale !== "en") ? '1.125rem':'.875rem'}} ><FormattedMessage id="contact.comtitle3" /></p>
                        <br/>                      
                        <p className={styles.word_14}><FormattedMessage id="contact.comaddr3" /></p>
                        <br/>
                      </div>
                    </div>
                  </div>
                  <div className={styles.mes}>
                      <div className={styles.mes_wrap}>
                          <div className={styles.qrcode} >
                            <img style={{width:(intl.locale !== "en") ? '50%':'61%',marginTop: (intl.locale !== "en") ? '0%':'22%'}} src={require('../assets/imgs/Contact/qrcode.png')} alt=""/>
                            <p className={styles.word_14} style={{marginLeft: '14%', lineHeight: '250%',display:(intl.locale !== "en") ? 'block':'none'}}><FormattedMessage id="contact.wechat" /></p>
                            <div className={styles.contact_text} style={{display:(intl.locale !== "en") ? 'block':'none'}}>                              
                              <p className={styles.word_14}><FormattedMessage id="contact.tel" /><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
															<FormattedMessage id="contact.fixedl" /><br/><FormattedMessage id="contact.email" /><br/><FormattedMessage id="contact.website" /></p>
                            </div>
                            <div className={styles.contact_text2} style={{display:(intl.locale !== "en") ? 'none':'block'}}>                              
                              <p style={{textAlign:'center'}}>wechat</p>
                            </div>
                          </div>                          
                      </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
    );
  }
}
