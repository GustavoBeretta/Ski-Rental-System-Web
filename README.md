# Trabalho-Web

## Membros:

* Andres Kindel Barbosa
* Gustavo Beretta Gonçalves
* Josef Konrad Holanda Bruseke
* Luiz Adriano Augusto dos Santos

---

## Resumo

A ideia do trabalho é desenvolver um sistema web para a empresa [Wisp Resort](https://www.wispresort.com/), mais especificamente para o setor de aluguel de equipamentos de esqui e snowboard. A empresa é um resort sediado em McHenry, Maryland, EUA.

O sistema contará com páginas de login separadas para cliente e funcionário, mas o mesmo cadastro de funcionário funciona nos 2 acessos.

Pelo cadastro como cliente, o mesmo poderá criar novos pedidos de aluguel de equipamentos, visualizar e cancelar os pedidos de aluguel já requisitados e gerenciar configurações da conta.

Já o cadastro de funcionário permitirá ver e gerenciar os pedidos de aluguel recebidos e gerenciar os usuários cadastrados no sistema.

A função básica do sistema será permitir que o cliente submeta pedidos de aluguel com suas informações e o funcionário receba esse pedido e monitore seu status.

O cadastro de novos usuários poderá ser realizado de forma autônoma, mas, para ser cadastrado como funcionário, outro funcionário deve validar esse novo cadastro.

---

## Requisitos da aplicação _Web_:

* A aplicação deve ser acessível apenas após autenticação
* A aplicação deve permitir o cadastro de novos usuários
* Quando autenticado, o usuário deve poder atualizar seu cadastro
* Deve existir alguma base de dados no back-end (ex: mongodb)
* Deve ser possível compartilhar dados entre usuários
* A aplicação deve ficar disponível 24/7 em algum servidor da Nuvem UFSC ou externo à UFSC (vamos ver como configurar isso na aula 16)
* O front-end deve ser responsivo (desktop e mobile)
