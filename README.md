# Projet Pharmacie Isisienne 
[![forthebadge](https://forthebadge.com/images/featured/featured-built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/featured/featured-contains-cat-gifs.svg)](https://forthebadge.com) 


## [Lien de l'application hébergée](https://flomelle-ca.alwaysdata.net/) - Hébergée sur AlwaysData

Bienvenue sur la Pharmacie Isisienne, la plateforme qui recense les meilleurs produits pharmaceutiques au meilleur prix 

## Pour commencer

Ce projet est a été développé dans le cadre  du cours de Technologie Web avec M. Alexis Combes. Les consignes sont simples : "développer le front d'une application web permettant de gérer le stock de médicaments d’une pharmacie.

## Fonctionnalités Page d'accueil
### - Header

#### Barre de recherche interactive

S’affiche de façon élégante au survol dans le header.
Recherche envoyée au clavier (Entrée) ou en cliquant sur la loupe.
Défilement smooth vers la liste des résultats après une recherche.

#### Accès Admin sécurisé

Un bouton dédié ouvre une modale de connexion Admin.
Indication claire en cas de mauvais mot de passe.
Redirection vers l’Espace Admin après validation.

### - Main

#### Affichage de la liste avec données récupérées via API :

Dénomination
Quantité
Forme
Image
Gestion de la recherche

Aucun résultat ? Un message adapté s’affiche + bouton pour réinitialiser la recherche.

Navigation améliorée
Une petite flèche flottante apparaît dès que l’on scrolle suffisamment : cliquez pour remonter en haut de la page !

## Fonctionnalités Page Admin
### - Header

#### Barre de recherche interactive

S’affiche de façon élégante au survol dans le header.
Recherche envoyée au clavier (Entrée) ou en cliquant sur la loupe.
Défilement smooth vers la liste des résultats après une recherche.

#### Accès Accueil

Un bouton dédié pour revenir sur la page accueil

### - Main

Gestion avancée des médicaments

#### Ajout d’un médicament

Ajout facile via une modale dédiée.
Saisie de toutes les informations nécessaires.
Tableau interactif des médicaments

Affichage de tous les médicaments avec leurs informations clés.
Actions rapides sur chaque médicament :
+ : Ajouter 1 à la quantité disponible.
– : Retirer 1 à la quantité disponible.

⚠️ On ne peut pas retirer 1 à la quantité de médicament si celle ci est déjà à 1. On ne peut pas non modifier la quantité de médicaments en dessous de 1

#### Modification d’un médicament

Un bouton Modifier ouvre une modale pré-remplie avec les anciennes informations, pour ajuster facilement le nom, la quantité, la forme, ou l’image.
Suppression d’un médicament

Un bouton Supprimer pour retirer définitivement un médicament de la base.

#### Sécurité & retours
Modales et feedbacks clairs : messages de succès, erreurs ou confirmations.
Accès restreint : seules les personnes authentifiées peuvent utiliser ces actions. ( Via une variable localStorage )

Aucun résultat ? Un message adapté s’affiche + bouton pour réinitialiser la recherche.

Navigation améliorée
Une petite flèche flottante apparaît dès que l’on scrolle suffisamment : cliquez pour remonter en haut de la page !

## Fabriqué avec

* [Vue.js](https://vuejs.org/) - Framework Javascript (front-end)

## Versions
**Dernière version stable :** 1.0
Liste des versions : [Cliquer pour afficher](https://github.com/FlorestanMC/Projet_Pharmacie/tags)

## Auteurs
Listez le(s) auteur(s) du projet ici !
* **Florestan Mellé** _alias_ [@FlorestanMC](https://github.com/FlorestanMC)
