import React from "react";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { initStore } from "../src/redux/store";
import Footer from "../src/components/footer";
import Navigation from "../src/components/navigation";

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return <div className="layout">{children}</div>;
  }
}

export default withRedux(initStore)(
  class MyApp extends App {
    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Provider store={store}>
          <Navigation />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Footer />
        </Provider>
      );
    }
  }
);
