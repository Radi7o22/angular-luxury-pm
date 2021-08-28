# E-commerce уеб приложение 
## Работа на приложението
Разработеното уеб приложение представлява онлайн магазин за продажба и покупка на кожени артикули. Състои се от публична част,  достъпна за всеки потребител и защитена част, достъпна единствено след успешна автентикация от страна на потребителя. Приложението е защитено чрез JWT, който бива предоставен на клиента чрез успешно въвеждане на своите креденциали. Публичната част на приложението включва начална страница с всички продукти и количка към която потребителите могат да добавят желаните от тях продукти. Позволява се и изпращането на поръчка от неоторизирани потребители. Защитената част на приложението може да се достъпи като първо потребителят се регистрира от страницата за регистрация, след което бива пренасочен и при правилно въведени данни, бива пренасочен към страницата с продукти. Предимството на оторизираните потребители се състои в това, че имат възможност да въведат информация в профила си, която се запазва и автоматично се зарежда при регистриране на поръчка от системата. Целта е да се спести време на потребителя от въвеждането на една и съща информация многобройни пъти. При желание на потребителя инфомацията за доставка може да бъде променена еднократно без това да окаже влияние върху запазените данни в профила. Продуктите в началната страница могат да бъдат сортирани по категория от падащо меню, разположено в навигация в горната част на екрана. При натискането на мишката върху снимка на даден продукт се отваря нов екран, в който се зарежда детайлна информация за продукта и снимка на продукта. Продукт може да бъде добавен към количката от началния екран, както и от страницата за детайли за продукт. В количката се предоставя възможност за всеки продукт да бъде премахнат от количката, да бъде променено количеството му, както и да бъдат премахнати всички добавени продукти в количката. Полето за промяна на количество се валидира и се допускат единствено числа по-малки от трицифрени и цели положителни числа. Единствено при валидно въведено количество потребител може да продължи с поръчката чрез натискането на бутон, който пренасочва страницата към нов екран, в който потребител трябва да попълни своите данни за доставка, ако е нерегистриран потребител или да промени запазените данни от профила при необходимост, ако е регистриран потребител. При неправилно попълнени данни или липсващи данни, формата за доставка на поръчка отново е невалидна, като има валидации за имена, имейл, телефонен номер и адрес. Същите полета присъстват и в профила на всеки регистриран потребител. 

## Структура на проекта

Приложението е разделено в следните директории:
* store
* authentication
* core
* features
* shared
* user

Принадлежащите към тях файлове са представени на следващата графика.

