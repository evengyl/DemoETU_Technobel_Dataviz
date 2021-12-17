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
Sur base de connaissances que vous avez acquise  
Créer un caddie de course qui permettra d'ajouter des courses, de le lister, d'ajouter et de supprimer des choses,  
Bonus : l'heure à laquel il a été ajouté en heure local.  
Bonus : Vous devrez également créer une customs pipe pour permettre de traduire les quantité de produits dans le panier en toute lettre.  
(PS: le panier peux ne peux contenir que 5 fois un article maximum)