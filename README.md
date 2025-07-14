## CAPN Nepal Website

### Local development (with docker)

**Clone**

Clone the repository using HTTPS, SSH, or Github CLI

```bash
git clone https://github.com/capn-nepal/website.git #HTTPS
git clone  git@github.com:capn-nepal/website.git #SSH
gh repo clone capn-nepal/website #Github CLI
```
Download the contents of backend(website-backend)
```bash
git submodule update --init --recursive
```
Create Environment variables
> NOTE: create  `.env` file for backend 
```bash
cd backend
```
```bash
touch .env
```
   Example `.env` file
   ```
   PORT=
   APP_GRAPHQL_ENDPOINT=
   COMPOSE_FILE=
   ...
   ```

* create .env file for the CAPN-website
```bash
touch .env
```
   Example `.env` file
   ```
    SECRET_KEY
    TC_CMS_ADDITIONAL_TRUSTED_ORIGINS=
    DJANGO_SECRET_KEY=
   ...
   ```

**Build and pull images**
```bash
docker compose pull
docker compose build 
```

### Run

**Essentials**
```bash
docker compose up
```
Install the dependencies
```bash
docker compose exec next bash -c 'pnpm install'
```
Pre-build
```bash
docker compose exec next bash -c 'pnpm prebuild'  
```

Generate type
```bash
docker compose exec next bash -c 'pnpm generate:type'

Open [http://localhost:3053](http://localhost:3053) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
