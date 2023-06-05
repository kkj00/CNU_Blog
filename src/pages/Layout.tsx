import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import NavLink from 'NavLink';

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.325rem;
  width: 8rem;
  height: 3rem;
  text-decoration: none;
  transition: color 0.25s ease-in-out 0s;
  font-weight: 600;
  margin: auto;
  padding-top: 20px;

  a {
    color: #777;
  }

  .active {
    color: rgb(50, 148, 248);
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
`;

const ProfilePicture = styled.img`
  display: block;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: bold;
  color: #222;
`;

const Description = styled.p`
  white-space: pre-wrap;
  font-size: 1.125rem;
  line-height: 1.5;
  margin-top: 0.25rem;
  color: #222;
  letter-spacing: -0.004em;
`;

const Layout = () => {
  return (
    <div>
      <Profile>
        {/*todo (1) 프로필 꾸미기*/}
        <div>
          <ProfilePicture
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMjdfMzkg%2FMDAxNjc3NDk4NjcwODcx.IN5wkFaBck7ENDbRDegYCfpuIfSqgBnvNr-DBE0JFAAg.cRyKMIMFR3rl-Ny9tsc_74KiYGrkhKqdVk7RkyjMb8Yg.PNG.hurijia_2000%2FIMG_0900.JPG&type=a340"
            alt="프로필 사진"
          />
        </div>
        <div>
          <Name>201902657</Name>
          <Description>설명</Description>
        </div>
      </Profile>
      <Nav>
        <NavLink to="/">포스트</NavLink>
        <NavLink to="/resume">소개</NavLink>
      </Nav>
      <Outlet />
    </div>
  );
};

export default Layout;
