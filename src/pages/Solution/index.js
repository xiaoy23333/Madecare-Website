import React from "react"
import styles from "./index.module.scss"
import solWrap from "../../hoc/solWrap"
import Link from "../../components/Link"
import { useIntl,injectIntl, FormattedMessage } from 'gatsby-plugin-intl';


// const IndexPage = () => {
//   const intl = useIntl
//   return (
//         <div className={styles.solwrap}>
//             {/* {intl.formatMessage({ id: "en.solution" })} */}
//              <FormattedMessage id="en.solution" />
//         </div>
//   )
// }

// @injectIntl wrap = () =>{
//   let e =''
//   let {intl} = this.props;
//   if(intl.locale !== "en"){
//     e = '解决方案';
//   }else{
//     e = 'Solution';
//   }
// }
// console.log('solution-index1',<FormattedMessage />)
export default @injectIntl @solWrap(<FormattedMessage id="en.solution" />)
class Solution extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  //  }


  render() {
    // const datas = [
    //   {to:'/solution/recovery',img:require('../../assets/imgs/Solution/solution_01.png'),tle:'减重下肢康复',txt:'用于安全保护和静态减重下的下肢康复训练、步态练习。简洁、方便、有效，极大减少治疗师的劳动强度和家属陪护负担。'},
    //   {to:'/solution/transfer',img:require('../../assets/imgs/Solution/solution_02.png'),tle:'患者安全转移',txt:'用于病人、失能老人的安全转移，全覆盖无死角，有效解决如厕、洗浴、翻身、四肢辅助运动、坐站练习等护理问题。适用于病房、养老院、家庭等。'},
    //   {to:'/solution/prevent',img:require('../../assets/imgs/Solution/solution_03.png'),tle:'智能导尿监护系统',txt:'适用于所有使用留置式导尿管的患者。保持膀胱正常功能，并能完成尿量计量、导尿日志自动记录、导尿异常报警和部分尿动力学的指标测量。'},
    //   {to:'/solution/monitor',img:require('../../assets/imgs/Solution/solution_04.png'),tle:'长期床旁监护',txt:'用于病人、老人的连续、长期的生命体征等的监测。以达到健康监测、疾病预警的目的。同时提高护理质量、护理效率，预防性地保证老人、病人的安全和健康。'},
    //   {to:'',img:require('../../assets/imgs/Solution/solution_05.png'),tle:'远程云管理',txt:'为康复医院提供的远程康复平台，有效连接病人、医院的设备，实现基于云的康复信息化管理。'},
    //   {to:'',img:require('../../assets/imgs/Solution/solution_06.png'),tle:'养老&医疗护理管理',txt:'为养老院和护理机构提供老人或病人智能监护、高效管理的云服务平台，有效连接老人/病人、智能设备、护理人员、管理人员，实现移动、远程的高效管理。'},
    // ];
    // console.log('solution-props',this.props);
    let {intl} = this.props;
    // console.log('solution-intl2',intl)
    return (
      <div className={styles.trait}>              
              <div className={styles.solution_box}>
              <div className={styles.solution_intro} style={{backgroundImage: `url(${require('../../assets/imgs/img/assistor.png')})` }} >             
                <div className={styles.solution_left} >
                    <div className={styles.text1}>
                        <Link to={'/solution/recovery'}><div className={styles.text_title1}>
                        <u>{intl.formatMessage({ id: "solution.tr600"})}</u>
                          {/* <u><FormattedMessage  id="solution.tr600"  defaultMessage=""  values={{}} /></u> */}
                          </div></Link>
                        <div className={styles.intro_text}>
                        {intl.formatMessage({ id: "solution.tr600intro" })}
                        </div>
                    </div>
                    <div className={styles.text2}>
                        <Link to={'/solution/transfer'}><div className={styles.text_title1} style={{width: '93%'}}><u>{intl.formatMessage({ id: "solution.tr800" })}</u></div></Link>
                        <div className={styles.intro_text}>
                        {intl.formatMessage({ id: "solution.tr800intro" })}                        
                        </div>
                    </div>
                </div>
                <div className={styles.solution_center}>
                  <Link to={'/solution/remote'}><div className={styles.intro_title}><u>{intl.formatMessage({ id: "solution.yjy" })}</u></div></Link>
                </div>
                <div className={styles.solution_right}>
                    <div className={styles.text3}>
                        <Link to={'/solution/prevent'}><div className={styles.text_title2}><u>{intl.formatMessage({ id: "solution.zndn" })}</u></div></Link>
                        <div className={styles.intro_text}>
                        {intl.formatMessage({ id: "solution.zndnintro" })}
                        </div>
                    </div>
                    <div className={styles.text4}>
                        <Link to={'/solution/monitor'}><div className={styles.text_title2} style={{}}><u>{intl.formatMessage({ id: "solution.bedcare" })}</u></div></Link>
                        <div className={styles.intro_text}>
                        {intl.formatMessage({ id: "solution.bedcareintro" })}
                        </div>
                    </div>
                </div>

                <div className={styles.solution_bottom}>
                    <div className={styles.text5}>
                        <Link to={'/solution/cpx'}><div className={styles.text_title5}><u>{intl.formatMessage({ id: "solution.cpx" })}</u></div></Link>
                        <div className={styles.intro_text}>
                        {intl.formatMessage({ id: "solution.cpxintro" })}
                        </div>
                    </div>
                </div>
              </div>
        </div>
        {/* <ul>
          {datas.map(data => <Item key={data.tle} {...data}/>)}
        </ul> */}
      </div>
    )
  }
}

{/* // const Item = ({ to, img, tle, txt }) => (
//   <li><Link to={to}><img src={img} alt={tle}/>
//     <div className={styles.gs}>{tle}</div>
//     <p>{txt}</p></Link></li>
// ) */}
