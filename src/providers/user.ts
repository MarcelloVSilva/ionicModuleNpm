export class UserProvider {
  Ola() {
    return 'Ola galerinha do bem';
  }

  Tchau(){
    return 'Tchau galera';
  }

  Usuarios(){
    return usuarios;
  }
}


const permissoes = {
  recepcionista: 10,
  gerente: 50
}

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
]