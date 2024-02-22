import React from 'react';
import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';
import { ContextProvider } from '../components/Context';
import { IntlProvider } from 'gatsby-plugin-intl';

export default function RootLayout({ children,...rest }) {
  // console.log(...rest)
  return (
    <IntlProvider>
      <ContextProvider>
        {/* {children.props.location.pathname !== "/" &&
          children.props.location.pathname !== "/en/" &&
          children.props.location.pathname !== "/zh/" &&
          children.props.location.pathname !== "/en" &&
          children.props.location.pathname !== "/zh" && //TODO:?
          <NavHeader {...rest}/>
        } */}
        <NavHeader {...rest}/>
        {children}
        {/* {console.log(children)} */}
        {/* {console.log(children.props.location.pathname)} */}
        {children.props.location.pathname !== "/" &&
          children.props.location.pathname !== "/en/" &&
          children.props.location.pathname !== "/zh/" &&
          children.props.location.pathname !== "/en" &&
          children.props.location.pathname !== "/zh" && //TODO:?
        <Footer {...rest}/>
        }

      </ContextProvider>
    </IntlProvider>
  )
}

