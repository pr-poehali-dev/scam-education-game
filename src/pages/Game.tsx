import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Scenario {
  id: number;
  situation: string;
  caller: string;
  message: string;
  options: {
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
}

const scenarios: Scenario[] = [
  {
    id: 1,
    situation: "Звонок из банка",
    caller: "Сотрудник банка",
    message: "Добрый день! Это служба безопасности вашего банка. Мы заметили подозрительную операцию по вашей карте на 45,000 рублей. Для отмены операции назовите мне код из СМС, который мы вам только что отправили.",
    options: [
      {
        text: "Назвать код из СМС",
        isCorrect: false,
        explanation: "Это ошибка! Настоящий банк никогда не попросит код из СМС. Этот код предназначен только для вас и подтверждает операции."
      },
      {
        text: "Повесить трубку и позвонить в банк по номеру на карте",
        isCorrect: true,
        explanation: "Правильно! Это лучшее решение. Всегда перезванивайте в банк по официальному номеру с вашей карты."
      },
      {
        text: "Спросить подробности о подозрительной операции",
        isCorrect: false,
        explanation: "Лучше не продолжать разговор. Мошенники подготовлены и могут назвать правдоподобные детали. Положите трубку и позвоните в банк сами."
      }
    ]
  },
  {
    id: 2,
    situation: "Родственник в беде",
    caller: "Незнакомый номер",
    message: "Мама, это я! Я попал в аварию, телефон разбился, звоню с чужого. Нужно срочно 80,000 на урегулирование, иначе заведут дело. Переведи на этот номер, времени нет объяснять!",
    options: [
      {
        text: "Срочно перевести деньги",
        isCorrect: false,
        explanation: "Это ошибка! Мошенники создают панику и давят на эмоции. Никогда не переводите деньги незнакомцам под давлением."
      },
      {
        text: "Положить трубку и позвонить сыну на его обычный номер",
        isCorrect: true,
        explanation: "Отлично! Всегда проверяйте информацию, позвонив родственнику на известный вам номер. Если не отвечает - звоните другим родственникам."
      },
      {
        text: "Задать вопрос, на который знает ответ только ваш сын",
        isCorrect: false,
        explanation: "Это хороший метод, но недостаточный. Мошенники могут уклониться от ответа или сослаться на стресс. Лучше положить трубку и перезвонить."
      }
    ]
  },
  {
    id: 3,
    situation: "Выигрыш приза",
    caller: "Организатор акции",
    message: "Поздравляем! Вы выиграли 500,000 рублей в акции нашего магазина! Для получения выигрыша вам нужно оплатить налог 15,000 рублей. Назовите номер карты для оформления.",
    options: [
      {
        text: "Назвать номер карты",
        isCorrect: false,
        explanation: "Ни в коем случае! Никогда не сообщайте данные карты по телефону. Это мошенники."
      },
      {
        text: "Спросить название акции и проверить на сайте магазина",
        isCorrect: true,
        explanation: "Правильно! Всегда проверяйте информацию на официальных сайтах. Настоящие акции не требуют предоплаты налогов."
      },
      {
        text: "Согласиться оплатить налог после получения приза",
        isCorrect: false,
        explanation: "Продолжать разговор опасно. Мошенники будут давить и убеждать. Лучше проверить информацию самостоятельно."
      }
    ]
  }
];

const Game = () => {
  const navigate = useNavigate();
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);

  const scenario = scenarios[currentScenario];
  const progress = ((currentScenario + 1) / scenarios.length) * 100;

  const handleOptionSelect = (index: number) => {
    if (showResult) return;
    
    setSelectedOption(index);
    setShowResult(true);
    
    if (scenario.options[index].isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setGameFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentScenario(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setGameFinished(false);
  };

  if (gameFinished) {
    const percentage = Math.round((score / scenarios.length) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Shield" className="text-primary" size={32} />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Защита от мошенников
              </span>
            </Link>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-12">
          <Card className="max-w-2xl mx-auto border-2">
            <CardHeader className="text-center">
              <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Trophy" className="text-accent" size={48} />
              </div>
              <CardTitle className="text-3xl mb-2">Игра завершена!</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div>
                <p className="text-5xl font-bold text-primary mb-2">{percentage}%</p>
                <p className="text-xl text-muted-foreground">
                  Правильных ответов: {score} из {scenarios.length}
                </p>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                {percentage >= 80 ? (
                  <p className="text-lg">
                    🎉 Отличный результат! Вы хорошо разбираетесь в схемах мошенников.
                  </p>
                ) : percentage >= 50 ? (
                  <p className="text-lg">
                    👍 Хороший результат! Рекомендуем повторить обучение для закрепления знаний.
                  </p>
                ) : (
                  <p className="text-lg">
                    📚 Пройдите обучение еще раз, чтобы лучше изучить схемы мошенников.
                  </p>
                )}
              </div>

              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" onClick={handleRestart}>
                  <Icon name="RotateCcw" className="mr-2" size={20} />
                  Играть снова
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/training">
                    <Icon name="BookOpen" className="mr-2" size={20} />
                    Обучение
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/stats">
                    <Icon name="BarChart3" className="mr-2" size={20} />
                    Статистика
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

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
            <Button variant="outline" onClick={() => navigate(-1)}>
              <Icon name="X" className="mr-2" size={16} />
              Выйти
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">
                Сценарий {currentScenario + 1} из {scenarios.length}
              </span>
              <span className="text-sm font-medium">
                Баллы: {score}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="border-2 mb-6">
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Icon name="Phone" size={16} />
                <span>{scenario.situation}</span>
              </div>
              <CardTitle className="text-xl">{scenario.caller}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-secondary/10 rounded-lg border-l-4 border-secondary">
                <p className="text-lg">{scenario.message}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>Как вы поступите?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {scenario.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  disabled={showResult}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    selectedOption === index
                      ? option.isCorrect
                        ? "border-green-500 bg-green-50"
                        : "border-red-500 bg-red-50"
                      : "border-border hover:border-primary bg-white"
                  } ${showResult ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      selectedOption === index
                        ? option.isCorrect
                          ? "border-green-500 bg-green-500"
                          : "border-red-500 bg-red-500"
                        : "border-border"
                    }`}>
                      {selectedOption === index && (
                        <Icon 
                          name={option.isCorrect ? "Check" : "X"} 
                          className="text-white" 
                          size={16} 
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium mb-2">{option.text}</p>
                      {showResult && selectedOption === index && (
                        <p className={`text-sm ${option.isCorrect ? "text-green-700" : "text-red-700"}`}>
                          {option.explanation}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>

          {showResult && (
            <div className="mt-6 text-center">
              <Button size="lg" onClick={handleNext}>
                {currentScenario < scenarios.length - 1 ? "Следующий сценарий" : "Завершить игру"}
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Game;
