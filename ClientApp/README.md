# Facturation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 🧱 Architecture générale
[ Angular (Frontend) ]  <-->  [ ASP.NET Core Web API (Backend) ]  <-->  [ Database (SQL Server / PostgreSQL) ]

# Fournis un aperçu de l’organisation des fichiers et répertoires.

Dossier racine du projet Angular
/src
  /app
    /core          → services globaux (auth, api, interceptors)
    /shared        → composants partagés, pipes, directives
    /modules
      /clients     → CRUD clients
      /factures    → CRUD factures
      /produits    → CRUD produits
      /home        → page d'accueil
      /dashboard   → page d'accueil (user connected)
    /auth          → login, register
    /layout        → header, footer, sidebar
  /assets
  index.html


Dossier du projet .NET Core MVC (backend)
  /Controllers 
  /Data
  /Migrations
  /Models


## 🔁 Communication Angular <-> API
Format JSON via REST

Exemples d’URL :

GET /api/clients
GET /api/clients/byAuteurId/5
GET /api/clients/byId/5
POST /api/clients/create
POST /api/clients/create
POST /api/clients/delete


GET /api/factures
GET /api/factures/byAuteurId/5
POST /api/factures/byId/5
POST /api/factures/create
POST /api/factures/edit
POST /api/factures/delete


GET /api/produits
GET /api/produits/byId/5
GET /api/produits/byFactureId/5
POST /api/produits/create
POST /api/produits/edit
POST /api/produits/delete


GET /api/users
GET /api/users/byId/5
POST /api/users/login
POST /api/users/create
POST /api/users/edit
POST /api/users/delete


