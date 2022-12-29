import React from "react";
import TrelloActionButton from "./TrelloActionButton";
import TrelloCard from "./TrelloCard";
import { Draggable, Droppable } from "react-beautiful-dnd";
import styled from "@emotion/styled";

const ListContainer = styled.div`
background-color: #dfe3e6;
        border-radius: 3px;
        width: 300px;
        padding: 8px;
        height: 100%;
        margin-right: 8px;
`;

const TrelloList = ({ title, cards, ListId, index }) => {
    return (
        <Draggable draggableId={String(ListId)} index={index}>
            {provided => (
                <ListContainer {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                    <Droppable droppableId={String(ListId)}>
                        {(provided) => (
                            <div{...provided.droppableProps} ref={provided.innerRef}>
                                <h4>{title}</h4>
                                {cards.map((cards, index) => <TrelloCard key={cards.id} index={index} text={cards.text} id={cards.id} />)}
                                {provided.placeholder}
                                <TrelloActionButton ListId={ListId} />
                            </div>
                        )}
                    </Droppable>
                </ListContainer>
            )}
        </Draggable>
    )
}
const styles = {
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        width: 300,
        padding: 8,
        height: "100%",
        marginRight: 8
    }
}
export default TrelloList;