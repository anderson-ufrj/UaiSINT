// Translations for the website
const translations = {
    pt: {
        common: {
            learn_more: "Saiba mais",
            lgpd: "LGPD",
            ai_brazil: "IA no Brasil",
            ethical_guidelines: "Diretrizes Éticas",
            anpd_guide: "Guia ANPD"
        },
        nav: {
            home: "Início",
            about: "Sobre",
            journey: "Jornada",
            tools: "Ferramentas",
            cases: "Casos",
            brazil: "Brasil",
            ethics: "Ética",
            compliance: "Conformidade",
            contact: "Contato"
        },
        cases: {
            title: "Impacto no Mundo Real",
            subtitle: "Casos que mudaram o jogo",
            security: {
                title: "Segurança Cibernética",
                desc: "Identificação proativa de vulnerabilidades e ameaças antes que sejam exploradas"
            },
            journalism: {
                title: "Jornalismo Investigativo",
                desc: "Verificação de fatos e descoberta de conexões ocultas - como o caso Bellingcat"
            },
            criminal: {
                title: "Investigações Criminais",
                desc: "Rastreamento de atividades ilícitas e identificação de redes criminosas"
            }
        },
        brazil: {
            title: "OSINT no Brasil",
            subtitle: "Casos de sucesso nacionais",
            lavajato: {
                title: "Lava Jato",
                desc: "OSINT usado para rastrear movimentações financeiras e conexões entre investigados"
            },
            amazon: {
                title: "Incêndios na Amazônia",
                desc: "Análise de dados satelitais e redes sociais para identificar focos criminosos"
            },
            pandemic: {
                title: "Combate à Desinformação",
                desc: "Rastreamento de fake news durante a pandemia usando IA e análise de redes"
            }
        },
        hero: {
            badge: "INTELIGÊNCIA DIGITAL",
            title1: "IA & OSINT",
            title2: "A Nova Fronteira Digital",
            subtitle: "Descubra como a Inteligência Artificial está revolucionando a coleta e análise de informações abertas",
            presentationBtn: "Ver Apresentação",
            learnBtn: "Saiba Mais",
            continueBtn: "Continuar no Site"
        },
        about: {
            title: "O Mundo Invisível dos Dados",
            subtitle: "Transformando informações públicas em inteligência estratégica",
            what: "O Que é OSINT?",
            desc1: "OSINT (Open Source Intelligence) é a arte de coletar, analisar e utilizar informações disponíveis publicamente para criar inteligência acionável. É a habilidade de encontrar agulhas em palheiros digitais.",
            desc2: "Quando combinado com Inteligência Artificial, o OSINT se transforma em uma ferramenta poderosa capaz de processar volumes massivos de dados, identificar padrões ocultos e gerar insights que seriam impossíveis de obter manualmente.",
            exploreBtn: "Explorar a Jornada"
        },
        journey: {
            title: "A Jornada do OSINT",
            subtitle: "Do dado bruto à inteligência acionável",
            phase_label: "Fase",
            phase1: {
                title: "Coleta de Dados",
                desc: "Identificação e coleta de informações de fontes públicas: redes sociais, sites, registros públicos, metadados e muito mais."
            },
            phase2: {
                title: "Processamento com IA",
                desc: "Aplicação de algoritmos de Machine Learning para processar, classificar e correlacionar dados em escala massiva."
            },
            phase3: {
                title: "Análise Inteligente",
                desc: "Identificação de padrões, anomalias e conexões ocultas através de análise preditiva e processamento de linguagem natural."
            },
            phase4: {
                title: "Inteligência Acionável",
                desc: "Transformação de insights em decisões estratégicas, prevenção de riscos e oportunidades de negócio."
            }
        },
        tools: {
            title: "Arsenal Digital",
            subtitle: "Ferramentas essenciais para o detetive digital",
            holehe: "Verifica existência de emails em mais de 120 sites",
            sherlock: "Busca usernames em centenas de redes sociais",
            shodan: "O mecanismo de busca para dispositivos conectados",
            reconng: "Framework modular de reconhecimento web",
            phoneinfoga: "Análise avançada de números telefônicos",
            framework: "Catálogo completo de ferramentas OSINT"
        },
        ethics: {
            title: "O Paradoxo Ético",
            subtitle: "Navegando entre poder e responsabilidade",
            privacy: {
                title: "Privacidade vs. Segurança",
                desc: "O equilíbrio delicado entre proteger a sociedade e preservar direitos individuais. Até onde podemos ir sem cruzar linhas éticas?"
            },
            bias: {
                title: "Viés Algorítmico",
                desc: "Como garantir que nossas ferramentas de IA não perpetuem ou amplifiquem preconceitos existentes na sociedade?"
            },
            misuse: {
                title: "Uso Responsável",
                desc: "As mesmas ferramentas que protegem podem ser usadas para prejudicar. A responsabilidade está em quem as utiliza."
            },
            transparency: {
                title: "Transparência e Consentimento",
                desc: "A coleta e análise de dados devem ser transparentes e baseadas em consentimento, especialmente quando afetam indivíduos e comunidades inteiras."
            },
            quote: "\"A integridade ética não é uma opção, mas uma obrigação no campo da inteligência digital.\""
        },
        compliance: {
            title: "Conformidade Legal",
            subtitle: "Riscos de software não licenciado em ambiente corporativo",
            desc: "O uso de software pirata representa sério risco legal e de segurança para corporações, podendo resultar em multas significativas, vulnerabilidades de segurança e danos à reputação.",
            intro: "A pirataria de software é uma prática ilegal que prejudica desenvolvedores, empresas e usuários finais. Além de violar direitos autorais, expõe sistemas a sérios riscos de segurança.",
            stats: "No Brasil, cerca de 35% do software em uso é pirata, gerando prejuízos de mais de R$ 6 bilhões anualmente para a economia.",
            risk1: {
                title: "Riscos Legais",
                desc: "Multas que podem chegar a milhões, processos por violação de propriedade intelectual e responsabilidade criminal para gestores.",
                detail: "As penalidades por uso de software pirata podem incluir multas de até R$ 3.000 por cópia ilegal, além de penas de detenção de 1 a 4 anos para os responsáveis."
            },
            risk2: {
                title: "Segurança Comprometida",
                desc: "Software ilegal frequentemente contém malware e não recebe atualizações de segurança cruciais, expondo dados sensíveis a ataques.",
                detail: "Programas piratas são frequentemente modificados para incluir backdoors, ransomware e spyware, permitindo acesso não autorizado a dados confidenciais da empresa."
            },
            risk3: {
                title: "Reputação Corporativa",
                desc: "Danos irreparáveis à imagem da empresa e perda de confiança de clientes, parceiros e investidores.",
                detail: "Um escândalo envolvendo pirataria pode destruir a reputação de uma empresa em minutos, resultando em perda de clientes e dificuldade para fechar novos negócios."
            },
            risk4: {
                title: "Incompatibilidade Técnica",
                desc: "Software pirata frequentemente apresenta falhas de desempenho, incompatibilidade com outros sistemas e limitações para integrações corporativas.",
                detail: "Versões não licenciadas podem causar perda de dados importantes, interrupções de serviço e comprometer a produtividade de equipes inteiras durante falhas críticas."
            },
            solution: "Invista em licenças legítimas, implemente políticas claras de compliance de software e realize auditorias regulares para garantir conformidade e segurança.",
            benefits: "Software legal oferece suporte técnico, atualizações de segurança, garantia de funcionamento e proteção contra vulnerabilidades, além de contribuir para a inovação do setor."
        },
        cta: {
            title: "Proteja-se com IA & OSINT",
            subtitle: "Use o poder da inteligência digital para fortalecer sua segurança e conformidade",
            joinBtn: "Junte-se a Nós",
            watchBtn: "Assistir Apresentação"
        },
        contact: {
            title: "Vamos Conversar",
            subtitle: "Entre em contato e faça parte desta jornada",
            role: "Especialista em Inteligência Digital",
            connect: "Conecte-se no LinkedIn",
            scan: "Escaneie para conectar",
            data: "Análise de Dados"
        },
        readMode: {
            label: "Modo Leitura"
        },
        footer: {
            home: "Início",
            about: "Sobre",
            tools: "Ferramentas",
            contact: "Contato",
            rights: "Todos os direitos reservados.",
            made: "Feito com",
            by: "em Minas Gerais",
            support: "Apoio",
            description: "Transformando dados em inteligência através da união entre OSINT e Inteligência Artificial.",
            quickLinks: "Links Rápidos",
            thanks: "Agradecimentos",
            osintGroup: "Grupo de OSINT de Minas Gerais",
            thanksText: "Agradecimentos à Ruvixx pelo apoio. A empresa tem contribuído ativamente para ajudar profissionais no Brasil e no Mundo a atuarem de forma legal, responsável e ética, enfrentando a pirataria com inteligência e tecnologia e garantindo a segurança de todos os usuários de software.",
            visitRuvixx: "Visite ruvixx.com",
            linkedin: "LinkedIn"
        },
        lgpd: {
            title: "LGPD + OSINT",
            subtitle: "Como a Lei Geral de Proteção de Dados (13.709/18) Impacta Nossa Prática",
            principles: "10 Princípios LGPD",
            penalties: "Penalidades",
            penalty_simple: "Multa simples:",
            penalty_simple_desc: "Até 2% do faturamento\nLimitada a R$ 50 milhões",
            penalty_daily: "Multa diária:",
            penalty_daily_desc: "Até R$ 50 mil por dia",
            sanctions: "Sanções:",
            sanctions_desc: "Bloqueio ou eliminação dos dados",
            tip: "Dica OSINT:",
            tip_desc: "Dados públicos ainda precisam de base legal para processamento!"
        },
        digitalLife: {
            title: "24/7 Online",
            subtitle: "Sua Vida Digital em Números",
            data_bytes: "Quintilhões de bytes/dia",
            phone_checks: "Vezes checamos celular/dia",
            online_percent: "Brasileiros online",
            online_time: "Tempo médio online/dia",
            trail_title: "Rastro Digital em 1 Minuto",
            location: "Localização:",
            location_desc: "GPS + Wi-Fi + Cell Tower",
            search: "Buscas:",
            search_desc: "Google, Bing, DuckDuckGo",
            apps: "Apps:",
            apps_desc: "30+ em background",
            cookies: "Cookies:",
            cookies_desc: "100+ rastreadores",
            shopping: "Compras:",
            shopping_desc: "Cartão + PIX",
            photos: "Fotos:",
            photos_desc: "Metadados EXIF",
            voice: "Voz:",
            voice_desc: "Assistentes sempre ouvindo",
            biometrics: "Biometria:",
            biometrics_desc: "Face + Digital"
        },
        tools_extra: {
            osintframework: "Coleção organizada de 500+ ferramentas OSINT",
            bellingcat: "Tutoriais e estudos de caso completos",
            youtube: "Canais com tutoriais e demonstrações práticas",
            ai_assistant: "Assistente que ajuda a avaliar e processar dados"
        },
        hybridIntel: {
            title: "A Nova Inteligência Híbrida",
            subtitle: "Humano + Máquina = Futuro",
            human_brings: "O Humano Traz",
            human_list: [
                "Criatividade e intuição",
                "Percepção de contexto",
                "Compreensão ética e valores",
                "Adaptação a situações ambíguas",
                "Decisões baseadas em experiência"
            ],
            ai_brings: "A IA Traz",
            ai_list: [
                "Processamento de grandes volumes",
                "Eliminação de viés inconsciente",
                "Análise de padrões complexos",
                "Velocidade e escala",
                "Decisões baseadas em dados"
            ],
            success_formula: "A Fórmula do Sucesso",
            success_formula_text: "OSINT + IA + HUMANO = Insight + Escala + Julgamento"
        },
        gettingStarted: {
            title: "Mão na Massa!",
            subtitle: "Ferramentas para Começar Hoje"
        },
        detective: {
            title: "Seja um Detetive Digital",
            subtitle: "O caminho para dominar o OSINT e a Inteligência Artificial",
            start: {
                title: "Por onde começar?",
                desc: "<strong>Cursos gratuitos:</strong> bellingcat.com/resources<br><strong>Ferramentas básicas:</strong> Google Dorking, OSINT Framework<br><strong>CTFs:</strong> Desafios práticos para treinar habilidades"
            },
            skills: {
                title: "Habilidades Essenciais",
                desc: "<strong>Python:</strong> Automação e análise de dados<br><strong>SQL:</strong> Gerenciamento de grandes datasets<br><strong>APIs:</strong> Integração com ferramentas"
            },
            mindset: {
                title: "Mindset OSINT",
                desc: "<strong>Curiosidade:</strong> Questione tudo<br><strong>Ética:</strong> Respeite a privacidade<br><strong>Persistência:</strong> A verdade está nos detalhes"
            },
            github: "Contribua no GitHub",
            telegram: "Entre no Telegram"
        },
        developer: {
            role: "Arquiteto Digital",
            specialist: "IA & OSINT Specialist @"
        }
    },
    en: {
        common: {
            learn_more: "Learn more",
            lgpd: "GDPR",
            ai_brazil: "AI in Brazil",
            ethical_guidelines: "Ethical Guidelines",
            anpd_guide: "ANPD Guide"
        },
        nav: {
            home: "Home",
            about: "About",
            journey: "Journey",
            tools: "Tools",
            cases: "Cases",
            brazil: "Brazil",
            ethics: "Ethics",
            compliance: "Compliance",
            contact: "Contact"
        },
        cases: {
            title: "Real-World Impact",
            subtitle: "Cases that changed the game",
            security: {
                title: "Cybersecurity",
                desc: "Proactive identification of vulnerabilities and threats before they're exploited"
            },
            journalism: {
                title: "Investigative Journalism",
                desc: "Fact-checking and uncovering hidden connections - like the Bellingcat investigations"
            },
            criminal: {
                title: "Criminal Investigations",
                desc: "Tracking illicit activities and identifying criminal networks with digital evidence"
            }
        },
        brazil: {
            title: "OSINT in Brazil",
            subtitle: "National success stories",
            lavajato: {
                title: "Operation Car Wash",
                desc: "OSINT used to track financial transactions and connections between suspects"
            },
            amazon: {
                title: "Amazon Rainforest Fires",
                desc: "Analysis of satellite data and social networks to identify criminal hotspots"
            },
            pandemic: {
                title: "Fighting Disinformation",
                desc: "Tracking fake news during the pandemic using AI and network analysis techniques"
            }
        },
        hero: {
            badge: "DIGITAL INTELLIGENCE",
            title1: "AI & OSINT",
            title2: "The New Digital Frontier",
            subtitle: "Discover how Artificial Intelligence is revolutionizing open source information collection and analysis",
            presentationBtn: "View Presentation",
            learnBtn: "Learn More",
            continueBtn: "Continue on Website"
        },
        about: {
            title: "The Invisible World of Data",
            subtitle: "Transforming public information into strategic intelligence",
            what: "What is OSINT?",
            desc1: "OSINT (Open Source Intelligence) is the art of collecting, analyzing, and using publicly available information to create actionable intelligence. It's the ability to find needles in digital haystacks.",
            desc2: "When combined with Artificial Intelligence, OSINT transforms into a powerful tool capable of processing massive volumes of data, identifying hidden patterns, and generating insights that would be impossible to obtain manually.",
            exploreBtn: "Explore the Journey"
        },
        journey: {
            title: "The OSINT Journey",
            subtitle: "From raw data to actionable intelligence",
            phase_label: "Phase",
            phase1: {
                title: "Data Collection",
                desc: "Identification and collection of information from public sources: social media, websites, public records, metadata, and more."
            },
            phase2: {
                title: "AI Processing",
                desc: "Application of Machine Learning algorithms to process, classify, and correlate data at massive scale."
            },
            phase3: {
                title: "Intelligent Analysis",
                desc: "Identification of patterns, anomalies, and hidden connections through predictive analysis and natural language processing."
            },
            phase4: {
                title: "Actionable Intelligence",
                desc: "Transformation of insights into strategic decisions, risk prevention, and business opportunities."
            }
        },
        tools: {
            title: "Digital Arsenal",
            subtitle: "Essential tools for the digital detective",
            holehe: "Checks email existence across 120+ sites",
            sherlock: "Searches usernames across hundreds of social networks",
            shodan: "The search engine for connected devices",
            reconng: "Modular web reconnaissance framework",
            phoneinfoga: "Advanced phone number analysis",
            framework: "Complete catalog of OSINT tools"
        },
        ethics: {
            title: "The Ethical Paradox",
            subtitle: "Navigating between power and responsibility",
            privacy: {
                title: "Privacy vs. Security",
                desc: "The delicate balance between protecting society and preserving individual rights. How far can we go without crossing ethical lines?"
            },
            bias: {
                title: "Algorithmic Bias",
                desc: "How to ensure our AI tools don't perpetuate or amplify existing societal prejudices?"
            },
            misuse: {
                title: "Responsible Use",
                desc: "The same tools that protect can be used to harm. The responsibility lies with those who use them."
            },
            transparency: {
                title: "Transparency and Consent",
                desc: "Data collection and analysis must be transparent and based on consent, especially when they affect individuals and entire communities."
            },
            quote: "\"Ethical integrity is not an option, but an obligation in the field of digital intelligence.\""
        },
        compliance: {
            title: "Legal Compliance",
            subtitle: "Risks of unlicensed software in corporate settings",
            desc: "The use of pirated software poses serious legal and security risks for corporations, potentially resulting in significant fines, security vulnerabilities, and reputational damage.",
            intro: "Software piracy is an illegal practice that harms developers, companies and end users. Besides violating copyright, it exposes systems to serious security risks.",
            stats: "Globally, around 37% of software in use is pirated, resulting in economic losses of over $46 billion annually.",
            risk1: {
                title: "Legal Risks",
                desc: "Fines that can reach millions, intellectual property infringement lawsuits, and criminal liability for managers.",
                detail: "Penalties for using pirated software can include fines of up to $150,000 per illegal copy, along with potential imprisonment for those responsible."
            },
            risk2: {
                title: "Compromised Security",
                desc: "Illegal software often contains malware and doesn't receive crucial security updates, exposing sensitive data to attacks.",
                detail: "Pirated programs are frequently modified to include backdoors, ransomware, and spyware, allowing unauthorized access to company confidential data."
            },
            risk3: {
                title: "Corporate Reputation",
                desc: "Irreparable damage to company image and loss of trust from customers, partners, and investors.",
                detail: "A scandal involving piracy can destroy a company's reputation in minutes, resulting in customer loss and difficulty in closing new business."
            },
            risk4: {
                title: "Technical Incompatibility",
                desc: "Pirated software often has performance issues, incompatibility with other systems, and limitations for corporate integrations.",
                detail: "Unlicensed versions can cause important data loss, service interruptions, and compromise the productivity of entire teams during critical failures."
            },
            solution: "Invest in legitimate licenses, implement clear software compliance policies, and conduct regular audits to ensure compliance and security.",
            benefits: "Legal software offers technical support, security updates, performance guarantees and protection against vulnerabilities, while also contributing to industry innovation."
        },
        cta: {
            title: "Protect Yourself with AI & OSINT",
            subtitle: "Use the power of digital intelligence to strengthen your security and compliance",
            joinBtn: "Join Us",
            watchBtn: "Watch Presentation"
        },
        contact: {
            title: "Let's Talk",
            subtitle: "Get in touch and be part of this journey",
            role: "Digital Intelligence Specialist",
            connect: "Connect on LinkedIn",
            scan: "Scan to connect",
            data: "Data Analysis"
        },
        readMode: {
            label: "Read Mode"
        },
        footer: {
            home: "Home",
            about: "About",
            tools: "Tools",
            contact: "Contact",
            rights: "All rights reserved.",
            made: "Made with",
            by: "in Minas Gerais",
            support: "Support",
            description: "Transforming data into intelligence through the fusion of OSINT and Artificial Intelligence.",
            quickLinks: "Quick Links",
            thanks: "Acknowledgements",
            osintGroup: "OSINT Group from Minas Gerais",
            thanksText: "Special thanks to Ruvixx for their support. The company has actively contributed to helping professionals in Brazil and worldwide to work legally, responsibly and ethically, combating piracy through intelligence and technology while ensuring the security of all software users.",
            visitRuvixx: "Visit ruvixx.com",
            linkedin: "LinkedIn"
        },
        lgpd: {
            title: "LGPD + OSINT",
            subtitle: "How Brazil's General Data Protection Law (13.709/18) Impacts Our Practice",
            principles: "10 LGPD Principles",
            penalties: "Penalties",
            penalty_simple: "Standard fine:",
            penalty_simple_desc: "Up to 2% of revenue\nCapped at R$50 million",
            penalty_daily: "Daily fine:",
            penalty_daily_desc: "Up to R$50,000 per day",
            sanctions: "Sanctions:",
            sanctions_desc: "Data blocking or deletion",
            tip: "OSINT Tip:",
            tip_desc: "Public data still requires a legal basis for processing!"
        },
        digitalLife: {
            title: "24/7 Online",
            subtitle: "Your Digital Life in Numbers",
            data_bytes: "Quintillion bytes/day",
            phone_checks: "Times we check our phones/day",
            online_percent: "People online in Brazil",
            online_time: "Average hours online/day",
            trail_title: "Digital Footprint in 1 Minute",
            location: "Location:",
            location_desc: "GPS + Wi-Fi + Cell Tower",
            search: "Searches:",
            search_desc: "Google, Bing, DuckDuckGo",
            apps: "Apps:",
            apps_desc: "30+ running in background",
            cookies: "Cookies:",
            cookies_desc: "100+ trackers",
            shopping: "Shopping:",
            shopping_desc: "Card + Digital Payment",
            photos: "Photos:",
            photos_desc: "EXIF Metadata",
            voice: "Voice:",
            voice_desc: "Always-listening assistants",
            biometrics: "Biometrics:",
            biometrics_desc: "Face + Fingerprint"
        },
        tools_extra: {
            osintframework: "Organized collection of 500+ OSINT tools",
            bellingcat: "Tutorials and comprehensive case studies",
            youtube: "Channels with tutorials and practical demonstrations",
            ai_assistant: "Assistant that helps evaluate and process data"
        },
        hybridIntel: {
            title: "The New Hybrid Intelligence",
            subtitle: "Human + Machine = Future",
            human_brings: "Humans Bring",
            human_list: [
                "Creativity and intuition",
                "Contextual awareness",
                "Ethical understanding and values",
                "Adaptation to ambiguous situations",
                "Experience-based decisions"
            ],
            ai_brings: "AI Brings",
            ai_list: [
                "Processing of large data volumes",
                "Elimination of unconscious bias",
                "Analysis of complex patterns",
                "Speed and scale",
                "Data-driven decisions"
            ],
            success_formula: "The Formula for Success",
            success_formula_text: "OSINT + AI + HUMAN = Insight + Scale + Judgment"
        },
        gettingStarted: {
            title: "Let's Get Started!",
            subtitle: "Tools to Begin Today"
        },
        detective: {
            title: "Become a Digital Detective",
            subtitle: "The path to mastering OSINT and Artificial Intelligence",
            start: {
                title: "Where to start?",
                desc: "<strong>Free courses:</strong> bellingcat.com/resources<br><strong>Basic tools:</strong> Google Dorking, OSINT Framework<br><strong>CTFs:</strong> Practical challenges to train skills"
            },
            skills: {
                title: "Essential Skills",
                desc: "<strong>Python:</strong> Automation and data analysis<br><strong>SQL:</strong> Large dataset management<br><strong>APIs:</strong> Tool integration"
            },
            mindset: {
                title: "OSINT Mindset",
                desc: "<strong>Curiosity:</strong> Question everything<br><strong>Ethics:</strong> Respect privacy<br><strong>Persistence:</strong> The truth is in the details"
            },
            github: "Contribute on GitHub",
            telegram: "Join Telegram"
        },
        developer: {
            role: "Digital Architect",
            specialist: "AI & OSINT Specialist @"
        }
    },
    es: {
        common: {
            learn_more: "Saber más",
            lgpd: "LGPD",
            ai_brazil: "IA en Brasil",
            ethical_guidelines: "Directrices Éticas",
            anpd_guide: "Guía ANPD"
        },
        nav: {
            home: "Inicio",
            about: "Acerca de",
            journey: "Jornada",
            tools: "Herramientas",
            cases: "Casos",
            brazil: "Brasil",
            ethics: "Ética",
            compliance: "Conformidad",
            contact: "Contacto"
        },
        cases: {
            title: "Impacto en el Mundo Real",
            subtitle: "Casos que cambiaron las reglas del juego",
            security: {
                title: "Ciberseguridad",
                desc: "Identificación proactiva de vulnerabilidades y amenazas antes de que sean explotadas"
            },
            journalism: {
                title: "Periodismo de Investigación",
                desc: "Verificación de hechos y descubrimiento de conexiones ocultas - como el caso Bellingcat"
            },
            criminal: {
                title: "Investigaciones Criminales",
                desc: "Rastreo de actividades ilícitas e identificación de redes criminales con evidencia digital"
            }
        },
        brazil: {
            title: "OSINT en Brasil",
            subtitle: "Casos de éxito nacionales",
            lavajato: {
                title: "Operación Lava Jato",
                desc: "OSINT utilizado para rastrear movimientos financieros y conexiones entre investigados"
            },
            amazon: {
                title: "Incendios en la Amazonía",
                desc: "Análisis de datos satelitales y redes sociales para identificar focos criminales"
            },
            pandemic: {
                title: "Combate a la Desinformación",
                desc: "Rastreo de noticias falsas durante la pandemia utilizando IA y análisis de redes"
            }
        },
        hero: {
            badge: "INTELIGENCIA DIGITAL",
            title1: "IA & OSINT",
            title2: "La Nueva Frontera Digital",
            subtitle: "Descubre cómo la Inteligencia Artificial está revolucionando la recolección y análisis de información abierta",
            presentationBtn: "Ver Presentación",
            learnBtn: "Saber Más",
            continueBtn: "Continuar al Sitio"
        },
        about: {
            title: "El Mundo Invisible de los Datos",
            subtitle: "Transformando información pública en inteligencia estratégica",
            what: "¿Qué es OSINT?",
            desc1: "OSINT (Inteligencia de Fuentes Abiertas) es el arte de recopilar, analizar y utilizar información disponible públicamente para crear inteligencia accionable. Es la habilidad de encontrar agujas en pajares digitales.",
            desc2: "Cuando se combina con Inteligencia Artificial, OSINT se transforma en una herramienta poderosa capaz de procesar volúmenes masivos de datos, identificar patrones ocultos y generar ideas que serían imposibles de obtener manualmente.",
            exploreBtn: "Explorar la Jornada"
        },
        journey: {
            title: "La Jornada del OSINT",
            subtitle: "Del dato crudo a la inteligencia accionable",
            phase_label: "Fase",
            phase1: {
                title: "Recolección de Datos",
                desc: "Identificación y recolección de información de fuentes públicas: redes sociales, sitios web, registros públicos, metadatos y más."
            },
            phase2: {
                title: "Procesamiento con IA",
                desc: "Aplicación de algoritmos de Machine Learning para procesar, clasificar y correlacionar datos a escala masiva."
            },
            phase3: {
                title: "Análisis Inteligente",
                desc: "Identificación de patrones, anomalías y conexiones ocultas a través del análisis predictivo y procesamiento del lenguaje natural."
            },
            phase4: {
                title: "Inteligencia Accionable",
                desc: "Transformación de conocimientos en decisiones estratégicas, prevención de riesgos y oportunidades de negocio."
            }
        },
        tools: {
            title: "Arsenal Digital",
            subtitle: "Herramientas esenciales para el detective digital",
            holehe: "Verifica la existencia de correos en más de 120 sitios",
            sherlock: "Busca nombres de usuario en cientos de redes sociales",
            shodan: "El motor de búsqueda para dispositivos conectados",
            reconng: "Framework modular de reconocimiento web",
            phoneinfoga: "Análisis avanzado de números telefónicos",
            framework: "Catálogo completo de herramientas OSINT"
        },
        ethics: {
            title: "La Paradoja Ética",
            subtitle: "Navegando entre poder y responsabilidad",
            privacy: {
                title: "Privacidad vs. Seguridad",
                desc: "El delicado equilibrio entre proteger a la sociedad y preservar los derechos individuales. ¿Hasta dónde podemos llegar sin cruzar líneas éticas?"
            },
            bias: {
                title: "Sesgo Algorítmico",
                desc: "¿Cómo garantizar que nuestras herramientas de IA no perpetúen o amplifiquen los prejuicios existentes en la sociedad?"
            },
            misuse: {
                title: "Uso Responsable",
                desc: "Las mismas herramientas que protegen pueden usarse para dañar. La responsabilidad recae en quienes las utilizan."
            },
            transparency: {
                title: "Transparencia y Consentimiento",
                desc: "La recopilación y el análisis de datos deben ser transparentes y basados en el consentimiento, especialmente cuando afectan a individuos y comunidades enteras."
            },
            quote: "\"La integridad ética no es una opción, sino una obligación en el campo de la inteligencia digital.\""
        },
        compliance: {
            title: "Conformidad Legal",
            subtitle: "Riesgos de software sin licencia en entornos corporativos",
            desc: "El uso de software pirata representa un serio riesgo legal y de seguridad para las corporaciones, pudiendo resultar en multas significativas, vulnerabilidades de seguridad y daños a la reputación.",
            intro: "La piratería de software es una práctica ilegal que perjudica a desarrolladores, empresas y usuarios finales. Además de violar derechos de autor, expone los sistemas a graves riesgos de seguridad.",
            stats: "En Latinoamérica, aproximadamente el 52% del software en uso es pirata, generando pérdidas económicas de más de $5 mil millones de dólares al año.",
            risk1: {
                title: "Riesgos Legales",
                desc: "Multas que pueden llegar a millones, procesos por violación de propiedad intelectual y responsabilidad criminal para gestores.",
                detail: "Las sanciones por el uso de software pirata pueden incluir multas de hasta $150,000 por copia ilegal, además de penas de cárcel para los responsables."
            },
            risk2: {
                title: "Seguridad Comprometida",
                desc: "Software ilegal frecuentemente contiene malware y no recibe actualizaciones de seguridad cruciales, exponiendo datos sensibles a ataques.",
                detail: "Los programas piratas a menudo son modificados para incluir puertas traseras, ransomware y spyware, permitiendo acceso no autorizado a datos confidenciales de la empresa."
            },
            risk3: {
                title: "Reputación Corporativa",
                desc: "Daños irreparables a la imagen de la empresa y pérdida de confianza de clientes, socios e inversionistas.",
                detail: "Un escándalo relacionado con la piratería puede destruir la reputación de una empresa en minutos, resultando en pérdida de clientes y dificultad para cerrar nuevos negocios."
            },
            risk4: {
                title: "Incompatibilidad Técnica",
                desc: "El software pirata frecuentemente presenta fallos de rendimiento, incompatibilidad con otros sistemas y limitaciones para integraciones corporativas.",
                detail: "Las versiones no licenciadas pueden causar pérdida de datos importantes, interrupciones de servicio y comprometer la productividad de equipos enteros durante fallos críticos."
            },
            solution: "Invierta en licencias legítimas, implemente políticas claras de conformidad de software y realice auditorías regulares para garantizar el cumplimiento y la seguridad.",
            benefits: "El software legal ofrece soporte técnico, actualizaciones de seguridad, garantías de funcionamiento y protección contra vulnerabilidades, además de contribuir a la innovación del sector."
        },
        cta: {
            title: "Protégete con IA & OSINT",
            subtitle: "Usa el poder de la inteligencia digital para fortalecer tu seguridad y conformidad",
            joinBtn: "Únete a Nosotros",
            watchBtn: "Ver Presentación"
        },
        contact: {
            title: "Hablemos",
            subtitle: "Contáctanos y sé parte de esta jornada",
            role: "Especialista en Inteligencia Digital",
            connect: "Conéctate en LinkedIn",
            scan: "Escanea para conectar",
            data: "Análisis de Datos"
        },
        readMode: {
            label: "Modo Lectura"
        },
        footer: {
            home: "Inicio",
            about: "Acerca de",
            tools: "Herramientas",
            contact: "Contacto",
            rights: "Todos los derechos reservados.",
            made: "Hecho con",
            by: "en Minas Gerais",
            support: "Apoyo",
            description: "Transformando datos en inteligencia a través de la unión entre OSINT e Inteligencia Artificial.",
            quickLinks: "Enlaces Rápidos",
            thanks: "Agradecimientos",
            osintGroup: "Grupo de OSINT de Minas Gerais",
            thanksText: "Agradecimientos a Ruvixx por su apoyo. La empresa ha contribuido activamente a ayudar a profesionales en Brasil y en todo el mundo a actuar de forma legal, responsable y ética, enfrentando la piratería con inteligencia y tecnología y garantizando la seguridad de todos los usuarios de software.",
            visitRuvixx: "Visite ruvixx.com",
            linkedin: "LinkedIn"
        },
        lgpd: {
            title: "LGPD + OSINT",
            subtitle: "Cómo la Ley General de Protección de Datos de Brasil (13.709/18) Impacta Nuestra Práctica",
            principles: "10 Principios LGPD",
            penalties: "Sanciones",
            penalty_simple: "Multa básica:",
            penalty_simple_desc: "Hasta el 2% de la facturación\nLímite de R$50 millones",
            penalty_daily: "Multa diaria:",
            penalty_daily_desc: "Hasta R$50.000 por día",
            sanctions: "Sanciones:",
            sanctions_desc: "Bloqueo o eliminación de datos",
            tip: "Consejo OSINT:",
            tip_desc: "¡Los datos públicos aún requieren una base legal para su procesamiento!"
        },
        digitalLife: {
            title: "24/7 En Línea",
            subtitle: "Tu Vida Digital en Números",
            data_bytes: "Quintillones de bytes/día",
            phone_checks: "Veces que revisamos el móvil/día",
            online_percent: "Personas conectadas en Brasil",
            online_time: "Horas promedio en línea/día",
            trail_title: "Huella Digital en 1 Minuto",
            location: "Ubicación:",
            location_desc: "GPS + Wi-Fi + Antenas de telefonía",
            search: "Búsquedas:",
            search_desc: "Google, Bing, DuckDuckGo",
            apps: "Aplicaciones:",
            apps_desc: "30+ funcionando en segundo plano",
            cookies: "Cookies:",
            cookies_desc: "100+ rastreadores",
            shopping: "Compras:",
            shopping_desc: "Tarjeta + Pago Digital",
            photos: "Fotos:",
            photos_desc: "Metadatos EXIF",
            voice: "Voz:",
            voice_desc: "Asistentes siempre escuchando",
            biometrics: "Biometría:",
            biometrics_desc: "Rostro + Huella Digital"
        },
        tools_extra: {
            osintframework: "Colección organizada de más de 500 herramientas OSINT",
            bellingcat: "Tutoriales y estudios de caso completos",
            youtube: "Canales con tutoriales y demostraciones prácticas",
            ai_assistant: "Asistente que ayuda a evaluar y procesar datos"
        },
        hybridIntel: {
            title: "La Nueva Inteligencia Híbrida",
            subtitle: "Humano + Máquina = Futuro",
            human_brings: "El Humano Aporta",
            human_list: [
                "Creatividad e intuición",
                "Percepción contextual",
                "Comprensión ética y valores",
                "Adaptación a situaciones ambiguas",
                "Decisiones basadas en experiencia"
            ],
            ai_brings: "La IA Aporta",
            ai_list: [
                "Procesamiento de grandes volúmenes",
                "Eliminación de sesgos inconscientes",
                "Análisis de patrones complejos",
                "Velocidad y escala",
                "Decisiones basadas en datos"
            ],
            success_formula: "La Fórmula del Éxito",
            success_formula_text: "OSINT + IA + HUMANO = Perspicacia + Escala + Criterio"
        },
        gettingStarted: {
            title: "¡Manos a la Obra!",
            subtitle: "Herramientas para Comenzar Hoy"
        },
        detective: {
            title: "Sé un Detective Digital",
            subtitle: "El camino para dominar OSINT e Inteligencia Artificial",
            start: {
                title: "¿Por dónde empezar?",
                desc: "<strong>Cursos gratuitos:</strong> bellingcat.com/resources<br><strong>Herramientas básicas:</strong> Google Dorking, OSINT Framework<br><strong>CTFs:</strong> Desafíos prácticos para entrenar habilidades"
            },
            skills: {
                title: "Habilidades Esenciales",
                desc: "<strong>Python:</strong> Automatización y análisis de datos<br><strong>SQL:</strong> Gestión de grandes datasets<br><strong>APIs:</strong> Integración con herramientas"
            },
            mindset: {
                title: "Mentalidad OSINT",
                desc: "<strong>Curiosidad:</strong> Cuestiona todo<br><strong>Ética:</strong> Respeta la privacidad<br><strong>Persistencia:</strong> La verdad está en los detalles"
            },
            github: "Contribuye en GitHub",
            telegram: "Únete a Telegram"
        },
        developer: {
            role: "Arquitecto Digital",
            specialist: "Especialista en IA & OSINT @"
        }
    }
};

