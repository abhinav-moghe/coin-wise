import styled from "styled-components";

const TextSpan = styled.div`
    line-height: 1.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--primary-txt);
`

export const TransactionContainer = styled.div`
    width: 100%;
    height: 4rem;
    padding-right: 1rem;
    padding-left: 1rem;

    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;

    border-bottom: 1px solid var(--color-default-border);
`

export const CategoryIconCircle = styled.div`
    width: 2.75rem;
    height: 2.75rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    border: 1px dashed var(--primary-txt);
`

export const CategoryImg = styled.img`
    width: 1.50rem;
    height: 1.50rem;
`

export const CategoryNameAndDate = styled.div`
    display: flex;
    flex-direction: column;
`

export const CategoryName = styled(TextSpan)``

export const Date = styled(TextSpan)`
    font-weight: 400;
    font-size: 0.750rem;
`

export const Amount = styled(TextSpan)`
    margin-left: auto;
`