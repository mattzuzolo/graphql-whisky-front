import styled from 'styled-components';
import NavLink from '../../NavLink';

const Wrapper = styled.div``;

const List = styled.ul`
  list-style: none;
  margin-left: 12px;
  padding-left: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Drawer = () => {
  return (
    <Wrapper>
      <List>
        <ListItem>
          <NavLink href="/">Home</NavLink>
        </ListItem>
        <ListItem>
          <NavLink href="/explore">Explore</NavLink>
        </ListItem>
        <ListItem>
          <NavLink href="/#">Login</NavLink>
        </ListItem>
        <ListItem>
          <NavLink href="/#">Sign up</NavLink>
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default Drawer;
