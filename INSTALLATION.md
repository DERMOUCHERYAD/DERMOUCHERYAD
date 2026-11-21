# Installation (FR)

Ce ZIP est conçu pour ton dépôt de profil public `DERMOUCHERYAD/DERMOUCHERYAD`.

## Étapes

1. **Décompresse le ZIP**.
2. Dans ton dépôt GitHub `https://github.com/DERMOUCHERYAD/DERMOUCHERYAD`, copie **`README.md`**, **`assets/`**, **`scripts/`** et **`.github/workflows/update-banner.yml`** à la racine. Les dossiers qui commencent par un point (comme `.github`) sont parfois cachés : active l'affichage des fichiers masqués.
3. **Conserve le workflow Snake existant**, et son dossier ou sa branche de sortie `output`. Ce pack ne remplace pas son animation.
4. Dans l'onglet GitHub **Actions**, ouvre **Update animated profile banners** et clique **Run workflow**. (L'action devient disponible après un commit sur la branche par défaut.)
5. Si le workflow ne peut pas pousser, vérifie **Settings → Actions → General → Workflow permissions** et autorise **Read and write permissions** si la politique du dépôt le permet. Vérifie aussi la protection de branche, le cas échéant.
6. Vérifie le rendu du README sur ton **profil GitHub**, pas uniquement en aperçu local. Les animations SVG dépendent du moteur de rendu de GitHub et du navigateur. GitHub Actions peut différer l'horaire des exécutions planifiées.

## Fonctionnement

- Le script `scripts/generate-banners.mjs` génère `assets/banner-dark.svg` et `assets/banner-light.svg`.
- Les SVG contiennent des animations SMIL (curseur, révélation du texte, pulsations radar et barres), sans JavaScript exécuté dans le README.
- L'Action tourne une fois par jour (06:17 UTC), ou à la demande. Elle écrit la date UTC et sélectionne une ligne éditoriale parmi sept. Elle ne lit **aucune donnée privée** et ne nécessite **aucune clé externe**.
- La bannière photo `assets/hacker-workspace.webp` est hébergée dans le dépôt, et non sur une URL susceptible d'expirer.
- Les stats et badges sont chargés par des services publics externes et peuvent parfois être indisponibles. La bannière et son animation fonctionnent indépendamment de ces services.

## Tester en local

Installe Node.js 22+ (ou une version récente compatible) et exécute à la racine du dossier :

```sh
node scripts/generate-banners.mjs
```

Les deux SVG seront actualisés. Pour ne pas publier ce guide dans ton profil, tu peux conserver `INSTALLATION.md` uniquement sur ton ordinateur.

## Vie privée

Le README n'indique pas d'université, d'employeur ni de statut d'alternance. Il conserve toutefois le nom affiché, le lien LinkedIn, l'email professionnel déjà public et le portfolio de ton ancien README. Retire un contact si tu ne souhaites pas l'afficher.
