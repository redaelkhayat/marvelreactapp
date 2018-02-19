export const routes = [
    {
        path: "/",
        exact: true,
        container: "Home"
    },
    {
        path: "/:characterId",
        container: "CharacterDetails"
    }
];
