import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabelvpm(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress size={150} variant="determinate" {...props} style={{ color: 'purple' }} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          style={{ color: 'white', fontWeight: 'bold' , fontSize:'24px'}}
        >
          {`${Math.round(props.value)} vpm`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabelvpm.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CircularWithValueLabelvpm() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{ marginTop:'7vh' , marginLeft:'8vh' , height: '100vh' }}>
      <CircularProgressWithLabelvpm value={progress} />
    </div>
  );
}