# Angular2 - Symfony3

I try to combine [Symfony3](https://symfony.com/) and [Angular2](https://angular.io/) with [Webpack](https://webpack.github.io/) from scratch.

## What's in the box?
I added the following modules:  
- [FOSRestBundle](http://symfony.com/doc/current/bundles/FOSRestBundle/index.html) 
- [NelmioCorsBundle](https://github.com/nelmio/NelmioCorsBundle)
- [LexikJWTAuthenticationBundle](https://github.com/lexik/LexikJWTAuthenticationBundle) 
- [angular2-jwt](https://github.com/auth0/angular2-jwt)
- [ng2-slim-loading-bar](https://github.com/akserg/ng2-slim-loading-bar)
- [ng2-toastr](https://github.com/PointInside/ng2-toastr)  
- [ng2-translate](https://github.com/ocombe/ng2-translate)  

## Getting started
### Apache
For apache, run the following commands:
```bash
cd ng2-sf3
sudo ln -s /var/www/html/ng2-sf3/config/vhosts/ng2-sf3.conf /etc/apache2/sites-available/
sudo a2ensite ng2-sf3.conf 
sudo service apache2 restart
```
### Lexik JWT Authentication
Generate the SSH keys :

```
cd application/be
mkdir var/jwt 
openssl genrsa -out var/jwt/private.pem -aes256 4096  
openssl rsa -pubout -in var/jwt/private.pem -out var/jwt/public.pem  
```

### Install dependencies
To install dependencies:
```bash
composer install
cd ../fe
npm install
```

### Run webpack
```bash
npm start
```

### Doctrine
```bash
cd ../be
php bin/console doctrine:schema:update --force
```

### Don't forget...
Add the following line in /etc/hosts
```
127.0.0.1 	ng2-sf3.dev
```
Enable "rewrite" module:
```bash
sudo a2enmod rewrite
sudo service apache2 restart
```
===================================

I hope you will enjoy it!
