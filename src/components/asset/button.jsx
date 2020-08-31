import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const StyledButton = styled(Button)({
    background: 'linear-gradient(45deg, #f19598 40%, #fcb045 100%)',
    border: 0,
    borderRadius: '10px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '10px 80px',
    margin: '19px',
    letterSpacing: '2.3px',
    '&:hover': {
        transform: '2s',
        background: 'linear-gradient(45deg, #f89093 10%, #f19e46 100%)',
    },
});
