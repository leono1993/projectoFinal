import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid, Typography, Card,
  CardContent,
  CardHeader } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewBudget } from 'src/sections/overview/overview-budget';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products';
import { OverviewSales } from 'src/sections/overview/overview-sales';
import { OverviewTasksProgress } from 'src/sections/overview/overview-tasks-progress';
import { OverviewTotalCustomers } from 'src/sections/overview/overview-total-customers';
import { OverviewTotalProfit } from 'src/sections/overview/overview-total-profit';
import { OverviewTraffic } from 'src/sections/overview/overview-traffic';

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>
        Portada
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
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewBudget
              difference={12}
              positive
              sx={{ height: '100%' }}
              value="$-3.1T"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalCustomers
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
              value="2Hrs"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTasksProgress
              sx={{ height: '100%' }}
              value={65}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalProfit
              sx={{ height: '100%' }}
              value="$1.81B"
            />
          </Grid>
          <Grid
            xs={12}
            lg={8}
          >
            <Card sx={{ height: '100%' }}>
              <CardHeader title="Descripcion del Proyecto" />
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  La Página Web del Curso es un proyecto diseñado para organizar y presentar de manera accesible los contenidos del curso:
                </Typography>
                <Typography variant="body1" component="ul">
                  <li>
                    Enlaces Semanales: Cada semana se identifica con su número y contiene descripciones detalladas de los temas estudiados.
                  </li>
                  <li>
                    Aspectos Informativos: Un apartado claro sobre la página, destacando su propósito y lo que los usuarios encontrarán.
                  </li>
                  <li>
                    Información del Estudiante y Curso: Detalles esenciales sobre el estudiante, la universidad, la carrera y el curso.
                  </li>    
                  <li>
                    Curiosidades: Un espacio creativo donde los estudiantes pueden compartir elementos curiosos relacionados con el contenido del curso, como caricaturas y anécdotas.
                  </li>              
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewTraffic
              chartSeries={[77, 32]}
              labels={['No', 'Si']}
              sx={{ height: '100%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
