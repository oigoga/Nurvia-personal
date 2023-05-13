import Card from "./Card"
import { Logo } from "../assets/General/assets"
const Smallscreen = () => {
  return (
    <>
    <Card>
        <div className="flex justify-center items-center h-screen w-screen">
        <div className="h-3/4 mx-[10%] bg-navy text-center flex flex-col    items-center justify-center ">
            <img src={Logo} alt="" />
            <p className="text-3xl font-hairline">Please view this app on a larger screen for the best experience.</p>
        </div>
        </div>
    </Card>
    </>
  )
}

export default Smallscreen