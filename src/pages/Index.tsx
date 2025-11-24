import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Shield" className="text-primary" size={32} />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Защита от мошенников
              </span>
            </div>
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
              <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
                О проекте
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Научитесь распознавать мошенников
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Интерактивная обучающая игра, которая поможет вам защититься от телефонных мошенников и их уловок
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="text-lg">
              <Link to="/game">
                <Icon name="Play" className="mr-2" size={20} />
                Начать игру
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg">
              <Link to="/training">
                <Icon name="BookOpen" className="mr-2" size={20} />
                Пройти обучение
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="GraduationCap" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Обучайтесь</h3>
              <p className="text-muted-foreground">
                Изучите основные схемы и приёмы телефонных мошенников
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Gamepad2" className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Практикуйтесь</h3>
              <p className="text-muted-foreground">
                Проходите реалистичные сценарии и принимайте решения
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Trophy" className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Достигайте</h3>
              <p className="text-muted-foreground">
                Отслеживайте свой прогресс и соревнуйтесь с другими
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-destructive/20 bg-destructive/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="AlertTriangle" className="text-destructive" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Почему это важно?</h3>
                <p className="text-muted-foreground mb-4">
                  Ежегодно миллионы людей становятся жертвами телефонных мошенников. Злоумышленники постоянно придумывают новые схемы обмана, выдавая себя за сотрудников банков, правоохранительных органов или родственников.
                </p>
                <p className="text-muted-foreground">
                  Наша игра поможет вам научиться распознавать подозрительные звонки, задавать правильные вопросы и не поддаваться на уловки мошенников.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="border-t mt-20 py-8 bg-white/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Защита от мошенников. Образовательный проект.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
