import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Draggable } from "react-beautiful-dnd";
import styled from "@emotion/styled";

const CardContainer = styled.div`
margin-bottom: 8px;
`;

const TrelloCard = ({ text, id , index}) => {
    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <CardContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {text}
                            </Typography>
                        </CardContent>
                    </Card>
                </CardContainer>
            )}
        </Draggable>
    )
}
const styles = {
    cardContainer: {
        marginBottom: 8
    }
};
export default TrelloCard