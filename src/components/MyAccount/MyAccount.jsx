import "./MyAccount.scss"
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
    <>
    <h1>My account</h1>
    <div className="container-myaccount">
      <Card
        title={user.FirstName}
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <p>{user.email}</p>
        <p>{user.PhoneNumber}</p>
        <p>Orders:</p>
        {user.Scooters?.map((scooter, index) => (
          <div key={index}>
            <p>Brand: {scooter.brand}</p>
            <p>Model: {scooter.model}</p>
          </div>
        ))}
      </Card>
    </div>
    </>
  );
};

export default MyAccount;
