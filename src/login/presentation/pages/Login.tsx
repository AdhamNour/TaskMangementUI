import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface LogInProps {

}

const LogIn: FunctionComponent<LogInProps> = () => {
    const navigate = useNavigate();

    return (<Box display={'flex'} justifyContent={'center'} alignItems={'center'} width={'100vw'} height={'100vh'}>
        <Card>
            <Box padding={2}>
                <Typography>Login</Typography>
                <Box display={'flex'} flexDirection={'column'} padding={3}>
                    <TextField label="username" />
                    <TextField label='password' />
                    <Button variant="outlined" onClick={()=>navigate('/tasks')}>Login</Button>
                </Box>
            </Box>
        </Card>
    </Box>);
}

export default LogIn;