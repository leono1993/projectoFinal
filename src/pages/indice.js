import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import { Container, Stack, SvgIcon } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useRouter } from 'next/navigation';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



const Page = () => {
  
  const [value, setValue] = useState(0);
  const router = useRouter();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Head>
        <title>
          Contenido
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
                  Contenido
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Portada" {...a11yProps(0)} />
                <Tab label="Semanas" {...a11yProps(1)} />
                <Tab label="Curiosidades" {...a11yProps(2)} />                
                <Tab label="Información del Estudiante" {...a11yProps(3)} />
                <Tab label="Videos" {...a11yProps(4)} />
                <Tab label="Herramientas" {...a11yProps(5)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Typography variant="h6" paragraph width={'50%'}>
                Una pequeña Introducción y algunos componentes estadisticos que prentenden concientizar en la importancia de la Gobernanza de los datos por medio de metricas medibles que reflejan el impacto de un mal manejo de la misma .
              </Typography>
              <Button variant="outlined" onClick={() => {router.push('/')}}>Ir a Portada</Button>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Typography variant="h6" paragraph width={'50%'}>
                Explora cada semana identificada por número (1, 2, 3, etc.) con descripciones detalladas de los temas cubiertos y otros aspectos relevantes.
              </Typography>
              <Button variant="outlined" onClick={() => {router.push('/semanas')}}>Ir a Semanas</Button>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2} >
              <Typography variant="h6" paragraph width={'50%'}>
                Explora una sección especial donde los estudiantes pueden compartir elementos curiosos como caricaturas, dibujos y anécdotas relacionadas con los contenidos del curso.
              </Typography>
              <Button variant="outlined" onClick={() => {router.push('/curiosidades')}}>Ir a Curiosidades</Button>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3} >
              <Typography variant="h6" paragraph width={'50%'}>
                Detalles esenciales sobre el estudiante, la universidad, la carrera y el curso.
              </Typography>
              <Button variant="outlined" onClick={() => {router.push('/account')}}>Ir a Información del Estudiante</Button>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4} >
              <Typography variant="h6" paragraph width={'50%'}>
                Una sólida colección de videos informativos acerca de temas al rededor de la gobernanza de los datos.
              </Typography>
              <Button variant="outlined" onClick={() => {router.push('/videos')}}>Ir a Videos</Button>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5} >
              <Typography variant="h6" paragraph width={'50%'}>
                Accede a enlaces hacia otras páginas relevantes sobre la Gobernanza de la Información que pueden ampliar tu comprensión del tema.
              </Typography>
              <Button variant="outlined" onClick={() => {router.push('/Herramientas')}}>Ir a Herramientas</Button>
            </CustomTabPanel>
          </Box>
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
