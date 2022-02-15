<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm start
```

## Projenin Çalışması
Proje indirildikten sonra Postgre Veritabanınızda *sezerproducts* adında yeni bir veritabanı oluşturunuz. Eğer veritabanınızın şifresi *1234* 'den farklı ise proje dizinine gidin *'/.env'* yolundaki dosya içerisinde DB_PASS kısmına şifrenizi girin. Ardından npm start komutu ile projeyi çalıştırabilirsiniz.

Projede Category ve Product alanı bulunmaktadır.
Category kısmında Ekleme ve Görüntüleme (Id ye göre) istekleri mevcuttur. '/category'
Product kısmında Ekleme , Görütüleme , Güncelleme ve Silme işlemleri mevcuttur. Son 3 işlem id ye göre yapılmaktadır.
Bir category Eklemeden product ekleyemezsiniz.
Var olmayan bir category id sini product a veremezsiniz

## Postman Collection Link
https://www.getpostman.com/collections/6aa9b00b2adf7b46aa7f

### Dikkat
Eğer öncesinde bu veritabanı üzerinde ekleme işlemi yaptıysanız burdaki id değerlerini değiştirmeniz gerekir.
