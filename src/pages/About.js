import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import styles from './About.module.scss';
import Tab from '../components/Tab';
import { useIntl,injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

export default class About extends React.Component {
  _renderProfile() {
    // let imgs = [
    //   require('../assets/imgs/About/company-1.jpg'),
    //   require('../assets/imgs/About/company-2.jpg'),
    //   require('../assets/imgs/About/company-3.jpg'),
    //   require('../assets/imgs/About/company-4.jpg'),
    //   require('../assets/imgs/About/company-5.jpg'),
    //   require('../assets/imgs/About/company-6.jpg'),
    // ];
    return (
      <div className={styles.tab_panel}>
        <div className={styles.left}>
            <img className={styles.profile} src={require('../assets/imgs/About/intro.png')}/>
        </div>
        <div className={styles.profile_text}>
            <p className={styles.cq}>
            <FormattedMessage id="about.profiledescrip" />
            </p>
        </div>

      </div>
    );
  }

  _renderTeam() {
    return (
      <div className={styles.tab_panel}>
        <div className={styles.left}>
          <img className={styles.profile} src={require('../assets/imgs/About/team.png')}/>
        </div>
        <div className={styles.media_body2}>
          <p className={styles.cq} style={{marginTop:0}}>
            <FormattedMessage id="about.teamdescrip1" />
            <br />
            <FormattedMessage id="about.teamdescrip2" />
            </p>
        </div>
      </div>
    );
  }

  _renderWish() {
    // const goals = [
    //   '我们的目标',
    //   '一个聚焦于老年人康复护理、具有细分领域竞争优势的专业化公司;',
    //   '一个具有移动互联网基因、以大数据为核心、极具创新精神的高科技公司;',
    //   '一个强调产品疗效、易用性、品质、智能化的，有口碑的、可信赖的业内知名公司;',
    //   '一个有商业模式优势、盈利能力、研发/生产/营销/资本运作一体化的高成长公司;',
    //   '一个具有高效运作流程的、国际视野的全球化公司',
    // ];
    return (
      <div className={styles.tab_panel}>
        <div className={styles.left}>
          <img className={styles.profile} src={require('../assets/imgs/About/wish.png')}/>
        </div>
        <div className={styles.media_body} style={{width: '58%',  marginLeft: '2%'}}>
            <p className={styles.cq} style={{marginTop:0, marginLeft: '11%'}}>
            <span style={{color:"#025361",textIndent:'0'}}><FormattedMessage id="about.visiondescrip1" /></span><br/>
            <br/>
            <FormattedMessage id="about.visiondescrip2" /><br/>
              <ul>
                  <li className={styles.li_index}><FormattedMessage id="about.visiondescrip3" /><br/></li>
                  <li className={styles.li_index}><FormattedMessage id="about.visiondescrip4" /><br/></li>
                  <li className={styles.li_index}><FormattedMessage id="about.visiondescrip5" /><br/></li>
                  <li className={styles.li_index}><FormattedMessage id="about.visiondescrip6" /><br/></li>
                  <li className={styles.li_index}><FormattedMessage id="about.visiondescrip7" /><br/></li>
              </ul>
            </p>
          {/* <div className={styles.cq}>
            {goals.map(txt => <p key={txt}>{txt}<br/></p>)}
          </div> */}
        </div>
      </div>
    );
  }

  _renderMission() {
    return (
      <div className={styles.tab_panel}>
        <div className={styles.mission_intro}>
            <p className={styles.cq} style={{marginTop:0}}>
            <span style={{color:"#025361",textIndent:'0'}}><FormattedMessage id="about.missiondescrip1" /></span><br />
            <br />
            <FormattedMessage id="about.missiondescrip2" /><br />
            <FormattedMessage id="about.missiondescrip3" />
            </p>
        </div>
        <div className={styles.right}>
          <img className={styles.mission_img} src={require('../assets/imgs/About/mission.png')}/>
        </div>
      </div>
    );
  }

  _renderCulture() {
    let datas = [
      {
        src: require('../assets/imgs/About/culture-1.png'),
        // title: '核心价值',
        items: [
          { name: <FormattedMessage id="about.culturedescrip1" />, txt: <FormattedMessage id="about.culturedescrip4" /> },
          { name: <FormattedMessage id="about.culturedescrip2" />, txt: <FormattedMessage id="about.culturedescrip5" /> },
          { name: <FormattedMessage id="about.culturedescrip3" />, txt: <FormattedMessage id="about.culturedescrip6" /> },
        ],
      },
      // {
      //   src: require('../assets/imgs/About/culture-2.png'),
      //   title: '行为准则',
      //   items: [
      //     { name: '结果导向', txt: '从结果出发制定计划指导行动。' },
      //     { name: '守诺奉献', txt: '说到做到，积累信誉，建立信任。' },
      //     { name: '团队合作', txt: '团队目标优先、顾全大局、不袖手旁观。' },
      //     { name: '透明运作', txt: '计划要清楚、沟通要有效、执行要到位，不掩盖问题、 不粉饰错误。' },
      //     { name: '集思广益', txt: '善于思考、勤于提出见解、建设性讨论、就事论事。' },
      //     { name: '快速成长', txt: '勤于学习，敢挑担子，跟随公司成长，推动公司发展。' },
      //   ],
      // },
    ];
    return (
      <div className={styles.tab_panel}>
        {datas.map(({ src, title, items }) => (
          <div className={styles.box}>
            <div className={styles.culture_img}>
              <img src={src} alt=""/>
            </div>
            <div className={styles.core}>
              <div>
                <p>
                  <div style={{float: 'left',  width: '10%'}}><span><FormattedMessage id="about.culturedescrip1" /></span> </div>
                  <div  style={{float: 'left',  width: '89%'}}><FormattedMessage id="about.culturedescrip4" /></div><br />
                  <div style={{float: 'left',  width: '10%'}}><span><FormattedMessage id="about.culturedescrip2" /></span> </div>
                  <div  style={{float: 'left',  width: '89%'}}><FormattedMessage id="about.culturedescrip5" /></div><br />
                  <div className={styles.abculture3} style={{float: 'left',  width: '10%'}}><span><FormattedMessage id="about.culturedescrip3" /></span> </div>
                  <div  style={{float: 'left',  width: '89%'}}><FormattedMessage id="about.culturedescrip6" /></div><br />
                </p>
              </div>
            </div>

            {/* <div className={styles.core}>     
              <div>
                <p>
                  {items.map(({ name, txt }) => (
                    <><div style={{float: 'left',  width: '10%'}}><span>{name}</span> </div><div  style={{float: 'left',  width: '89%'}}>{txt}</div><br/></>
                  ))}
                </p>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className={styles.content_bg}
             style={{
               background: `url(${require('../assets/imgs/About/banner.png')}) no-repeat`, backgroundSize: '100% auto',
             }}>
               <div className={styles.banner_title}>数据引领 智能康护</div>
        </div>             
        <div className={styles.about_us}><h2 className={styles.title}><FormattedMessage id="about.aboutus" /></h2>
          <Breadcrumb location={this.props.location}/>
          <div className={styles.wrap}>
            <Tab names={[<FormattedMessage id="about.profile" />, <FormattedMessage id="about.team" />, <FormattedMessage id="about.vision" />, <FormattedMessage id="about.mission" />, <FormattedMessage id="about.culture" />]}>
              {this._renderProfile()}
              {this._renderTeam()}
              {this._renderWish()}
              {this._renderMission()}
              {this._renderCulture()}
            </Tab>
          </div>
        </div>
      </div>
    );
  }
}
