import React from "react";
import { Container, Button, Row, Col } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { connect } from "react-redux";
const columns = [
  {
    dataField: "id",
    text: "ID",
    headerStyle: () => {
      return {
        width: "5%",
      };
    },
  },
  {
    dataField: "title",
    text: "Title",
  },
  {
    dataField: "description",
    text: "Description",
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Button color="dark" className="mr-2">
            Detail
          </Button>
          <Button color="dark" className="mr-2">
            Edit
          </Button>
          <Button color="dark" className="mr-2">
            Delete
          </Button>
        </div>
      );
    },
  },
];

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    getTodo: state.todo.getTodo,
    getGone: state.todo.getGone,
    errorTodo: state.todo.errorTodo,
  };
};

const todo = (props) => {
  return (
    <div>
      <Container>
        {props.getTodo ? (
          <div>
            <Row>
              <h3>Todo List On Progrss</h3>
              <BootstrapTable
                keyField="id"
                data={props.getTodo}
                columns={columns}
              />
            </Row>
            <Row>
              <h3>Todo List On Done</h3>
              <BootstrapTable
                keyField="id"
                data={props.getGone}
                columns={columns}
              />
            </Row>
          </div>
        ) : null}
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, null)(todo);
