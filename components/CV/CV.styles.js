import styled from 'styled-components';


export const CVContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 12rem auto 5rem;
  padding: 6rem 2rem 2rem;
  width: 90%;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primaryDark};
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  object-fit: cover;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
`;

export const NameTitle = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 3.6rem;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: normal;
  color: #555;
`;

export const Section = styled.section`
  margin-bottom: 3.5rem;

  h2 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid ${({ theme }) => theme.primaryDark};
    padding-bottom: 0.5rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.6rem;
  color: #444;
  margin-top: 0.5rem;
`;

export const Item = styled.div`
  margin-bottom: 1.5rem;

  strong {
    font-size: 1.7rem;
    display: block;
  }
`;

export const List = styled.ul`
  padding-left: 2rem;
`;

export const ListItem = styled.li`
  font-size: 1.6rem;
  margin-bottom: 0.4rem;
`;
