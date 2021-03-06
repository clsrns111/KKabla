import * as React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';

function BlindBoard() {
  return (
    <PaperArea>
      <ReportMessage>
        πββοΈμ κ³  νμ λμ μΌλ‘ λΈλΌμΈλλ κ²μλ¬Ό μλλ€πββοΈ
      </ReportMessage>
      <BlindArea>
        <Grid container>
          <Grid item container direction="column">
            <Grid item container>
              <Title>μ κ³ λ κ²μκΈ μ λͺ©μλλ€.</Title>
            </Grid>
            <Grid item>
              <Content variant="body1">
                μ κ³ λ κ²μκΈμ λ΄μ©μλλ€. μ κ³ λ κ²μκΈμ λ΄μ©μλλ€.
              </Content>
            </Grid>
            <Grid item>
              <Typography variant="caption">******</Typography>
            </Grid>
            <Grid item container>
              <Caption>
                <Typography variant="caption">μ’μμ</Typography>
                <Typography variant="caption">0</Typography>
              </Caption>
              <Caption>
                <Typography variant="caption">λκΈ</Typography>
                <Typography variant="caption">0</Typography>
              </Caption>
            </Grid>
          </Grid>
        </Grid>
      </BlindArea>
    </PaperArea>
  );
}

export default BlindBoard;

const PaperArea = (props) => (
  <Paper
    sx={{
      p: 2,
      margin: 'auto',
      height: '130px',
      position: 'relative',
      msUserSelect: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      userSelect: 'none',
    }}
  >
    {props.children}
  </Paper>
);

const BlindArea = (props) => (
  <Container
    disableGutters
    sx={{
      p: 2,
      margin: 'auto',
      height: '100%',
      width: '100%',
      position: 'absolute',
      zIndex: 'modal',
      backgroundColor: 'rgba(0,0,0,0.1)',
      WebkitFilter: 'blur(5px)',
      left: '0px',
      top: '0px',
    }}
  >
    {props.children}
  </Container>
);

const ReportMessage = (props) => (
  <Typography
    component={'div'}
    variant="body1"
    sx={{
      textAlign: 'center',
      fontSize: '1.1rem',
      marginTop: '10%',
    }}
  >
    {props.children}
  </Typography>
);

const Title = (props) => (
  <Typography gutterBottom noWrap variant="h6">
    {props.children}
  </Typography>
);

const Content = (props) => (
  <Typography
    gutterBottom
    component={'div'}
    sx={{
      height: '50px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: '2',
    }}
  >
    {props.children}
  </Typography>
);

const Caption = (props) => (
  <Grid item sx={{ marginRight: '3px' }}>
    {props.children}
  </Grid>
);
