window.addEventListener('resize', setVersion);

const container = document.querySelector('.container');
class User {
    constructor(options) {
        this.email = options.email
        this.name = options.name
        this.phone = options.phone
        this.sistem = options.sistem
    }
};
//createHeader();

setVersion ();

function setVersion () {
    let width = window.innerWidth;
    
    width > 481 ? createHeader() : createPhoneVersion ();
}

function createHeader() {
    const headerinner = document.createElement('div');
    headerinner.classList.add('header_inner');
    headerinner.innerHTML = `
            <div class="logo_box">
            <div class="img_box">
                <img class="logo_img" src="img/header_img/logo.png" alt="">
            </div>
            <div class="logo_link">
                <a class="logo_linl_text" href="#">WARPLAY.CLOUD</a>
            </div>
        </div>
        <div class="nav_box">
            <nav class="navigation" >
                <a class="nav_link" href="#">Главная</a>
                <a class="nav_link" href="#">Сервера</a>
                <a class="nav_link" href="#">Скачать</a>
                <a class="nav_link" href="#">Открыть в браузере</a>
                <a class="nav_link" href="#">Цены</a>
                <a class="nav_link" href="#">Тех поддержка</a>
                <a class="nav_link" href="#">Контакты</a>
            </nav>
        </div>
    `
    container.appendChild(headerinner);
    const caruselBox = document.createElement('div');
    caruselBox.classList.add('carusel_box');
    container.appendChild(caruselBox);
    createGalary();
}


function createGalary() {
    const caruselBox = document.querySelector('.carusel_box');
    
    images.forEach(item => {
        let caruselcard = document.createElement('div');
        caruselcard.classList.add('carusel_card');
        for (let i in item) { caruselcard.innerHTML = `<img class="carusel_img" src="${item[i]}" alt="">`; }
        caruselBox.appendChild(caruselcard);

        caruselcard.width = caruselBox.clientWidth;
        caruselcard.height = caruselBox.clientHeight;
        let images = document.querySelectorAll('.carusel_img');
        for ( let img of images){
            img.height = caruselcard.height;
            img.width = caruselBox.clientWidth;
        }
        
    });

    let caruselimages = document.querySelectorAll('.carusel_img');
    for (let carusimg of caruselimages) {
        carusimg.width = caruselBox.clientWidth;
        carusimg.height = caruselBox.clientHeight;
    }
    let step = 1;
    let cards = document.querySelectorAll('.carusel_card');
    function changeImg() {
        for (let card of cards) {
            card.style.transform = `translateX(${- 100 * step}%)`;
        }
        step++;
        if (step == cards.length) { step = 0 };
    }

    setInterval(changeImg, 4000);
    let contentBox = document.createElement('div');
    contentBox.classList.add('header_content_box');
    contentBox.innerHTML = `
            <div class="header_sup_title">
                Сервис облачного гейминга
            </div>
            <div class="header_title">
                Преврати свое устройство в игровое 
            </div>
            <div class="button_header">
                <a class="header_link_button" href="#">UPGRADE</a>
            </div>
    `
    caruselBox.appendChild(contentBox);
    
    createHowItIsWork ();
}

function createHowItIsWork () {
    let howBox = document.createElement("div");
    howBox.classList.add('how_box');
    howBox.innerHTML = `
    <div class="half_how">
                <img class="how_img" src="img/how_section/all_deckstop.png" alt="">
            </div>
            <div class="half_how">
                <div class="half_how_content">
                    <div class="sup_title_how">
                        <span class="before"></span>
                        ${info.supTitle}
                    </div>
                    <div class="how_title">
                        ${info.title}
                    </div>
                    <div class="how_text">
                        ${info.contentFirstPart}
                    </div>
                    <br class="br_how">
                    <div class="how_text">
                        ${info.contentSecondpart}
                    </div>
                    <div class="how_link_box">
                        <a class="how_link" href="#">загрузить</a>
                    </div>
                </div>
            </div>
    `
    container.appendChild(howBox);
    let startToPlay = document.createElement('div');
    startToPlay.classList.add('start_to_play');
    startToPlay.innerHTML = `
        <div class="srart_sup_title">
            <span class="before"></span>
            Быстрый старт
        </div>
         <div class="start_title">
            Начни играть
        </div>
    `
    container.appendChild(startToPlay);
    let stepsBox = document.createElement('div');
    stepsBox.classList.add('steps_box');
    
    for ( let i in stepsforStart) {
        let stepitem = document.createElement('div');
        stepitem.classList.add('step_item');
        stepitem.innerHTML = `
        <div class="step_box_img">
            <img class="step_img" src="${stepsforStart[i]}" alt="">
        </div>
        `
        stepsBox.appendChild(stepitem);
    }
    
    let stepDescBox = document.createElement('div');
    stepDescBox.classList.add('step_desc_box');
    stepsBox.appendChild(stepDescBox);
    
    for (let j in stepsDesc){
        
        let stepdesc = document.createElement('div');
        stepdesc.classList.add('step_description');
        stepdesc.innerHTML = stepsDesc[j];
        stepDescBox.appendChild(stepdesc);
    }
    startToPlay.appendChild(stepsBox);
    let linkStartBox = document.createElement('div');
    linkStartBox.classList.add('link_start_box');
    linkStartBox.innerHTML = `
        <a class="how_link" href="#">начать</a>
    `
    container.appendChild(linkStartBox);
    createsHowPrices (); 
};

