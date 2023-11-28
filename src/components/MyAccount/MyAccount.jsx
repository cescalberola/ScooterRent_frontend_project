import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Card, Spin } from "antd";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  const { getUserInfo, user } = useContext(UserContext);
  useEffect(() => {
    getUserInfo();
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  if (!user) {
    return <Spin />;
  }
  return (
    <div>
      <h1>My Account</h1>
      <Card
        title={user.FirstName}
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <p>{user.email}</p>
      </Card>
    </div>
  );
};

export default MyAccount;
