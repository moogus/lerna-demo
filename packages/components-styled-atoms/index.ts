import styled from "styled-components";

export const Loader = styled.div`
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  color: #333;
  margin-top: 45vh;
`;

export const PageContainer = styled.div`
  padding: 0;
  margin-bottom: 5px;
  margin-left: auto;
  margin-right:auto;
`;

export const GridContainer = styled.div`
  background-color: #eee;
  padding: 2px;
`;

export const GridInnerContainer = styled.div`
  background-color: #fff;
  height: 100%;
  cursor: pointer;
`;

export const ImageRow = styled.div`
  margin-right: 0;
  margin-left: 0;
`;

export const ImageColumn = styled.div`
padding-right: 0;
padding-left: 0;
`;

export const FluidImage = styled.img`
  width: 100%;
  height: 200px;
`;

export const FluidImageNoHeight = styled.img`
  width: auto;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    margin-top:  -50px;
  }
`;

export const DescriptionTextArea = styled.div`
  margin: 10px 20px 0px 20px;
`;

export const DescriptionText = styled.p`
  margin: 0;
`;

export const PriceTextArea = styled.div`
  margin: 0px 20px 30px 20px;
`;

export const H1 = styled.h1`
  font-size: 20px;
  font-weight: lighter;
  text-align: center;
  color: #444;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 768px) {
    margin: 0 10px;
  }
`;

export const H2 = styled.h2`
  font-size: 24px;
  font-weight: lighter;
  text-align: left;
  color: #444;
`;

export const H3 = styled.h2`
  font-size: 18px;
  text-align: left;
`;

export const LanscapeGridInnerContainer = styled.div`
  background-color: #fff;
  height: 100%;
  padding: 0;
`;

export const LineSpacer = styled.div`
  height: 5px;
  background-color: #eee;
`;

export const PortraitGridInnerContainer = styled.div`
  background-color: #fff;
  height: 100%;
  padding: 0;
`;

export const FluidImageWithMarginFix = styled.img`
  width: auto;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    margin-top:  -50px;
  }
`;

export const FluidImageContainer = styled.div`
width: 100%;
height: 500px;
  @media (max-width: 768px) {
    margin-top: 20px;
    height: 375px;
    overflow: hidden;
  }
`;

export const ActiveDotButton = styled.button`
  color: #000;
  font-size: 30px;
  border: none;
  background-color: #fff;
  padding: 0 5px 0 5px;
  margin: 0;
  &:focus {
      outline: 0 !important;
    }
`;

export const NotActiveDotButton = styled.button`
  color: #bbb;
  font-size: 30px;
  border: none;
  background-color: #fff;
  padding: 0 5px 0 5px;
  margin: 0;
  &:focus {
      outline: 0 !important;
    }
`;

export const BasicPriceText = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const PriceText = styled.p`
  font-size: 32px;
  text-align: left;
  color: #444;
  margin: 0;
`;

export const TextMarginContainer = styled.div`
  margin-top: 30px;
  margin-left: 10px;
  @media (max-width: 768px) {
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 40px;
  }
`;

export const RedText = styled.p`
  color: red;
  margin-bottom: 0;
  max-width: 250px;
`;

export const NavigateBackButton = styled.button`
  color: #999;
  border: none;
  width: 50px;
  margin-left: 0;
  margin-right: 40px;
  margin-top: -8px;
  font-size: 48px;
  font-weight: 100;
  &:focus {
      outline: 0 !important;
    }
  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 20px;
  }
`;
