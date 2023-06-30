import { Container } from "reactstrap";
import AddPost from "../../components/AddPost";
import Base from "../../components/Base";
const UserDashboard = () => {
  return (
    <>
      <Base>
        <h1>Dashboard Page</h1>
        <Container>
        <AddPost/>
        </Container>
        
      </Base>
    </>
  );
};
export default UserDashboard;
