import styled from "styled-components";

export const ControlsContainer = styled.div`
  margin-top: 10px;
  position: relative;
  display: flex;
  width: 80%;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const ControlsButton = styled.button`
  margin-left: auto;
  border: none;
  border-radius: 4px;
  padding: 5px 8px;
  font-size: 1rem;
  
`;

export const ControlsDisplay = styled.output`
  box-shadow: 0 0 0 1px rgb(209, 206, 206, 0.5);
  color: #ddd;
  padding: 5px 8px;
  border-radius: 4px;
  width: 7rem;
  font-size: 1rem;
`;