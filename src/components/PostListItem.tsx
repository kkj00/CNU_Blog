import { Link } from 'react-router-dom';
import { IPost } from '../api/types';
import styled from '@emotion/styled';
import Tag from "./Tag.tsx";

const ItemLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding: 1rem 2rem;
  overflow: hidden;
  transition: border 0.2s ease 0s;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  text-decoration: none;
`;

const Contents = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const PostListItem = (props: IPost) => {
  console.info()props);
return <div>
    <ItemLink to={`/post/${id}`}>
        <h2>react</h2>
        <Contents>
            {Contents}
        </Contents>
        <Tag>#{tag}</Tag>
    </ItemLink>
</div>;
};

export default PostListItem;
