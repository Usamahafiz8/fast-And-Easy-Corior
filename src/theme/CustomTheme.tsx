import { createTheme } from '@mui/material/styles';

const CustomTheme = createTheme({
  palette: {
    // Customize your color palette here
    primary: {
      main: '#FF4500',
    },
    secondary: {
      main: '#dc3545',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Set the font family to Roboto
    // Add more typography customization options as needed
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize:'16px',
          fontWeight:500,
          // Add your custom button styles here
          textTransform: 'none', // Prevent text capitalization
          borderRadius: 8, // Customize border radius
        },
        // containedPrimary: {
        //   // Styles for primary contained button
        //   color: '#fff', // Text color
        //   backgroundColor: '#007bff', // Background color
        //   '&:hover': {
        //     backgroundColor: '#0056b3', // Background color on hover
        //   },
        // },
        // containedSecondary: {
        //   // Styles for secondary contained button
        //   color: '#fff', // Text color
        //   backgroundColor: '#dc3545', // Background color
        //   '&:hover': {
        //     backgroundColor: '#a71c30', // Background color on hover
        //   },
        // },
      },
      defaultProps: {
        size: 'medium', // Default button size
      },
    },
  },
  // Add more theme customization options as needed
});

export default CustomTheme;
