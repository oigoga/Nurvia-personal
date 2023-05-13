import Card from "../components/Card"
import Sidebar from "../components/Sidebar"
import Deals1 from "../components/Deals1"
const Deals = () => {
  return (
    <>
    <Card>
      <div className="flex">
      <Sidebar page="deals"/>
      <Deals1/>
      </div>
    </Card>
    </>
  )
}

export default Deals