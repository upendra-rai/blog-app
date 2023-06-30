import { Card, CardBody, Form, Label } from "reactstrap";

const AddPost = () => {
  return (
    <div className="wrapper">
      <Card>
        <CardBody>
          <h3>Whats going in your Mind?</h3>
          <Form>
            <div className="my-3">
              <Label for="title">Post Title</Label>
              <input type="text" id="title" placeholder="Enter your Title" />
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};
export default AddPost;
