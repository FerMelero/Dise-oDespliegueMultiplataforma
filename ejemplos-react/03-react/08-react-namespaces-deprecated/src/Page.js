import React from "react";

const Page = React.createClass ({
    render() {
      return (
        <div className="App">
            {this.props.children}
        </div>
      );
    }
  });

  export default Page;