function createsHowPrices () {
    let startToPlay = document.createElement('div');
    startToPlay.classList.add('start_to_play');
    startToPlay.innerHTML = `
        <div class="srart_sup_title">
            <span class="before"></span>
            Гибкие тарифы
        </div>
         <div class="start_title">
            Доступные подписки
        </div>
    `
    container.appendChild(startToPlay);
    let pricesBox = document.createElement('div');
    pricesBox.classList.add('prices_box');

    prices.forEach(block => {
        let pricesItem = document.createElement('div');
        pricesItem.classList.add('prices_item');
        pricesItem.innerHTML = `
            <div class="ptices_title">
                ${block.title}
            </div>
            <div class="price_per_hour">
                ${block.pricePer}
            </div>
            <div class="price_desc">
                ${block.description}
             </div>
            <div class="pices_button">
                <a class="prices_link" href="#">Выбрать</a>
            </div>
        `
        pricesBox.appendChild(pricesItem);
    })
    container.appendChild(pricesBox);
    
    createAnyDevaices ();
}

function createAnyDevaices () {
    let howBox = document.createElement("div");
    howBox.classList.add('how_box');
    howBox.innerHTML = `
    <div class="half_how">
        <div class="half_how_content">
            <div class="sup_title_how">
                <span class="before"></span>
                ${anyDevaices.supTitle}
            </div>
            <div class="how_title">
                ${anyDevaices.title}
            </div>
            <div class="how_text">
                ${anyDevaices.contentPart}
            </div>
            <div class="how_link_box">
                <a class="how_link" href="#">Открыть в браузере</a>
            </div>
        </div>
    </div>
    <div class="half_how">
        <img class="how_img" src="img/how_section/any_devaices.png" alt="">
    </div>
    `
    container.appendChild(howBox);
    let startToPlay = document.createElement('div');
    startToPlay.classList.add('start_to_play');
    startToPlay.innerHTML = `
        <div class="srart_sup_title">
            <span class="before"></span>
            Игровые сервера на карте
        </div>
         <div class="start_title">
            Карта локаций
        </div>
    `
    container.appendChild(startToPlay);
    let mapBox = document.createElement('div');
    mapBox.classList.add('map_box');
    mapBox.innerHTML = `<img class="map" src="img/how_section/map.png" alt="">`;
    container.appendChild(mapBox);

    let footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.innerHTML = `
    <div class="logo_box">
    <div class="img_box">
        <img class="logo_img" src="img/header_img/logo.png" alt="">
    </div>
    <div class="logo_link">
        <a class="logo_linl_text" href="#">WARPLAY.CLOUD</a>
    </div>
    `
    const body = document.querySelector('body');
    body.appendChild(footer);
    let buttonHeader = document.querySelector('.button_header');
    buttonHeader.addEventListener('click', createForms);
}

