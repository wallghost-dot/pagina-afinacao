import React, { useEffect, useState } from 'react';
import { ArrowDown, Check, ChevronDown, Clock, Gift, Star } from 'lucide-react';
import './App.css';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 29,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          clearInterval(timer);
          return { minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const toggleFaq = (index) => {
    const faqItem = document.getElementById(`faq-${index}`);
    const faqItems = document.querySelectorAll('.faq-answer');
    
    faqItems.forEach((item, i) => {
      if (item.id !== `faq-${index}`) {
        item.classList.add('hidden');
        document.getElementById(`faq-icon-${i}`).classList.remove('rotate-180');
      }
    });
    
    faqItem.classList.toggle('hidden');
    document.getElementById(`faq-icon-${index}`).classList.toggle('rotate-180');
  };

  const faqItems = [
    {
      question: "O método é digital ou físico?",
      answer: "O método e todos os bônus são 100% digitais. Você receberá acesso imediato por e-mail logo após a confirmação da sua compra."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "O método foi desenhado para mostrar resultados em poucos dias, com mudanças progressivas em até 17 dias."
    },
    {
      question: "Preciso fazer exercícios físicos intensos?",
      answer: "Não. O diferencial do método é que ele se adapta à sua rotina e estimula mudanças sutis com impacto real."
    },
    {
      question: "Vou precisar seguir uma dieta restritiva?",
      answer: "Não. A proposta respeita suas preferências e estilo de vida, sem radicalismos ou restrições severas."
    },
    {
      question: "Funciona para todas as idades?",
      answer: "Sim. O método foi desenvolvido para se ajustar às necessidades do corpo feminino em qualquer fase da vida."
    },
    {
      question: "Como funciona a garantia?",
      answer: "Você tem 07 dias de garantia incondicional. Se não curtir por qualquer motivo, devolvemos cada centavo."
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* HERO SECTION */}
      <section className="text-center py-20 bg-gradient-to-b from-pink-500 to-pink-300 text-white">
  <div className="max-w-2xl mx-auto px-4">
    <p className="uppercase tracking-widest text-sm mb-2">Método Exclusivo Para Mulheres</p>
    <h1 className="text-4xl md:text-5xl font-bold mb-4">O Segredo dos 17 Dias</h1>
    <p className="text-lg md:text-xl mb-6">
      Um Ritual Oculto Para Redescobrir Sua Leveza e Se Sentir Linda Novamente – Sem Dietas Radicais, Sem Academia.
    </p>
    <a
      href="#metodo"
      className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all"
    >
      QUERO CONHECER O MÉTODO
    </a>
  </div>
</section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Aquele vestido que você ama... ainda está lá.
            </h2>
            <p className="text-lg mb-6 text-gray-600">
              Mas, quando você veste, algo parece fora do lugar.
            </p>
            <p className="text-lg mb-6 text-gray-600">
              Ele aperta, incomoda... e no fundo, você sente que algo se perdeu.
            </p>
            <p className="text-xl mb-8 font-medium text-pink-600">
              A verdade? Nada foi perdido.<br />
              Só foi esquecida a sensação de leveza e conexão com sua imagem.
            </p>
            <p className="text-lg font-medium text-gray-800">
              Em 17 dias, você pode reencontrar tudo isso — sem academia, sem sacrifícios, sem se afastar da sua rotina.
            </p>
          </div>
        </div>
      </section>

    <section
  className="py-20 bg-cover bg-center bg-no-repeat text-gray-100"
  style={{ backgroundImage: "url('/natali-hordiuk-lQHTjxX4OKU-unsplash.jpg')" }}
>
  <div className="bg-black/60 py-20 px-4">
    <div className="container mx-auto max-w-3xl text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-6">
        Protocolo da Afinação Feminina™
      </h2>
      <p className="text-lg md:text-xl leading-relaxed mb-6">
        Toda mulher tem um <span className="text-pink-600 font-semibold">código secreto</span> que faz o corpo
        responder mais rápido à mudança… <br />
        Basta saber como <span className="text-pink-600 font-semibold">ativá-lo</span>.
      </p>
      <p className="text-lg md:text-xl text-gray-300 mb-6">
        Nos primeiros <strong className="text-white">5 dias</strong>, seu corpo já começa a mudar sem você perceber. <br />
        Em <strong className="text-white">9 dias</strong>, as pessoas começam a notar. <br />
        E em <strong className="text-white">17 dias</strong>… você se reencontra com a mulher incrível que sempre foi.
      </p>
    </div>
  </div>
</section>

      {/* BENEFÍCIOS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Imagine se, em 17 dias, você pudesse simplesmente…</h2>
            </div>

            <div className="space-y-6">
              {[
                "Voltar a vestir suas roupas favoritas com confiança.",
                "Se olhar no espelho e finalmente sorrir.",
                "Sentir que tudo se encaixa do jeito certo — inclusive você com você mesma."
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <div className="mr-4 mt-1">
                    <Check className="h-5 w-5 text-pink-500" />
                  </div>
                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl text-gray-700 mb-6">
                A <span className="font-bold text-pink-600">Sequência Dourada</span> é um ritual leve, invisível e natural, que desbloqueia o seu brilho sem esforço.
              </p>
              <p className="text-xl font-medium text-gray-800">
                Agora você pode ter acesso a ele.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* OFERTA PRINCIPAL */}
      <section id="oferta" className="py-16 bg-gradient-to-br from-pink-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-pink-600 to-purple-500 py-8 px-6 text-white text-center">

                <h3 className="text-xl md:text-2xl font-medium">O Segredo dos 17 Dias</h3>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                  <div className="md:w-1/3">
                    <img 
                      src="https://resultadosquetransformam.com/wp-content/uploads/2025/04/pexels-photo-774866.webp" 
                      alt="O Segredo dos 17 Dias"
                      className="rounded-lg shadow-md w-full h-auto"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-6">
                    Você receberá o Guia Completo do <span className="font-medium text-pink-600">Protocolo da Afinação Feminina</span>, com o passo a passo que reativa o equilíbrio interno do corpo feminino, fazendo com que você volte a se sentir leve, confiante e natural em frente ao espelho.

                    </p>
                    
                    <div className="space-y-4">
                      {[
                        { title: "Ritual Diário de 3 Passos", desc: "Ajustes invisíveis que se encaixam na sua rotina sem esforço." },
                        { title: "A Sequência Dourada", desc: "O segredo para ativar o seu ritmo natural e reconquistar sua imagem com leveza." },
                        { title: "Como se Olhar no Espelho e Amar o Que Vê", desc: "Uma prática silenciosa que altera sua percepção e autoimagem todos os dias." },
                        { title: "O Efeito Segunda Pele", desc: "O truque para fazer as roupas voltarem a te abraçar como antes — ou até melhor." }
                      ].map((item, index) => (
                        <div key={index} className="flex">
                          <div className="flex-shrink-0 mr-3">
                            <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center">
                              <span className="text-pink-600 text-sm">🔹</span>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="text-center pt-6 border-t border-gray-200">
                  <div className="mb-4">
                    <span className="text-xl text-gray-400 line-through">De R$97,00</span>
                  </div>
                  <div className="mb-6">
                    <span className="text-lg text-gray-700">Por apenas</span>
                    <div className="text-4xl font-bold text-green-600">R$19,90</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-center gap-2 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">Avaliação média de clientes satisfeitas</p>
                  </div>
                  
                  <a 
                    href="#checkout" 
                    className="inline-block bg-green-600 text-white font-bold text-lg py-4 px-8 rounded-lg shadow-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300"
                  >
                    QUERO APROVEITAR ESSA OFERTA!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BÔNUS SECTION (INÍCIO) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12" id="bonus">
              <h2 className="text-3xl font-bold mb-2 text-gray-800 underline decoration-pink-500">BÔNUS PARA</h2>
              <h2 className="text-3xl font-bold mb-6 text-gray-800 underline decoration-pink-500">PRIMEIRA VISITA...</h2>
              <p className="text-xl text-gray-700">
                <span className="font-semibold text-orange-500">5 bônus especiais</span> para quem adquirir o guia nesta página
              </p>
              <p className="text-lg font-bold text-red-500 underline mt-2">
                (DISPONÍVEL APENAS HOJE!)
              </p>
            </div>
            {/* BÔNUS CARDS */}
            <div className="space-y-6">
              {[
                {
                  num: "01",
                  title: "Guia de Alternativas ao Açúcar no Dia a Dia",
                  price: "R$37,00",
                  img: "https://resultadosquetransformam.com/wp-content/uploads/2025/04/104453142_gettyimages-912505612.jpg"
                },
                {
                  num: "02",
                  title: "Lista Inteligente de Compras Econômicas",
                  price: "R$57,00",
                  img: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg"
                },
                {
                  num: "03",
                  title: "Mini Desafio de 21 Dias: Reprogramando Hábitos",
                  price: "R$27,00",
                  img: "https://resultadosquetransformam.com/wp-content/uploads/2025/04/como-controlar-vontade-de-comer-doces-2.webp"
                },
                {
                  num: "04",
                  title: "Plano Leve de Refeições Inteligentes",
                  price: "R$27,00",
                  img: "https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg"
                },
                {
                  num: "05",
                  title: "Ebook de Sobremesas Equilibradas",
                  price: "R$27,00",
                  img: "https://resultadosquetransformam.com/wp-content/uploads/2025/04/sobremesa-de-morango-5.jpg"
                }
              ].map((bonus, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4">
                      <img 
                        src={bonus.img} 
                        alt={`Bônus ${bonus.num}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/4">
                      <p className="font-bold text-gray-800 mb-2">Bônus #{bonus.num}:</p>
                      <h3 className="text-lg font-semibold mb-3 text-gray-800">
                        <span className="text-orange-500">{bonus.title.split(":")[0]}</span>
                        {bonus.title.includes(":") ? `: ${bonus.title.split(":")[1]}` : ""}
                      </h3>
                      <div>
                        <p className="text-red-600 font-semibold">De: {bonus.price}</p>
                        <p className="text-green-600 font-semibold">Por: GRÁTIS</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHECKOUT */}
      <section id="checkout" className="py-16 bg-gradient-to-br from-pink-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Pronta pra dar o próximo passo?
            </h2>
            <div className="flex justify-center mb-6">
              <ArrowDown className="w-10 h-10 text-green-600 animate-bounce" />
            </div>
          </div>

          <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-red-600 py-4 px-6 text-white text-center">
              <h3 className="text-xl font-bold uppercase">Plano Completo</h3>
            </div>
            
            <div className="p-8 text-center">
              <p className="text-gray-600 text-sm mb-4">*Oferta por tempo limitado*</p>
              <div className="flex justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-500 text-sm italic mb-6">Produto 100% digital. Acesso enviado por e-mail após confirmação.</p>

              <p className="text-3xl text-red-500 font-semibold line-through mb-2">De: R$97,00</p>
              <p className="text-xl text-gray-700 mb-1">Apenas hoje por:</p>
              <p className="text-5xl font-bold text-green-600 mb-6">R$19,90</p>
              
              <a 
                href="#" 
                className="block w-full bg-green-600 text-white font-bold text-xl py-4 rounded-lg shadow-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 mb-4"
              >
                SIM! QUERO ESSA OFERTA!
              </a>
              
              <p className="text-sm font-medium text-gray-700">
                <span className="underline">Esta oportunidade pode sair do ar a qualquer momento.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 bg-green-100 rounded-full flex items-center justify-center p-4">
                <div className="w-full h-full border-4 border-green-600 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-green-600 font-bold text-3xl">07</p>
                    <p className="text-green-600 font-semibold">DIAS</p>
                    <p className="text-green-600 text-xs font-medium">GARANTIA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Garantia incondicional de 07 dias
              </h2>
              <p className="text-gray-600 mb-4">
                Se por qualquer razão você não se adaptar, basta enviar um e-mail solicitando o cancelamento. O reembolso será total e sem burocracia.
              </p>
              <p className="font-semibold text-gray-800">
                A decisão está nas suas mãos — sem riscos.
              </p>
              
              <a 
                href="#checkout" 
                className="inline-block mt-6 bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300"
              >
                LIBERAR ACESSO AGORA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
              Dúvidas Frequentes
            </h2>
            
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                  >
                    <span className="font-medium text-gray-800">{faq.question}</span>
                    <ChevronDown id={`faq-icon-${index}`} className="h-5 w-5 text-gray-500 transition-transform duration-300" />
                  </button>
                  <div id={`faq-${index}`} className="faq-answer hidden px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-sm mb-4">
              Este site não é afiliado ao Facebook ou qualquer plataforma externa. Ao sair das redes, a responsabilidade é totalmente nossa.
            </p>
            <p className="text-gray-600 text-sm mb-4">
              support@omarketingsemvendas.online
            </p>
            <p className="text-gray-800 text-sm font-medium">
              Política de Privacidade | Termos de Uso
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;