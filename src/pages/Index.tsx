import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="TreePine" size={32} className="text-wood-green" />
              <h1 className="text-2xl font-bold text-wood-brown">Древесница</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#products" className="text-wood-gray hover:text-wood-green transition-colors">Продукция</a>
              <a href="#certificates" className="text-wood-gray hover:text-wood-green transition-colors">Сертификаты</a>
              <a href="#reviews" className="text-wood-gray hover:text-wood-green transition-colors">Отзывы</a>
              <a href="#contact" className="text-wood-gray hover:text-wood-green transition-colors">Контакты</a>
            </nav>
            <Button className="bg-wood-green hover:bg-wood-green/90 text-white">
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-wood-light to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl font-bold text-wood-brown leading-tight">
                Производим экологически чистую древесину премиум-класса
              </h2>
              <p className="text-xl text-wood-gray leading-relaxed">
                Высококачественная древесина для строительных и дизайнерских проектов. 
                Работаем с 1995 года, гарантируем качество и экологичность.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-wood-green hover:bg-wood-green/90 text-white px-8 py-3">
                  Посмотреть каталог
                </Button>
                <Button variant="outline" size="lg" className="border-wood-brown text-wood-brown hover:bg-wood-brown hover:text-white px-8 py-3">
                  Получить консультацию
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-wood-brown">25+</div>
                  <div className="text-wood-gray">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-wood-brown">1000+</div>
                  <div className="text-wood-gray">довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-wood-brown">100%</div>
                  <div className="text-wood-gray">экологично</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/e8c414a3-4ce0-48cd-81cd-182eb1d54bf0.jpg"
                alt="Лесной пейзаж"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={24} className="text-wood-green" />
                  <span className="font-semibold text-wood-brown">Сертифицировано FSC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-wood-brown mb-4">Наша продукция</h2>
            <p className="text-xl text-wood-gray max-w-3xl mx-auto">
              Широкий ассортимент качественной древесины для любых задач
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 hover-scale">
              <CardHeader>
                <div className="w-full h-48 bg-wood-light rounded-lg mb-4">
                  <img 
                    src="/img/f2177bdd-bbf2-440b-84dd-ee8d7f1c9ec7.jpg"
                    alt="Строительная древесина"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-wood-brown">Строительная древесина</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-wood-gray mb-4">
                  Доски, брус, балки для строительных работ. Высокая прочность и долговечность.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-wood-light text-wood-brown">Сосна</Badge>
                  <Badge variant="secondary" className="bg-wood-light text-wood-brown">Ель</Badge>
                  <Badge variant="secondary" className="bg-wood-light text-wood-brown">Лиственница</Badge>
                </div>
                <Button className="w-full bg-wood-green hover:bg-wood-green/90 text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover-scale">
              <CardHeader>
                <div className="w-full h-48 bg-wood-light rounded-lg mb-4">
                  <img 
                    src="/img/60aead5e-bf1a-4c86-961a-38453c1577c4.jpg"
                    alt="Декоративные панели"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-wood-brown">Декоративные панели</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-wood-gray mb-4">
                  Эксклюзивные панели для интерьера. Уникальные текстуры и натуральные узоры.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-wood-light text-wood-brown">Дуб</Badge>
                  <Badge variant="secondary" className="bg-wood-light text-wood-brown">Ясень</Badge>
                  <Badge variant="secondary" className="bg-wood-light text-wood-brown">Орех</Badge>
                </div>
                <Button className="w-full bg-wood-green hover:bg-wood-green/90 text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover-scale">
              <CardHeader>
                <div className="w-full h-48 bg-wood-light rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Hammer" size={48} className="text-wood-brown" />
                </div>
                <CardTitle className="text-wood-brown">Отделочные материалы</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-wood-gray mb-4">
                  Плинтуса, наличники, молдинги для финишной отделки помещений.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-wood-light text-wood-brown">Шпон</Badge>
                  <Badge variant="secondary" className="bg-wood-light text-wood-brown">МДФ</Badge>
                  <Badge variant="secondary" className="bg-wood-light text-wood-brown">Массив</Badge>
                </div>
                <Button className="w-full bg-wood-green hover:bg-wood-green/90 text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover-scale">
              <CardHeader>
                <div className="w-full h-48 bg-wood-light rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Package" size={48} className="text-wood-brown" />
                </div>
                <CardTitle className="text-wood-brown">Полуфабрикаты и заготовки</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-wood-gray mb-4">
                  Заготовки различных размеров для дальнейшей обработки и изготовления изделий.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-wood-light text-wood-brown">Березa</Badge>
                  <Badge variant="secondary" className="bg-wood-light text-wood-brown">Бук</Badge>
                  <Badge variant="secondary" className="bg-wood-light text-wood-brown">Клен</Badge>
                </div>
                <Button className="w-full bg-wood-green hover:bg-wood-green/90 text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-wood-brown mb-4">Сертификаты качества</h2>
            <p className="text-xl text-wood-gray max-w-3xl mx-auto">
              Наша продукция соответствует всем международным стандартам качества и экологической безопасности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-wood-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-wood-brown mb-2">FSC Сертификат</h3>
              <p className="text-wood-gray text-sm">Ответственное лесопользование</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-wood-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Leaf" size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-wood-brown mb-2">Экологический сертификат</h3>
              <p className="text-wood-gray text-sm">Соответствие экостандартам</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-wood-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-wood-brown mb-2">ISO 9001</h3>
              <p className="text-wood-gray text-sm">Система менеджмента качества</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-wood-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-wood-brown mb-2">ГОСТ</h3>
              <p className="text-wood-gray text-sm">Российские стандарты качества</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-wood-brown mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-wood-gray max-w-3xl mx-auto">
              Мы гордимся доверием наших клиентов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-wood-green rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">АС</span>
                </div>
                <div>
                  <h4 className="font-semibold text-wood-brown">Алексей Смирнов</h4>
                  <p className="text-wood-gray text-sm">Строительная компания "Дом-Строй"</p>
                </div>
              </div>
              <p className="text-wood-gray mb-4">
                "Работаем с Древесницей уже 5 лет. Качество древесины всегда на высоте, 
                доставка точно в срок. Рекомендуем всем партнерам!"
              </p>
              <div className="flex text-yellow-400">
                <Icon name="Star" size={20} fill="currentColor" />
                <Icon name="Star" size={20} fill="currentColor" />
                <Icon name="Star" size={20} fill="currentColor" />
                <Icon name="Star" size={20} fill="currentColor" />
                <Icon name="Star" size={20} fill="currentColor" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-wood-brown rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">МВ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-wood-brown">Мария Волкова</h4>
                  <p className="text-wood-gray text-sm">Дизайн-студия "Интерьер+"</p>
                </div>
              </div>
              <p className="text-wood-gray mb-4">
                "Декоративные панели от Древесницы - это произведение искусства! 
                Наши клиенты в восторге от качества и красоты материала."
              </p>
              <div className="flex text-yellow-400">
                <Icon name="Star" size={20} fill="currentColor" />
                <Icon name="Star" size={20} fill="currentColor" />
                <Icon name="Star" size={20} fill="currentColor" />
                <Icon name="Star" size={20} fill="currentColor" />
                <Icon name="Star" size={20} fill="currentColor" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-wood-gray rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">ИК</span>
                </div>
                <div>
                  <h4 className="font-semibold text-wood-brown">Игорь Козлов</h4>
                  <p className="text-wood-gray text-sm">Мебельная фабрика "Классик"</p>
                </div>
              </div>
              <p className="text-wood-gray mb-4">
                "Заготовки всегда идеального качества, без дефектов. 
                Это позволяет нам создавать мебель премиум-класса. Спасибо за сотрудничество!"
              </p>
              <div className="flex text-yellow-400">
                <Icon name="Star" size={20} fill="currentColor" />
                <Icon name="Star" size={20} fill="currentColor" />
                <Icon name="Star" size={20} fill="currentColor" />
                <Icon name="Star" size={20} fill="currentColor" />
                <Icon name="Star" size={20} fill="currentColor" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-wood-brown mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-wood-gray max-w-3xl mx-auto">
              Готовы ответить на все ваши вопросы и подготовить индивидуальное предложение
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-wood-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-wood-brown mb-2">Наш адрес</h3>
                  <p className="text-wood-gray">
                    г. Москва, Варшавское шоссе, 123<br />
                    Производственный комплекс "Лесопереработка"
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-wood-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-wood-brown mb-2">Телефоны</h3>
                  <p className="text-wood-gray">
                    +7 (495) 123-45-67<br />
                    +7 (800) 555-12-34 (бесплатно)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-wood-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-wood-brown mb-2">Email</h3>
                  <p className="text-wood-gray">
                    info@drevesnitsa.ru<br />
                    sales@drevesnitsa.ru
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-wood-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-wood-brown mb-2">Время работы</h3>
                  <p className="text-wood-gray">
                    Пн-Пт: 9:00 - 18:00<br />
                    Сб: 10:00 - 16:00<br />
                    Вс: выходной
                  </p>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-wood-brown">Оставить заявку</CardTitle>
                <CardDescription>
                  Мы свяжемся с вами в течение 30 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-wood-brown">Ваше имя</label>
                  <Input placeholder="Введите ваше имя" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium text-wood-brown">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium text-wood-brown">Email</label>
                  <Input placeholder="your@email.com" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium text-wood-brown">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о ваших потребностях..." 
                    className="mt-1" 
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-wood-green hover:bg-wood-green/90 text-white text-lg py-3">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wood-brown text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="TreePine" size={32} className="text-wood-green" />
                <h3 className="text-2xl font-bold">Древесница</h3>
              </div>
              <p className="text-wood-light">
                Ваш надежный партнер в мире качественной древесины. 
                Производим с любовью к природе и заботой о клиентах.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-wood-light">
                <li><a href="#" className="hover:text-wood-green transition-colors">Строительная древесина</a></li>
                <li><a href="#" className="hover:text-wood-green transition-colors">Декоративные панели</a></li>
                <li><a href="#" className="hover:text-wood-green transition-colors">Отделочные материалы</a></li>
                <li><a href="#" className="hover:text-wood-green transition-colors">Полуфабрикаты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-wood-light">
                <li><a href="#" className="hover:text-wood-green transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-wood-green transition-colors">Сертификаты</a></li>
                <li><a href="#" className="hover:text-wood-green transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-wood-green transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-wood-light">
                <p>+7 (495) 123-45-67</p>
                <p>info@drevesnitsa.ru</p>
                <p>г. Москва, Варшавское шоссе, 123</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-wood-light/20 mt-8 pt-8 text-center text-wood-light">
            <p>&copy; 2024 Древесница. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;