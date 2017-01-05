# Symfony3 - Angular2

I try to combine [Symfony3](https://symfony.com/) and [Angular2](https://angular.io/) from scratch and with the [Angular Quickstart](https://angular.io/docs/ts/latest/quickstart.html).

## Getting started
Run the following commands:
```bash
cd sf-a
ln -s /var/www/html/sf-a/config/vhosts/sf-a.conf /etc/apache2/sites-available/
sudo service apache2 restart
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
Enable "rewrite" module:
```bash
sudo a2enmod rewrite
sudo service apache2 restart
```
===================================

I hope you will enjoy it!