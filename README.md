# React TodoList

## Présentation

Ce projet est un test technique, réalisé en NextJs.
Il a été réalisé en 12h, avec un objectif initial de 10h.
Le choix a été fait de faire une application exploitable, avec un back (Next) et de la donnée stockable. Je me suis projeté sur un cas d'utilisation personnel : todolists partagée avec ma compagne, je compte l'utiliser une fois les next steps finalisés.
Tout est fait from scratch, à l'exception du layout Home qui a été fortement inspiré de la page d'acceuil NextJs à la création du projet.
N'étant pas graphiste, le design laisse à désirer...

## Utilisation

- cloner le repo
- npm install puis npm run dev pour lancer le projet
- la home page et les données qui y sont présentes proposent 2 listes décrites explicitement
- l'utilisation est plutôt intuitive il me semble, la seule subtilité est le petit balai qui supprime les taches terminées

## Choix généraux

L'application a été réalisée avec les éléments suivants :

- Framework : NextJs, permettant un découpage propre, une gestion des routings, une modularisation des CSS, et un backend embarqué
- Librairie graphique : ChakraUI, pour limiter le temps de design et garantir un focus sur l'archi et la modélisation
- Editeur : VsCode

## Choix d'architecture

### Structure

L'application comporte 2 pages: une page Home et une page TodoList, routée par Id.
Chaque page est autonome en terme de chargement / envoi de la donnée.

### Donnée

La responsabilité de la donnée / l'intéraction avec l'API est en haut de l'arborescence de chaque page.
L'état est diffusé dans les composants enfants, qui sont stateless (du point de vue modèle fonctionnel). Ces derniers contiennent tou de même de l'état pour le display. L'état global est recréé, pas de mutation d'état, approche fonctionnelle pure.
Chaque action va recalculer l'état global de la page, et envoyer un update à l'API.
L'API communique avec une base locale temporaire en JSON. Le code n'y est pas proprement typé car jettable.

### Composants

Le choix a été fait d'extraire la logique "fonctionnelle" des composants dans des custom hooks, localisés dans le dossier services.
Les composants ne sont ainsi responsables que du display et de la remontée d'évènements.
Les composants graphiques ont été piochés dans la librairie CHakraUI (assez light et facile d'accès)

### Style

La modulisation CSS de NextJs permet un découpage clair Composant -> Module, les modules sont localisés dans le dossier styles.

## Critiques

L'objectif de 10h a été dépassé en raison de :

- ma méconnaissance de la librairie ChakraUI qui a été plus difficile à prendre en main que prévue, et l'intégration avec une approche CSS du layout.
- quelques tatonnements sur le design et la partie responsive

L'approche en terme de style / layout est finalement hybride entre une approche blo (type Flutter) de ChakraUI et une approche CSS / classes commencée initialement, ce qui créé de la compléxité. Il aurait fallu tout faire en approche bloc, ce que j'ai compris que trop tard en ayant mal lu les spécifications de la libraire ChakraUI (point lister en next step).

Je n'ai pas eu le temps d'effectuer de tests unitaires. Les premiers candidats sont clairement les 2 custom hooks, le reste du code étant assez passe plat.

## Prochaines étapes :

Listées dans la TodoList "Next steps TodoList" de l'application
