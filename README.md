# Educalis

Projeto de front-end para um ambiente virtual de aprendizagem seguindo um modelo proposto. O projeto desenvolvido também levou em consideração a responsividade para que o site possa ser visualizado tanto por usuários de dispositivos móveis como por usuários desktop.

## Ferramentas

Foi utilizado HTML e CSS para o design das páginas, assim como para a implementação de algumas transições de estado quando há hover do cursor sobre algum link ou botão. Também foi utilizado JavaScript para salvar dados enviados dos formulários das telas de login, cadastro e reuperação de senhas em localstorage.

## Responsividade

Todas as telas criadas estão responsívas e podem ser visualizadas tanto em dispositivos móveis como em dispositivos desktop. Para tal, foram empregados contêiners flex do CSS para o posicionamento de alguns elementos chaves (como os links da barra de navegação na página home, por exemplo) e @media para garantir designs diferenciados e que se adequem melhor dependendo do tamanho da tela.

## Localstorage

O site criado é estático e não possui back-end que permita validação, criação e recuperação de contas em uma base de dados. Em vez disso, dados submetidos pelos formulários de login, cadastro e recuperação de senha são armazenados em window.localStorage. Cada um desses formulários possui um array próprio que é responsável por guardar seus respectivos dados submetidos. Após o salvamento, a URL da página é alterada para o caminho presente na propriedade action do form. O código encarregado disso pode ser encontrado [aqui.](js/app.js)

## Telas implementadas

Foram implementadas as telas: 
* home;
* login;
* cadastro;
* recuperação de senha;
* disciplinas;
* calendário;
* boletim;
* professores;
* assuntos de matemática;
* professores de matemática;
* conjuntos.

## Próximos passos

A implementação de um sistema de back-end para tornar as páginas dinâmicas (como as telas dos professores, por exemplo) e para permitir a autenticação e cadastro dos alunos. Também seria interessante a inserção de mais conteúdos e matérias no sistema.

## Hospedagem

O site foi hospedado em um servidor Netlify gratuito e pode ser acessado neste [link.](https://peaceful-sammet-44c261.netlify.app/)
