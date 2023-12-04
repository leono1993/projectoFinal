import Head from 'next/head';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Paper from '@mui/material/Paper';

const itemData = [
  {
    img: 'https://gravitar.biz/wp-content/uploads/2019/11/Gravitar-Secci%C3%B3n-de-Humor.png',
    title: 'Breakfast',
  },
  {
    img: 'https://i.pinimg.com/originals/ca/a1/34/caa13485a6890a9fb57c4db3a5aa15a3.jpg',
    title: 'Burger',
  },
  {
    img: 'https://images7.memedroid.com/images/UPLOADED775/5f2f941249997.jpeg',
    title: 'Camera',
  },
  {
    img: 'https://www.gub.uy/unidad-reguladora-control-datos-personales/sites/unidad-reguladora-control-datos-personales/files/inline-images/2do%2BPremio.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://s3.memeshappen.com/memes/Data-Governance-Committee-Aint-Nobody-Got-Time-For-That.jpg',
    title: 'Hats',
  },
  {
    img: 'https://i.pinimg.com/550x/38/a7/6e/38a76eb48dc009077311d115385a7cba.jpg',
    title: 'Honey',
  },
  {
    img: 'https://media.licdn.com/dms/image/C4E12AQETDlVt5rBleA/article-cover_image-shrink_600_2000/0/1560956375533?e=2147483647&v=beta&t=5sRsDU4GqYReEZvLfOBbdOX2U741bJJXavjFytU-XO0',
    title: 'Basketball',
  },
  {
    img: 'https://media.makeameme.org/created/data-quality-data.jpg',
    title: 'Fern',
  },
  {
    img: 'https://miro.medium.com/v2/resize:fit:1400/0*Rn8UqvY4D55upr1H.png',
    title: 'Mushrooms',
  },
  {
    img: 'https://s7280.pcdn.co/wp-content/uploads/2019/07/Project-Management-Meme-300x196.jpg.optimal.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'https://www.siliconrepublic.com/wp-content/uploads/2014/12/img/data-centre-manager-meme-9.jpg',
    title: 'Sea star',
  },
];

const Page = () => (
  <>
    <Head>
      <title>
        Curisosidades
      </title>
    </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container>
        <ImageList sx={{ width: '100%', overflow: 'hidden' }} cols={1} rowHeight={'auto'}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} >
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
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
