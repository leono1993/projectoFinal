import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Link, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { Grid, Paper } from '@mui/material';


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
                  Herramientas
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <br/>
          <Grid container spacing={2}>
            <Grid item xs={6} md={3} style={{ height: '25vh' }}>
                <Paper style={{ padding: 16, textAlign: 'center', color: 'black' }}>
                <Typography variant="h6" gutterBottom>
                    Collibra Data Governance
                </Typography>
                <Typography variant="body1" paragraph>
                    Collibra está diseñado para ser accesible para cualquier organización que busque mejorar su gobernanza de datos y calidad de datos.
                </Typography>
                <Typography variant="body1" paragraph>
                    Es adecuado para empresas de diversas industrias que necesitan mejorar la toma de decisiones basada en datos, garantizar el cumplimiento de los datos y volverse más colaborativas y eficientes en la gestión de datos.
                </Typography>
                <Typography variant="body1" paragraph>
                    La solución incluye varias características para ayudar a las empresas a clasificar, definir y catalogar sus datos, asegurando una comprensión consistente entre diferentes partes interesadas.
                </Typography>
                <Typography variant="body1" paragraph>                        
                    También puede ayudar a gestionar flujos de trabajo de datos, mapear las relaciones entre diferentes informes y cuenta con potentes funciones de seguridad.
                </Typography>
                <Link href='https://www.collibra.com/us/en/products/data-governance'> visita el sitio web </Link>
                </Paper>
            </Grid>

            <Grid item xs={6} md={3} style={{ height: '25vh' }}>
                <Paper style={{ padding: 16, textAlign: 'center', color: 'black' }}>
                    <Typography variant="h6" gutterBottom>
                        Oval Edge
                    </Typography>
                    <Typography variant="body1" paragraph>
                        OvalEdge es una herramienta de gobernanza de datos menos conocida, pero una adición valiosa a esta lista.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Permite gestionar fácilmente quién puede acceder a diferentes conjuntos de datos empresariales y cuenta con un glosario empresarial para ayudar a crear un lenguaje compartido para trabajar de manera colaborativa en toda la organización.
                    </Typography>
                    <Typography variant="body1" paragraph>
                    La plataforma ofrece funciones de gobernanza de datos, como catalogación de datos y línea de tiempo de datos. También permite a los usuarios buscar datos utilizando lenguaje natural, colaborar mediante herramientas incorporadas y mantenerse actualizados sobre cambios o anomalías en los datos.
                    </Typography>
                    <Link href='https://www.ovaledge.com/'> visita el sitio web </Link>
                </Paper>
            </Grid>

            <Grid item xs={6} md={3} style={{ height: '25vh' }}>
                <Paper style={{ padding: 16, textAlign: 'center', color: 'black' }}>
                    <Typography variant="h6" gutterBottom>
                        Atlan
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Claimando ser creado por un equipo de datos, para equipos de datos, el producto de Gobernanza de Datos Activa de Atlan tiene como objetivo simplificar el proceso de implementación de un marco de gobernanza de datos y reducir cualquier fricción o burocracia.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        La plataforma promueve un enfoque centrado en la comunidad para la gobernanza, con la privacidad en su núcleo.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Las características incluyen medidas de seguridad con controles personalizables, políticas de acceso flexibles basadas en roles de usuario y una gestión colaborativa donde los usuarios pueden sugerir cambios o adiciones a los datos.
                    </Typography>
                    <Link href='https://atlan.com/active-data-governance/'> visita el sitio web </Link>
                </Paper>
            </Grid>

            <Grid item xs={6} md={3} style={{ height: '25vh' }}>
                <Paper style={{ padding: 16, textAlign: 'center', color: 'black' }}>
                    <Typography variant="h6" gutterBottom>
                        Axon Data Governance
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Informatica presenta Axon Data Governance como una herramienta que puede ayudar a las organizaciones a ofrecer datos confiables a usuarios finales y custodios de datos a escala empresarial. La tecnología, que Informatica adquirió cuando compró al desarrollador original Diaku en 2017, utiliza la automatización impulsada por inteligencia artificial para ayudar a los custodios con el descubrimiento de datos, la evaluación de la calidad de los datos y la comunicación. También permite a los equipos de gobernanza crear mercados de datos curados para ayudar a los usuarios de negocios y analíticos a encontrar, acceder y comprender datos.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Los equipos de gobernanza de datos también pueden utilizar la herramienta Axon para desarrollar un diccionario de datos común, definir conexiones entre elementos de datos, identificar brechas en conjuntos de datos y vincular políticas de gobernanza a los datos que afectan. Además, se pueden crear flujos de trabajo comerciales de extremo a extremo para proporcionar vistas visualizadas de la línea de tiempo de los datos.
                    </Typography>
                    <Link href='https://www.informatica.com/products/data-quality/axon-data-governance.html'> visita el sitio web </Link>
                </Paper>
            </Grid>
            </Grid>

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
