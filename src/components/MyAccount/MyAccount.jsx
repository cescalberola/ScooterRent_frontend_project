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
    <div className="my-account-container">
      <h1>My account</h1>
      <div className="container-myaccount">
        {user.Scooters?.map((scooter, index) => (
          <Card
            className="container-card"
            key={index}
            title={`Order ${index + 1}`}
            style={{ marginBottom: 16 }}
          >
            <div className="scooter-details">
              <img
                src={scooter.Img}
                alt={`Scooter ${index + 1}`}
                className="scooter-image"
              />
              <div className="details">
                <p>Date: {scooter.CustomerScooter.createdAt}</p>
                <p>Brand: {scooter.Brand}</p>
                <p>Model: {scooter.Model}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyAccount;
