import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`



@media ${theme.media.large}{

  .video-container{
    width: 1280px;
    height: 720px;
  }
}
@media ${theme.media.normal}{

  .video-container{
    width: 960px;
    height: 540px;
  }
}
@media ${theme.media.normal}{

  .video-container{
    width: 960px;
    height: 540px;
  }
}
@media ${theme.media.medium}{

  .video-container{
    width: 854px;
    height: 480px;
  }
}
@media ${theme.media.small}{

  .video-container{
    width: 100%;
    height: 315px;
  }
}




`}
`;
