import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog, Divider, Grid, Link, Paper, Typography } from '@material-ui/core';
import { styles } from './styles';

const useStyles = makeStyles(styles);

const PricingModal = ({ open, onClose }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} maxWidth="lg" onClose={onClose} >
      <div className={classes.root} >
        <div className={classes.header}>
          <Typography variant="h3" gutterBottom align="center" >
            Start with Freelancer today. Boost up your services!
          </Typography>
          <Typography align="center" variant="subtitle2" className={classes.subtitle} >
            Welcome to the first platform created for freelancers and agencies
            for showcasing and finding the best clients in the market. 30% of
            our income goes into Whale Charity
          </Typography>
        </div>
        <div className={classes.content}>
          <Grid container spacing={4} >
            <Grid item md={4} xs={12} >
              <Paper elevation={1} onClick={onClose} className={classes.product} >
                <img alt="Product" className={classes.image} src="/images/products/product_freelancer.svg" />
                <Typography gutterBottom component="h3" variant="overline" >Freelancer</Typography>
                <div>
                  <Typography component="span" display="inline" variant="h3" >$5</Typography>
                  <Typography component="span" display="inline" variant="subtitle2" >/month</Typography>
                </div>
                <Typography variant="overline">Max 1 user</Typography>
                <Divider className={classes.divider} />
                <Typography className={classes.options} variant="subtitle2" >
                  <b>20</b> proposals/month <br />
                  <b>10</b> templates <br />
                  Analytics <b>dashboard</b> <br />
                  <b>Email</b> alerts
                </Typography>
              </Paper>
            </Grid>
            <Grid item md={4} xs={12} >
              <Paper
                elevation={1}
                onClick={onClose}
                className={classNames(classes.product, classes.recommended)}
              >
                <img alt="Product" className={classes.image} src="/images/products/product_agency--outlined.svg" />
                <Typography gutterBottom component="h3" variant="overline" >Agency</Typography>
                <div>
                  <Typography variant="h3" display="inline" component="span" >$29</Typography>
                  <Typography variant="subtitle2" display="inline" component="span" >/month</Typography>
                </div>
                <Typography variant="overline">Max 3 user</Typography>
                <Divider className={classes.divider} />
                <Typography className={classes.options} variant="subtitle2" >
                  <b>20</b> proposals/month <br />
                  <b>10</b> templates <br />
                  Analytics <b>dashboard</b> <br />
                  <b>Email</b> alerts
                </Typography>
              </Paper>
            </Grid>
            <Grid item md={4} xs={12} >
              <Paper elevation={1} onClick={onClose} className={classes.product} >
                <img alt="Product" className={classes.image} src="/images/products/product_enterprise.svg" />
                <Typography variant="overline" gutterBottom component="h3" >Enterprise</Typography>
                <div>
                  <Typography variant="h3" display="inline" component="span" >$259</Typography>
                  <Typography variant="subtitle2" display="inline" component="span" >/month</Typography>
                </div>
                <Typography variant="overline">Unlimited</Typography>
                <Divider className={classes.divider} />
                <Typography className={classes.options} variant="subtitle2" >
                  All from above <br />
                  <b>Unlimited</b> 24/7 support <br />
                  Personalised <b>Page</b> <br />
                  <b>Advertise</b> your profile
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Typography variant="subtitle2" align="center" className={classes.contact} >
            Have a larger team?&nbsp;
            <Link color="secondary" component={RouterLink} to="#" >Contact us</Link>
            &nbsp;for information about more enterprise options.
          </Typography>
        </div>
        <div className={classes.actions}>
          <Button variant="contained" onClick={onClose} className={classes.startButton} >
            Start with freelancer
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

PricingModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default PricingModal;