function createPhoneVersion () {
    let containerSecond = document.createElement('div');
    containerSecond.classList.add('container_second');
    containerSecond.innerHTML = `
    <div class="header_phone">
                <div class="header_phone_inner">
                    <div class="logo_box">
                        <img class="logo_img" src="img/phone/header/Group_32.png" alt="">
                    </div>
                </div>
                <div class="header_sup_title">
                    Сервис облачного <br>гейминга
                </div>
                <div class="header_title">
                    Преврати свое устройство в игровое 
                </div>
                <div class="button_header_phone">
                    <a class="header_link_button" href="#">UPGRADE</a>
                </div>
                <div class="burger_box">
                    <span class="burger_layer"></span>
                    <span class="burger_layer"></span>
                </div>
                <div class="burger_menu">
                    <div class="header_phone_inner">
                        <div class="logo_box">
                            <img class="logo_img" src="img/phone/header/Group_32.png" alt="">
                        </div>
                    </div>
                    <div class="birger_menu_box">
                        <ul>
                            <li><a class="burger_link" href="index.html">Главная</a></li>
                            <li><a class="burger_link" href="#">Скачать</a></li>
                            <li><a class="burger_link" href="#">Открыть в браузере</a></li>
                            <li><a class="burger_link" href="#">Цены</a></li>
                            <li><a class="burger_link" href="#">Тех поддержка</a></li>
                            <li><a class="burger_link" href="#">Контакты</a></li>
                        </ul>
                    </div>
                    <hr>
                </div>
            </div>
            <div class="phone_how_is_work">
                <div class="sup_title_how">
                    <span class="before"></span>
                    <div class="sup_title_how">
                        Облачный гейминг
                    </div>
                </div>
                <div class="how_title">
                    как это работает
                </div>
                <div class="how_text">
                    Наши сервера запускают игру, и передают вам картинку, которой вы можете управлять в реальном времени!
                </div>
                <div class="how_phone_img_box">
                    <img class="how_phone_img" src="img/phone/header/Rectangle_214.png" alt="">
                </div>
                <div class="how_text">
                    Приложение  запустится на ПК с процессором от 1.5 GHz , от 1 Gb RAM и доступом в интернет от 15 мбит/с на всех операционых системах Windows 7, 8, 10 MacOS и Linux .
                </div>
                <div class="how_link_box">
                    <a class="how_link" href="#">загрузить</a>
                </div>
            </div>
            <div class="phone_start_play">
                <div class="sup_title_how">
                    <span class="before"></span>
                    <div class="sup_title_how">
                        Быстрый старт
                    </div>
                </div>
                <div class="how_title">
                    Начни играть
                </div>
                <div class="start_play_phone_img_box">
                    <div class="start_play_phone_item">
                        <div class="phone_img_item_box">
                            <img class="phone_img_item" src="img/phone/header/Mail_Contact.png" alt="">
                        </div>
                        <div class="phone_play_title">
                            Cоздайте аккаунт
                        </div>
                    </div>
                    <div class="start_play_phone_item">
                        <div class="phone_img_item_box">
                            <img class="phone_img_item" src="img/phone/header/Download_from_the_Cloud.png" alt="">
                        </div>
                        <div class="phone_play_title">
                            Cкачайте модуль
                        </div>
                    </div>
                    <div class="start_play_phone_item">
                        <div class="phone_img_item_box">
                            <img class="phone_img_item" src="img/phone/header/Library.png" alt="">
                        </div>
                        <div class="phone_play_title">
                            Выберите тариф 
                        </div>
                    </div>
                    <div class="start_play_phone_item">
                        <div class="phone_img_item_box">
                            <img class="phone_img_item" src="img/phone/header/Apple_Arcade.png" alt="">
                        </div>
                        <div class="phone_play_title">
                            Начни играть
                        </div>
                    </div>
                </div>
                <div class="how_link_box">
                    <a class="how_link" href="#">начать</a>
                </div>
            </div>
            <div class="phone_price">
                <div class="sup_title_how">
                    <span class="before"></span>
                    <div class="sup_title_how">
                        Гибкие тарифы
                    </div>
                </div>
                <div class="how_title">
                    Доступные подписки
                </div>
                <div class="phone_price_box">
                    <div class="phone_price_item">
                        <div class="phone_item_title">
                            Почасовая оплата
                        </div>
                        <div class="phone_item_per">
                            45 р.  -  час
                        </div>
                        <div class="phone_item_text">
                            Доступно: Каталог игр <br>Виртуальный ПК <br>Безлимитная игровая сессия
                        </div>
                        <div class="phone_item_button">
                            <a class="phone_item_button_link" href="#">выбрать</a>
                        </div>
                    </div>
                    <div class="phone_price_item">
                        <div class="phone_item_title">
                            Подписка Максимум
                        </div>
                        <div class="phone_item_per">
                            2999 р.  -  месяц
                        </div>
                        <div class="phone_item_text">
                            Доступно: <br> Каталог игр<br>Виртуальный ПК<br>Игровая сессия 10 часов/день
                        </div>
                        <div class="phone_item_button">
                            <a class="phone_item_button_link" href="#">выбрать</a>
                        </div>
                    </div>
                    <div class="phone_price_item">
                        <div class="phone_item_title">
                            Подписка Минимум
                        </div>
                        <div class="phone_item_per">
                            1500 р.  -  месяц
                        </div>
                        <div class="phone_item_text">
                            Доступно:<br>Каталог игр<br>Игровая сессия 4 часов/день
                        </div>
                        <div class="phone_item_button">
                            <a class="phone_item_button_link" href="#">выбрать</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="phone_any_devaices">
                <div class="sup_title_how">
                    <span class="before"></span>
                    <div class="sup_title_how">
                        Гибкие тарифы
                    </div>
                </div>
                <div class="how_title">
                    Доступные подписки
                </div>
                <div class="how_phone_img_box">
                    <img class="how_phone_img" src="img/phone/header/Group_74.png" alt="">
                </div>
                <div class="how_text">
                    Наш модуль доступен на все популярные ОС и работает на всех компьютерах.
                </div>
                <div class="how_link_box">
                    <a class="how_link" href="#">открыть в браузере</a>
                </div>
            </div>
            <div class="phone_any_devaices">
                <div class="sup_title_how">
                    <span class="before"></span>
                    <div class="sup_title_how">
                        Игровые сервера на карте
                    </div>
                </div>
                <div class="how_title">
                    Карта локаций
                </div>
                <div class="how_phone_img_box">
                    <img class="how_phone_img" src="img/phone/header/map.png" alt="">
                </div>
            </div>
            <div class="footer">
                <div class="logo_box">
                    <img class="logo_img" src="img/phone/header/Group_32.png" alt="">
                </div>
            </div>
    `
    container.appendChild(containerSecond);
    const burger = document.querySelector('.burger_box');
    burger.addEventListener('click' , showMenu);
    function showMenu () {
        const menu = document.querySelector('.burger_menu');
        menu.classList.toggle('active');
    }
}