src/
┣ app/
┃ ┣ +store/
┃ ┃ ┣ actions.ts
┃ ┃ ┣ effects.ts
┃ ┃ ┣ index.ts
┃ ┃ ┣ reducers.ts
┃ ┃ ┗ selectors.ts
┃ ┣ authentication/
┃ ┃ ┣ login/
┃ ┃ ┃ ┣ login.component.html
┃ ┃ ┃ ┣ login.component.scss
┃ ┃ ┃ ┣ login.component.spec.ts
┃ ┃ ┃ ┗ login.component.ts
┃ ┃ ┣ register/
┃ ┃ ┃ ┣ register.component.html
┃ ┃ ┃ ┣ register.component.scss
┃ ┃ ┃ ┣ register.component.spec.ts
┃ ┃ ┃ ┗ register.component.ts
┃ ┃ ┣ services/
┃ ┃ ┃ ┗ authentication.service.ts
┃ ┃ ┣ authentication-routing.module.ts
┃ ┃ ┗ authentication.module.ts
┃ ┣ core/
┃ ┃ ┣ components/
┃ ┃ ┃ ┣ footer/
┃ ┃ ┃ ┃ ┣ footer.component.html
┃ ┃ ┃ ┃ ┣ footer.component.scss
┃ ┃ ┃ ┃ ┣ footer.component.spec.ts
┃ ┃ ┃ ┃ ┗ footer.component.ts
┃ ┃ ┃ ┣ header/
┃ ┃ ┃ ┃ ┣ header.component.html
┃ ┃ ┃ ┃ ┣ header.component.scss
┃ ┃ ┃ ┃ ┣ header.component.spec.ts
┃ ┃ ┃ ┃ ┗ header.component.ts
┃ ┃ ┃ ┗ navigation/
┃ ┃ ┃   ┣ navigation.component.html
┃ ┃ ┃   ┣ navigation.component.scss
┃ ┃ ┃   ┣ navigation.component.spec.ts
┃ ┃ ┃   ┗ navigation.component.ts
┃ ┃ ┣ guards/
┃ ┃ ┃ ┗ auth.activate.ts
┃ ┃ ┣ constants.ts
┃ ┃ ┣ core.module.ts
┃ ┃ ┗ error-handler-interceptor.ts
┃ ┣ features/
┃ ┃ ┣ products/
┃ ┃ ┃ ┣ +store/
┃ ┃ ┃ ┃ ┣ actions.ts
┃ ┃ ┃ ┃ ┣ effects.ts
┃ ┃ ┃ ┃ ┣ index.ts
┃ ┃ ┃ ┃ ┣ reducers.ts
┃ ┃ ┃ ┃ ┗ selectors.ts
┃ ┃ ┃ ┣ components/
┃ ┃ ┃ ┃ ┣ product-details/
┃ ┃ ┃ ┃ ┣ product-item/
┃ ┃ ┃ ┃ ┗ products-list/
┃ ┃ ┃ ┣ models/
┃ ┃ ┃ ┃ ┣ category.ts
┃ ┃ ┃ ┃ ┣ image.ts
┃ ┃ ┃ ┃ ┣ item-details.ts
┃ ┃ ┃ ┃ ┣ item.ts
┃ ┃ ┃ ┃ ┗ subcategory.ts
┃ ┃ ┃ ┣ services/
┃ ┃ ┃ ┃ ┣ category-service.ts
┃ ┃ ┃ ┃ ┣ item-service.ts
┃ ┃ ┃ ┃ ┣ products.service.spec.ts
┃ ┃ ┃ ┃ ┗ products.service.ts
┃ ┃ ┃ ┣ products-routing.module.ts
┃ ┃ ┃ ┗ products.module.ts
┃ ┃ ┣ shopping-cart/
┃ ┃ ┃ ┣ +store/
┃ ┃ ┃ ┃ ┣ actions.ts
┃ ┃ ┃ ┃ ┣ effects.ts
┃ ┃ ┃ ┃ ┣ index.ts
┃ ┃ ┃ ┃ ┣ reducers.ts
┃ ┃ ┃ ┃ ┗ selectors.ts
┃ ┃ ┃ ┣ components/
┃ ┃ ┃ ┃ ┣ delivery-info/
┃ ┃ ┃ ┃ ┣ shopping-cart/
┃ ┃ ┃ ┃ ┗ shopping-cart-item/
┃ ┃ ┃ ┣ models/
┃ ┃ ┃ ┃ ┣ delivery-service.ts
┃ ┃ ┃ ┃ ┣ item-in-order.ts
┃ ┃ ┃ ┃ ┗ order.ts
┃ ┃ ┃ ┣ services/
┃ ┃ ┃ ┃ ┣ delivery-service.ts
┃ ┃ ┃ ┃ ┣ order-service.ts
┃ ┃ ┃ ┃ ┣ shopping-cart.service.spec.ts
┃ ┃ ┃ ┃ ┗ shopping-cart.service.ts
┃ ┃ ┃ ┣ shopping-cart-routing.module.ts
┃ ┃ ┃ ┗ shopping-cart.module.ts
┃ ┃ ┣ features-routing.module.ts
┃ ┃ ┗ features.module.ts
┃ ┣ shared/
┃ ┃ ┣ directives/
┃ ┃ ┃ ┣ form-validator.directive.spec.ts
┃ ┃ ┃ ┗ form-validator.directive.ts
┃ ┃ ┣ services/
┃ ┃ ┃ ┗ notification.service.ts
┃ ┃ ┣ material.module.ts
┃ ┃ ┣ shared.module.ts
┃ ┃ ┗ validators.ts
┃ ┣ user/
┃ ┃ ┣ +store/
┃ ┃ ┃ ┣ actions.ts
┃ ┃ ┃ ┣ effects.ts
┃ ┃ ┃ ┣ index.ts
┃ ┃ ┃ ┣ reducers.ts
┃ ┃ ┃ ┗ selectors.ts
┃ ┃ ┣ components/
┃ ┃ ┃ ┣ user/
┃ ┃ ┃ ┃ ┣ user.component.html
┃ ┃ ┃ ┃ ┣ user.component.scss
┃ ┃ ┃ ┃ ┣ user.component.spec.ts
┃ ┃ ┃ ┃ ┗ user.component.ts
┃ ┃ ┃ ┗ user-profile/
┃ ┃ ┃   ┣ user-profile.component.html
┃ ┃ ┃   ┣ user-profile.component.scss
┃ ┃ ┃   ┣ user-profile.component.spec.ts
┃ ┃ ┃   ┗ user-profile.component.ts
┃ ┃ ┣ models/
┃ ┃ ┃ ┗ user.ts
┃ ┃ ┣ services/
┃ ┃ ┃ ┣ user-profile.service.spec.ts
┃ ┃ ┃ ┣ user-profile.service.ts
┃ ┃ ┃ ┗ user-service.ts
┃ ┃ ┣ user-routing.module.ts
┃ ┃ ┗ user.module.ts
┃ ┣ app-routing.module.ts
┃ ┣ app.component.html
┃ ┣ app.component.scss
┃ ┣ app.component.spec.ts
┃ ┣ app.component.ts
┃ ┗ app.module.ts

Разработени са 6 модула включително: 
* authentication - в този модул се съдържат два компонента за логин и регистрация
* core - в този модул се съдържат компоненти header, footer, navigation
* products - този модул включва компонентите осигуряващи преглед на продуктите в магазина (product-item, product-details, product-list)
* shopping cart - съдържа компонентите, които отговарят за работата на количката, както и изпращането на поръчка
* shared - в отзи модул се съдържат директива за валидации, както и често използвани модули от приложението
* user - в този модул се съдържат 2 компонента за профила на потребителя, като единият от тях съдържа форма и се преизползва и в екрана за доставка на продукт

В core директорията на приложението е създаден  interceptor, който прихваща и обработва грешки, различавайки ги по техният код при възникването им и ги представя в подходящ за потребителя формат.

Използван е route guard, който защитава достъпа до определени пътища, когато е определено, че са защитени и в този случай се изисква автентикация за достъп до тях, а при опит за достъпването им потребителят е пренасочван към началната страница.

 В приложението са използвани template template-driven form в компонентите за логин и регистрация, както и reactive form в компонента за профил на потребителя, който бива преизползван и в страницата за данни за доставка. Задават се различни валидатори при използването на формата в зависимост от това откъде е отоворен компонентът и за какво са необходими данните от съответната форма.
 
 Използвани са помощни services за изпращането на заявки и за обработването на данните преди те да бъдат визуализирани в template-а на компонента.
За запазването на данните в приложението е използван state management. 

Създадени са няколко store-а за отделните модули, включително за модула за автентикация, модула за продукти, модула за количката и за модула за потребителят. Във всеки от тях се запазва информация, която се използва в компонентите, принадлежащи към всеки от модулите, като по този начин се постига сигурна единна обмяна на данни навсякъде, където тя е необходима за работата на приложението.