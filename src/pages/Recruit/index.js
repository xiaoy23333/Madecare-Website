import React from "react"
import styles from "./index.module.scss"
import Link from "../../components/Link"

export default class Recruit extends React.Component {
  render() {
    const jds = [
      {name:'销售大区总监',depart:'销售部',place:''},
      {name:'市场总监',depart:'市场部',place:'北京'},
      {name:'产品经理',depart:'研发部',place:'北京'},
      {name:'电子工程师 - 表面肌电、电刺激',depart:'研发部',place:'北京'},
      {name:'高级机器人机械工程师',depart:'研发部',place:'北京'},
      {name:'工厂经理',depart:'研发部',place:'北京'},
      {name:'高级机器人电子工程师',depart:'研发部',place:'北京'},
      {name:'java 工程师',depart:'研发部',place:'北京'},
    ]
    return (
      <>
        <p className={styles.desc}>美德远健欢迎您来应聘，简历投递邮箱：hr@madecare.com</p>
        <table className={styles.tb}>
          <thead>
          <tr className={styles.th_tr}>
            <th>职位</th>
            <th>招聘部门</th>
            <th>工作地点</th>
          </tr>
          </thead>
          <tbody>
          {jds.map(({name,depart,place},i) =>
            <tr className={styles.td_tr} key={name+'-'+place}>
              <td><Link to={'/recruit/jobdetail#'+i}>{name}</Link></td>
              <td>{depart}</td>
              <td>{place}</td>
            </tr>
          )}
          </tbody>
        </table>
      </>
    )
  }
}