function createForms() {
    container.innerHTML = "";
    

    let formBox = document.createElement('div');
    formBox.classList.add('forms_box');
    formBox.innerHTML = `
    <form action="#" method="post" class="form_body">
        <input type="text" name="email" id="name" placeholder="Почта" class="form">
        <input type="password" name="password" id="password" placeholder="пароль" class="form">
        <input type="tel" name="phoneNumber" id="tel" placeholder="номер телефона" class="form">
    <div class="form_button">
        <a class="header_link_button" id="submitForm" href="#">зарегистрироваться</a>
    </div>
    <div class="check_box">
        <input type="checkbox" name="politicks" id="checkBox" checked>
    <div class="check_box_text">
         Я соглашаюсь со следующими установленными правилами: Политика использования файлов cookie WARPLAY.CLOUD, Пользовательское соглашение WARPLAY.CLOUD, Лицензионное соглашение MY.GAMES с конечным пользователем в отношении Игр, Лицензионное соглашение с конечным Пользователем для WARPLAY.CLOUD Игрового центра, Политика конфиденциальности портала WARPLAY.CLOUD, Политика конфиденциальности WARPLAY.CLOUD для детей
    </div>
    </div>
    </form>
    <div class="sistem">
        <p class="sistem_title">Выберите операционную систему</p>
        <div class="sistem_box">
            <a class="sistem_link_img" href="#"><img class="link_img" src="img/sistem_img/Windows_10.png" alt=""></a>
            <a class="sistem_link_img" href="#"><img class="link_img" src="img/sistem_img/Mac_Client.png" alt=""></a>
            <a class="sistem_link_img" href="#"><img class="link_img" src="img/sistem_img/Linux.png" alt=""></a>
            <a class="sistem_link_img" href="#"><img class="link_img" src="img/sistem_img/Chrome.png" alt=""></a>
        </div>
    </div>
    `
    container.appendChild(formBox);

    let options;
    const form = document.querySelector('form');
    const formButton = document.getElementById("submitForm");
    formButton.addEventListener('click', submitForm);
    function createUser(event) {
        event.prevendDefault();

    }

    function submitForm() {
        form.addEventListener('submit', createUser);
        
        const sistem = document.querySelector('.sistem');
        sistem.classList.toggle('active');
        const sistemBox = document.querySelector('.sistem_box');
        sistemBox.addEventListener('click' , function(event){
            if (event.target.closest('.sistem_link_img')){
                let sisApart = event.target.closest('.sistem_link_img');
                if (sisApart === sistemBox.children[0]){
                    options.sistem ="windows";
                    window.alert(options.sistem)
                    container.innerHTML = "";
                    createHeader();
                }
                if (sisApart === sistemBox.children[1]){
                    options.sistem = "MAC";
                    window.alert(options.sistem)
                    container.innerHTML = "";
                    createHeader();
                }
                if (sisApart === sistemBox.children[2]){
                    options.sistem = "linux";
                    window.alert(options.sistem)
                    container.innerHTML = "";
                    createHeader();
                }
                if (sisApart === sistemBox.children[3]){
                    options.sistem = "chrome";
                    window.alert(options.sistem)
                    container.innerHTML = "";
                    createHeader();
                }
            }
        })
        options = {
            email: form.children[0].value,
            name: form.children[1].value,
            phone: form.children[2].value,
        };
        let user = new User(options);
        
        window.alert(`${user.email},  ${user.name}, ${user.phone}`)
    } 
    
}

