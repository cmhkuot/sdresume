import { styled } from '@mui/material/styles';

export default styled('li')(
  ({ theme }) => `
  list-style-type: none;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 0;
    transform: translate(-300%, -50%);
    width: 5px;
    height: 5px;
    border-radius: 10px;
    background-color: ${theme.palette.primary.main};
  }
`,
);
