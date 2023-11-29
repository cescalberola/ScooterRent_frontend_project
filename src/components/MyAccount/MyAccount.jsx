import "./MyAccount.scss";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Card, Spin } from "antd";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  const { getUserInfo, user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserInfo().then(() => setLoading(false));
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  if (loading || !user) {
    return <Spin />;
  }

  return (
    <>
      <h1>My account</h1>
      <div className="container-myaccount">
        <Card
          title={user.FirstName}
          bordered={true}
          style={{
            width: 500,
          }}
        >
          <p>{user.email}</p>
          <p>{user.PhoneNumber}</p>
          {user.Scooters?.map((scooter, index) => (
            <Card
              key={index}
              title={`Order ${index + 1}`}
              style={{ marginTop: 16, width: 300 }}
            >
              <p>Date: {scooter.CustomerScooter.createdAt}</p>
              <p>Brand: {scooter.Brand}</p>
              <p>Model: {scooter.Model}</p>
            </Card>
          ))}
        </Card>
      </div>
    </>
  );
};

export default MyAccount;
