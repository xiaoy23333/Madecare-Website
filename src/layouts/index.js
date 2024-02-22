import React from 'react';
import SolutionLayout from './SolutionLayout';
import RootLayout from './RootLayout';
import RecruitLayout from './RecruitLayout';
// import Footer from '../components/Footer';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

const layout = (props) => {
  let { children, pageContext,intl, ...rest } = props;
  // console.log('intl',intl);
  // console.log(children);
  // console.log("@@@@@@");
  // console.log('layout',props);
  // console.log('context',CustomerContext);
  let comp = children;
  // console.log(pageContext);
  // console.log("@1321@")
  // console.log(rest)

  if (pageContext.layout === 'solution') {
    comp = <SolutionLayout {...rest}>{children}</SolutionLayout>;
  } else if (pageContext.layout === 'recruit') {
    comp = <RecruitLayout {...rest}>{children}</RecruitLayout>;
  }
  return <RootLayout {...rest}>{comp}</RootLayout>;
};

export default layout;
