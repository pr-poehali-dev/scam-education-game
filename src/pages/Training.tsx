import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Training = () => {
  const scamTypes = [
    {
      id: "bank",
      title: "Звонок из банка",
      icon: "Building2",
      description: "Мошенники представляются сотрудниками банка",
      details: [
        "Часто называют правильные данные о вашей карте (последние цифры, банк)",
        "Сообщают о подозрительной операции или блокировке карты",
        "Просят назвать CVV-код, полный номер карты или код из СМС",
        "Создают ощущение срочности и паники",
        "Настоящий банк НИКОГДА не попросит CVV-код или код из СМС"
      ]
    },
    {
      id: "police",
      title: "Звонок из полиции",
      icon: "BadgeAlert",
      description: "Злоумышленники выдают себя за сотрудников полиции",
      details: [
        "Сообщают, что ваш родственник попал в ДТП или совершил преступление",
        "Требуют срочно передать деньги на урегулирование ситуации",
        "Могут имитировать шум офиса или включить запись плача",
        "Просят не звонить родственнику напрямую",
        "Настоящая полиция не решает вопросы по телефону за деньги"
      ]
    },
    {
      id: "relative",
      title: "Родственник в беде",
      icon: "Users",
      description: "Мошенники притворяются вашими близкими",
      details: [
        "Звонят со слов 'Мама/Папа, это я, у меня проблемы'",
        "Говорят измененным голосом (простуда, плохая связь)",
        "Просят срочно перевести деньги на незнакомый номер",
        "Не дают времени на проверку информации",
        "Всегда перезванивайте родственнику на известный вам номер"
      ]
    },
    {
      id: "prize",
      title: "Выигрыш приза",
      icon: "Gift",
      description: "Обещают выигрыш в лотерее или розыгрыше",
      details: [
        "Сообщают о крупном выигрыше в розыгрыше, в котором вы не участвовали",
        "Просят оплатить налог или комиссию за получение приза",
        "Требуют сообщить данные карты для перевода приза",
        "Настоящие розыгрыши не требуют предоплаты",
        "Проверяйте информацию на официальном сайте компании"
      ]
    }
  ];

  const tips = [
    { icon: "PhoneOff", text: "Не бойтесь положить трубку, если что-то настораживает" },
    { icon: "Phone", text: "Перезвоните в организацию по официальному номеру" },
    { icon: "Clock", text: "Не принимайте решения под давлением 'срочно'" },
    { icon: "Lock", text: "Никому не сообщайте коды из СМС и CVV" },
    { icon: "MessageSquare", text: "Свяжитесь с родственниками напрямую при подозрительных звонках" },
    { icon: "AlertCircle", text: "Доверяйте своей интуиции - если звучит странно, это странно" }
  ];

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
              <Link to="/training" className="text-primary font-medium">
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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Обучение
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Изучите основные схемы мошенников и научитесь их распознавать
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {scamTypes.map((scam) => (
            <Card key={scam.id} className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={scam.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-2xl">{scam.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">{scam.description}</p>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="details">
                    <AccordionTrigger>Подробнее о схеме</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {scam.details.map((detail, index) => (
                          <li key={index} className="flex gap-2">
                            <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={16} />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-12 border-2 border-accent">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Icon name="Lightbulb" className="text-accent" size={28} />
              Главные правила защиты
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {tips.map((tip, index) => (
                <div key={index} className="flex gap-3 p-3 bg-accent/5 rounded-lg">
                  <Icon name={tip.icon as any} className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm">{tip.text}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button asChild size="lg" className="text-lg">
            <Link to="/game">
              <Icon name="Play" className="mr-2" size={20} />
              Перейти к игре
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

export default Training;
