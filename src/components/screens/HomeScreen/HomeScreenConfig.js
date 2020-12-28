import authRoles from "../../../config/authRoles";
import HomeScreen from "./HomeScreen";

const HomeScreenConfig = {
    auth: authRoles.user,
    routes: [
        {
            path: "/",
            component: HomeScreen
        }
    ]
}
export default HomeScreenConfig;