# DemoETU

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.



# Exercices
## Exos 1 - Les customs Pipe
### Exos 1.1
Dans un premier temps, créer un composant exos/exos1dot1, qui aura pour routage exos/exos1dot1 sous le format children vu précédement !  
ce compo ! devra contenir un pipe, qui permettra la transformation d'une valeur donnée en TWB par l'utilisateur,
en degré Celsius OU !!!! en Fahrenheit.  
Attention : le fait de passer de l'un à l'autre, devra être dicter par un paramètre du pipe !  
PS : lors de l'affichage, vous devrai montrer les deux conversion !  
exemple : si le user tape 37 -> ça affichera 37° Celsius et 98.6° Fahrenheit  

### Exos 1.2
Créer également le même système que pour l'exos précédent, mais avec comme nom exos1dot2.
Créer également un pipe qui, permettra la conversion d'un nombre de secondes passée en paramètre par du TWB  
PS : l'affichage final devra donc donner par exemple : 1 jours, 02 heures, 05 minutes, 00 seconde  
PS2 : Attention au 0 initial et au 's' des mots clés  
PS3 : Pour vous situer, 62587 secondes donnera 0 jour 17 heures 23 minutes 07 secondes

## Exos 2 - Les directives structurelles
### Exos 2
Sur base des connaissances que vous avez acquises.  
Créer un caddie de courses qui permettra d'ajouter des courses, de le lister, d'ajouter et de supprimer des choses,  
Bonus : l'heure à laquel il a été ajouté en heure local.  
Bonus : Vous devrez également créer un custom pipe pour permettre de traduire la quantité de produits dans le panier en toute lettres.  
(PS: le panier peux ne peux contenir que 5 fois un article maximum)
    
Pour améliorer vos compétences algo et angular je vous propose : 
d'améliorer le panier de course, en incluant la possibilité de modifier la liste de course.
ensuite, il faudra permettre d'enregistrer le panier de course (sauvegarder)
un bouton permettra d'afficher sur une autre card le panier sauvegarder.
attention, le panier sauvegarder devra être afficher en vert sur fond jaune, le texte passera en violet 
lors du survole (directive d'attribut custom)

## Exos 3 - Les inputs Outputs
### Exos 3.1
Sur base des connaissances que vous avez acquises.  
Créer un système de gestion de mise à jour de prix de produits léger.  
Vous devrez avoir un compo parents (products) et un compo enfant (details)  
le compo parent se chargera de tout.... j'entend par la, la possiblité de supprimer un produits,  
mettre à jour son prix, c'est lui qui contient la liste de produits.  
Chaque compo (selecteur) enfant, est en réalité un ligne de produits.  
Donc : n'oubliez pas, la suppression et la mise à jour du prix se déclenche dans l'enfant MAIS se fait dans le parent.  
PS : Pour des raisons évidentes de propretés et de professionnalismes, les produits seront un objet simple mais il
devra contenir, un ID !!!!! (facilité pour la suppression et le modification du prix)

### Exos 3.2
Sur base des connaissances que vous avez acquises.  
Reprendre l'exercise, 3.1 products details, et transformer tout les concepts en appel de service,  
PS : le service sera créé dans le même folder que l'exos pour des raisons de facilités.  
PS2 : le service devra n'être utilisable que par le app.module  
attention, pour l'exercise, plus aucun Input ni Output ne doivent être présents  
à cela, vous ajouterez un fake service (différent) de connexion.  
à cela vous ajouterez également une possibilité d'ajouter un produit  
Seul les personnes loguée, pourront delete, update le prix, ajouter un produits mais par contre elle pourront voir les produits.  

### Exos 3.3 entremet
reprennez le concept du 3.2
en partant du concept que ce n'est plus des produits, mais un petit système traiteur de fin d'année
ne vous prenez pas la tête avec les input output, partez en mode un compo, full services