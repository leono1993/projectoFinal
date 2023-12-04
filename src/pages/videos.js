import Head from 'next/head';
import { Box, Container, Stack, Typography,Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField } from '@mui/material';
import { SettingsNotifications } from 'src/sections/settings/settings-notifications';
import { SettingsPassword } from 'src/sections/settings/settings-password';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import CardMedia from '@mui/material/CardMedia';

const Page = () => (
  <>
    <Head>
      <title>
        Videos
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Typography variant="h4">
            Videos
          </Typography>
          <Card>
            <CardHeader
              title="Gobernanza de Datos en 5 minutos"
            />
            <Divider />
            <CardMedia 
              component="iframe" 
              height="515"
              src='https://www.youtube.com/watch?v=uPsUjKLHLAg'>
            </CardMedia>
            <Divider />
          </Card>
          <Card>
            <CardHeader
              title="Gobernanza de Datos en el mundo real"
            />
            <Divider />
            <CardMedia 
              component="iframe" 
              height="515"
              src='https://www.youtube.com/watch?v=e7uVURCDfLk'>
            </CardMedia>
            <Divider />
          </Card>
          <Card>
            <CardHeader
              title="Como aprendería de Gobernanza de Datos si tuviera que empezar de cero"
            />
            <Divider />
            <CardMedia 
              component="iframe" 
              height="515"
              src='https://www.youtube.com/watch?v=tgrSmgEUDmM'>
            </CardMedia>
            <Divider />
          </Card>
          <Card>
            <CardHeader
              title="Como hacer un buen gobierno de datos"
            />
            <Divider />
            <CardMedia 
              component="iframe" 
              height="515"
              src='https://www.youtube.com/watch?v=y60KwVFTrLY'>
            </CardMedia>
            <Divider />
          </Card>
          <Card>
            <CardHeader
              title="Como hacer un buen gobierno de datos"
            />
            <Divider />
            <CardMedia 
              component="iframe" 
              height="515"
              src='https://www.youtube.com/watch?v=UYNQMKV6U2I'>
            </CardMedia>
            <Divider />
          </Card>
        </Stack>
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
