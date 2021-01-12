import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { connect } from "react-redux";

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    tittle: state.todo.tittle,
  };
};

const Top = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="display-3">{props.tittle}</h1>
          {/* <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p> */}
        </Container>
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateToProps, null)(Top);
