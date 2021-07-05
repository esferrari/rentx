# Cadastro de carro


**RF**
Deve ser possível cadastrar um novo carro.

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar a placa de um carro já cadastrado.
O carro deve ser cadastrado com disponibilidade por padrão.
Somente usuário administrador poderá cadastrar o carro.

# Listagem de carros

**RF**
Deve ser possível listar todos carros disponiveis
Deve ser possivel listar todos os carros disponiveis pelo nome da categoria
Deve ser possivel listar todos os carros disponiveis pelo nome da marca
Deve ser possivel listar todos os carros disponiveis pelo nome do carro

**RN**
Usuario não precisa estar logado para fazer a listagem

# Cadastro de Especificação no carro

**RF**
Deve ser possível cadastrar uma especificação para um carro
Deve ser possível listar todas as especificações
Deve ser possível listar todos os carros

**RN**
Não deve ser possível cadastrar uma especificação para um carro nao cadastro na ferramenta
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
Somente usuário administrador poderá cadastrar o carro.

# Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro

**RNF**
Utilizar o multer para upload dos arquivos

**RN**
O usuário deve poder cadastrar mais de uma imgem para o mesmo carro
Somente usuário administrador poderá cadastrar o carro.


# Aluguel de carros

**RF**
Deve ser possivel cadastrar um aluguel

**RN**
O Aluguel deve ter duração minima de 24 horas
Não deve ser possivel cadastrar um novo aluguel caso ja existe um aberto para o mesmo usuário
Não deve ser possivel cadastrar um novo aluguel caso ja existe um aberto para o mesmo carro