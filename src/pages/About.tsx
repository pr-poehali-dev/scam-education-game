import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Shield" className="text-primary" size={32} />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Защита от мошенников
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Главная
              </Link>
              <Link to="/training" className="text-foreground hover:text-primary transition-colors font-medium">
                Обучение
              </Link>
              <Link to="/game" className="text-foreground hover:text-primary transition-colors font-medium">
                Игра
              </Link>
              <Link to="/stats" className="text-foreground hover:text-primary transition-colors font-medium">
                Статистика
              </Link>
              <Link to="/rules" className="text-foreground hover:text-primary transition-colors font-medium">
                Правила
              </Link>
              <Link to="/about" className="text-primary font-medium">
                О проекте
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            О проекте
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Миссия, цели и важность защиты от телефонных мошенников
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Target" className="text-primary" size={28} />
                Миссия проекта
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Наша миссия — помочь людям научиться распознавать схемы телефонных мошенников и защищать себя и своих близких от финансовых потерь.
              </p>
              <p className="text-muted-foreground">
                Мы создали интерактивную обучающую игру, которая в доступной форме показывает реальные ситуации и учит правильно на них реагировать.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="AlertTriangle" className="text-destructive" size={28} />
                Проблема мошенничества
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Телефонное мошенничество — одна из самых распространенных схем обмана в современном мире:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={16} />
                    <span className="text-muted-foreground">
                      Миллионы людей ежегодно становятся жертвами телефонных мошенников
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={16} />
                    <span className="text-muted-foreground">
                      Мошенники постоянно совершенствуют свои методы и придумывают новые схемы
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={16} />
                    <span className="text-muted-foreground">
                      Особенно уязвимы пожилые люди, которые менее знакомы с современными технологиями
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={16} />
                    <span className="text-muted-foreground">
                      Психологическое давление и манипуляции затрудняют правильное принятие решений
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Lightbulb" className="text-accent" size={28} />
                Наш подход
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Gamepad2" className="text-accent" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">Игровой формат</h3>
                    <p className="text-muted-foreground text-sm">
                      Обучение через реалистичные сценарии делает процесс увлекательным и запоминающимся.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="BookOpen" className="text-accent" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">Образовательный контент</h3>
                    <p className="text-muted-foreground text-sm">
                      Подробные объяснения помогают понять не только что делать, но и почему.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Repeat" className="text-accent" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">Практика</h3>
                    <p className="text-muted-foreground text-sm">
                      Возможность многократно проходить сценарии для закрепления навыков.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="text-accent" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">Доступность</h3>
                    <p className="text-muted-foreground text-sm">
                      Простой интерфейс, понятный людям любого возраста и уровня технической подготовки.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 bg-secondary/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Icon name="Heart" className="text-secondary flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-bold mb-2">Делитесь знаниями</h3>
                  <p className="text-muted-foreground mb-3">
                    Расскажите о нашем проекте своим родителям, бабушкам и дедушкам, друзьям. Чем больше людей будут знать о схемах мошенников, тем меньше станет жертв обмана.
                  </p>
                  <p className="text-muted-foreground font-medium">
                    Вместе мы можем сделать интернет и телефонные коммуникации безопаснее!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="HelpCircle" className="text-primary" size={28} />
                Полезные контакты
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="font-bold mb-1">Горячая линия МВД по вопросам мошенничества</p>
                  <p className="text-muted-foreground">102 (с мобильного)</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="font-bold mb-1">Служба поддержки вашего банка</p>
                  <p className="text-muted-foreground">Номер указан на обратной стороне карты</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="font-bold mb-1">Единый консультационный центр Роспотребнадзора</p>
                  <p className="text-muted-foreground">8-800-555-49-43 (звонок бесплатный)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center pt-6">
            <Button asChild size="lg">
              <Link to="/game">
                <Icon name="Play" className="mr-2" size={20} />
                Начать обучение
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t mt-20 py-8 bg-white/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Защита от мошенников. Образовательный проект.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