// Language management
function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    updateTranslations(lang);
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
}

function updateTranslations(lang) {
    if (!translations || !translations[lang]) {
        console.error('Translations not found for language: ' + lang);
        return;
    }
    
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (!key) return;
        
        const keys = key.split('.');
        let translation = translations[lang];
        
        for (const k of keys) {
            // Tratar casos especiais como arrays com índices (human_list.0)
            if (translation && (k in translation || (Array.isArray(translation) && !isNaN(parseInt(k))))) {
                translation = translation[k];
            } else {
                console.warn(`Translation key not found: ${key} (missing: ${k})`);
                translation = null;
                break;
            }
        }
        
        if (translation) {
            // Aplicar tradução independentemente dos elementos filhos
            if (typeof translation === 'string') {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Atualizar elementos específicos se necessário
    // Por exemplo, texto do botão de modo leitura, etc.
}

// Initialize language
function initializeLanguage() {
    // Verificar a estrutura dos arrays de tradução para humanos e IA
    console.log('Checking human_list PT:', translations.pt.hybridIntel.human_list);
    console.log('Checking human_list EN:', translations.en.hybridIntel.human_list);
    console.log('Checking human_list ES:', translations.es.hybridIntel.human_list);
    
    // Verificar se podemos acessar os índices dos arrays
    console.log('PT human_list[0]:', translations.pt.hybridIntel.human_list[0]);
    console.log('EN human_list[0]:', translations.en.hybridIntel.human_list[0]);
    console.log('ES human_list[0]:', translations.es.hybridIntel.human_list[0]);
    
    const savedLang = localStorage.getItem('selectedLanguage') || 'pt';
    setLanguage(savedLang);
}

// Export for use in other files
window.translations = translations;
window.setLanguage = setLanguage;
window.initializeLanguage = initializeLanguage;

// Garantir que as traduções sejam aplicadas após o carregamento da página
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    
    // Forçar uma nova verificação após um pequeno atraso para capturar elementos dinâmicos
    setTimeout(function() {
        const savedLang = localStorage.getItem('selectedLanguage') || 'pt';
        updateTranslations(savedLang);
    }, 500);
});