import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`

.accordion-container{
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.secondaryBg};
  padding: 20px;
  border-top: solid 3px ${theme.colors.gray};
  cursor: pointer;
}

.accordion-progress{
  display: flex;
  margin-top: 10px;
}
.accordion-text h3{
  font-size: ${theme.font.sizes.large};
  color: ${theme.colors.black};
}
.accordion-text p{
  color: ${theme.colors.gray};
  font-size: ${theme.font.sizes.small};

}
.accordion-arrow{
  font-size: ${theme.font.sizes.medium};
  color: ${theme.colors.gray};
  cursor: pointer;
  transform: rotate(0deg);
  transition: 1.3s ease-in-out;


}
.accordion-content-disable{
  display: none;
  top: -50px;
  transition: 0.3s ease-in-out;
  transition-delay: 1s;

}
.accordion-content{
  top: 0px;
  width: 100%;
  position: relative;
  display: flex;
  padding: 20px;
  align-items: flex-start;
  cursor: pointer;
  transition-delay: 1s;

}
.accordion-content:hover{
  background-color: ${theme.colors.lightGray};
  transition: 0.3s all;
}
.accordion-content-text {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 15px;
}

.accordion-content-text h5{
  color: ${theme.colors.gray};
  font-size: ${theme.font.sizes.small};
}
.accordion-content-text p{
  color: ${theme.colors.gray};
  font-size: ${theme.font.sizes.xsmall};
}
@media ${theme.media.large}{


}
@media ${theme.media.normal}{


}
@media ${theme.media.normal}{


}
@media ${theme.media.medium}{


}
@media ${theme.media.small}{


}


`}
`;
