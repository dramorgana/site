import { sanityClient } from "../../lib/sanity";

// Busca os dados no Sanity
const sanityData = await sanityClient.fetch(`*[_type == "faqContent"][0]`).catch(() => null);

// Valores de fallback
const defaultContent = {
	kicker: "FAQ",
	title: "Perguntas Frequentes",
	subtitle: "Tire suas dúvidas sobre o acompanhamento médico e os protocolos de emagrecimento.",
	questions: [
		{
			id: "faq-1",
			question: "Como funciona a primeira consulta de emagrecimento?",
			answer: "A primeira consulta é uma imersão na sua saúde. Realizamos uma anamnese detalhada, avaliamos seu histórico clínico, hábitos e objetivos. Também é realizada uma bioimpedância avançada para entender sua composição corporal e traçar o melhor plano inicial.",
		},
		{
			id: "faq-2",
			question: "A Dra. atende planos de saúde ou apenas particular?",
			answer: "Atendemos prioritariamente na modalidade particular, o que nos permite oferecer um tempo de consulta estendido e um acompanhamento muito mais personalizado. No entanto, fornecemos toda a documentação necessária para que você possa solicitar o reembolso junto ao seu plano de saúde.",
		},
		{
			id: "faq-3",
			question: "Quais exames são necessários para iniciar o tratamento?",
			answer: "Não existe um 'kit padrão'. Os exames são solicitados de forma individualizada após a primeira consulta, baseando-se nas suas queixas e histórico. Geralmente incluem avaliação hormonal completa, perfil metabólico e inflamatório, para que o tratamento seja preciso e seguro.",
		},
		{
			id: "faq-4",
			question: "O tratamento inclui o uso de medicamentos?",
			answer: "O uso de medicamentos é avaliado caso a caso. Se houver indicação clínica (como resistência à insulina, distúrbios hormonais ou obesidade grau II/III), eles podem ser ferramentas potentes. O foco, porém, é sempre a base: alimentação, sono e atividade física.",
		},
		{
			id: "faq-5",
			question: "Quanto tempo dura o acompanhamento?",
			answer: "O emagrecimento não é um evento, é um processo. Nossos protocolos costumam ter ciclos de 3 a 6 meses para consolidação de hábitos, mas muitos pacientes optam pelo acompanhamento contínuo para manutenção e longevidade.",
		},
		{
			id: "faq-6",
			question: "Terei um plano alimentar específico?",
			answer: "Sim. Trabalhamos com planos alimentares que respeitam sua rotina, preferências e necessidades metabólicas. Não acreditamos em dietas de gaveta; tudo é construído de forma que seja sustentável no seu dia a dia.",
		},
		{
			id: "faq-7",
			question: "A bioimpedância está inclusa na consulta?",
			answer: "Sim, utilizamos equipamentos de bioimpedância de alta precisão para monitorar não apenas o peso, mas a gordura visceral, massa muscular e hidratação, permitindo ajustes finos no seu tratamento.",
		},
		{
			id: "faq-8",
			question: "Como é o suporte entre as consultas?",
			answer: "Oferecemos canais de comunicação direta para dúvidas pontuais e suporte motivacional. Acreditamos que o sucesso acontece no intervalo entre as consultas, e por isso não deixamos o paciente desamparado.",
		},
		{
			id: "faq-9",
			question: "O tratamento serve para quem tem problemas na tireoide?",
			answer: "Com certeza. Distúrbios da tireoide (como hipotireoidismo) impactam diretamente o metabolismo. Nossa abordagem foca em otimizar esses hormônios para que o emagrecimento ocorra de forma eficiente.",
		},
		{
			id: "faq-10",
			question: "Posso fazer o tratamento de forma online?",
			answer: "Sim, oferecemos a modalidade de telemedicina para pacientes de todo o Brasil e exterior, seguindo as regulamentações do CFM. A qualidade técnica e o acolhimento são os mesmos da consulta presencial.",
		},
		{
			id: "faq-11",
			question: "Qual a diferença entre emagrecimento e perda de peso?",
			answer: "Perder peso pode ser apenas perda de água ou músculo. Emagrecer é reduzir o percentual de gordura preservando a massa magra. Esse é o nosso foco para garantir um metabolismo ativo e evitar o efeito sanfona.",
		},
		{
			id: "faq-12",
			question: "O tratamento auxilia na menopausa?",
			answer: "Sim, a menopausa traz desafios metabólicos significativos. Atuamos na modulação hormonal e nutricional para aliviar sintomas e prevenir o ganho de peso característico dessa fase.",
		},
		{
			id: "faq-13",
			question: "Existe idade mínima para o acompanhamento?",
			answer: "Atendemos pacientes a partir da adolescência até a terceira idade, sempre adaptando os protocolos para as necessidades fisiológicas de cada fase da vida.",
		},
		{
			id: "faq-14",
			question: "É possível conciliar o tratamento com treinos de alta performance?",
			answer: "Com certeza. Nossos protocolos são ajustados para quem pratica atividades físicas intensas, garantindo que o aporte nutricional e a recuperação muscular estejam otimizados para o seu desempenho.",
		},
		{
			id: "faq-15",
			question: "Como é feita a manutenção do peso após atingir a meta?",
			answer: "A fase de manutenção é tão importante quanto a de emagrecimento. Criamos um plano de transição para consolidar seu novo peso, com consultas de acompanhamento mais espaçadas para garantir que os resultados sejam permanentes.",
		},
	],
};

// Mapeamento dos dados do Sanity ou Fallback
export const content = {
	kicker: sanityData?.kicker || defaultContent.kicker,
	title: sanityData?.title || defaultContent.title,
	subtitle: sanityData?.description || defaultContent.subtitle,
	questions: sanityData?.questions?.map((item: any) => ({
		id: item._key,
		question: item.question,
		answer: item.answer,
	})) || defaultContent.questions,
};
