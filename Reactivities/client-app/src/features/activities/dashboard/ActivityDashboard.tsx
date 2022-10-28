import React from "react";
import { Grid, GridColumn, List } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDeatails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";


interface Props{
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
}

export default function ActivityDashboard({activities, selectedActivity,
         selectActivity, cancelSelectActivity}: Props){
    return(
        <Grid>
            <GridColumn width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity}/>
            </GridColumn>
            <GridColumn width='6'>
                {selectedActivity && 
                <ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity}/>}
                <ActivityForm />
            </GridColumn>
            
        </Grid>
    )
}