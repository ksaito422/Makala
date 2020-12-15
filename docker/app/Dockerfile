FROM php:7.4.0-fpm

COPY --from=composer:1.10 /usr/bin/composer /usr/bin/composer

COPY --from=node:10.22 /usr/local/bin /usr/local/bin
COPY --from=node:10.22 /usr/local/lib /usr/local/lib

# AWS ECRにpushするdocker imageを作成する時には下記のコメントアウトを解除する
# COPY ./docker/app/php.ini /usr/local/etc/php/php.ini
# COPY . /var/www/html

RUN apt-get update \
&& apt-get install -y \
git \
zip \
unzip \
vim \
&& docker-php-ext-install pdo_mysql bcmath

# webサーバー<nginx>にアクセス権を与えるため
# アクセス権限与えないと、laravel関連のエラー多発するため
RUN chown -R www-data:www-data /var/www/html

WORKDIR /var/www/html/work

