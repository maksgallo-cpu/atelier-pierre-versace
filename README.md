# Atelier Pierre Versace, site web

Site statique (HTML/CSS, aucun framework, aucune étape de build), prêt pour Netlify via GitHub.

## Mise en ligne (prévisualisation client)

1. Crée un dépôt GitHub et pousse **le contenu de ce dossier** à la racine du dépôt.
2. Dans Netlify : *Add new site › Import an existing project › GitHub*, choisis le dépôt.
   - Build command : *(vide)*
   - Publish directory : `.` (déjà défini dans `netlify.toml`)
3. Netlify donne une URL du type `https://nom-du-site.netlify.app` : c'est le lien à envoyer au client.
4. Formulaire : dans Netlify, *Forms* doit afficher le formulaire **contact** après le premier déploiement. Active *Form notifications › Email notification* vers l'adresse du client (ou la tienne pendant la préview).

Pendant la préview, le site est **non indexé** (en-tête `X-Robots-Tag: noindex` dans `netlify.toml`), pour éviter que Google indexe l'URL temporaire.

## Passage en production (vrai nom de domaine)

- [ ] Netlify › *Domain management* : ajouter le domaine, DNS, HTTPS.
- [ ] `netlify.toml` : **supprimer le bloc « PRÉVISUALISATION CLIENT »** (noindex).
- [ ] Vérifier le domaine : les URLs canoniques, `sitemap.xml`, `robots.txt`, `llms.txt` et les données structurées utilisent `https://www.atelierpierreversace.com`. Si le domaine final est différent, me le dire pour régénérer.
- [ ] Google Search Console + Bing Webmaster Tools : valider le domaine, soumettre `/sitemap.xml`.
- [ ] Fiche Google Business Profile : même nom, adresse et téléphone que sur le site.
- [ ] Ajouter les liens des réseaux sociaux de l'atelier (champ `sameAs` des données structurées).
- [ ] **Mentions légales et politique de confidentialité** : obligatoires en France (LCEN / RGPD), à créer avec les informations légales du client (raison sociale, SIRET, hébergeur, responsable de publication).

## Remplacer les photos par les originaux

Les photos actuelles sont extraites de la maquette (basse définition). Pour chaque ligne, fournir l'original HD ; je régénère les fichiers WebP aux bons formats (800 / 1600 / 2000 px).

| Page | Fichier (préfixe dans `assets/img/`) |
|---|---|
| Accueil, hero gauche | `briquettes-terre-cuite-artisanale` |
| Accueil, hero droite | `banquette-sol-terre-cuite-emaillee` |
| Accueil, matière | `matiere-terre-cuite-brute` |
| Accueil, applications | `comptoir-lave-emaillee-bordeaux-carreaux-verts` |
| Accueil, sur-mesure | `bassin-terre-cuite-lave-emaillee-terrasse-mer` |
| Accueil, savoir-faire | `artisan-atelier-ceramique-cagnes-sur-mer` |
| Réalisations, hero | `realisation-bassin-terre-cuite-cote-d-azur` |
| Réalisations | `salle-voutee-sol-tomettes-terre-cuite`, `la-colombe-d-or-saint-paul-de-vence`, `panneau-carreaux-emailles-bordeaux-flammes`, `mur-carreaux-relief-emailles-noirs` |
| Applications, hero | `escalier-carreaux-emailles-rouges-arcades` |
| Applications | `sol-carreaux-terre-cuite-diagonale`, `cuisine-ilot-lave-emaillee-bordeaux`, `salle-de-bain-douche-carreaux-bleus`, `mobilier-lave-emaillee-terrasse`, `carreaux-emailles-pieces-uniques-four` |
| Matières, hero | `carreaux-ceramique-emaillee-jaune-miel` |
| Matières | `terre-cuite-cabochon-peint-main`, `gres-relief-vert-pale`, `ceramique-emaillee-turquoise`, `pierre-de-lave-emaillee-noire` |
| Couleurs, hero | `carreaux-emailles-degrades-bordeaux` |
| Couleurs | `email-blanc-craquele`, `carreaux-emailles-ocre`, `carreaux-relief-vert-bouteille` |
| Atelier, hero | `atelier-pierre-versace-artisan-moules` |
| Atelier | `damier-carreaux-emailles-beige-brun`, `mains-artisan-carreaux-emailles`, `excellence-artisanale-carreaux-verts` |
| Contact, merci, 404 | `carreaux-emailles-terre-cuite-relief` |

## Contenu du dossier

- `index.html`, `realisations/`, `applications/`, `matieres/`, `couleurs/`, `atelier/`, `contact/` : les 7 pages (URLs propres)
- `merci/` : page de confirmation du formulaire (non indexée) · `404.html`
- `assets/css/site.css` · `assets/js/main.js` (menu mobile) · `assets/fonts/` (Poppins et Montserrat auto-hébergées, sans Google Fonts : conforme RGPD) · `assets/img/` (WebP responsive, logos)
- SEO / AEO / GEO : `sitemap.xml`, `robots.txt` (moteurs IA autorisés), `llms.txt` (fiche de l'atelier pour les IA), données structurées schema.org sur chaque page (LocalBusiness, WebSite, WebPage, BreadcrumbList), balises Open Graph et image de partage `assets/img/og-atelier-pierre-versace.jpg`
- `favicon.ico`, icônes, `site.webmanifest`
- `netlify.toml` : en-têtes de sécurité, cache, noindex de préview
