
import HomeScreenConfig from '../components/screens/HomeScreen/HomeScreenConfig';
import { generateRoutesFromConfigs } from './RoutesUtils';
const config = [HomeScreenConfig];
const routesConfig = [
    ...generateRoutesFromConfigs(config),
]
export default routesConfig;