import { Wrapper, ButtonMore } from "./LoadMore.styled";
import Loader from "../Loader";

const LoadMore = ({ loadMore, isLoading, isButtonDisabled }) => {
  return (
    <Wrapper>
      {isLoading && <Loader />}
      <ButtonMore disabled={isButtonDisabled || isLoading} onClick={loadMore}>
        {isButtonDisabled ? "No more cars" : "Load more"}
      </ButtonMore>
    </Wrapper>
  );
};

export default LoadMore;
