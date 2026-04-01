import { Hero } from "@/components/Hero";
import Icon from "@/components/ui/icon";

const stats = [
  { value: "12+ лет", label: "на рынке" },
  { value: "₽42 млрд", label: "под управлением" },
  { value: "23.4%", label: "средняя доходность" },
  { value: "1 200+", label: "клиентов" },
];

const strategies = [
  {
    icon: "TrendingUp",
    title: "Рост капитала",
    desc: "Агрессивная стратегия для долгосрочного прироста капитала через акции технологических лидеров и emerging markets.",
    tag: "Высокий риск / высокий доход",
  },
  {
    icon: "Shield",
    title: "Сохранение активов",
    desc: "Консервативный портфель из облигаций, золота и дивидендных акций. Минимальная волатильность при стабильном доходе.",
    tag: "Низкий риск / стабильный доход",
  },
  {
    icon: "BarChart2",
    title: "Сбалансированный",
    desc: "Оптимальное соотношение роста и защиты. Диверсифицированный портфель с регулярной ребалансировкой.",
    tag: "Умеренный риск",
  },
];

export default function Index() {
  return (
    <>
      <Hero />

      {/* Stats */}
      <section id="about" className="py-24 border-t border-white/10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl md:text-5xl font-sentient mb-2">{s.value}</p>
                <p className="font-mono text-sm text-foreground/50 uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section id="strategies" className="py-24 border-t border-white/10">
        <div className="container">
          <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-4">Стратегии</p>
          <h2 className="text-4xl md:text-5xl font-sentient mb-16 max-w-lg">
            Инвестиционные <i className="font-light">решения</i> под ваши цели
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {strategies.map((s) => (
              <div
                key={s.title}
                className="border border-white/10 rounded-lg p-8 flex flex-col gap-4 hover:border-white/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20">
                  <Icon name={s.icon as "TrendingUp"} size={18} className="text-foreground/70" />
                </div>
                <h3 className="text-xl font-sentient">{s.title}</h3>
                <p className="font-mono text-sm text-foreground/50 leading-relaxed flex-1">{s.desc}</p>
                <span className="font-mono text-xs text-primary/70 uppercase">{s.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-24 border-t border-white/10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-4">Результаты</p>
              <h2 className="text-4xl md:text-5xl font-sentient mb-6">
                Доходность выше <i className="font-light">рынка</i>
              </h2>
              <p className="font-mono text-sm text-foreground/50 leading-relaxed max-w-md">
                На протяжении 12 лет наши портфели стабильно опережают индекс S&P 500 и московскую биржу. Прозрачная отчётность — каждый месяц.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { year: "2023", value: "+31.2%", vs: "S&P 500: +24.2%" },
                { year: "2022", value: "+4.8%", vs: "S&P 500: −19.4%" },
                { year: "2021", value: "+44.1%", vs: "S&P 500: +26.9%" },
                { year: "2020", value: "+38.7%", vs: "S&P 500: +16.3%" },
              ].map((r) => (
                <div key={r.year} className="border border-white/10 rounded-lg p-6">
                  <p className="font-mono text-xs text-foreground/40 mb-1">{r.year}</p>
                  <p className="text-2xl font-sentient text-primary mb-1">{r.value}</p>
                  <p className="font-mono text-xs text-foreground/30">{r.vs}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-white/10">
        <div className="container text-center">
          <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-4">Начать</p>
          <h2 className="text-4xl md:text-5xl font-sentient mb-6">
            Готовы вложить <i className="font-light">разумно?</i>
          </h2>
          <p className="font-mono text-sm text-foreground/50 max-w-md mx-auto mb-12">
            Оставьте заявку — наш аналитик свяжется с вами в течение 24 часов и подберёт стратегию под ваши цели.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 bg-transparent border border-white/20 rounded px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-white/50 transition-colors"
            />
            <button className="border border-white/80 hover:bg-white hover:text-black transition-colors duration-200 rounded px-6 py-3 font-mono text-sm uppercase">
              Отправить
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-foreground/30">© 2024 Apex Capital. Все права защищены.</p>
          <p className="font-mono text-xs text-foreground/20">Инвестиции связаны с риском. Прошлые результаты не гарантируют будущих.</p>
        </div>
      </footer>
    </>
  );
}
