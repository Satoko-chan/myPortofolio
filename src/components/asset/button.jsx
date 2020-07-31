import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const StyledButton = styled(Button)({
    background: 'linear-gradient(45deg, #f19598 40%, #cb73aa 80%)',
    border: 0,
    borderRadius: '5px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 40px',
    margin: '20px',
    '&:hover': {
        opacity: 0.8
    },
});
