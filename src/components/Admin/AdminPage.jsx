
import { observer } from "mobx-react"
import Login from "./Login"
import AdminHome from "./AdminHome"
import DataStore from "../../store/store"
import {Link, Outlet} from "react-router-dom"
import NuvBar from "./NuvBar"



const AdminPage = (observer(() => {
    // const [isLogin, setIsLogin] = useState(false)

    return (
        <>
        <NuvBar></NuvBar>
            {
            !DataStore.IsLogin ? <Login /> : <AdminHome />            }
        </>
    )
}))

export default AdminPage
