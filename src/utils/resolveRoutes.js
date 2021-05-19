const resolveRoutes = (route) => {
    if(route.length <= 3) {
        //ya se que cumple con los id de la api
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }

    return `/${route}`; //retorna '/about'
};

export default resolveRoutes;