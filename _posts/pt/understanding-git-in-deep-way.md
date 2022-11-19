---
lang: pt
title: "Afinal, como o Git funciona?"
excerpt: "Vamos entender o que ocorre por detrás das cortinas quando geramos uma nova branch e comitamos nela, por exemplo."
createdAt: "2022-07-29"
tags:
  - git
categories: git
author: Victor Menezes
---

## Prefácio

O objetivo principal deste post é apresentar a ferramenta de
versionamento Git. Ao longo deste documento, pretende-se abordar de forma direta todo o ecossistema Git. Entender que quando damos clone em um repositório, os arquivos visíveis no diretório principal apenas são um espelho do que está dentro de .git/objects. Saber que o Git é um banco de grafos (mais precisamente um [grafo acíclico dirigido](https://git-scm.com/docs/gitglossary/pt_BR#gitglossary-aiddefDAGaDAG)). Sendo assim, compreendendo os mecanismos
de funcionamento do Git tornará o seu uso mais fácil. E, é claro, lembre-se: um bom
desenvolvedor sempre sabe por que está fazendo alguma coisa.

### Como ler este post

Existem várias maneiras de ler este documento.

A primeira é ir direto aos capítulos de seu interesse e pular o restante. Todos
os conceitos foram elaborados independentemente um dos outros. Não é necessário
uma leitura linear.

A segunda, que eu particularmente recomendo segui-la e exige um pouco mais
de envolvimento; leia com atenção cada capítulo. Aplique os conceitos na prática. Pare
e faça pequenos projetos em sua máquina. Enfim, absorva os conceitos. Garanto que
esse será o melhor aprendizado.

Além disso, ao final deste documento, você encontrará vários links de
documentações, ferramentas e recomendações de livros para aprofundar seu
conhecimento.

### Como este post está organizado

Cada capítulo pode ser lido de forma independente. O intuito é fornecer uma
explicação simples e direta dos conceitos de Git. Sinta-se à vontade em lê-los do início
ao fim. Tenha total liberdade caso queira ir direto aos capítulos que julga interessantes.
Os capítulos estão agrupados em três partes. A primeira, realizamos uma
verdadeira anatomia do Git (Entendendo o Git), explorando as suas principais partes e
suas correlações. Juntamente a isso, faremos uma abordagem prática (Usando o Git) a
partir dos principais comandos, desde os Plumbings, que podemos chamar da parte
“baixo nível” do Git e a sua camada mais abstrata, que seriam os Porcelain atuando no
“alto nível”. Veremos também como manter um repositório limpo (Boas Práticas). Por
fim, você verá materiais de apoio (Referências), para caso tenha interesse em
aprofundar-se no assunto.

## Entendendo o Git

### O que é Git?

Git é um sistema de gerenciamento de conteúdo. Segundo Linus Torvalds,
criador do Git: “De muitas maneiras, você pode apenas ver o git como um sistema de
arquivos - é endereçável por conteúdo e tem uma noção de controle de versão, mas eu
realmente o projetei considerando o problema do ponto de vista do uso de sistema de
arquivos e, na verdade, não tenho absolutamente nenhum interesse em criar um
sistema de controle de versão tradicional.” ¹

Quando a maioria dos sistemas de controle de versão aloca uma nova versão
de um projeto, eles armazenam o diff (comparação de arquivos que gera as diferenças
entre dois arquivos) do código. Quando o Git armazena uma nova versão de um projeto,
ele armazena em uma nova árvore. Se você quiser um diff entre duas versões, o Git
simplesmente olha para as duas árvores geradas e executa um novo diff sobre elas.
Isso é o que basicamente permite que o sistema seja facilmente distribuído -
ele não tem problemas para descobrir como aplicar uma série de comparações complexas, ele simplesmente transfere todos os diretórios e conteúdos que um
usuário tem e outro não tem, mas está solicitando.

¹ Original disponível em: http://marc.info/?l=linux-kernel&m=111314792424707

### Git Object Types

Os objetos Git são os dados reais do Git, a principal coisa que compõe o
repositório. São os arquivos encontrados no diretório oculto .git. O diretório principal é
um espelho desses arquivos.
Existem quatro tipos de objetos principais no Git, sendo eles: “blob”, “tree”,
“commit”, e "tag''.
Todos esses tipos de objetos são armazenados no banco de dados de objetos
Git, que é mantido no diretório oculto .git. Cada objeto é compactado e referenciado
por um valor [SHA-1](http://en.wikipedia.org/wiki/SHA1). de seu conteúdo mais um
pequeno cabeçalho, que seriam seus metadados. Um SHA cria um identificador de
comprimento fixo (40 caracteres) que identifica exclusivamente uma parte específica
do conteúdo.
Sabe o id do commit que é exibido no histórico do projeto? Pois então, ele é
uma forma abreviada da hash gerada. É com ele que conseguimos diferenciar os
arquivos e rastreá-los.

Faça um teste, abra um projeto, que esteja versionado, e execute o seguinte
comando no seu terminal: 

```bash
git show -s --format=%H
```

Depois compare o valor obtido com o id do seu último commit.

### Branching e Merging

Aqui chegamos a um dos pontos fortes do Git: branches e o merging delas.
Este é um recurso que realmente o diferenciou na época de seu lançamento, uma vez
que os sistemas de versionamento vigentes (Subversion e CVS) não entregavam.

Branchs são nada mais do que uma ramificação do seu repositório. Sempre
que você fizer alterações no seu repositório local, você enviará para uma branch.
Inicialmente temos a master por padrão, que é a principal, como se fosse o tronco do
projeto. É um conceito central, que permite diferentes workflows.
Na verdade, no Git, o ato de criar um novo branch é simplesmente escrever um
arquivo no diretório .git / refs / heads que contém o SHA-1 do último commit para
aquele branch.

Criar um branch nada mais é do que escrever 40 caracteres em um arquivo.
Mudar para esse branch significa simplesmente fazer o Git fazer seu diretório
de trabalho parecer a árvore para a qual o SHA-1 aponta e atualizar o arquivo HEAD para
que cada commit daquele ponto em diante mova o ponteiro do branch para frente.

Para visualizar melhor esse conceito, acesse a seguinte ferramenta: [Visualing
Git.](https://git-school.github.io/visualizing-git/)

Exemplo de nova branch:

![Imagem mostrando criação de branchs"](/assets/img/posts/understanding-git-in-deep/branchs.png)

## Usando o Git

### Primeiros passos

Comece acessando o [site oficial](https://git-scm.com/downloads) para baixar o instalador do git. Escolha o sistema operacional que você utiliza e baixe o instalador respectivo.
Após isso, abra o terminal (caso esteja utilizando Windows, use o Guit Bash) e
digite o seguinte comando:

```bash 
git --version
``` 

Caso seja exibida a versão do Git, significa que sua instalação foi concluída com sucesso.

### Iniciando um repositório

Agora, criaremos nosso primeiro repositório Git. Abra o terminal e navegue até
o diretório do seu projeto executando: 

```bash
cd /caminho/do/diretorio
```

Com isso feito, você pode iniciar o repositório executando o seguinte comando:

```bash
git init
```

Isso inicializa o repositório ativando os recursos do Git. Note que agora existe
um diretório .git na sua pasta git-repo, que armazena todos os dados de rastreamento
de nosso repositório (pode ser necessário habilitar arquivos ocultos para visualizar
esta pasta).

Após isso, você precisa definir o seu nome e e-mail. Eles serão vinculados em
cada alteração que você efetuar.

Para definir um nome de usuário:

```bash
git config --global user.name "Seu nome"
```

Para definir um e-mail:

```bash
git config --global user.email "seu@email.com"
```

Para exibir suas configurações:

```bash
git config --list
```

Caso queira exibir uma configuração específica:

```bash
git config user.name
git config user.email
```

Obs.: Caso queira utilizar uma outra identificação em um projeto específico,
utilize o mesmo comando para definir e-mail e nome, mas sem a opção global
sinalizada.

### Fluxo de trabalho

O fluxo de trabalho básico do Git define-se em três “etapas":

- Working Directory: Modifica arquivos no seu diretório de trabalho;
- Staging Area: Executa uma série de ações a serem “comitadas”. Porém, o que
está na etapa anterior (working directory) não será enviado ao repositório.
Apenas o que foi informado e confirmado pelo comando __git add__. Assim, uma
vez os arquivos modificados estando nesta etapa, serão enviados através de
uma “snapshot” do seu código para área de preparação (staging area); e
- Repository: Execução de um commit, que leva os arquivos como eles estão na
sua área de preparação e os armazena no seu diretório Git.


![Imagem mostrando fluxo de trabalho"](/assets/img/posts/understanding-git-in-deep/workflow.jpeg)

Além disso, cada arquivo tem possíveis três “estados":

- Committed: Alterações não modificadas do último snapshot;
- Modified: Alterações feitas nos arquivos desde o último snapshot comitado; e
- Staged: Mudanças marcadas para serem adicionadas ao próximo snapshot via
commit.


![Imagem mostrando estados trabalho"](/assets/img/posts/understanding-git-in-deep/stages.jpeg)


### Seu maior amigo: git log

Sempre quando você quiser visualizar a linha do tempo, quem fez cada commit
e coisas do tipo, utilize o comando: 

```bash
git log
```

Você conseguirá ver todo o histórico do projeto através dele.

Ele exibirá o hash do commit, autor com nome e e-mail, mensagem e a hora do
commit.

Caso queira visualizar apenas as iniciais do commit (hash e a mensagem) utilize
o seguinte comando: 

```bash
git log --oneline
```

Além disso, podemos exibir todos os commits efetuados nas branchs do
projeto, usando: 

```bash
git log --oneline --all --graph 
```

Mas caso queira identificar as branchs, utilize este comando: 

```bash
git log --oneline --all --decorate --graph 
```

### Comandos Porcelain e Plumbing

Porcelain e Plumbing são analogias utilizadas para separar comandos de "alto
nível” e “baixo nível”, respectivamente. Inicialmente, o Git utilizava comandos Plumbing,
sendo os primeiros comandos a serem criados pelo Linus Torvalds. Eles geralmente
são utilizados em ferramentas e scripts.

Posteriormente, foram inseridos comandos amigáveis por outros
mantenedores do Git, como, por exemplo, Junio Hamano. Para aprofundamento,
recomendo que leia a seguinte thread no StackOverflow: [Porcelain and Plumbing](https://stackoverflow.com/questions/6976473/what-does-the-term-porcelain-mean-in-git?noredirect=1&lq=1). É interessante conhecer esses comandos para familiarizar-se com a evolução deles.

Além disso, através do comando __man git__, você terá acesso a todos os
comandos. Os comandos mais utilizados estão na seção “High-Level Commands
(Porcelain)”. Para comandos internos do git, temos a seção “Low-Level Commands
(Plumbing)”.

Sempre que precisar sanar uma dúvida, ou o que determinado comando
realiza, utilize esses guias como consulta rápida.

## Boas práticas

### Uma pequena funcionalidade para cada commit

São conhecidos como "commits atômicos". Não escreva qualquer coisa, por exemplo, hot fix ou adjusted. É preciso que a sua mensagem seja a mais descritiva possível. Lembre-se que a principal função do git é gravar um registro preciso da história do projeto. Voltar no tempo a qualquer momento e analisar como o código estava.

Separe os arquivos específicos do ajuste, não suba todos os arquivos que você
alterou na semana. Por favor, não faça isso! Além de poluir o repositório, dificulta a
visualização do histórico.

### Errei a mensagem no commit. Como eu corrijo?

Às vezes, por decorrência da urgência, ou por descuido, acabamos
commitando com uma mensagem errada. Para ajustar isso é bem simples, veja:

```bash
git commit -m "Mensagem Errada"
git commit -m "Mensagem Correta" --amend
```

Caso esqueça de alterar ou colocar algo a mais no arquivo, você poderá ajustar
de forma bem simples támbém, veja:

```bash
touch file-test3.txt
git add .
git commit -m "Mensagem Commit"
touch file-test4.txt
git add .
git commit -m "Mensagem Commit"
git log
git reset --soft HEAD~3
```

### Conventional Commits

O [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) é um padrão para mensagens de commit. Ele fornece
um conjunto de regras para criar mensagens de commit que são fáceis de serem lidas por humanos. 

Usualmente ela segue o seguinte formato:

```bash
<tipo>(escopo?): <descrição>
```

Cada tipo é um elemento estrutural, que visa comunicar uma determinada intenção no commit. 

Existem tipos baseados na [convenção Angular](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum), que são:

> build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test

Claro, nada impede que você crie seus próprios tipos, mas é importante que
seja algo que faça sentido para o seu projeto.

## Referências

Deixarei indicações de materiais para aprofundamento. Está separado em
documentações e cursos, que são guias, livros e boas práticas de Git.

### Documentações e Guias

- [Git - Documentação Oficial](https://git-scm.com/doc);
- [Git Book.](https://git-scm.com/book/en/v2) É a bíblia do Git, tudo que você precisa saber está aqui;
- [Atlassian Bitbucket Tutorial.](https://www.atlassian.com/git/tutorials) Compilado de vários tutorias do Git;
- [Flight rules for Git.](https://github.com/k88hudson/git-flight-rules) O nome já diz tudo. Basicamente um FAQ sobre Git;
- [Learn Git Branch.](https://learngitbranching.js.org/?locale=pt_BR) Ferramenta visual para aprendizado do conceito de branch;
- [Git Cheat Sheet.](https://github.com/arslanbilal/git-cheat-sheet) Compilado dos comandos do Git;
- [Git Tips.](https://github.com/git-tips/tips) Dicas úteis para o dia a dia; 
- [Git on VS Code.](https://www.digitalocean.com/community/tutorials/how-to-use-git-integration-in-visual-studio-code-pt) Como vincular o Git no VS Code;
- [Git School Dude.](https://www.youtube.com/c/DanGitschoolDude) Canal do YouTube com vários vídeos de Git excelentes. Ele cobre tudo, desde o básico até tópicos avançados; e
- [Entendendo o Git.](https://www.youtube.com/watch?v=6Czd1Yetaac) Vídeo do Fabio Akita explicando o detalhadamente o uso do Git.