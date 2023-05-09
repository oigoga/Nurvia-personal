import Sidebar from "../components/Sidebar";
import Dashboard1 from "../components/Dashboard1";
import Card from "../components/Card";

const Dashboard = () => {
  return (
    <>
      <Card>
        <div className="flex ">
        <Sidebar page="dashboard" />
        <Dashboard1 />
        </div>
      </Card>
    </>
  );
};

export default Dashboard;
