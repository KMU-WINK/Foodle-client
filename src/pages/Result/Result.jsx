import React from 'react';
import { ItemContent, ItemRank, ResultItem, ResultItems, ResultText } from './styles';

const Result = () => {
    return (
        <>
            <ResultText>
                📢 <br/>
                Foodle이 당신을 위해 <br/>
                10가지 음식을 준비했어요!
            </ResultText>
            <ResultItems>
                <ResultItem>
                    <ItemRank></ItemRank>
                    <ItemContent></ItemContent>
                </ResultItem>
            </ResultItems>
        </>
    );
};

export default Result;