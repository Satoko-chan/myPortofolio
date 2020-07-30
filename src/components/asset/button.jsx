import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)({
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #cb73aa 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 40px',
    margin: '20px',
    '&:hover': {
        opacity: 0.9
    },
});

export default StyledButton;