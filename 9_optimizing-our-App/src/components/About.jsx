import React, { Children } from "react";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Hello From About constructor");
  }
  componentDidMount() {
    console.log("useEffect From About");
  }
  componentDidUpdate() {
    console.log("first");
  }
  componentWillUnmount() {
    console.log("Comopoent unmount ");
  }
  render() {
    console.log("render From Render About");
    return (
      <div>
        <ProfileClass name={"VivekClass"} age={"34"} />
        <Profile name={"Vivek"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <>
//       <div>About</div>
//       <ProfileClass name={'VivekClass'} age={'34'} />
//       <Profile name={'Vivek'}/>
//     </>
//   );
// };

export default About;
