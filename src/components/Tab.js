import React from "react"
import styles from './Tab.module.scss';

export default class Tab extends React.Component{
  static defaultProps = {
    index:0
  };
  constructor(props){
    super(props);
    let {index} = props;
    this.state = {
      index
    }
  }
  render(){
    let {names,children} = this.props;
    let {index} = this.state;
    return(
      <div className={styles.wrap}>
        <ul className={styles.tab_menu_wrap}>
          {/*<li className={styles.active}>智能康复</li>
          <li className={styles.act}>智能护理</li>
          <li>远健云平台</li>*/}
          {names.map((txt,i) => <Item key={i+'-'+txt} txt={txt} className={i === index ? styles.active : ''} onClick={() => this.setState({index:i})}/>)}
        </ul>
        {React.Children.toArray(children)[index]}
      </div>
    )
  }
}

const Item = ({txt,onClick,className}) => <li className={`${styles.tab_menu_item} ${className}`} onClick={onClick}>{txt}</li>
