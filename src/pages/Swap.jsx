import Card from "../components/Card"
import Sidebar from "../components/Sidebar"
import Swap1 from "../components/Swap1"
const Swap = () => {
  return (
    <>
    <Card>
      <div className="flex">
      <Sidebar page="swap"/>
      <Swap1/>
      </div>
    </Card>
    </>
  )
}

export default Swap