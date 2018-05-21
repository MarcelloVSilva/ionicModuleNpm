var UserProvider = (function () {
    function UserProvider() {
    }
    UserProvider.prototype.Ola = function () {
        return 'Ola galerinha do bem';
    };
    UserProvider.prototype.Tchau = function () {
        return 'Tchau galera';
    };
    UserProvider.prototype.Usuarios = function () {
        return usuarios;
    };
    return UserProvider;
}());
export { UserProvider };
var permissoes = {
    recepcionista: 10,
    gerente: 50
};
var usuarios = [
    {
        id: '04138869131',
        nome: 'marcello',
        pode: permissoes.recepcionista
    },
    {
        id: '05184687122',
        nome: 'matheus',
        pode: permissoes.gerente
    }
];
//# sourceMappingURL=user.js.map