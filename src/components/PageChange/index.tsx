import { Container, ChangePageSelector } from './styles';

interface PageChangeInterface {
    previousUrl: string | null;
    nextUrl: string | null;
    handlePageChangeClick: (type: 'previous' | 'next') => Promise<void>;
}

export const PageChange = ({previousUrl, nextUrl, handlePageChangeClick}: PageChangeInterface) => {
    
    function isDisabled(url: string | null){
        if (!url) 
            return {disabled: true};
        return '';
    }

    return(
        <Container>
            <ChangePageSelector 
                {...isDisabled(previousUrl)} 
                onClick={() => handlePageChangeClick('previous')}
                >
                    Previous Page
                </ChangePageSelector>
            <ChangePageSelector 
                {...isDisabled(nextUrl)}
                onClick={() => handlePageChangeClick('next')}    
            >
                Next Page
            </ChangePageSelector>
        </Container>
    );
}