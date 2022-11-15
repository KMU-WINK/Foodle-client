import React from 'react';
import { Box1, Logo, Magnifier, SearchBar } from './styles';

const Main = () => {
    return (
        <Box1>
            <Logo>
                FOODLE
            </Logo>
            <SearchBar>
                원하는 음식의 느낌을 적어보세요.
                <Magnifier />
            </SearchBar>
        
        </Box1>
    );
};

export default Main;
