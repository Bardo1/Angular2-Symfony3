# Angular2 - Symfony3

I try to combine [Symfony3](https://symfony.com/) and [Angular2](https://angular.io/) with [Webpack](https://webpack.github.io/) from scratch/

## What's in the box?
I added the following modules:  
- [FOSRestBundle](http://symfony.com/doc/current/bundles/FOSRestBundle/index.html)  
- [ng2-slim-loading-bar](https://github.com/akserg/ng2-slim-loading-bar)
- [ng2-toastr](https://github.com/PointInside/ng2-toastr)  
- [ng2-translate](https://github.com/ocombe/ng2-translate)  

## Getting started
For apache, run the following commands:
```bash
cd ng2-sf3
sudo ln -s /var/www/html/ng2-sf3/config/vhosts/ng2-sf3.conf /etc/apache2/sites-available/
sudo a2ensite ng2-sf3.conf 
sudo service apache2 restart
```

Generate the SSH keys :

```
mkdir var/jwt 
openssl genrsa -out var/jwt/private.pem -aes256 4096  
openssl rsa -pubout -in var/jwt/private.pem -out var/jwt/public.pem  
```

To install dependencies:
```bash
cd application/be
composer install
cd ../fe
npm install
```

To auto-compile typescript files, run the following command:
```bash
npm start
```

### Don't forget...
Install your database manager and edit the Symfony "parameters.yml".  
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
