import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Rules = () => {
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
              <Link to="/rules" className="text-primary font-medium">
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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Правила игры
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Как играть и оценивать результаты
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="BookOpen" className="text-primary" size={28} />
                Как играть
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1">Изучите обучение</h3>
                  <p className="text-muted-foreground">
                    Перед игрой рекомендуем пройти раздел "Обучение", чтобы познакомиться с основными схемами мошенников.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1">Читайте сценарий</h3>
                  <p className="text-muted-foreground">
                    В каждом сценарии вам представляется ситуация: кто звонит и что говорит. Внимательно читайте диалог.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1">Выберите действие</h3>
                  <p className="text-muted-foreground">
                    Вам предлагается несколько вариантов ответа. Выберите тот, который считаете правильным.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1">Получите объяснение</h3>
                  <p className="text-muted-foreground">
                    После выбора вы сразу увидите, правильно ли поступили, и получите подробное объяснение.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1">Проходите все сценарии</h3>
                  <p className="text-muted-foreground">
                    Пройдите все предложенные сценарии, чтобы увидеть итоговый результат и статистику.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="BarChart3" className="text-secondary" size={28} />
                Система оценки
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="TrendingUp" className="text-green-600" size={20} />
                  <h3 className="font-bold text-green-900">80-100% - Отлично!</h3>
                </div>
                <p className="text-sm text-green-700">
                  Вы хорошо разбираетесь в схемах мошенников и знаете, как себя защитить.
                </p>
              </div>

              <div className="p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Minus" className="text-yellow-600" size={20} />
                  <h3 className="font-bold text-yellow-900">50-79% - Хорошо</h3>
                </div>
                <p className="text-sm text-yellow-700">
                  У вас есть базовые знания, но рекомендуем повторить обучающие материалы.
                </p>
              </div>

              <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="TrendingDown" className="text-red-600" size={20} />
                  <h3 className="font-bold text-red-900">0-49% - Требуется обучение</h3>
                </div>
                <p className="text-sm text-red-700">
                  Пройдите раздел "Обучение" и попробуйте снова. Это поможет вам лучше защититься от мошенников.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Award" className="text-accent" size={28} />
                Достижения
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                По мере прохождения игры вы будете получать достижения за различные успехи:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="Star" className="text-accent" size={16} />
                  <span>Завершение первого сценария</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Trophy" className="text-accent" size={16} />
                  <span>Получение 100% результата</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Target" className="text-accent" size={16} />
                  <span>Прохождение нескольких игр</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Shield" className="text-accent" size={16} />
                  <span>Изучение всех обучающих материалов</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Icon name="Lightbulb" className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold mb-2">Совет</h3>
                  <p className="text-muted-foreground">
                    Даже если вы уверены в ответе, всегда читайте объяснения - они содержат важные детали и нюансы, которые помогут вам в реальной ситуации.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center pt-6">
            <Button asChild size="lg">
              <Link to="/game">
                <Icon name="Play" className="mr-2" size={20} />
                Начать игру
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

export default Rules;
