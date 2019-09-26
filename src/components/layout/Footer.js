import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";

const Footer = ({ mb, mt }) => {
  return (
    <Box mb={mb} mt={mt}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        {new Date().getFullYear()}
        {" Classroom."}
      </Typography>
    </Box>
  );
};

Footer.propTypes = {
  mb: PropTypes.number.isRequired,
  mt: PropTypes.number.isRequired
};

export default Footer;
