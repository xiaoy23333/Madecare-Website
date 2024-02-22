import React from 'react';
import CustomerContext from '../components/Context';

export default (title) => (Comp) => { //TODO:? 高阶函数
  return class extends React.Component {
    static contextType = CustomerContext;

    componentDidMount() {
      let { set } = this.context;
      set({ title });
    }

    render() {
      return (
        <Comp {...this.props}/>
      );
    }
  };
}
