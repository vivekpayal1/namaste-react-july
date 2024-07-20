import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 1,
    };
    console.log("Constructor of ProfileClass");
  }
  async componentDidMount() {
    console.log("useEffect of ProfileClass");
  }
  render() {
    console.log("render ProfileClass");
    const { count, count1 } = this.state;
    return (
      <div>
        <p>
          Name: {this.props.name} {this.props.age}
        </p>
        <h1>
          Hello from class based Component{count} {count1}
        </h1>
        <button
          onClick={() => {
            this.setState({ count: 10 });

            this.setState({ count1: 5 });
          }}
        >
          dff
        </button>
      </div>
    );
  }
}
export default ProfileClass;
