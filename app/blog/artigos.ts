export interface Artigo {
  slug: string;
  titulo: string;
  resumo: string;
  conteudo: string[];
  data: string;
}

export const artigos: Artigo[] = [
  {
    slug: 'carro-falhando-e-perdendo-forca-o-que-pode-ser',
    titulo: 'Carro falhando e perdendo força: O que pode ser?',
    resumo: 'Entenda os principais motivos que fazem seu carro engasgar ou perder potência, desde problemas nas velas até falhas na injeção eletrônica.',
    data: '03 Jul 2026',
    conteudo: [
      'Você pisa no acelerador e o carro não responde como deveria? Pior ainda, ele começa a dar "soquinhos" ou parece estar engasgando? Esse é um dos problemas mais comuns nas oficinas mecânicas e pode ter diversas causas.',
      '1. Velas de Ignição e Cabos Desgastados: As velas são responsáveis por gerar a faísca que queima o combustível. Se estiverem velhas ou carbonizadas, o combustível não queima direito, causando a falhação. A troca preventiva é fundamental.',
      '2. Bicos Injetores Sujos: O combustível de má qualidade pode criar impurezas que entopem os bicos injetores. Quando isso acontece, o motor não recebe a quantidade certa de combustível, resultando em perda de força.',
      '3. Bomba de Combustível com Defeito: Se a bomba estiver com baixa pressão, o combustível não chega com força suficiente ao motor. É um problema clássico em carros que perdem potência em subidas.',
      '4. Problemas na Injeção Eletrônica: Sensores defeituosos (como o sensor de oxigênio ou sensor MAP) podem enviar informações erradas para a central do carro, bagunçando a mistura de ar e combustível.',
      'Se o seu carro está apresentando esses sintomas em São Carlos, não espere o problema piorar (o que pode danificar o catalisador e sair muito mais caro). Traga para a Motor Prime para um diagnóstico computadorizado completo.'
    ]
  },
  {
    slug: 'barulho-na-suspensao-ao-passar-em-buracos-e-perigoso',
    titulo: 'Barulho na suspensão ao passar em buracos: É perigoso?',
    resumo: 'Descubra as causas dos barulhos irritantes na suspensão, conhecidos como "toc-toc" ou rangidos, e entenda quando isso se torna um risco de segurança.',
    data: '01 Jul 2026',
    conteudo: [
      'Um dos sons mais assustadores para qualquer motorista é aquele "toc-toc" metálico ou rangido forte vindo das rodas ao passar por lombadas, valetas ou buracos. Mas será que é motivo para pânico imediato?',
      'A suspensão do carro é um conjunto complexo de peças projetado para absorver impactos e manter os pneus no chão. Quando algo faz barulho, significa que há folga, ressecamento ou quebra.',
      'Causas Comuns:',
      '• Buchas da Bandeja Ressecadas: Borrachas que perdem a flexibilidade com o tempo. Fazem barulhos parecidos com rangidos de cama velha.',
      '• Bieletas e Pivôs com Folga: São os principais causadores do som de "toc-toc" metálico seco.',
      '• Amortecedores Estourados: Se o carro "quica" demais e faz barulho de fim de curso, os amortecedores perderam a ação.',
      'É Perigoso? Sim. Peças da suspensão com folga excessiva podem se soltar com o veículo em movimento, causando acidentes graves ou desgaste irregular prematuro dos pneus.',
      'Aqui na Motor Prime em São Carlos, fazemos uma inspeção detalhada da geometria e de todos os componentes da suspensão. Agende sua revisão antes de pegar a estrada.'
    ]
  },
  {
    slug: 'qual-e-a-hora-certa-da-troca-de-oleo-do-motor',
    titulo: 'Qual é a hora certa da troca de óleo do motor?',
    resumo: 'Saiba exatamente quando trocar o óleo do seu carro e por que ignorar esse prazo pode destruir o motor do seu veículo.',
    data: '25 Jun 2026',
    conteudo: [
      'O óleo é literalmente o sangue do motor do seu carro. Ele lubrifica as peças metálicas em movimento, evita o superaquecimento e limpa impurezas. Mas ele tem prazo de validade.',
      'A regra geral diz para trocar a cada 10.000 km ou 1 ano, o que ocorrer primeiro. Porém, essa não é a verdade absoluta. Carros que andam muito em trânsito pesado de cidade (anda e para) estão no chamado "uso severo". Nesses casos, o manual da maioria das montadoras recomenda reduzir o prazo pela metade (5.000 km ou 6 meses).',
      'O que acontece se não trocar?',
      'O óleo velho perde a viscosidade e oxida. Ele começa a formar uma espécie de "borra" (uma graxa grossa) que entope os canais de lubrificação. O resultado final? O motor pode fundir, gerando um prejuízo de milhares de reais.',
      'Óleo Mineral vs Sintético: Hoje em dia, a maioria dos carros modernos exige óleo sintético. Nunca misture os dois tipos e sempre respeite a viscosidade especificada no manual (como 5W30 ou 0W20).',
      'Na Motor Prime, nossa troca de óleo é feita com lubrificantes premium e filtros originais. Passe na nossa oficina em São Carlos para garantir a longevidade do seu motor.'
    ]
  }
];
