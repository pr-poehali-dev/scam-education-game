import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Stats = () => {
  const achievements = [
    { id: 1, title: "Первые шаги", description: "Завершите первый сценарий", icon: "Star", unlocked: true },
    { id: 2, title: "Знаток", description: "Ответьте правильно на 10 вопросов", icon: "Award", unlocked: true },
    { id: 3, title: "Эксперт", description: "Получите 100% в любой игре", icon: "Trophy", unlocked: false },
    { id: 4, title: "Упорный", description: "Сыграйте 5 раз", icon: "Target", unlocked: false },
    { id: 5, title: "Наставник", description: "Поделитесь игрой с другом", icon: "Users", unlocked: false },
    { id: 6, title: "Защитник", description: "Пройдите все обучающие материалы", icon: "Shield", unlocked: true }
  ];

  const gameHistory = [
    { date: "2024-11-24", score: 3, total: 3, percentage: 100 },
    { date: "2024-11-23", score: 2, total: 3, percentage: 67 },
    { date: "2024-11-22", score: 3, total: 3, percentage: 100 }
  ];

  const totalGames = 3;
  const averageScore = 89;
  const bestScore = 100;
  const totalCorrect = 8;

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
              <Link to="/stats" className="text-primary font-medium">
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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Статистика
          </h1>
          <p className="text-xl text-muted-foreground">
            Отслеживайте свой прогресс и достижения
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="border-2 hover:border-primary transition-all">
            <CardContent className="pt-6 text-center">
              <Icon name="Gamepad2" className="text-primary mx-auto mb-2" size={32} />
              <p className="text-3xl font-bold text-primary mb-1">{totalGames}</p>
              <p className="text-sm text-muted-foreground">Сыграно игр</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-secondary transition-all">
            <CardContent className="pt-6 text-center">
              <Icon name="BarChart3" className="text-secondary mx-auto mb-2" size={32} />
              <p className="text-3xl font-bold text-secondary mb-1">{averageScore}%</p>
              <p className="text-sm text-muted-foreground">Средний результат</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent transition-all">
            <CardContent className="pt-6 text-center">
              <Icon name="Trophy" className="text-accent mx-auto mb-2" size={32} />
              <p className="text-3xl font-bold text-accent mb-1">{bestScore}%</p>
              <p className="text-sm text-muted-foreground">Лучший результат</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-all">
            <CardContent className="pt-6 text-center">
              <Icon name="CheckCircle2" className="text-primary mx-auto mb-2" size={32} />
              <p className="text-3xl font-bold text-primary mb-1">{totalCorrect}</p>
              <p className="text-sm text-muted-foreground">Правильных ответов</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="History" className="text-primary" size={24} />
              История игр
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {gameHistory.map((game, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{game.date}</span>
                      <span className="text-sm text-muted-foreground">
                        {game.score} / {game.total} правильных
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Progress value={game.percentage} className="flex-1" />
                      <span className="font-bold text-primary min-w-[50px] text-right">
                        {game.percentage}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Award" className="text-accent" size={24} />
              Достижения
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    achievement.unlocked
                      ? "bg-accent/5 border-accent"
                      : "bg-muted/30 border-border opacity-60"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        achievement.unlocked
                          ? "bg-accent/10"
                          : "bg-muted"
                      }`}
                    >
                      <Icon
                        name={achievement.icon as any}
                        className={achievement.unlocked ? "text-accent" : "text-muted-foreground"}
                        size={24}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold mb-1 flex items-center gap-2">
                        {achievement.title}
                        {achievement.unlocked && (
                          <Icon name="CheckCircle2" className="text-accent" size={16} />
                        )}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/game">
              <Icon name="Play" className="mr-2" size={20} />
              Играть ещё
            </Link>
          </Button>
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

export default Stats;
