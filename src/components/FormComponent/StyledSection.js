import styled from "styled-components";
import Theme from "../../styles/Theme";


const StyledSection = styled.section`
    
    width: 50%;
    height: 27.125rem;
    
    form {
        border: 1px solid #00000020;
        height: 100%;
        border-radius: 0.25rem;
        max-width: 22.1875rem;
        padding: 1.875rem 1.375rem;
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
    }

    span {
        color: ${Theme.colors.gray3};
    }

    input, select {
        width: 100%;
        height: 3.3125rem;
        border: 2px solid ;
        font-size: 1rem;
        background-color: ${Theme.colors.gray1};
        border: none;
        border-radius: 0.5rem;
        padding: 0.8125rem 1rem;
        color: ${Theme.colors.gray3};
        outline: none;
        
    }
 

    label {
        font-size: 0.75rem;
        color: ${Theme.colors.gray4};
        font-weight: 500;
        font-family: 'Inter', sans-serif;
    }
    @media (max-width: 768px){
        width: 100%;

        form{
            margin: 0 auto;
        }
    }

`

export default StyledSection;

