export const generateRoutesFromConfigs = (configs, role) => {
    let allRoutes = [];
    configs.forEach(config => {
        if (role === config.auth)
            allRoutes = [...allRoutes, ...config.routes]
    });
    return allRoutes;
}