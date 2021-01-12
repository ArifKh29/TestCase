import react, { Component } from "react";
import Todo from "../components/todo";
import { connect } from "react-redux";
import { getTodo } from "../action/todoAction";
class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getTodo());
  }
  render() {
    return (
      <div>
        <Todo />
      </div>
    );
  }
}

export default connect()(Home);
