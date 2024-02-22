import React from "react"

const defaultContextValue = {
  data: {},
  set: () => {},
}

const CustomerContext = React.createContext(defaultContextValue);
const { Provider, Consumer } = CustomerContext;
class ContextProvider extends React.Component {
  constructor() {
    super()

    this.setData = this.setData.bind(this)
    this.state = {
      ...defaultContextValue,
      set: this.setData,
    }
  }

  setData(newData) {
    this.setState(state => ({
      data: {
        ...state.data,
        ...newData,
      },
    }))
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { Consumer as ContextConsumer, ContextProvider }
export default CustomerContext;
