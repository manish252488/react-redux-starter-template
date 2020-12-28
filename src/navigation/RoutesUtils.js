export const generateRoutesFromConfigs = (configs) => {
    let allRoutes = [];
    configs.forEach(config => {
        allRoutes = [...allRoutes, ...config.routes]
    });
    return allRoutes;
}