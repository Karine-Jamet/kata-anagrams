# Grouper les anagrammes

## Objectif

Grouper les chaînes de caractères qui sont des anagrammes, par exemple:

```
// input
["parisien", "Marion", "aspirine", "manoir", "Romain", "clef"]

// output (à noter que l'ordre d'apparition d'un mot est pour faire les groupes)
[
  ["parisien", "aspirine"],
  ["Marion", "manoir", "Romain"]
  ["clef"]
]
```

Si l'argument n'est pas un tableau ou est un tableau vide, retournez `null`.

## Instructions

Pour vous guider, il est demandé de créer deux fonctions dans le fichier src/Anagrams.js :
- sortCharacters qui prend toutes les lettres d'un mot, les passe en minuscules et les met par ordre alphabétique, par exemple "Marion" devient "aimnor"
- groupAnagrams qui réalise l'exercice demandé et utilise sortCharacters pour faire le tri

## Test
Dans le terminal, placez-vous à la racine du projet (dans le répertoire kata-anagrams) et lancer
```
$ jasmine
```

Lorsque jasmine ne renvoie que des marqueurs verts, l'exercice est réussi.
