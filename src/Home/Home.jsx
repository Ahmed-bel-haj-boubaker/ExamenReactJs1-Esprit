import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: true,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ showMessage: false });
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  render() {
    const { showMessage } = this.state;

    return (
      <div>{showMessage && <h1>Welcome to Our Competition World</h1>}</div>
    );
  }
}
export default Home;
