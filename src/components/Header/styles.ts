import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 0.5rem;

        a {
            width: 3rem;
            height: 3rem;
            justify-content: center;
            align-items: center;

            color: ${(props) => props.theme["gray-100"]};

            box-shadow: 0 0 0 0 transparent;
            
            &.active {
                color: ${(props) => props.theme["green-500"]};
            }
        }
    }
`;