import React, { Component } from 'react';
import styles from './NavHeader.module.scss';
import Link from './Link';
import { injectIntl } from 'gatsby-plugin-intl';
import { LANGS, HEADER_NAV, NAVS } from '../config';
import { navigate } from 'gatsby';

export default @injectIntl class Header extends Component {
  toggleLan = () => {
    let { location: { href }, intl: { locale } } = this.props;
    let hArr = href.split('/');
    hArr.splice(0, 3);
    let i = LANGS.indexOf(hArr[0]);
    // console.log(LANGS)
    if (i >= 0) {
      hArr.splice(0, 1, LANGS[(i + 1) % 2]);
    } else {
      hArr.splice(0, 0, LANGS[1]);
    }
    let h = '/' + hArr.join('/');
    // console.log('nav-header', h);
    navigate(h);
  };
  state = {
    activeNavItems:[],
    sideNav:false,
    btnFlag: true,
    status:"",
    isreload:''
  };
  createToggleNavItem = index => () => {
	  console.log(index)
    let {activeNavItems} = this.state;
    activeNavItems[index] = !activeNavItems[index];
	debugger
    this.setState({activeNavItems});
  };
  toggleSideNav = () => {
    this.setState({sideNav:!this.state.sideNav});
  };

  render() {
    // let reactid = 0;
    let { intl } = this.props;
    let {activeNavItems,sideNav} = this.state;
    // console.log('nav-header props', this.props);
    //可以设置是否显示，首页需要单独设置第二页显示
    let msg = (id) => intl.formatMessage({ id });
    let hggg = HEADER_NAV;
    // console.log(this.props.location.pathname)
    let status = "/" + this.props.location.pathname.replace(new RegExp("(/|en|zh)","gm"),"");
    // console.log(status)
    let pgindex = this.props.location.hash;
             

    // if (this.props.location.hash === "#sectionTwo") {
    //   // this.setState({
    //       this.state.btnFlag = true
    //   // });
    // }else {
    //   this.state.btnFlag = false
    // }

    // console.log(this.state.btnFlag)
    // if (pgindex === "#1"||(pgindex === "" && (this.props.location.pathname === "/"||this.props.location.pathname === "/index.html"))) {
    //       this.state.btnFlag = false
    // }else {
    //   this.state.btnFlag = true
    // }
        return (  
          <header className={styles.top} style={{display: this.state.btnFlag ? 'table' : 'none' }}>
            <div className={styles.main}>
              <div className={styles.logo}><a href="/"><img src={require('../assets/imgs/NavHeader/logo.png')} alt=""/></a></div>
              <div className={styles.nav_bar}>
                <ul>
                  {/* {restatus ==='#1'?this.setState({isreload: true}):""} */}
                  {HEADER_NAV.map(({ to, txt, items }, i) => (    
                    <li style={{backgroundColor: (to === status) ? '#024753': '' }} key={i + '-' + txt}><Link to={to}>{msg(txt)}
                    {/* {items && <div className={styles.hid}>
                      <ul>{items.map(({ to, txt, src }) => <li key={txt}><Link to={to}>{src ? <><img src={src}/>
                        <p>{msg(txt)}</p></> : msg(txt)}</Link></li>)}</ul>
                    </div>} */}
                    </Link></li>
                  ))}
                  <li><Link onClick={this.toggleLan} to='javascript:;'>{msg('nav_lang')}</Link></li>
                </ul>
                <button onClick={this.toggleSideNav} className={styles.burger}>
                  <span>menu</span>
                </button>
              </div>
            </div>
            {/*移动端导航*/}
            <nav className={[styles.sidenav,sideNav ? styles.show : ''].join(' ')}>
              <div className={styles.sidenav_brand}>
                <Link to={'/'}>美德远健</Link>
              </div>
              {<ul className={styles.sidenav_menu}>
                {HEADER_NAV.map(({ to, txt, items, icon }, index) => (            
                        
                  <li>
                    <Link onClick={this.createToggleNavItem(index)} to={items ? 'javascript:;' : to}>
                      <Icon className={styles.sidenav_link_icon} name={icon}/>
                      <span className={styles.sidenav_link_title}>{msg(txt)}</span>
                      {/* {items ? <Icon name={activeNavItems[index] ? 'arrow_drop_up' : 'arrow_drop_down'}/> : null} */}
                    </Link>
                    {/* {items && <ul className={[styles.sidenav_dropdown,activeNavItems[index] ? styles.active : ''].join(' ')}>
                      <li><Link to={to}>{msg(txt)}</Link></li>
                      {items.map(({ to, txt }, i) => (
                        <li><Link to={to}>{msg(txt)}</Link></li>
                      ))}
                    </ul> } */}
                  </li>
                ))}
                <li><Link onClick={this.toggleLan} to='javascript:;'><Icon className={styles.sidenav_link_icon} name={'translate'}/><span className={styles.sidenav_link_title}>{msg('nav_lang')}</span></Link></li>
              </ul>}
            </nav>
          </header>
        );
    
  }
}

const Icon = ({className = styles.sidenav_dropdown_icon,name}) =>
  <i className={[className, 'material-icons'].join(' ')}>{name}</i>;
