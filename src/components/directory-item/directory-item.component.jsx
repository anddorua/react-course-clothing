import {
  DirectoryItemContainer,
  BackgroundImage,
  DirectoryItemBodyContainer,
} from "./directory-item.styles.jsx";
import { useNavigate } from "react-router-dom";

const DirectoryItem = (props) => {
  const {
    category: { title, imageUrl, route },
  } = props;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <DirectoryItemBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
