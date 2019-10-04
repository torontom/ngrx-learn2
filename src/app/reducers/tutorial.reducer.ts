import { Action } from "@ngrx/store";
import { Tutorial } from "../models/tutorial.models";
import * as TutorialActions from "./../actions/tutorial.actions";
import * as uuid from 'uuid';

const initialState: Tutorial = {
  uuid: uuid.v4(),
  name: "Initial tutorial",
  url: "http://google.com"
};

export function reducer(
  state: Tutorial[] = [initialState],
  action: TutorialActions.Actions
) {
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];

    //how not to mutate the original state?
    case TutorialActions.REMOVE_TUTORIAL:
      //state.splice(action.payload, 1);
      return state.filter(element => element.uuid != action.payload.uuid);

      case TutorialActions.UPDATE_TUTORIAL:
        //state.splice(action.payload, 1);
        return state.map(item => 
          item.uuid === action.payload.uuid? {
            ...item,
            name: action.payload.name,
            url: action.payload.url
          } : item
      
          // Otherwise, this is the one we want - return an updated value
          
          
        )

    default:
      return state;
  }
}
