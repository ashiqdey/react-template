// @mui
import { Stack, Button, Typography } from '@mui/material';
// hooks
import useAuth from '../../../hooks/useAuth';
// routes
import { PATHS } from '../../../routes/paths';
// assets
// import { DocIllustration } from '../../../assets/illustraions';

// ----------------------------------------

export default function NavbarDocs() {
  const { user } = useAuth();

  return (
    <Stack
      spacing={3}
      sx={{
        px: 5,
        pb: 5,
        mt: 10,
        width: 1,
        textAlign: 'center',
        display: 'block',
      }}
    >
      {/* <DocIllustration sx={{ width: 1 }} /> */}

      <div>
        <Typography gutterBottom variant='subtitle1'>
          Hi, {user?.displayName}
        </Typography>
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          Need help?
          <br /> Please check our docs
        </Typography>
      </div>

      <Button href={PATHS.root} target='_blank' rel='noopener' variant='contained'>
        Documentation
      </Button>
    </Stack>
  );
}
