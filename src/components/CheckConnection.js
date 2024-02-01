import { useEffect } from "react";
const CheckConnection = () => {
  useEffect(() => {
    fetch("https://backendtestdeploy.azurewebsites.net/backendconnection")
      .then((response) => response.text())
      .then((data) => console.log(data));
  }, []);

  return <div>Check Connection in console</div>;
};
export default CheckConnection;
