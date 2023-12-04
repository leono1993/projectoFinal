import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Page = () => {
  

  return (
    <>
      <Head>
        <title>
          Semanas
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Semanas
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Semana 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6" gutterBottom>
                  Introducción a la Gobernanza de la Información
                </Typography>
                <Typography variant="body1" paragraph>
                  La Gobernanza de Tecnologías de la Información y Comunicación (TIC) es un marco estratégico que busca optimizar el uso de las TIC en una organización. Incluye procesos, estructuras y políticas para garantizar que las decisiones relacionadas con la tecnología estén alineadas con los objetivos empresariales, se gestione de manera eficiente y se minimicen los riesgos.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  ¿Por qué es necesario el aseguramiento de la información?
                </Typography>
                <Typography variant="body1" paragraph>
                  El aseguramiento de la información es esencial para proteger los activos de información crítica de una organización. Garantiza la confidencialidad, integridad y disponibilidad de la información, mitigando riesgos como la pérdida de datos, el acceso no autorizado y las interrupciones del sistema. Además, el aseguramiento de la información cumple con requisitos legales y normativos, fortaleciendo la confianza de los stakeholders y la reputación de la organización.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Semana 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6" gutterBottom>
                  Introducción a la Gobernanza de la Información
                </Typography>
                <Typography variant="body1" paragraph>
                  La era digital ha generado oportunidades sin precedentes para los negocios a través de Internet, pero también ha presentado desafíos en la seguridad de datos, cumplimiento y privacidad. La gobernanza de datos es esencial para abordar estos desafíos y proteger la información crítica de las organizaciones en un entorno tecnológico en constante cambio.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Un Sólido Caso de Negocio
                </Typography>
                <Typography variant="body1" paragraph>
                  Cuando una empresa busca implementar un programa de gestión de datos, es esencial crear un caso de negocio sólido y asegurar la participación de la alta dirección y las partes interesadas. Comprender conceptos clave como gobernanza, datos, información y seguridad es fundamental. La gestión de datos empresariales debe ser formalmente establecida, apoyada y comprendida por todos los involucrados en la organización. El entendimiento adecuado es clave para el éxito.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Semana 3</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6" gutterBottom>
                  Uso de los Datos
                </Typography>
                <Typography variant="body1" paragraph>
                  La protección de datos es un concepto amplio y a menudo malinterpretado que va más allá de la privacidad de datos. La falta de comprensión de todas sus dimensiones puede llevar a una mala gestión y costosos problemas de asignación de recursos. Por otro lado, la Organización Internacional de Normalización (ISO) es una entidad que desarrolla normas globales en diversos sectores para promover el desarrollo sostenible y facilitar el comercio. Sus estándares benefician a una amplia gama de industrias y se basan en el consenso global sobre las mejores prácticas y tecnología de vanguardia.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Protección de Datos y la ISO 27000
                </Typography>
                <Typography variant="body1" paragraph>
                  El cambio es necesario, y la continuidad del negocio es fundamental para proteger los datos. La gestión del ciclo de vida de la información y la combinación de tecnologías son clave en esta protección. El cumplimiento es esencial en el concepto de gobernanza, riesgo y cumplimiento, donde la gobernanza es la última pieza. Las herramientas pueden mejorar la eficiencia en el trabajo, y la protección de datos es crucial en la actualidad. Es importante comprender conceptos como datos maestros, coordinación, gestión de datos y gobernanza para una adecuada protección.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Seguridad de la Información
                </Typography>
                <Typography variant="body1" paragraph>
                  En el mundo competitivo actual, las organizaciones deben sobrevivir protegiendo sus datos, ya que son esenciales y valiosos. Conocer el concepto de seguridad de la información no es suficiente; es crucial aplicarlo. Un sistema de gestión de seguridad de la información garantiza la confidencialidad, integridad y disponibilidad de los datos mediante la gestión de riesgos. Debe estar integrado en la organización y en el diseño de procesos y sistemas. Todos los miembros de la organización tienen la responsabilidad de protegerla contra amenazas y ataques. La gobernanza de los datos implica proteger los datos de diversas fuentes.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Integridad, Confidencialidad y Disponibilidad
                </Typography>
                <Typography variant="body1">
                  Los altos ejecutivos a menudo expresan preocupaciones contradictorias sobre la seguridad de la información en sus organizaciones. A pesar de invertir en herramientas y políticas de seguridad, la percepción de seguridad sigue siendo un problema. La falta de comprensión y apoyo efectivo para la seguridad de la información dentro de la empresa es evidente. Esto destaca la importancia de la gobernanza de la información, que abarca la preservación, confidencialidad, integridad y disponibilidad de los datos, y está estrechamente relacionada con la seguridad de la información.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Semana 4</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6" gutterBottom>
                  Riesgos de los Datos
                </Typography>
                <Typography variant="body1" paragraph>
                  La protección de datos y la gestión del riesgo son elementos fundamentales para las empresas. El texto destaca la complejidad de la protección de datos y cómo el incumplimiento de regulaciones puede resultar en sanciones. Se enfoca en la gestión del riesgo como un componente esencial para garantizar el cumplimiento normativo y la continuidad del negocio. Además, subraya la necesidad de un marco de referencia sólido que permita la aplicación efectiva de la gestión del riesgo en todos los niveles de la organización, facilitando la toma de decisiones informadas y la rendición de cuentas. En resumen, aboga por la integración de un enfoque coherente y eficaz de la gestión del riesgo en el contexto de la protección de datos empresariales.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Riesgo en las Organizaciones
                </Typography>
                <Typography variant="body1" paragraph>
                  Las organizaciones, independientemente de su tipo y tamaño, enfrentan incertidumbres internas y externas que pueden afectar la consecución de sus objetivos, y esta incertidumbre se define como riesgo. Todas las actividades de la organización conllevan riesgos, y la gestión efectiva de estos riesgos implica identificación, análisis y evaluación, así como la comunicación y consulta con partes interesadas.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Proceso de Gestión de Riesgos
                </Typography>
                <Typography variant="body1" paragraph>
                  Se describe la gestión de riesgos como un proceso sistemático y lógico que incluye la identificación, control y minimización del impacto de eventos inciertos. El objetivo es reducir el riesgo a un nivel aceptable al llevar a cabo actividades o funciones. Se detallan cuatro procesos clave: análisis de riesgos, evaluación de riesgos, mitigación de riesgos y evaluación de la vulnerabilidad y controles. La norma ISO/IEC 27005 se utiliza como referencia, y se destaca la asociación de riesgos de seguridad de la información con el potencial de amenazas que aprovechan vulnerabilidades para causar daño a la organización. Además, se introducen conceptos clave como potencial, amenazas, vulnerabilidades, activos, daño y organización en este contexto.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Los 7 riesgos más comunes de un proyecto:
                </Typography>
                <Typography variant="body1" component="ul">
                  <li>
                    Escasez de Recursos
                  </li>
                  <li>
                    Contratiempos Operativos
                  </li>
                  <li>
                    Bajo desempeño
                  </li>
                  <li>
                    Falta de claridad
                  </li>
                  <li>
                    Corrupción del alcance
                  </li>
                  <li>
                    Costos Elevados
                  </li>
                  <li>
                    Factor tiempo
                  </li>
                </Typography>
                <br/>
                <Typography variant="h6" gutterBottom>
                  ¿Para que sirve la gestión de riesgos de los proyectos?
                </Typography>
                <Typography variant="body1" paragraph>
                  La gestión de riesgos de los proyectos, también conocida como “risk management”, es la práctica de identificar, analizar y responder de manera proactiva a diferentes tipos de riesgos potenciales de un proyecto. Un riesgo de un proyecto es todo aquello que pueda afectar al éxito del proyecto, puede ser algo que cause retrasos en el cronograma del proyecto, que haga que se exceda el presupuesto previsto o cualquier cosa que derive en la disminución del rendimiento del equipo de un modo u otro.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Tipos de Análisis de riesgos                  
                </Typography>
                <img src='images/t.png'></img>
                <Typography variant="h6" gutterBottom>
                  Análisis de riesgos genéricos
                </Typography>
                <Typography variant="body1" paragraph>
                  Este tipo de análisis evalúa los riesgos derivados de las actividades laborales y tiene el objetivo de reducir la duplicación de esfuerzos y papeleo. Se utiliza cuando una actividad puede llevarse a cabo en diferentes áreas del lugar de trabajo u otros sitios externos.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Análisis de riesgos específicos del sitio
                </Typography>
                <Typography variant="body1" paragraph>
                  Este tipo de evaluación tiene en cuenta la ubicación del sitio, el entorno y las personas que realizan un trabajo. Esta puede ser cualitativa o cuantitativa y aunque puede realizarse con una plantilla genérica de evaluación de riesgos, debe terminar con un análisis más específico que sea adecuado y suficiente para los peligros existentes.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Análisis de riesgo-beneficio y costo-beneficio
                </Typography>
                <Typography variant="body1" paragraph>
                  Los elementos y escenarios de un análisis de riesgo-beneficio se evalúan y clasifican según el impacto de su posible éxito o fracaso e implican sopesar los pros y contras de una acción.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Análisis de necesidades
                </Typography>
                <Typography variant="body1" paragraph>
                  Este análisis establece un proceso para determinar las necesidades de un grupo o individuo. Suele utilizarse para identificar brechas en los servicios, y puede realizarse por medio de encuestas, grupos focales o entrevistas. 
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Análisis de modo y efecto de falla (FMEA)
                </Typography>
                <Typography variant="body1" paragraph>
                  Este método de análisis de riesgo se utiliza para identificar posibles defectos o errores en un proceso o sistema, para después evaluar los riesgos asociados con las deficiencias detectadas.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Análisis de la raíz de la causa
                </Typography>
                <Typography variant="body1" paragraph>
                  Este es un tipo de análisis de riesgo que busca identificar las causas raíz de diversos problemas y se utiliza en procesos de fabricación y control de calidad. Sin embargo, también ayuda a las empresas a identificar y corregir las causas subyacentes de los problemas para que no vuelvan a ocurrir.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Como Hacer un análisis de riesgo
                </Typography>
                <Typography variant="body1" component="ul">
                  <li>
                    Considera los riesgos que amenazan tu proyecto
                  </li>
                  <li>
                    Categoriza los riesgos
                  </li>
                  <li>
                    Califica cada riesgo
                  </li>
                  <li>
                    Piensa en una propuesta o solución para los riesgos
                  </li>
                  <li>
                    Calcula los nuevos riesgos
                  </li>                  
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Semana 5</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6" gutterBottom>
                  Roles y responsabilidades de la gobernanza de la información
                </Typography>
                <Typography variant="body1" paragraph>
                  Los datos comprometidos y inconsistentes pueden causar problemas significativos en toda la empresa, afectando los procesos de negocios, generando preocupaciones regulatorias y de cumplimiento, y resultando en publicidad negativa. La gestión y protección de datos deben ser abordadas de manera integral, con roles de gobernanza de datos que se extiendan por toda la organización y estén supervisados por un liderazgo sólido
                </Typography>
                <br/>
                <Typography variant="body1" paragraph>
                  Dentro de los programas de gobernanza de datos, las organizaciones deben desarrollar políticas y procedimientos que aborden cuestiones legales, requisitos de velocidad de comercialización, seguridad de datos, necesidades de plataformas y herramientas, entre otros aspectos. Estos programas son colaborativos, liderados por un consejo de gobernanza de datos e involucran no solo a administradores de datos, sino también a líderes empresariales y usuarios regulares del negocio.
                </Typography>
                <Typography variant="body1" component="ul">
                  <li>
                    Liderazgo: Un programa de gobierno de datos debe contar con un patrocinador ejecutivo que asegure recursos adecuados y comprenda la visión general del programa. Estos patrocinadores alinean la política de gobernanza de datos con los objetivos estratégicos de la empresa. En grandes empresas, el papel de patrocinio a veces recae en un Director de Datos (CDO) o un Gerente de Gobierno de Datos. En esta función, supervisan las comunicaciones y monitorean iniciativas para garantizar el cumplimiento del programa dentro del presupuesto. Además, contribuyen a coordinar las actividades del consejo de gobierno de datos de toda la empresa.
                  </li>
                  <li>
                    Consejo de Gobierno de datos: El consejo de gobierno de datos es un comité directivo dentro de la organización que supervisa el desarrollo del programa de gobierno de datos de la organización a nivel estratégico.
                  </li>
                  <li>
                  Administradores de datos: Esta es la parte sustantiva con este rol de gobernanza de datos. Los administradores de datos tienden a ser personas con conocimientos de dominio que comprenden a fondo cómo las políticas de gobierno de datos de la organización se aplican a los datos bajo su administración.
                  </li>                 
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Semana 6</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6" gutterBottom>
                  Aspectos de seguridad de las organizaciones
                </Typography>
                <Typography variant="body1" paragraph>
                  La falta de confianza en los datos afecta operaciones y decisiones empresariales. A pesar de que datos mejorados llevan a mejores decisiones, la calidad de datos y la gestión de riesgos a menudo son subestimadas por los ejecutivos. La evaluación y mitigación de riesgos son esenciales para la continuidad del negocio, abarcando áreas críticas como gobernanza corporativa, fusiones, cumplimiento y seguridad.
                </Typography>
                <br/>
                <Typography variant="body1" paragraph>
                  La comprensión de aspectos clave, la prevención de pérdidas y la gestión adecuada de datos son fundamentales. Además, se destaca la importancia de asegurar que empleados y contratistas comprendan sus responsabilidades y estén capacitados para sus roles.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Datos, personas, equipos y ambiente
                </Typography>
                <Typography variant="body1" paragraph>
                  El error común de ver los datos solo como un activo tecnológico es evitable. Su gestión debe ser estratégica, justificando proyectos basados en beneficios comerciales. Las malas prácticas de gestión de datos pueden representar pérdidas del 10 al 20% de los ingresos corporativos. Un manejo adecuado afecta áreas clave de control de costos, como modernización de TI y cadena de suministro. Para maximizar ingresos, comprender a ciudadanos, donantes o clientes es esencial, impactando la lealtad, adquisición y retención de clientes, así como la ventaja competitiva e innovación.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Aspectos que incluye la cultura de la seguridad
                </Typography>
                <Typography variant="body1" paragraph>
                  Concienciación, Implicación y Control; La concienciación es clave, promoviendo políticas que incentiven la realización correcta de tareas y desalienten malas prácticas. La comunicación abierta y la cooperación se destacan, alentando la pronta notificación de errores para ahorrar tiempo y dinero. La implicación de la dirección es esencial para liderar una cultura de seguridad, ejemplificar buenas prácticas, y reconocer o sancionar comportamientos. La formación adecuada garantiza competencia, responsabilidad y conciencia de las consecuencias. El control de actividades cierra el ciclo, asegurando la correcta ejecución y previniendo malas prácticas.
                </Typography>
                <Typography variant="h6" paragraph>
                  Objetivos Críticos de la Gobernanza de la información
                </Typography>
                <Typography variant="body1" component="ul">
                  <li>
                    Comprender y promover el valor de los activos de datos
                  </li>
                  <li>
                    Resolver eficazmente todos los problemas relacionados con los datos y crear procesos para evitar que se repitan en el futuro
                  </li>
                  <li>
                    Aplicar la conformidad con los estándares y las políticas relacionados con la gobernanza de la información
                  </li>    
                  <li>
                    Definir y aprobar estrategias de datos, estándares, políticas, métricas y procedimientos asociados  
                  </li>      
                  <li>
                    Comunicar las políticas de datos claramente con las personas relevantes
                  </li>    
                  <li>
                    Patrocinar, rastrear y supervisar la entrega de proyectos de administración de datos
                  </li>     
                </Typography>
                <br/>
                <Typography variant="h6" paragraph>
                  Marcos de la Gobernanza de la información
                </Typography>
                <Typography variant="body1" component="ul">
                  <li>
                    Alcance
                  </li>
                  <li>
                    Políticas y procedimientos
                  </li>
                  <li>
                    Roles y responsabilidades
                  </li>    
                  <li>
                    Administración de datos internos y externos  
                  </li>  
                </Typography>
                <br/>
                <Typography variant="h6" paragraph>
                  ¿Poque es importante la gobernanza de la información?
                </Typography>
                <Typography variant="body1" component="ul">
                  <li>
                    Respaldar las necesidades comerciales, las prioridades y los objetivos estratégicos, los que varían según aspectos como la cultura de la organización, los recursos disponibles y el nivel de compromiso de las partes interesadas
                  </li>
                  <li>
                    Evitar las fugas de datos
                  </li>
                  <li>
                    Lograr el cumplimiento normativo y reducir los riesgos asociados como las sanciones
                  </li>    
                  <li>
                    Mejorar las capacidades de análisis de datos 
                  </li>  
                  <li>
                    Mejorar el retorno de la inversión en inteligencia empresarial
                  </li>
                  <li>
                    Generar control sobre los equipos de TI subcontratados y los sistemas en proliferación
                  </li>    
                  <li>
                    Aumentar la conciencia de los empleados sobre las políticas de información clave
                  </li> 
                  <li>
                    Reducir los costos de almacenamiento de información y de detección electrónica (tecnología de detección de documentos)
                  </li> 
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Semana 7</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6" gutterBottom>
                  Importancia de un Caso de Negocio
                </Typography>
                <Typography variant="body1" paragraph>
                  La gestión de datos se vuelve esencial para una empresa cuando se demuestra cómo un caso de negocio sólido puede beneficiarla. Este caso de negocio resalta cómo la gestión efectiva de datos puede mejorar la eficiencia, la toma de decisiones y, en última instancia, los resultados comerciales  
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Relevancia de un Plan de Trabajo
                </Typography>
                <Typography variant="body1" paragraph>
                  Un plan de trabajo bien estructurado es esencial para la gestión de datos. Destaca la importancia de tener una estrategia sólida para gestionar y proteger los datos de la organización, lo que garantiza que se cumplan los objetivos comerciales y de seguridad.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Protección de Datos y Continuidad del Negocio
                </Typography>
                <Typography variant="body1" paragraph>
                  La protección de datos se considera fundamental ya que la pérdida de datos críticos puede tener un impacto significativo en la continuidad del negocio. La relación entre la protección de datos y la continuidad del negocio se basa en cómo la pérdida de datos puede resultar en la interrupción de las operaciones comerciales y la pérdida de ingresos
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Desafíos en la Tecnología de Protección de Datos
                </Typography>
                <Typography variant="body1" paragraph>
                  A pesar de los avances tecnológicos, la protección de datos todavía enfrenta desafíos significativos. La tecnología actual a menudo no es suficiente para abordar todas las amenazas y vulnerabilidades, lo que hace que la protección de datos siga siendo un problema importante.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Semana 8</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6" gutterBottom>
                  Antecedentes y contexto de la 	evaluación de la madurez de datos
                </Typography>
                <Typography variant="body1" paragraph>
                  Desde 2017, la Alianza Global para Datos de Desarrollo Sostenible y la División de Estadística de Naciones Unidas han coadministrado un Consorcio sobre interoperabilidad de datos de los ODS. En 2018, el consorcio publicó dos documentos: Uso de datos para Unir esfuerzos de desarrollo y Interoperabilidad de datos: una guía para profesionales para unir datos en el sector del desarrollo. Estos documentos exploran cinco pilares de interoperabilidad: gestión de datos, gobernanza, modelos canónicos de datos, clasificaciones y vocabularios, interfaces estandarizadas, e implementación de enfoques de datos vinculados.
                </Typography>
                <Typography variant="h6" paragraph>
                  Modelo de Madurez 360°
                </Typography>
                <Typography variant="body1" component="ul">
                  <li>
                    Evaluar cómo se gestiona y se utiliza actualmente el dato
                  </li>
                  <li>
                    Evaluar cómo el dato contribuye a crear valor a lo largo de la organización
                  </li>
                  <li>
                    Extraer quick-wins y recomendaciones clave basadas en el resultado de las diferentes sesiones y workshops realizados
                  </li>    
                  <li>
                    El modelo de madurez contempla el análisis de 7 dimensiones, las cuales medimos a través de un conjunto homogéneo de criterios: 
                  </li> 
                  <Typography variant="body1" component="ul">
                    <li>
                      Estrategia
                    </li>
                    <li>
                      Procesos
                    </li>
                    <li>
                      Organización
                    </li>    
                    <li>
                      Personas 
                    </li> 
                    <li>
                      Gestión de datos
                    </li>
                    <li>
                      Arquitectura
                    </li>
                    <li>
                      Información
                    </li> 
                  </Typography>
                  <br/>
                </Typography>
                <Typography variant="h6" paragraph>
                  De cero a héroe de Gobierno de datos
                </Typography>
                <Typography variant="body1" component="ul">
                  <li>
                    Establecer un equipo de trabajo del dato
                  </li>
                  <li>
                    Diseñar una estructura organizativa adecuada
                  </li>
                  <li>
                    Establece políticas y normas
                  </li>    
                  <li>
                    Seleccionarlas herramientas y tecnologías adecuadas  
                  </li>
                  <li>
                    Establecer procesos de gestión de datos
                  </li>    
                  <li>
                    Democratización y concienciación 
                  </li>
                  <li>
                    Evalúa y mide el desempeño de tu estrategia
                  </li>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Semana 9</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6" gutterBottom>
                  Aplicaciones y los datos
                </Typography>
                <Typography variant="body1" paragraph>
                  La gobernanza de datos implica tratar los datos como un activo empresarial, optimizando, protegiendo y aprovechando su valor. Se basa en la coordinación de personas, procesos, tecnología y políticas para alinear y mejorar el uso de los datos en una organización. Los beneficios son diversos, pero los desafíos incluyen la falta de percepción de valor, la creencia errónea de que TI es responsable de los datos y la falta de enfoque a largo plazo. El control de acceso es crucial, requiriendo cuidado en la asignación de accesos a empleados y proveedores para evitar vulnerabilidades, dada la importancia del factor humano en la seguridad de la información.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Datos y control de acceso a las aplicaciones
                </Typography>
                <Typography variant="body1" paragraph>
                  Desde la creación del Consejo de Gobernanza de Datos de IBM en 2005, IBM ha liderado el movimiento de Gobernanza de la Información, colaborando estrechamente con empresas líderes a nivel mundial para abordar los desafíos asociados con la gobernanza. Aunque sus raíces están en el cumplimiento y el riesgo, en los últimos años han notado un cambio hacia la creación de valor además de la mitigación de riesgos en la gobernanza de la información.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Semana 10</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6" gutterBottom>
                  Seguridad de sistemas
                </Typography>
                <Typography variant="body1" paragraph>
                  Implementar un programa de gobernanza de datos requiere respaldo ejecutivo adecuado. Se plantean preguntas sobre la elección del dueño (TI o negocio) y cómo aprovechar iniciativas existentes. Para obtener patrocinio, se propone formar un equipo de gobernanza de datos y identificar un dueño.
                </Typography>
                <Typography variant="body1" paragraph>
                  La organización del programa implica definir estatuto y estructura, establecer Consejo y grupo de trabajo, e identificar administradores de datos. Reuniones periódicas son clave.
                </Typography>
                <Typography variant="body1" paragraph>
                  La gestión de configuración es central para controlar activos, y se subraya la importancia de consideraciones de seguridad en el desarrollo o adquisición de sistemas de información.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Datos, configuracion y desarrollo de sistemas
                </Typography>
                <Typography variant="body1" paragraph>
                  La Gestión de la Configuración se centra en definir y mantener las relaciones y definiciones clave para la prestación de servicios de TI. Busca recopilar información, establecer líneas de referencia, verificar y auditar datos, y actualizar el repositorio de configuración. Su objetivo es proporcionar información suficiente para gestionar eficazmente el servicio, evaluar el impacto de los cambios y abordar incidentes.
                </Typography>
                <Typography variant="body1" paragraph>
                  La meta es que el repositorio de configuración sea correcto, completo y actualizado, medido por desviaciones y discrepancias. Además, en la adquisición y desarrollo de sistemas, se busca integrar la seguridad de la información en todo el ciclo de vida, incluyendo los sistemas que usan redes públicas.
                </Typography>
                <Typography variant="body1" paragraph>
                  IBM ha liderado la Gobernanza de la Información desde 2005, colaborando con empresas globales para abordar desafíos. Aunque la gobernanza tiene raíces en cumplimiento y riesgo, hay un cambio hacia la creación de valor junto con la mitigación de riesgos.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Semana 11</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6" gutterBottom>
                  Incidentes y Seguimiento de la seguridad
                </Typography>
                <Typography variant="body1" paragraph>
                  En una organización, si un departamento se refiere a ingresos y otro a ventas, podrían estar hablando de la misma actividad. Lo mismo aplica para una subsidiaria que menciona clientes mientras otra habla de usuarios o clientes. Un diccionario de datos o un glosario de negocios ayuda a unificar y definir términos comunes entre el negocio y TI.
                </Typography>
                <Typography variant="body1" paragraph>
                  Antes de gobernar los datos, es esencial comprender qué datos existen, dónde están y cómo se relacionan entre los sistemas. El proceso de descubrimiento y análisis de datos a menudo es manual y consume tiempo, pero es crucial para evaluar el valor de los datos.
                </Typography>
                <Typography variant="body1" paragraph>
                  Los metadatos, o datos sobre datos, proporcionan información sobre las características de los objetos de datos y forman el conocimiento de TI para el negocio. La gobernanza de datos, centrada en personas y procesos, se beneficia de métricas o indicadores clave de desempeño (KPI) para medir y dar seguimiento al progreso del programa.  
                </Typography>
                <Typography variant="body1" paragraph>
                  En cuanto al proceso de gestión de incidentes, debe ser coherente para garantizar que la resolución se alcance dentro de los objetivos de servicio y plazos acordados. Los datos recopilados durante este proceso se utilizan para evaluar el desempeño contra los objetivos de servicio relevantes.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Datos Incidentes y Seguimiento
                </Typography>
                <Typography variant="body1" paragraph>
                  En cuanto a la Gestión de Incidentes y mejoras en la seguridad de la información, se busca un enfoque coherente y efectivo, estableciendo responsabilidades y procedimientos para una respuesta rápida y ordenada a eventos de seguridad.
                </Typography>
                <Typography variant="body1" paragraph>
                  La evaluación del rendimiento de seguridad y la eficacia del sistema de gestión son esenciales en el seguimiento y análisis. Todos estos aspectos son fundamentales en un proceso de gestión de datos.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Semana 12</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6" gutterBottom>
                  Continuidad de la organizacion
                </Typography>
                <Typography variant="body1" paragraph>
                  La gobernanza de datos maestros es una práctica continua en la que los líderes empresariales definen principios, políticas y procesos para gestionar la calidad de los datos maestros y alcanzar objetivos comerciales. El consejo de gobernanza dirige personas, recursos y tecnologías para implementar estas políticas, asegurando que los datos maestros cumplan con los estándares de calidad.
                </Typography>
                <Typography variant="body1" paragraph>
                  La gestión de calidad de datos aborda la dispersión de información sobre clientes, productos y proveedores en sistemas operativos, garantizando su calidad y consistencia con el tiempo. Controlar los datos maestros es esencial para alcanzar objetivos estratégicos como el crecimiento de ingresos, reducción de costos y gestión de riesgos.
                </Typography>
                <Typography variant="body1" paragraph>
                  En entornos analíticos, muchas empresas luchan con la gobernanza, creando informes inconsistentes y desconociendo el uso real de los datos. En cuanto a la continuidad del negocio, se aborda como un proceso holístico que identifica impactos potenciales y proporciona respuestas efectivas para salvaguardar intereses clave, reputación e imagen.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Datos y continuidad de negocio
                </Typography>
                <Typography variant="body1" paragraph>
                En septiembre de 2011, el atentado contra las Torres Gemelas en Nueva York dejó lecciones importantes para la continuidad del negocio:
                </Typography>
                <Typography variant="body1" component="ul">
                  <li>
                    La necesidad de actualizar y probar con regularidad los planes de continuidad.
                  </li>
                  <li>
                    Considerar todas las amenazas posibles.
                  </li>
                  <li>
                  Analizar cuidadosamente las dependencias.
                  </li>    
                  <li>
                  Reconocer que el personal clave puede no estar disponible.
                  </li>
                  <li>
                    Reconocer la importancia de las telecomunicaciones.
                  </li>    
                  <li>
                    Evitar ubicar sitios alternos de respaldo de TI cerca del sitio principal.
                  </li>
                  <li>
                    Reconocer la importancia de los funcionarios de apoyo.
                  </li>
                  <li>
                    Almacenar copias de los planes en un lugar seguro fuera del sitio principal.
                  </li>    
                  <li>
                    Considerar perímetros de seguridad amplios para situaciones de seguridad humana.
                  </li>
                  <li>
                    A pesar de las deficiencias, los planes previos al 11 de septiembre fueron esenciales para la continuidad.
                  </li>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Semana 13</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6" gutterBottom>
                  Ética y regulaciones de gestión de datos
                </Typography>
                <Typography variant="body1" paragraph>
                  En las empresas actuales, la gobernanza de datos, liderada por el jefe de Seguridad de Información (CISO), desempeña un papel crucial en la formulación de estrategias de seguridad y privacidad. La gobernanza del ciclo de vida de la información aborda de manera sistemática aspectos clave como la arquitectura, clasificación, uso y eliminación de la información. Para evitar el fracaso de las iniciativas de gobernanza de datos, es esencial medir los resultados mediante indicadores clave de desempeño y comunicarlos regularmente al Consejo de gobernanza de datos y la alta dirección. Además, el cumplimiento de requisitos legales y éticos es fundamental para evitar brechas y garantizar prácticas éticas en el manejo de la información en un entorno empresarial cada vez más regulado.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Datos, cumplimiento y ética
                </Typography>
                <Typography variant="body1" paragraph>                  
                  La evolución de la gobernanza de la información ha pasado de centrarse principalmente en el cumplimiento y el riesgo a valorar la creación de valor junto con la mitigación de riesgos. En términos de cumplimiento legal y contractual, el objetivo principal es evitar brechas entre las obligaciones legales y los requisitos de seguridad. Las consideraciones éticas en la informática surgieron desde el inicio de las computadoras, preocupándose por su uso indebido y su impacto en el empleo humano. Al desarrollar estrategias éticas, es crucial considerar los requisitos reglamentarios que proporcionan una base ética mínima, adaptable a entornos únicos de organizaciones. La creciente cantidad de requisitos reglamentarios destaca la importancia de programas y formación ética en la actualidad.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Semana 14</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Semana 15</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
