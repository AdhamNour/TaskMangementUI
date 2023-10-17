import { AppBar, Box, InputBase, Toolbar, Typography, alpha, styled } from "@mui/material";
import { Fragment, FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import { useLayoutHook} from '../hooks/useLoginPageHook';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));



const Layout: FunctionComponent = () => {
    const {title,onSearchBarChange,searchText} = useLayoutHook();
    return (
        <Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            {title}
                        </Typography>
                        {title!=='login'&&<Search>
                            <SearchIconWrapper>
                                <Search />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }} 
                                value={searchText}
                                onChange={onSearchBarChange}
                            />
                        </Search>}
                    </Toolbar>
                </AppBar>
            </Box>
            <Box padding={2}>

            <Outlet/>
            </Box>
        </Fragment>
    );
}

export default Layout;